import { Link } from "react-router-dom";

function EeContactSection() {
  return (
    <section id="kontakt" className="contact-section">
      <div className="container contact-section__inner">
        <div className="contact-section__content">
          <p className="contact-section__kicker">Kontakt</p>

          <h2>Teie konkurendid kasutavad juba AI-d. Nüüd on teie kord.</h2>

          <p className="contact-section__lead">
            Kirjutage meile lühidalt, mida vajate: CRM-i, SaaS-lahendust,
            veebivormi, PDF-generaatorit, automatiseerimist, AI-integratsiooni
            või ettevõtte tööprotsessi korrastamist. Võtame ühendust ja aitame
            hinnata, milline lahendus võiks teie ettevõtte jaoks päriselt
            äriliselt mõistlik olla.
          </p>

          <p className="contact-section__lead">
            Kui soovite oma protsessi kohe täpsemalt kirjeldada, võite kasutada{" "}
            <Link
              to="/ee/kirjelda-projekti"
              className="contact-section__inline-link"
            >
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

        <form className="contact-form" action="#" method="post">
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
            <div
              className="cf-turnstile"
              data-sitekey="0x4AAAAAAC8X-gGY-b-l3tND"
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
                <Link
                  to="/ee/tingimused"
                  className="contact-form__legal-link"
                >
                  TINGIMUSTEGA
                </Link>
                .
              </span>
            </label>
          </div>

          <div className="contact-form__bottom">
            <p>Pärast vormi saatmist võtame teiega päringu osas ühendust.</p>

            <button type="submit" className="contact-form__button">
              Saada päring
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default EeContactSection;