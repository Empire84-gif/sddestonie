import { Link } from "react-router-dom";

import heroBg from "../../assets/images/aidivider.png";
import aiServices from "../../assets/images/aiservices.png";

function EeServiceSystemyCrm() {
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
          <p className="service-detail-section__kicker">CRM-süsteemid</p>

          <h2>CRM, mis kohandub ettevõtte tööviisiga — mitte vastupidi.</h2>

          <p className="service-detail-section__lead">
            Loome eritellimusel CRM-süsteeme ettevõtetele, kes vajavad paremat kontrolli
            klientide, müügivihjete, ülesannete, dokumentide, suhtluse ja juhtumite
            staatuste üle. Valmis tööriista asemel, mis on täis mittevajalikke funktsioone,
            projekteerime süsteemi ettevõtte tegeliku tööprotsessi ümber.
          </p>

          <p className="service-detail-section__lead">
            Selline CRM võib ühendada kliendibaasi, veebivormid, päringute halduse,
            e-posti süsteemi, PDF-dokumendid, suhtlusajaloo, ülesanded, aruanded,
            juhtpaneelid ja automatiseerimised ühte selgesse töökeskkonda.
          </p>

          <div className="service-detail-content">
            <div className="service-detail-content__text">
              <h3>Miks ettevõtted liiguvad valmis CRM-idest eemale?</h3>

              <p>
                Paljud populaarsed CRM-süsteemid näevad müügipresentatsioonides head välja,
                kuid praktikas selgub kiiresti, et need on täis funktsioone, mida ettevõte
                kunagi ei kasuta. Navigeerimine muutub segaseks, töötajad ei leia vajalikke
                valikuid üles ning lihtne protsess hakkab nõudma liikumist läbi mitme ekraani,
                vahekaardi ja seadistuse.
              </p>

              <p>
                Sageli tekib ka olukord, kus põhipakett tundub esmapilgul atraktiivne,
                kuid järgmised vajalikud funktsioonid on peidetud lisatellimuste,
                kasutajapiirangute, tasuliste integratsioonide või eraldi moodulite taha.
                Lõpuks maksab ettevõte järjest rohkem, kuid peab endiselt kohandama oma
                protsessi valmis platvormi piirangutega.
              </p>

              <p>
                Eritellimusel loodud CRM töötab vastupidi. See on süsteem, mis on
                projekteeritud ettevõtte tööviisi, meeskonna, klientide ja tegeliku workflow
                ümber. Kasutajaliides võib olla lihtne, kiire ja loogiline ning iga vaade
                võib näidata ainult seda infot, mida igapäevases töös päriselt vaja on.
              </p>

              <p>
                Oma CRM annab ka palju suuremad automatiseerimisvõimalused. Süsteem võib
                automaatselt luua dokumente, hallata vorme, määrata müügivihjeid,
                saata sõnumeid, luua staatusi, analüüsida andmeid, ehitada juhtpaneele,
                ühenduda API-dega ja täita protsesse, mida masskasutuseks mõeldud
                SaaS-platvormid tihti hästi ei peegelda.
              </p>

              <p>
                Selline süsteem muutub ettevõtte sisemiseks tööriistaks — loodud spetsiaalselt
                selle ärimudeli, protsesside, meeskonna ja visuaalse stiili järgi. Ettevõte
                saab oma tööriista, võimaluse seda edasi arendada ning kontrolli loogika,
                välimuse, funktsioonide ja lähtekoodi üle.
              </p>

              <div className="service-detail-list-block">
                <h3>Mida võib eritellimusel loodud CRM sisaldada?</h3>

                <ul>
                  <li>Klientide, ettevõtete, kontaktide ja müügivihjete baas</li>
                  <li>Müügi, projektide ja klienditeeninduse staatused</li>
                  <li>Suhtlusajalugu, märkmed ja määratud ülesanded</li>
                  <li>Veebivormid, mis salvestavad andmed otse CRM-i</li>
                  <li>Pakkumiste, lepingute ja PDF-dokumentide automaatne loomine</li>
                  <li>E-posti süsteem sõnumite sidumiseks klientidega</li>
                  <li>Juhtpaneelid, aruanded ja meeskonna tegevuste statistika</li>
                  <li>Kasutajarollid, õigused ja halduspaneel</li>
                  <li>Teavitused, meeldetuletused ja automaatsed staatused</li>
                  <li>API-integratsioonid ettevõtte väliste tööriistadega</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail-cta">
        <div className="service-detail-cta__inner">
          <p className="service-detail-section__kicker">Järgmine samm</p>

          <h2>Soovid CRM-i, mis sobib päriselt sinu ettevõtte protsessiga?</h2>

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

export default EeServiceSystemyCrm;