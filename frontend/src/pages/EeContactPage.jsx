import { Link } from "react-router-dom";

import heroBg from "../assets/images/aidivider.png";
import aiServices from "../assets/images/aiservices.png";

function EeContactPage() {
  return (
    <main className="contact-page">
      <section className="services-hero contact-page-hero">
        <img
          className="services-hero__bg"
          src={heroBg}
          alt=""
          aria-hidden="true"
        />

        <div className="services-hero__inner container">
          <div className="services-hero__content">
            <h1>Kontakt</h1>
          </div>

          <div className="services-hero__visual" aria-hidden="true">
            <img src={aiServices} alt="" />
          </div>
        </div>
      </section>

      <section id="kontakt" className="contact-section">
        <div className="container contact-section__inner">
          <div className="contact-section__content">
            <p className="contact-section__kicker">Kontakt</p>

            <h2>
              Räägime süsteemist, mis aitab sinu ettevõtte tööd paremini
              korraldada.
            </h2>

            <p className="contact-section__lead">
              Saada meile lühike kirjeldus sellest, mida vajad: CRM-süsteem,
              SaaS-platvorm, veebivorm, PDF-generaator, automatiseerimine,
              AI-integratsioon või ettevõtte tööprotsessi parem korraldus.
              Võtame sinuga ühendust ja pakume välja lahenduse, millel on
              praktiline äriline väärtus.
            </p>

            <p className="contact-section__lead">
              Kui soovid oma protsessi kohe täpsemalt kirjeldada, võid kasutada
              meie{" "}
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
                  Handke Holding OÜ · Harju maakond, Kesklinna linnaosa ·
                  <br />
                  Sakala tn 7-2, 10141 Tallinn · Eesti
                </p>
              </address>
            </div>
          </div>

          <form className="contact-form" action="#" method="post">
            <div className="contact-form__row">
              <label>
                Täisnimi
                <input type="text" name="name" autoComplete="name" required />
              </label>

              <label>
                Ettevõte
                <input
                  type="text"
                  name="company"
                  autoComplete="organization"
                />
              </label>
            </div>

            <div className="contact-form__row">
              <label>
                E-post
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                />
              </label>

              <label>
                Projekti tüüp
                <select name="project_type" required defaultValue="">
                  <option value="" disabled>
                    Vali
                  </option>
                  <option value="crm">CRM / admin-paneel</option>
                  <option value="saas">Kohandatud SaaS-süsteem</option>
                  <option value="ai">AI / töövoogude automatiseerimine</option>
                  <option value="pdf">PDF-generaator / dokumendid</option>
                  <option value="integration">
                    API / maksed / allkirjastamise integratsioon
                  </option>
                  <option value="other">Muu projekt</option>
                </select>
              </label>
            </div>

            <label>
              Sõnum
              <textarea name="message" rows="4" required />
            </label>

            <div className="contact-form__consents">
              <label className="contact-form__check">
                <input type="checkbox" name="privacy_consent" required />
                <span>
                  Olen tutvunud{" "}
                  <a
                    href="/ee/privaatsuspoliitika"
                    target="_blank"
                    rel="noopener"
                  >
                    privaatsuspoliitikaga
                  </a>{" "}
                  ja nõustun oma andmete töötlemisega päringu käsitlemise
                  eesmärgil.
                </span>
              </label>

              <label className="contact-form__check">
                <input type="checkbox" name="terms_consent" required />
                <span>
                  Nõustun kontaktivormi kasutamise{" "}
                  <a href="/ee/tingimused" target="_blank" rel="noopener">
                    tingimustega
                  </a>
                  .
                </span>
              </label>
            </div>

            <div className="contact-form__bottom">
              <p>
                Pärast vormi saatmist võtame sinuga ühendust sinu päringu
                osas.
              </p>

              <button type="submit" className="contact-form__button">
                Saada päring
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default EeContactPage;