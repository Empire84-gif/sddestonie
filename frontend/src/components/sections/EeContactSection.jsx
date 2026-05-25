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

function EeContactSection() {
  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");

  const isSending = status === "sending";

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      language: "ee",
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
    setStatusMessage("Saadame teie päringut...");

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
  throw new Error("Vormi ei õnnestunud saata. Palun proovige uuesti.");
}

form.reset();
setTurnstileToken("");
setStatus("success");
setStatusMessage("Aitäh. Sõnum on saadetud.");
} catch {
  setStatus("error");
  setStatusMessage("Vormi ei õnnestunud saata. Palun proovige uuesti.");
}
  }

  return (
    <section id="kontakt" className="contact-section">
      <div className="container contact-section__inner">
        <div className="contact-section__content">
          <p className="contact-section__kicker">Kontakt</p>

          <h2>Teie konkurendid kasutavad juba AI-d. <br />Nüüd on teie kord.</h2>

          <p className="contact-section__lead">
            Kirjutage meile lühidalt, mida vajate: CRM-i, SaaS-lahendust,
            veebivormi, PDF-generaatorit, automatiseerimist, AI-integratsiooni
            või ettevõtte tööprotsessi korrastamist. Võtame ühendust ja aitame
            hinnata, milline lahendus võiks teie ettevõtte jaoks päriselt
            äriliselt mõistlik olla.
          </p>

          <p className="contact-section__lead">
            Kui soovite oma protsessi kohe täpsemalt kirjeldada, võite kasutada{" "}
            <Link to="/ee/kirjelda-projekti" className="contact-section__inline-link">
              projekti analüüsi vormi
            </Link>
            .
          </p>

          <div className="contact-section__direct">
            <div className="contact-section__line">
              <span>Telefon</span>
              <a href="tel:+37256171770">+372 5617 1770</a>
            </div>

            <div className="contact-section__line">
              <span>E-post</span>
              <a href="mailto:office@sddestonie.com">office@sddestonie.com</a>
            </div>

            <address className="contact-section__line">
              <span>Aadress</span>
              <p>
                Handke Holding OÜ · Harju maakond, Kesklinna linnaosa ·<br />
                Sakala tn 7-2, 10141 Tallinn · Eesti
              </p>
            </address>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate={false}>
          <div className="contact-form__row">
            <label>
              Ees- ja perekonnanimi
              <input type="text" name="name" autoComplete="name" required />
            </label>

            <label>
              Ettevõte
              <input type="text" name="company" autoComplete="organization" />
            </label>
          </div>

          <div className="contact-form__row">
            <label>
              E-post
              <input type="email" name="email" autoComplete="email" required />
            </label>

            <label>
              Projekti tüüp
              <select name="project_type" required defaultValue="">
                <option value="" disabled>
                  Valige
                </option>
                <option value="crm">CRM / adminipaneel</option>
                <option value="saas">Kohandatud SaaS-süsteem</option>
                <option value="ai">AI / töövoo automatiseerimine</option>
                <option value="pdf">PDF-generaator / dokumendid</option>
                <option value="integration">
                  API-integratsioon / maksed / allkirjastamine
                </option>
                <option value="other">Muu projekt</option>
              </select>
            </label>
          </div>

          <label>
            Sõnum
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
                Olen tutvunud{" "}
                <Link
                  to="/ee/privaatsuspoliitika"
                  className="contact-form__legal-link"
                >
                  PRIVAATSUSPOLIITIKAGA
                </Link>{" "}
                ja annan nõusoleku oma andmete töötlemiseks päringu käsitlemise eesmärgil.
              </span>
            </label>

            <label className="contact-form__check">
              <input type="checkbox" name="terms_consent" required />

              <span>
                Nõustun kontaktivormi kasutamise{" "}
                <Link to="/ee/tingimused" className="contact-form__legal-link">
                  TINGIMUSTEGA
                </Link>
                .
              </span>
            </label>
          </div>

          {statusMessage && (
            <p className={`contact-form__status contact-form__status--${status}`}>
              {statusMessage}
            </p>
          )}

          <div className="contact-form__bottom">
            <p>Pärast vormi saatmist võtame teiega päringu osas ühendust.</p>

            <button type="submit" className="contact-form__button" disabled={isSending}>
              {isSending ? "Saatmine..." : "Saada päring"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default EeContactSection;
