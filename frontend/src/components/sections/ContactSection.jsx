import { useState } from "react";
import { Link } from "react-router-dom";
import TurnstileWidget from "../ui/TurnstileWidget.jsx";

const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.DEV
    ? "http://localhost:5000"
    : "https://sddestonie.onrender.com");

function normalizeApiUrl(url) {
  return url.replace(/\/$/, "");
}

function ContactSection() {
  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");

  const isSending = status === "sending";

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      language: "pl",
      source: "contact_section",
      name: String(formData.get("name") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      project_type: String(formData.get("project_type") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      privacy_consent: formData.get("privacy_consent") === "on",
      terms_consent: formData.get("terms_consent") === "on",
      turnstile_token: turnstileToken,
    };

    setStatus("sending");
    setStatusMessage("Wysyłamy Twoje zapytanie...");

    try {
      const response = await fetch(`${normalizeApiUrl(API_BASE_URL)}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          data?.error || "Nie udało się wysłać formularza. Spróbuj ponownie."
        );
      }

      form.reset();
      setTurnstileToken("");
      setStatus("success");
      setStatusMessage(
        data?.message || "Dziękujemy. Wiadomość została wysłana."
      );
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error?.message || "Nie udało się wysłać formularza. Spróbuj ponownie."
      );
    }
  }

  return (
    <section id="kontakt" className="contact-section">
      <div className="container contact-section__inner">
        <div className="contact-section__content">
          <p className="contact-section__kicker">Kontakt</p>

          <h2>Twoja konkurencja już korzysta z AI. <br />Teraz czas na Ciebie.</h2>

          <p className="contact-section__lead">
            Napisz do nas krótko, czego potrzebujesz: CRM, SaaS, formularza online,
            generatora PDF, automatyzacji, integracji AI albo uporządkowania procesu w
            firmie. Odezwiemy się i podpowiemy, jakie rozwiązanie może mieć realny sens
            biznesowy.
          </p>

          <p className="contact-section__lead">
            Jeśli chcesz od razu opisać swój proces dokładniej, możesz skorzystać z{" "}
            <Link to="/pl/opisz-projekt" className="contact-section__inline-link">
              formularza analizy projektu
            </Link>
            .
          </p>

          <div className="contact-section__direct">
            <div className="contact-section__line">
              <span>Telefon</span>
              <a href="tel:+37256171770">+372 5617 1770</a>
            </div>

            <div className="contact-section__line">
              <span>Email</span>
              <a href="mailto:office@sddestonie.com">office@sddestonie.com</a>
            </div>

            <address className="contact-section__line">
              <span>Adres</span>
              <p>
                Handke Holding OÜ · Harju maakond, Kesklinna linnaosa ·<br />
                Sakala tn 7-2, 10141 Tallinn · Estonia
              </p>
            </address>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate={false}>
          <div className="contact-form__row">
            <label>
              Imię i nazwisko
              <input type="text" name="name" autoComplete="name" required />
            </label>

            <label>
              Firma
              <input type="text" name="company" autoComplete="organization" />
            </label>
          </div>

          <div className="contact-form__row">
            <label>
              Email
              <input type="email" name="email" autoComplete="email" required />
            </label>

            <label>
              Typ projektu
              <select name="project_type" required defaultValue="">
                <option value="" disabled>
                  Wybierz
                </option>
                <option value="crm">CRM / panel administracyjny</option>
                <option value="saas">Dedykowany system SaaS</option>
                <option value="ai">AI / automatyzacja workflow</option>
                <option value="pdf">Generator PDF / dokumenty</option>
                <option value="integration">
                  Integracja API / płatności / podpis
                </option>
                <option value="other">Inny projekt</option>
              </select>
            </label>
          </div>

          <label>
            Wiadomość
            <textarea name="message" rows="4" required />
          </label>

          <div className="contact-form__turnstile">
            <TurnstileWidget
              onVerify={setTurnstileToken}
              onExpire={() => setTurnstileToken("")}
              onError={() => setTurnstileToken("")}
            />
          </div>

          <div className="contact-form__consents">
            <label className="contact-form__check">
              <input type="checkbox" name="privacy_consent" required />

              <span>
                Zapoznałem/am się z{" "}
                <Link
                  to="/pl/polityka-prywatnosci"
                  className="contact-form__legal-link"
                >
                  POLITYKĄ PRYWATNOŚCI
                </Link>{" "}
                i wyrażam zgodę na przetwarzanie danych w celu obsługi zapytania.
              </span>
            </label>

            <label className="contact-form__check">
              <input type="checkbox" name="terms_consent" required />

              <span>
                Akceptuję{" "}
                <Link to="/pl/regulamin" className="contact-form__legal-link">
                  REGULAMIN
                </Link>{" "}
                korzystania z formularza kontaktowego.
              </span>
            </label>
          </div>

          {statusMessage && (
            <p className={`contact-form__status contact-form__status--${status}`}>
              {statusMessage}
            </p>
          )}

          <div className="contact-form__bottom">
            <p>
              Po wysłaniu formularza skontaktujemy się z Tobą w sprawie zapytania.
            </p>

            <button type="submit" className="contact-form__button" disabled={isSending}>
              {isSending ? "Wysyłanie..." : "Wyślij zapytanie"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
