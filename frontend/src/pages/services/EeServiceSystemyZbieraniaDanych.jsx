import { Link } from "react-router-dom";

import heroBg from "../../assets/images/aidivider.png";
import aiServices from "../../assets/images/aiservices.png";

function EeServiceSystemyZbieraniaDanych() {
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
          <p className="service-detail-section__kicker">Andmete kogumine</p>

          <h2>
            Süsteemid, mis koondavad vormide, failide ja protsesside andmed ühte
            korrastatud kohta.
          </h2>

          <p className="service-detail-section__lead">
            Loome eritellimusel süsteeme andmete kogumiseks, korrastamiseks ja töötlemiseks.
            Need andmed jõuavad ettevõttesse sageli e-kirjade, tabelite, vormide,
            PDF-dokumentide, klientide sõnumite või töötajate käsitsi tehtud märkmete kaudu.
          </p>

          <p className="service-detail-section__lead">
            Eesmärk ei ole lihtsalt „lisada vorm”. Eesmärk on ehitada loogiline protsess:
            andmed liiguvad andmebaasi, neid kontrollitakse, seotakse kliendi või juhtumiga
            ning need võivad käivitada dokumente, staatusi, ülesandeid, aruandeid või
            automatiseeritud tegevusi.
          </p>

          <div className="service-detail-content">
            <div className="service-detail-content__text">
              <h3>Miks ainult andmete kogumisest ei piisa?</h3>

              <p>
                Paljudes ettevõtetes on andmed laiali e-postkastis, Excelis, Google Formsis,
                PDF-dokumentides ja klientide sõnumites. Probleem tekib siis, kui on vaja
                kiiresti leida konkreetne info, kontrollida juhtumi ajalugu, koostada dokument
                või anda andmed edasi järgmisele inimesele või süsteemile.
              </p>

              <p>
                Eritellimusel loodud andmekogumissüsteem korrastab selle kaose. Selle asemel,
                et infot käsitsi tööriistade vahel ümber tõsta, saab ettevõttel olla oma
                vormide süsteem, andmebaas, halduspaneel, staatused, filtrid, ekspordid,
                dokumendid ja automaatsed tegevused pärast andmete edastamist.
              </p>

              <p>
                Selline lahendus võib hallata kliendipäringuid, registreerimisi, värbamist,
                tellimusi, küsitlusi, dokumentatsiooni, välitööde raporteid, sisemisi vorme,
                projektiandmeid või mis tahes muud protsessi, kus ettevõte kogub regulaarselt
                infot inimestelt või süsteemidelt.
              </p>

              <p>
                Andmeid saab kohe puhastada, kontrollida, rühmitada ja siduda õigete
                kirjetega. Nii muutub süsteem aluseks edasisele automatiseerimisele:
                CRM-ile, aruannetele, juhtpaneelidele, PDF-dokumentidele, teavitustele,
                API-integratsioonidele ja AI-moodulitele.
              </p>

              <div className="service-detail-list-block">
                <h3>Mida võib andmekogumissüsteem sisaldada?</h3>

                <ul>
                  <li>Eritellimusel loodud veebivormid klientidele või töötajatele</li>
                  <li>Andmebaas otsingu, filtrite ja muudatuste ajalooga</li>
                  <li>Halduspaneel päringute ja kirjete töötlemiseks</li>
                  <li>Andmete valideerimine ja sisestusvigade vähendamine</li>
                  <li>Andmete automaatne sidumine klientide või juhtumitega</li>
                  <li>Ekspordid, aruanded, juhtpaneelid ja juhtimisvaated</li>
                  <li>PDF-dokumentide loomine edastatud andmete põhjal</li>
                  <li>E-posti teavitused ja protsessi staatused</li>
                  <li>Integratsioonid CRM-i, API-de, tabelite või väliste süsteemidega</li>
                  <li>Võimalus laiendada süsteemi automatiseerimise ja AI-ga</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail-cta">
        <div className="service-detail-cta__inner">
          <p className="service-detail-section__kicker">Järgmine samm</p>

          <h2>Soovid korrastada andmed, mis praegu liiguvad e-kirjades ja tabelites laiali?</h2>

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

export default EeServiceSystemyZbieraniaDanych;