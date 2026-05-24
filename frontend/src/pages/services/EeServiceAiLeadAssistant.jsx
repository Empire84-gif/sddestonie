import { Link } from "react-router-dom";

import heroBg from "../../assets/images/aidivider.png";
import aiServices from "../../assets/images/aiservices.png";

function EeServiceAiLeadAssistant() {
  return (
    <main>
      <section className="services-hero">
        <img className="services-hero__bg" src={heroBg} alt="" aria-hidden="true" />

        <div className="services-hero__inner container">
          <div className="services-hero__content">
            <h1>Meie teenused</h1>
          </div>

          <div className="services-hero__visual" aria-hidden="true">
            <img src={aiServices} alt="" />
          </div>
        </div>
      </section>

      <section className="service-detail-section">
        <div className="container service-detail-section__inner">
          <p className="service-detail-section__kicker">AI Lead Assistant</p>

          <h2>
            Süsteem, mis aitab kliendipäringuid käsitleda kiiremini ja korrastatumalt.
          </h2>

          <p className="service-detail-section__lead">
            AI Lead Assistant on eritellimusel moodul, mis toetab ettevõtet uute päringute,
            kontaktivormide, müügivihjete ja potentsiaalsete klientide sõnumite käsitlemisel.
          </p>

          <p className="service-detail-section__lead">
            See ei ole tavaline chatbot veebilehel. See on tööriist, mis on ühendatud
            müügiprotsessi, CRM-i, vormide, suhtlusajaloo ja ettevõtte tööreeglitega.
          </p>

          <div className="service-detail-content">
            <div className="service-detail-content__text">
              <h3>Kuidas AI saab aidata lead’ide käsitlemisel?</h3>

              <p>
                Paljudes ettevõtetes jõuavad uued päringud e-postkasti, kontaktivormi või
                sotsiaalmeedia sõnumitesse. Osa lead’e nõuab kiiret reaktsiooni, osa
                lisaküsimusi ja osa tuleks kohe määrata õigele inimesele või kategooriale.
              </p>

              <p>
                AI Lead Assistant võib aidata päringute sisu analüüsida, lead’e
                klassifitseerida, kliendi kavatsust tuvastada, vastuste mustandeid koostada,
                andmeid korrastada ja infot CRM-i või müügipaneeli edastada.
              </p>

              <p>
                Selline süsteem võib töötada koos projektianalüüsi vormi, kontaktivormi,
                e-postkasti, kliendibaasi ja dashboard’iga. Nii näeb ettevõte kiiremini,
                millised päringud on väärtuslikud, mida klient vajab ja milline peaks olema
                järgmine samm.
              </p>

              <p>
                AI ei tee otsuseid meeskonna eest, kuid lühendab aega, mis kulub esialgsele
                analüüsile, info korrastamisele ja vastuse ettevalmistamisele. See on eriti
                kasulik seal, kus ettevõte saab palju sarnaseid päringuid või peab kiiresti
                hindama, kas konkreetne lead sobib pakkumisega.
              </p>

              <div className="service-detail-list-block">
                <h3>Mida võib AI Lead Assistant teha?</h3>

                <ul>
                  <li>Analüüsida päringuid vormidest ja e-kirjadest</li>
                  <li>Klassifitseerida lead’e teenusetüübi või prioriteedi järgi</li>
                  <li>Eraldada kliendi sõnumist kõige olulisem info</li>
                  <li>Luua müügitiimile vastuste mustandeid</li>
                  <li>Salvestada lead’i andmed otse CRM-i</li>
                  <li>Määrata päringud õigetele inimestele või kategooriatesse</li>
                  <li>Näidata kliendi staatusi ja suhtlusajalugu</li>
                  <li>Ühendada kontaktivorm müügiprotsessiga</li>
                  <li>Luua lead’ide ja päringute allikate dashboard</li>
                  <li>Toetada kliendi kvalifitseerimist enne müügivestlust</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail-cta">
        <div className="service-detail-cta__inner">
          <p className="service-detail-section__kicker">Järgmine samm</p>

          <h2>Soovid kliendipäringuid kiiremini analüüsida ja käsitleda?</h2>

          <p>
            Võid saata lühikese sõnumi tavalise kontaktivormi kaudu või kirjeldada oma
            protsessi kohe täpsemalt projektianalüüsi vormis.
          </p>

          <div className="service-detail-cta__actions">
            <Link
              to="/ee"
              state={{ scrollTo: "kontakt" }}
              className="service-detail-cta__button service-detail-cta__button--primary"
            >
              Kiire kontakt
            </Link>

            <Link
              to="/ee/kirjelda-projekti"
              className="service-detail-cta__button service-detail-cta__button--secondary"
            >
              Kirjelda projekti täpsemalt
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default EeServiceAiLeadAssistant;