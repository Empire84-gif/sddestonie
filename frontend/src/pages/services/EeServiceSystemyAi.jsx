import { Link } from "react-router-dom";

import heroBg from "../../assets/images/aidivider.png";
import aiServices from "../../assets/images/aiservices.png";

function EeServiceSystemyAi() {
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
          <p className="service-detail-section__kicker">AI-süsteemid</p>

          <h2>
            AI kui osa tegelikust tööprotsessist, mitte eraldiseisev tehnoloogia ilma
            kontekstita.
          </h2>

          <p className="service-detail-section__lead">
            SDE-s projekteerime süsteeme, kus AI toetab konkreetset äriprotsessi:
            andmeanalüüsi, päringute käsitlemist, dokumentidega töötamist, kliendisuhtlust,
            vastuste ettevalmistamist, info otsimist või andmete korrastamist mitmest
            erinevast allikast.
          </p>

          <p className="service-detail-section__lead">
            Me ei käsitle AI-d kui maagilist lisandit veebilehele. Suurimat väärtust loob
            see siis, kui see on ühendatud CRM-i, vormide, andmebaasi, dokumentide,
            juhtpaneelide, e-posti süsteemi või ettevõtte sisemise töövooga.
          </p>

          <div className="service-detail-content">
            <div className="service-detail-content__text">
              <h3>Kuidas AI võib ettevõtte süsteemis töötada?</h3>

              <p>
                AI-toega süsteem võib analüüsida klientide sõnumeid, klassifitseerida
                päringuid, pakkuda vastuste mustandeid, teha dokumentidest kokkuvõtteid,
                eraldada failidest andmeid, aidata müügivihjete käsitlemisel, toetada
                müügitiimi, korrastada märkmeid või koostada sisu süsteemis olevate andmete
                põhjal.
              </p>

              <p>
                Oluline on aga see, et AI-l oleks ligipääs õigele kontekstile: kliendi
                andmetele, suhtlusajaloole, projekti staatusele, dokumentidele, märkmetele,
                varasematele otsustele ja ettevõtte tööreeglitele. Alles siis saab see
                päriselt aidata, mitte genereerida üldiseid vastuseid, mis on protsessist
                lahti ühendatud.
              </p>

              <p>
                Seetõttu ehitame lahendusi, kus AI on üks moodul suuremas süsteemis.
                See võib toimida sisemise assistendina, dokumendianalüüsi moodulina,
                klienditeeninduse toena, teadmistebaasiga töötamise tööriistana,
                automaatse päringute klassifikaatorina või müügi- ja haldusprotsessi osana.
              </p>

              <div className="service-detail-list-block">
                <h3>AI võimalikud kasutusviisid ettevõtte süsteemides</h3>

                <ul>
                  <li>AI-assistent klienditeeninduse või müügitiimi jaoks</li>
                  <li>Sõnumite, päringute ja veebivormide analüüs</li>
                  <li>Dokumentide, e-kirjade, märkmete ja kliendiajaloo kokkuvõtted</li>
                  <li>Info otsimine ettevõtte teadmistebaasist</li>
                  <li>Müügivihjete, päringute ja prioriteetide klassifitseerimine</li>
                  <li>Vastuste ja tekstide mustandite genereerimine</li>
                  <li>CRM-i, aruannete ja juhtpaneelide andmete analüüs</li>
                  <li>Info automaatne korrastamine mitmest allikast</li>
                  <li>Haldus- ja dokumendiprotsesside toetamine</li>
                  <li>AI-mudelite ühendamine eritellimusel SaaS- või CRM-süsteemiga</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail-cta">
        <div className="service-detail-cta__inner">
          <p className="service-detail-section__kicker">Järgmine samm</p>

          <h2>Soovid näha, kus AI võiks sinu ettevõttes päriselt väärtust luua?</h2>

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

export default EeServiceSystemyAi;