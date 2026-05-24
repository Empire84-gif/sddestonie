import { Link } from "react-router-dom";

function ContactSection() {
  return (
    <section id="kontakt" className="contact-section">
      <div className="container contact-section__inner">
        <div className="contact-section__content">
          <p className="contact-section__kicker">Kontakt</p>

          <h2>Twoja konkurencja już korzysta z AI. Teraz czas na Ciebie.</h2>

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

        <form className="contact-form" action="#" method="post">
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
            <div
              className="cf-turnstile"
              data-sitekey="0x4AAAAAAC8X-gGY-b-l3tND"
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
                <Link
                  to="/pl/regulamin"
                  className="contact-form__legal-link"
                >
                  REGULAMIN
                </Link>{" "}
                korzystania z formularza kontaktowego.
              </span>
            </label>
          </div>

          <div className="contact-form__bottom">
            <p>
              Po wysłaniu formularza skontaktujemy się z Tobą w sprawie zapytania.
            </p>

            <button type="submit" className="contact-form__button">
              Wyślij zapytanie
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;