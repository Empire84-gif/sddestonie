import { Link } from "react-router-dom";

import heroBg from "../../assets/images/aidivider.png";
import aiServices from "../../assets/images/aiservices.png";

function EeServiceAplikacjeSaas() {
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
          <p className="service-detail-section__kicker">SaaS-rakendused</p>

          <h2>
            Eritellimusel veebirakendused ja SaaS-platvormid, mis on loodud tegeliku
            protsessi ümber.
          </h2>

          <p className="service-detail-section__lead">
            Ehitame veebirakendusi ja SaaS-süsteeme ettevõtetele, kes vajavad oma tööriista
            klientide, protsesside, dokumentide, andmete, maksete, aruannete või meeskonnatöö
            haldamiseks.
          </p>

          <p className="service-detail-section__lead">
            Selline süsteem võib toimida sisemise operatiivplatvormina, kliendipaneelina,
            CRM-ina, broneerimissüsteemina, dokumendigeneraatorina, päringute haldamise
            tööriistana või SaaS-tootena, mida ettevõte pakub edasi oma klientidele.
          </p>

          <div className="service-detail-content">
            <div className="service-detail-content__text">
              <h3>Miks annab eritellimusel SaaS-rakendus rohkem kontrolli?</h3>

              <p>
                Valmis tööriistad lahendavad sageli ainult osa probleemist. Ettevõte kasutab
                ühte süsteemi klientide jaoks, teist dokumentide jaoks, kolmandat e-posti
                jaoks, järgmist aruannete jaoks ning ülejäänud protsess toimub endiselt
                Excelis, sõnumites ja käsitsi märkmetes.
              </p>

              <p>
                Eritellimusel SaaS-rakendus võimaldab need osad ühendada üheks keskkonnaks.
                Saab projekteerida täpselt need moodulid, vaated, kasutajarollid, staatused,
                automatiseerimised ja aruanded, mida konkreetne ettevõtte töökorraldus
                vajab.
              </p>

              <p>
                Süsteem võib olla etapiviisiliselt käivitatud lihtne MVP või arenenud
                platvorm kasutajakontode, administraatori paneeli, maksete, PDF-dokumentide,
                API-integratsioonide, juhtpaneelide ja AI-moodulitega.
              </p>

              <p>
                Ettevõte saab oma programmi, mis töötab brauseris — visuaalselt ja
                funktsionaalselt kohandatud tema brändi, meeskonna ja protsesside järgi.
                Ilma mittevajalike funktsioonideta, juhusliku loogikata ja sõltuvuseta
                masskasutuseks mõeldud süsteemi piirangutest.
              </p>

              <div className="service-detail-list-block">
                <h3>Mida võib eritellimusel SaaS-platvorm sisaldada?</h3>

                <ul>
                  <li>Administraatori paneel ja kasutajakontod</li>
                  <li>CRM, klientide, ettevõtete, päringute või projektide baas</li>
                  <li>Veebivormid, mis salvestavad andmed otse süsteemi</li>
                  <li>Dokumentide, pakkumiste ja PDF-ide automaatne loomine</li>
                  <li>Dashboard’id, aruanded, statistika ja juhtimisvaated</li>
                  <li>Kasutajarollid, õigused ja sisselogimine</li>
                  <li>API-integratsioonid väliste süsteemidega</li>
                  <li>E-posti teavitused, staatused ja workflow</li>
                  <li>Maksete, broneeringute või klienditeeninduse moodulid</li>
                  <li>Võimalus laiendada süsteemi AI ja automatiseerimisega</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail-cta">
        <div className="service-detail-cta__inner">
          <p className="service-detail-section__kicker">Järgmine samm</p>

          <h2>Sul on idee oma süsteemi või SaaS-rakenduse jaoks?</h2>

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

export default EeServiceAplikacjeSaas;