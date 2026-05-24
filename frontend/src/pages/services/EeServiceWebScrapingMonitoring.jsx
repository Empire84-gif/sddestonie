import { Link } from "react-router-dom";

import heroBg from "../../assets/images/aidivider.png";
import aiServices from "../../assets/images/aiservices.png";

function EeServiceWebScrapingMonitoring() {
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
          <p className="service-detail-section__kicker">Veebiandmete kogumine ja seire</p>

          <h2>
            Süsteemid, mis koguvad ja jälgivad internetis olevaid andmeid automaatselt.
          </h2>

          <p className="service-detail-section__lead">
            Loome eritellimusel tööriistu veebilehtedelt, kataloogidest, pakkumistest,
            hinnakirjadest, kuulutustest, otsingutulemustest, valdkonnaportaalidest ja
            muudest avalikult kättesaadavatest allikatest andmete kogumiseks,
            korrastamiseks ja jälgimiseks.
          </p>

          <p className="service-detail-section__lead">
            Eesmärk ei ole lihtsalt andmeid alla laadida. Oluline on süsteem, mis kontrollib
            regulaarselt muutusi, salvestab info andmebaasi, kuvab seda juhtpaneelis, saadab
            hoiatusi ja aitab ettevõttel turul kiiremini reageerida.
          </p>

          <div className="service-detail-content">
            <div className="service-detail-content__text">
              <h3>Miks vajab ettevõte andmeseiret?</h3>

              <p>
                Paljudes valdkondades on olulised andmed hajutatud eri veebilehtede vahel:
                konkurentide hinnad, toodete saadavus, uued kuulutused, pakkumiste muutused,
                portaalide sisu, kataloogiandmed, arvustused, staatused või ametlikud
                teated. Selliste allikate käsitsi kontrollimine võtab palju aega ja midagi
                võib kergesti märkamata jääda.
              </p>

              <p>
                Eritellimusel loodud seiresüsteem võib koguda andmeid automaatselt kindlate
                reeglite alusel, salvestada muudatuste ajaloo, võrrelda tulemusi, filtreerida
                infot ja näidata ainult seda, mis päriselt tähelepanu vajab.
              </p>

              <p>
                Selline tööriist võib toimida sisemise paneelina, aruandlusmoodulina,
                hoiatuste süsteemina või osana suuremast SaaS-rakendusest. Andmed võivad
                liikuda andmebaasi, juhtpaneelile, tabelisse, CRM-i, PDF-aruandesse või
                automaatsesse e-posti teavitusse.
              </p>

              <p>
                Projekteerime selliseid lahendusi rõhuga stabiilsusele, mõistlikule
                andmete kogumise sagedusele, selgele infostruktuurile ja allikate
                kasutustingimuste austamisele. Süsteem peab toetama analüüsi ja seiret,
                mitte looma juurde uut failide ja tabelite kaost.
              </p>

              <div className="service-detail-list-block">
                <h3>Mida saab automaatselt jälgida või koguda?</h3>

                <ul>
                  <li>Toodete, teenuste ja konkurentide pakkumiste hindu</li>
                  <li>Toodete, kuulutuste või kohtade saadavust</li>
                  <li>Uusi postitusi, teateid, uuendusi ja sisumuudatusi</li>
                  <li>Kataloogi-, tehnilisi või valdkonnapõhiseid andmeid</li>
                  <li>Kuulutusi, pakkumiste loendeid ja avalikke registreid</li>
                  <li>Muutusi klientide, partnerite või turu veebilehtedel</li>
                  <li>E-posti hoiatusi olulise muutuse tuvastamisel</li>
                  <li>Juhtpaneele andmete ajaloo ja võrdlustega</li>
                  <li>Andmete eksporti CSV-sse, PDF-i, CRM-i või andmebaasi</li>
                  <li>Andmeanalüüsi automatiseerimise või AI toel</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail-cta">
        <div className="service-detail-cta__inner">
          <p className="service-detail-section__kicker">Järgmine samm</p>

          <h2>Soovid automaatselt jälgida andmeid, mis on sinu ettevõtte jaoks olulised?</h2>

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

export default EeServiceWebScrapingMonitoring;