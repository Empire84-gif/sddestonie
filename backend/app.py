import os
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


@app.get("/api/health")
def health():
    return jsonify(
        {
            "status": "ok",
            "service": "SDE Carlos AI backend",
        }
    )


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