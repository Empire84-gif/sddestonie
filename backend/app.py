import json
import os
import smtplib
import ssl
import urllib.parse
import urllib.request
from email.message import EmailMessage
from email.utils import formataddr
from typing import Any

from dotenv import load_dotenv
from flask import Flask, jsonify, request
from flask_cors import CORS
from openai import OpenAI

load_dotenv()

app = Flask(__name__)

allowed_origins = [
    origin.strip()
    for origin in os.getenv(
        "ALLOWED_ORIGINS",
        "http://localhost:5173,http://127.0.0.1:5173",
    ).split(",")
    if origin.strip()
]

CORS(
    app,
    resources={
        r"/api/*": {
            "origins": allowed_origins,
            "methods": ["GET", "POST", "OPTIONS"],
            "allow_headers": ["Content-Type"],
        }
    },
)

OPENAI_MODEL = os.getenv("OPENAI_MODEL", "gpt-5.5")

MAIL_TO = os.getenv("MAIL_TO", "office@sddestonie.com").strip()
MAIL_FROM = os.getenv("MAIL_FROM", os.getenv("SMTP_USER", "")).strip()
MAIL_FROM_NAME = os.getenv("MAIL_FROM_NAME", "SDE Website").strip()
SMTP_HOST = os.getenv("SMTP_HOST", "").strip()
SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))
SMTP_USER = os.getenv("SMTP_USER", "").strip()
SMTP_PASSWORD = os.getenv("SMTP_PASSWORD", "").strip()
SMTP_USE_SSL = os.getenv("SMTP_USE_SSL", "false").lower() in ["1", "true", "yes"]
TURNSTILE_SECRET_KEY = os.getenv("TURNSTILE_SECRET_KEY", "").strip()

PROJECT_TYPE_LABELS = {
    "crm": "CRM / admin panel",
    "saas": "Custom SaaS system",
    "ai": "AI / workflow automation",
    "pdf": "PDF generator / documents",
    "integration": "API / payments / signature integration",
    "automation": "Process automation",
    "not_sure": "Not sure — needs analysis",
    "other": "Other project",
}

PRIORITY_LABELS = {
    "soon": "As soon as possible",
    "1_3_months": "Within 1–3 months",
    "planning": "Planning stage",
}

LANGUAGE_LABELS = {
    "pl": "Polish",
    "en": "English",
    "ee": "Estonian",
}

AI_API_MESSAGES = {
    "pl": {
        "missing_messages": "Brak wiadomości do przetworzenia.",
        "invalid_last_message": "Ostatnia wiadomość musi pochodzić od użytkownika.",
        "empty_response": (
            "Nie udało mi się przygotować odpowiedzi. "
            "Spróbuj opisać proces jeszcze raz, możliwie konkretnie."
        ),
        "service_unavailable": (
            "Carlos AI jest chwilowo niedostępny. "
            "Spróbuj ponownie za chwilę albo skorzystaj z formularza kontaktowego."
        ),
    },
    "en": {
        "missing_messages": "There are no messages to process.",
        "invalid_last_message": "The most recent message must come from the user.",
        "empty_response": (
            "I could not prepare a response. "
            "Please describe the process again and include as much relevant detail as possible."
        ),
        "service_unavailable": (
            "Carlos AI is temporarily unavailable. "
            "Please try again shortly or use the contact form."
        ),
    },
    "ee": {
        "missing_messages": "Töötlemiseks puuduvad sõnumid.",
        "invalid_last_message": "Viimane sõnum peab pärinema kasutajalt.",
        "empty_response": (
            "Vastust ei õnnestunud koostada. "
            "Palun kirjeldage protsessi uuesti ja võimalikult täpselt."
        ),
        "service_unavailable": (
            "Carlos AI ei ole hetkel saadaval. "
            "Proovige mõne aja pärast uuesti või kasutage kontaktivormi."
        ),
    },
}


def normalize_interface_language(value: Any) -> str:
    if not isinstance(value, str):
        return "en"

    normalized = value.strip().lower()

    aliases = {
        "et": "ee",
        "est": "ee",
        "estonian": "ee",
        "eng": "en",
        "english": "en",
        "pol": "pl",
        "polish": "pl",
    }

    normalized = aliases.get(normalized, normalized)
    return normalized if normalized in LANGUAGE_LABELS else "en"


def ai_api_message(interface_language: str, key: str) -> str:
    messages = AI_API_MESSAGES.get(
        interface_language,
        AI_API_MESSAGES["en"],
    )
    return messages[key]


def get_client() -> OpenAI:
    api_key = os.getenv("OPENAI_API_KEY")

    if not api_key:
        raise RuntimeError("OPENAI_API_KEY is not configured.")

    return OpenAI(api_key=api_key)


def build_system_instructions(interface_language: str = "en") -> str:
    fallback_language = LANGUAGE_LABELS.get(
        interface_language,
        LANGUAGE_LABELS["en"],
    )

    return f"""
You are Carlos AI, the professional project assistant for SDE
(Solutions Digitales d’Estonie).

SDE develops custom business systems, including:
- CRM systems,
- SaaS platforms,
- process automation,
- online forms,
- PDF and document generators,
- dashboards and reports,
- API integrations,
- customer communication systems,
- AI solutions integrated into real business workflows.

YOUR ROLE:
1. Help the user understand what kind of system could improve their business.
2. Ask short, relevant questions when the user's description is too general.
3. Identify whether the problem concerns CRM, SaaS, automation,
   documents or PDFs, dashboards, APIs, communication, AI workflows
   or process analysis.
4. Respond calmly, professionally and precisely.
5. Do not use exaggerated marketing language.
6. Never pretend to be a human.
7. Do not promise a specific price or deadline without proper analysis.
8. Do not invent projects, clients, case studies or business facts.
9. Keep responses concise, elegant and focused on practical business value.
10. When the user describes a process, suggest a suitable direction
    and ask two to four relevant follow-up questions.
11. When appropriate, suggest the "Describe your project" form
    or direct contact with SDE.

LANGUAGE POLICY:
- Respond in the language of the user's most recent message.
- Detect the response language from that message itself, not from
  the website interface language or earlier messages.
- If the user changes language, immediately continue in the new language.
- If the user explicitly asks for a reply or translation in another language,
  follow that request.
- When the most recent message contains more than one language, use
  the clearly dominant language.
- Names, email addresses, URLs, code, product names, numbers and isolated
  neutral words are not reliable evidence of a language.
- If the language cannot be determined reliably, ask the user which language
  they would prefer to use. Ask this brief clarification in the fallback
  interface language.
- The website interface language is only a fallback for that clarification.
- The current fallback interface language is {fallback_language}.
- Never force Polish, English or Estonian when the user's latest message
  clearly uses a different language.
- Do not mention language detection unless clarification is necessary.

STYLE:
- professional and precise,
- concise,
- no emoji,
- no aggressive sales language,
- no empty praise or overly casual greetings,
- short paragraphs,
- specific and practical recommendations.
""".strip()


def clean_messages(raw_messages: Any) -> list[dict[str, str]]:
    if not isinstance(raw_messages, list):
        return []

    cleaned: list[dict[str, str]] = []

    for item in raw_messages[-14:]:
        if not isinstance(item, dict):
            continue

        role = item.get("role")
        content = item.get("content")

        if role not in ["user", "assistant"]:
            continue

        if not isinstance(content, str):
            continue

        content = content.strip()

        if not content:
            continue

        cleaned.append(
            {
                "role": role,
                "content": content[:2500],
            }
        )

    return cleaned


def get_json_data() -> dict[str, Any]:
    data = request.get_json(silent=True) or {}
    if not isinstance(data, dict):
        return {}
    return data


def field(data: dict[str, Any], key: str, limit: int = 4000) -> str:
    value = data.get(key, "")
    if value is None:
        return ""
    return str(value).strip()[:limit]


def bool_field(data: dict[str, Any], key: str) -> bool:
    value = data.get(key)
    if isinstance(value, bool):
        return value
    if isinstance(value, str):
        return value.lower() in ["1", "true", "yes", "on"]
    return False


def validate_email(email: str) -> bool:
    return "@" in email and "." in email.split("@")[-1]


def verify_turnstile(token: str) -> tuple[bool, str]:
    if not TURNSTILE_SECRET_KEY:
        return True, "Turnstile verification skipped because TURNSTILE_SECRET_KEY is not configured."

    if not token:
        return False, "Brak tokenu Turnstile. Odśwież stronę i spróbuj ponownie."

    payload = {
        "secret": TURNSTILE_SECRET_KEY,
        "response": token,
        "remoteip": request.headers.get("CF-Connecting-IP", request.remote_addr or ""),
    }

    encoded_payload = urllib.parse.urlencode(payload).encode("utf-8")

    try:
        verify_request = urllib.request.Request(
            "https://challenges.cloudflare.com/turnstile/v0/siteverify",
            data=encoded_payload,
            method="POST",
        )

        with urllib.request.urlopen(verify_request, timeout=8) as response:
            result = json.loads(response.read().decode("utf-8"))

        if result.get("success") is True:
            return True, "Turnstile verified."

        return False, "Weryfikacja Turnstile nie powiodła się. Spróbuj ponownie."

    except Exception as error:
        app.logger.exception("Turnstile verification error: %s", error)
        return False, "Nie udało się zweryfikować Turnstile. Spróbuj ponownie."


def format_optional(value: str) -> str:
    return value if value else "—"


def label_from(mapping: dict[str, str], value: str) -> str:
    if not value:
        return "—"
    return mapping.get(value, value)


def send_email(subject: str, body: str, reply_to: str | None = None) -> None:
    if not SMTP_HOST:
        raise RuntimeError("SMTP_HOST is not configured.")

    if not MAIL_FROM:
        raise RuntimeError("MAIL_FROM or SMTP_USER is not configured.")

    if not MAIL_TO:
        raise RuntimeError("MAIL_TO is not configured.")

    message = EmailMessage()
    message["Subject"] = subject
    message["From"] = formataddr((MAIL_FROM_NAME, MAIL_FROM))
    message["To"] = MAIL_TO

    if reply_to:
        message["Reply-To"] = reply_to

    message.set_content(body)

    if SMTP_USE_SSL or SMTP_PORT == 465:
        context = ssl.create_default_context()
        with smtplib.SMTP_SSL(SMTP_HOST, SMTP_PORT, context=context, timeout=20) as server:
            if SMTP_USER and SMTP_PASSWORD:
                server.login(SMTP_USER, SMTP_PASSWORD)
            server.send_message(message)
    else:
        with smtplib.SMTP(SMTP_HOST, SMTP_PORT, timeout=20) as server:
            server.ehlo()
            server.starttls(context=ssl.create_default_context())
            server.ehlo()
            if SMTP_USER and SMTP_PASSWORD:
                server.login(SMTP_USER, SMTP_PASSWORD)
            server.send_message(message)


def contact_body(data: dict[str, Any]) -> str:
    language = field(data, "language", 10)
    project_type = field(data, "project_type", 100)

    return f"""
New contact enquiry from SDE website

Source: {format_optional(field(data, "source", 100))}
Language: {LANGUAGE_LABELS.get(language, language or "—")}

Name: {field(data, "name", 300)}
Company: {format_optional(field(data, "company", 300))}
Email: {field(data, "email", 300)}
Project type: {label_from(PROJECT_TYPE_LABELS, project_type)}

Message:
{field(data, "message", 5000)}

Consents:
Privacy policy: {"yes" if bool_field(data, "privacy_consent") else "no"}
Terms: {"yes" if bool_field(data, "terms_consent") else "no"}

Technical:
IP: {request.headers.get("CF-Connecting-IP", request.remote_addr or "—")}
User-Agent: {request.headers.get("User-Agent", "—")}
""".strip()


def project_request_body(data: dict[str, Any]) -> str:
    language = field(data, "language", 10)
    solution_type = field(data, "solution_type", 100)
    priority = field(data, "priority", 100)

    return f"""
New project brief from SDE website

Source: {format_optional(field(data, "source", 100))}
Language: {LANGUAGE_LABELS.get(language, language or "—")}

Name: {field(data, "name", 300)}
Company: {format_optional(field(data, "company", 300))}
Email: {field(data, "email", 300)}
Phone: {format_optional(field(data, "phone", 300))}

Company description:
{field(data, "company_description", 5000)}

Main problem:
{field(data, "main_problem", 5000)}

Current process:
{field(data, "current_process", 5000)}

Automation goal:
{field(data, "automation_goal", 5000)}

Current tools:
{format_optional(field(data, "current_tools", 5000))}

Solution type: {label_from(PROJECT_TYPE_LABELS, solution_type)}
Priority: {label_from(PRIORITY_LABELS, priority)}

Additional notes:
{format_optional(field(data, "additional_notes", 5000))}

Consents:
Privacy policy: {"yes" if bool_field(data, "privacy_consent") else "no"}
Terms: {"yes" if bool_field(data, "terms_consent") else "no"}

Technical:
IP: {request.headers.get("CF-Connecting-IP", request.remote_addr or "—")}
User-Agent: {request.headers.get("User-Agent", "—")}
""".strip()


@app.get("/api/health")
def health():
    return jsonify(
        {
            "status": "ok",
            "service": "SDE backend",
        }
    )


@app.post("/api/contact")
def contact():
    data = get_json_data()

    required_fields = ["name", "email", "project_type", "message"]
    missing_fields = [key for key in required_fields if not field(data, key)]

    if missing_fields:
        return jsonify({"error": "Uzupełnij wszystkie wymagane pola."}), 400

    email = field(data, "email", 300)

    if not validate_email(email):
        return jsonify({"error": "Podaj poprawny adres email."}), 400

    if not bool_field(data, "privacy_consent") or not bool_field(data, "terms_consent"):
        return jsonify({"error": "Wymagane zgody muszą zostać zaakceptowane."}), 400

    turnstile_ok, turnstile_message = verify_turnstile(field(data, "turnstile_token", 3000))

    if not turnstile_ok:
        return jsonify({"error": turnstile_message}), 400

    try:
        name = field(data, "name", 300)
        company = field(data, "company", 300)
        subject_suffix = company or name

        send_email(
            subject=f"[SDE] New contact enquiry — {subject_suffix}",
            body=contact_body(data),
            reply_to=email,
        )

        return jsonify({"message": "Dziękujemy. Wiadomość została wysłana."})

    except Exception as error:
        app.logger.exception("Contact form error: %s", error)
        return jsonify({"error": "Nie udało się wysłać wiadomości. Spróbuj ponownie."}), 500


@app.post("/api/project-request")
def project_request():
    data = get_json_data()

    required_fields = [
        "name",
        "email",
        "company_description",
        "main_problem",
        "current_process",
        "automation_goal",
        "solution_type",
    ]
    missing_fields = [key for key in required_fields if not field(data, key)]

    if missing_fields:
        return jsonify({"error": "Uzupełnij wszystkie wymagane pola."}), 400

    email = field(data, "email", 300)

    if not validate_email(email):
        return jsonify({"error": "Podaj poprawny adres email."}), 400

    if not bool_field(data, "privacy_consent") or not bool_field(data, "terms_consent"):
        return jsonify({"error": "Wymagane zgody muszą zostać zaakceptowane."}), 400

    turnstile_ok, turnstile_message = verify_turnstile(field(data, "turnstile_token", 3000))

    if not turnstile_ok:
        return jsonify({"error": turnstile_message}), 400

    try:
        name = field(data, "name", 300)
        company = field(data, "company", 300)
        subject_suffix = company or name

        send_email(
            subject=f"[SDE] New project brief — {subject_suffix}",
            body=project_request_body(data),
            reply_to=email,
        )

        return jsonify({"message": "Dziękujemy. Opis projektu został wysłany."})

    except Exception as error:
        app.logger.exception("Project request form error: %s", error)
        return jsonify({"error": "Nie udało się wysłać formularza. Spróbuj ponownie."}), 500


@app.post("/api/ai-assistant/chat")
def ai_assistant_chat():
    data = get_json_data()

    messages = clean_messages(data.get("messages"))
    interface_language = normalize_interface_language(
        data.get(
            "interfaceLanguage",
            data.get("language", "en"),
        )
    )

    if not messages:
        return jsonify(
            {
                "error": ai_api_message(
                    interface_language,
                    "missing_messages",
                )
            }
        ), 400

    if messages[-1]["role"] != "user":
        return jsonify(
            {
                "error": ai_api_message(
                    interface_language,
                    "invalid_last_message",
                )
            }
        ), 400

    try:
        client = get_client()

        response = client.responses.create(
            model=OPENAI_MODEL,
            instructions=build_system_instructions(interface_language),
            input=messages,
            max_output_tokens=520,
        )

        answer = (response.output_text or "").strip()

        if not answer:
            answer = ai_api_message(
                interface_language,
                "empty_response",
            )

        return jsonify(
            {
                "reply": answer,
            }
        )

    except Exception as error:
        app.logger.exception("Carlos AI error: %s", error)

        return jsonify(
            {
                "error": ai_api_message(
                    interface_language,
                    "service_unavailable",
                )
            }
        ), 500


if __name__ == "__main__":
    port = int(os.getenv("PORT", "5000"))
    app.run(host="0.0.0.0", port=port, debug=True)
