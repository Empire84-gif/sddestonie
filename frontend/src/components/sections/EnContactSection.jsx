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

function EnContactSection() {
  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");

  const isSending = status === "sending";

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      language: "en",
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
    setStatusMessage("Sending your enquiry...");

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
  throw new Error("The form could not be sent. Please try again.");
}

form.reset();
setTurnstileToken("");
setStatus("success");
setStatusMessage("Thank you. Your message has been sent.");
} catch {
  setStatus("error");
  setStatusMessage("The form could not be sent. Please try again.");
}
  }

  return (
    <section id="kontakt" className="contact-section">
      <div className="container contact-section__inner">
        <div className="contact-section__content">
          <p className="contact-section__kicker">Contact</p>

          <h2>Your competitors are already using AI. Now it is your turn.</h2>

          <p className="contact-section__lead">
            Send us a short message describing what you need: a CRM system, SaaS
            platform, online form, PDF generator, automation, AI integration or
            a more organised business process. We will get back to you and
            suggest what kind of solution may make real business sense.
          </p>

          <p className="contact-section__lead">
            If you want to describe your process in more detail right away, you
            can use our{" "}
            <Link to="/describe-project" className="contact-section__inline-link">
              project analysis form
            </Link>
            .
          </p>

          <div className="contact-section__direct">
            <div className="contact-section__line">
              <span>Phone</span>
              <a href="tel:+37256171770">+372 5617 1770</a>
            </div>

            <div className="contact-section__line">
              <span>Email</span>
              <a href="mailto:office@sddestonie.com">office@sddestonie.com</a>
            </div>

            <address className="contact-section__line">
              <span>Address</span>
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
              Full name
              <input type="text" name="name" autoComplete="name" required />
            </label>

            <label>
              Company
              <input type="text" name="company" autoComplete="organization" />
            </label>
          </div>

          <div className="contact-form__row">
            <label>
              Email
              <input type="email" name="email" autoComplete="email" required />
            </label>

            <label>
              Project type
              <select name="project_type" required defaultValue="">
                <option value="" disabled>
                  Select
                </option>
                <option value="crm">CRM / admin panel</option>
                <option value="saas">Custom SaaS system</option>
                <option value="ai">AI / workflow automation</option>
                <option value="pdf">PDF generator / documents</option>
                <option value="integration">
                  API / payments / signature integration
                </option>
                <option value="other">Other project</option>
              </select>
            </label>
          </div>

          <label>
            Message
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
                I have read the{" "}
                <Link to="/privacy-policy" className="contact-form__legal-link">
                  PRIVACY POLICY
                </Link>{" "}
                and consent to the processing of my data for the purpose of handling this enquiry.
              </span>
            </label>

            <label className="contact-form__check">
              <input type="checkbox" name="terms_consent" required />

              <span>
                I accept the{" "}
                <Link to="/terms" className="contact-form__legal-link">
                  TERMS AND CONDITIONS
                </Link>{" "}
                for using the contact form.
              </span>
            </label>
          </div>

          {statusMessage && (
            <p className={`contact-form__status contact-form__status--${status}`}>
              {statusMessage}
            </p>
          )}

          <div className="contact-form__bottom">
            <p>After you submit the form, we will contact you regarding your enquiry.</p>

            <button type="submit" className="contact-form__button" disabled={isSending}>
              {isSending ? "Sending..." : "Send enquiry"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default EnContactSection;
