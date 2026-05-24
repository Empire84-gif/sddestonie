import { Link } from "react-router-dom";

import heroBg from "../../assets/images/aidivider.png";
import aiServices from "../../assets/images/aiservices.png";

function EeServiceBazyDanych() {
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
          <p className="service-detail-section__kicker">Andmebaasid</p>

          <h2>
            Korrastatud andmebaasid, mis asendavad kaose Excelis, e-kirjades ja failides.
          </h2>

          <p className="service-detail-section__lead">
            Projekteerime andmebaase ja infohaldussüsteeme, mis aitavad ettevõtetel hoida
            kliente, dokumente, päringuid, projekte, staatusi ja tegevuste ajalugu ühes
            loogilises kohas.
          </p>

          <p className="service-detail-section__lead">
            See ei ole lihtsalt tabel andmetega. Hästi projekteeritud andmebaas muutub
            aluseks CRM-ile, automatiseerimisele, aruannetele, dokumendigeneraatoritele,
            juhtpaneelidele, veebivormidele ja API-integratsioonidele.
          </p>

          <div className="service-detail-content">
            <div className="service-detail-content__text">
              <h3>Miks ainult tabelitega töötamisest enam ei piisa?</h3>

              <p>
                Excel ja veebitabelid on alguses head, kuid aja jooksul hakkavad need looma
                kaost: mitu failiversiooni, andmete käsitsi ümberkirjutamine, muudatuste
                ajaloo puudumine, õiguste puudumine, duplikaadid ja raskused õige info kiirel
                leidmisel.
              </p>

              <p>
                Eritellimusel loodud andmebaas võimaldab korrastada info vastavalt ettevõtte
                loogikale. Andmed võivad olla seotud klientide, projektide, dokumentide,
                päringute, maksete, töötajate või mis tahes muu protsessi osaga.
              </p>

              <p>
                Nii saab ettevõttel olla üks terviklik süsteem, kus andmeid salvestatakse,
                uuendatakse, filtreeritakse, eksporditakse ja kasutatakse teistes moodulites.
                See on alus edasisele automatiseerimisele ja tegelikule kontrollile protsessi
                üle.
              </p>

              <p>
                Andmebaas võib toimida eraldi halduspaneelina või osana suuremast SaaS- või
                CRM-süsteemist. Seda saab ühendada vormide, e-posti, PDF-dokumentide,
                juhtpaneelide, aruannete, API-de ja AI-moodulitega.
              </p>

              <div className="service-detail-list-block">
                <h3>Mida võib eritellimusel andmebaasisüsteem sisaldada?</h3>

                <ul>
                  <li>Klientide, ettevõtete, kontaktide, projektide või päringute baas</li>
                  <li>Seosed kirjete, tegevusajaloo ja dokumentide vahel</li>
                  <li>Halduspaneel otsingu ja filtreerimisega</li>
                  <li>Kasutajarollid, õigused ja ligipääsu kontroll</li>
                  <li>Andmete import Excelist, vormidest või olemasolevatest süsteemidest</li>
                  <li>Ekspordid, aruanded ja juhtimisvaated</li>
                  <li>Muudatuste ajalugu ja korrastatud andmestruktuur</li>
                  <li>Automaatsed staatused, sildid ja määramised</li>
                  <li>API-integratsioonid ettevõtte teiste tööriistadega</li>
                  <li>Vundament CRM-i, SaaS-i, AI ja automatiseerimise jaoks</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail-cta">
        <div className="service-detail-cta__inner">
          <p className="service-detail-section__kicker">Järgmine samm</p>

          <h2>Soovid muuta hajutatud andmed üheks korrastatud süsteemiks?</h2>

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

export default EeServiceBazyDanych;