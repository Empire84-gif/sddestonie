import { Link } from "react-router-dom";

import heroBg from "../../assets/images/aidivider.png";
import aiServices from "../../assets/images/aiservices.png";

function EeServiceRaportyIDashboardy() {
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
          <p className="service-detail-section__kicker">Aruanded ja juhtpaneelid</p>

          <h2>
            Juhtpaneelid, mis näitavad ettevõtte tegelikku pilti ilma käsitsi andmeid
            kokku tõstmata.
          </h2>

          <p className="service-detail-section__lead">
            Loome aruandeid, juhtimisvaateid ja dashboard’e, mis koguvad andmed protsessidest,
            vormidest, CRM-ist, dokumentidest, müügist, projektidest ja muudest allikatest
            ühte selgesse vaatesse.
          </p>

          <p className="service-detail-section__lead">
            Eesmärk ei ole ilus graafik graafiku pärast. Eesmärk on süsteem, mis aitab
            kiiremini otsuseid teha, probleeme märgata, staatusi kontrollida ja näha,
            mis ettevõttes tegelikult toimub.
          </p>

          <div className="service-detail-content">
            <div className="service-detail-content__text">
              <h3>Miks käsitsi koostatud aruanded enam ei tööta?</h3>

              <p>
                Paljudes ettevõtetes tähendab aruandlus endiselt andmete käsitsi kogumist
                Excelist, e-kirjadest, SaaS-süsteemidest, vormidest ja dokumentidest.
                See võtab aega, tekitab vigu ja viib selleni, et juhtkond vaatab sageli
                andmeid, mis on juba aegunud.
              </p>

              <p>
                Eritellimusel loodud juhtpaneel võib andmeid süsteemist automaatselt
                võtta, korrastada ja esitada vaadetena, mis on kohandatud eri rollidele:
                ettevõtte omanikule, juhile, müügile, administratsioonile, klienditeenindusele
                või operatiivsele meeskonnale.
              </p>

              <p>
                Dashboard võib näidata müüki, müügivihjeid, projektide staatuseid,
                meeskonna koormust, päringute arvu, reageerimisaega, ettevalmistamist
                vajavaid dokumente, makseid, klientide allikaid, protsesside efektiivsust
                ja teisi näitajaid, mis on konkreetse ettevõtte jaoks olulised.
              </p>

              <p>
                Sellised aruanded võivad olla osa CRM-ist, SaaS-rakendusest,
                andmekogumissüsteemist või eraldi analüütikapaneelist. Kõige tähtsam on,
                et andmed oleksid ajakohased, arusaadavad ja seotud tegeliku protsessiga —
                mitte käsitsi kord nädalas kokku pandud.
              </p>

              <div className="service-detail-list-block">
                <h3>Mida võib ettevõtte dashboard sisaldada?</h3>

                <ul>
                  <li>Juhtimisvaated ettevõtte võtmenäitajatega</li>
                  <li>Müügi, müügivihjete, klientide ja projektide aruanded</li>
                  <li>Staatuste, päringute ja meeskonna ülesannete juhtpaneel</li>
                  <li>Andmete automaatne kogumine CRM-ist ja vormidest</li>
                  <li>Graafikud, tabelid, filtrid ja rollipõhised vaated</li>
                  <li>Dokumentide, maksete ja tähtaegade aruanded</li>
                  <li>Andmete eksport PDF-i, CSV-sse või tabelitesse</li>
                  <li>Protsesside efektiivsuse ja reageerimisaja jälgimine</li>
                  <li>Hoiatused, teavitused ja automaatsed kokkuvõtted</li>
                  <li>Võimalus laiendada süsteemi AI-analüüsi ja prognoosidega</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail-cta">
        <div className="service-detail-cta__inner">
          <p className="service-detail-section__kicker">Järgmine samm</p>

          <h2>Soovid näha ettevõtte tähtsamaid andmeid ilma käsitsi aruandluseta?</h2>

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

export default EeServiceRaportyIDashboardy;