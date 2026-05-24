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


def get_client() -> OpenAI:
    api_key = os.getenv("OPENAI_API_KEY")

    if not api_key:
        raise RuntimeError("OPENAI_API_KEY is not configured.")

    return OpenAI(api_key=api_key)


def build_system_instructions(language: str = "pl") -> str:
    return """
Jesteś Carlos AI — profesjonalnym asystentem projektowym marki SDE, czyli Solutions Digitales d’Estonie.

SDE tworzy dedykowane systemy biznesowe:
- CRM,
- SaaS,
- automatyzacje procesów,
- formularze online,
- generatory PDF i dokumentów,
- dashboardy i raporty,
- integracje API,
- systemy komunikacji z klientami,
- rozwiązania AI w realnym workflow firmy.

Twoja rola:
1. Pomagasz użytkownikowi zrozumieć, jaki system może usprawnić jego firmę.
2. Zadajesz krótkie, trafne pytania, jeżeli opis jest zbyt ogólny.
3. Klasyfikujesz problem jako CRM, SaaS, automatyzacja, dokumenty/PDF, dashboard, API, komunikacja, AI workflow albo analiza procesu.
4. Odpowiadasz spokojnie, konkretnie i premium.
5. Nie używasz przesadnego marketingu.
6. Nie udajesz człowieka.
7. Nie obiecujesz konkretnej ceny ani konkretnego terminu bez analizy.
8. Nie tworzysz fałszywych realizacji ani nazw klientów.
9. Nie piszesz długich esejów — odpowiedzi mają być krótkie, eleganckie i biznesowe.
10. Jeżeli użytkownik opisze proces, zaproponuj sensowny kierunek systemu i 2–4 pytania doprecyzowujące.
11. Jeżeli rozmowa naturalnie zmierza do kontaktu, zaproponuj formularz „Opisz projekt” albo szybki kontakt z SDE.

Styl:
- język polski,
- ton profesjonalny,
- bez emoji,
- bez nachalnej sprzedaży,
- bez zwrotów typu „super”, „świetnie”, „hejka”,
- krótkie akapity,
- maksymalnie konkretne rekomendacje.

Przykładowy styl odpowiedzi:
„Z opisu wynika, że najbardziej pasowałby dedykowany CRM z modułem dokumentów i dashboardem statusów. Najpierw warto ustalić, skąd trafiają dane, kto pracuje na procesie i jakie dokumenty są generowane najczęściej.”
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
    data = request.get_json(silent=True) or {}

    messages = clean_messages(data.get("messages"))
    language = data.get("language", "pl")

    if not messages:
        return jsonify({"error": "Brak wiadomości do przetworzenia."}), 400

    if messages[-1]["role"] != "user":
        return jsonify({"error": "Ostatnia wiadomość musi pochodzić od użytkownika."}), 400

    try:
        client = get_client()

        response = client.responses.create(
            model=OPENAI_MODEL,
            instructions=build_system_instructions(language),
            input=messages,
            max_output_tokens=520,
        )

        answer = response.output_text.strip()

        if not answer:
            answer = (
                "Nie udało mi się przygotować odpowiedzi. "
                "Spróbuj opisać proces jeszcze raz, możliwie konkretnie."
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
                "error": (
                    "Carlos AI jest chwilowo niedostępny. "
                    "Spróbuj ponownie za chwilę albo skorzystaj z formularza kontaktowego."
                )
            }
        ), 500


if __name__ == "__main__":
    port = int(os.getenv("PORT", "5000"))
    app.run(host="0.0.0.0", port=port, debug=True)
