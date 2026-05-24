import { Link } from "react-router-dom";

import heroBg from "../../assets/images/aidivider.png";
import aiServices from "../../assets/images/aiservices.png";

function EeServiceGeneratoryDokumentow() {
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
          <p className="service-detail-section__kicker">Dokumendigeneraatorid</p>

          <h2>
            Süsteemid, mis aitavad dokumente koostada kiiremini, ühtsemalt ja ilma andmete
            käsitsi ümberkirjutamiseta.
          </h2>

          <p className="service-detail-section__lead">
            Loome eritellimusel rakendusi ja mooduleid ettevõtte dokumentide haldamiseks:
            lepingutele, vormidele, pakkumistele, aruannetele, protokollidele,
            päringukaartidele, haldusdokumentidele ja teistele failidele, mille koostamine
            võtab meeskonnalt iga päev palju aega.
          </p>

          <p className="service-detail-section__lead">
            See ei tähenda lihtsaid generaatoreid, mis loovad dokumente „nullist”.
            Eesmärk on süsteem, mis juhib töötaja läbi konkreetse protsessi, võtab andmed
            automaatselt, vähendab vigade arvu ja võimaldab valmis dokumendi koostada palju
            kiiremini kui käsitsi tööga.
          </p>

          <div className="service-detail-content">
            <div className="service-detail-content__text">
              <h3>Kuidas selline süsteem töötab?</h3>

              <p>
                Paljudes ettevõtetes nõuab ühe dokumendi koostamine samade andmete
                ümberkirjutamist e-kirja, Exceli, CRM-i, PDF-i ja vormide vahel. Töötaja peab
                käsitsi kopeerima kliendiandmeid, kontrollima korrektsust, jälgima dokumendi
                versioone ja meeles pidama kõiki kohustuslikke välju.
              </p>

              <p>
                Eritellimusel loodud süsteem lihtsustab seda protsessi. Kasutaja täidab andmed
                korrastatud vormis või valib kliendi andmebaasist ning süsteem koostab ise
                vajaliku dokumendi kokkulepitud malli järgi. Andmeid saab võtta automaatselt
                CRM-ist, veebivormidest, varasematest päringutest või teistest süsteemi
                moodulitest.
              </p>

              <p>
                Nii vähendab ettevõte käsitsi töö mahtu, maandab vigade riski ja kiirendab
                nende dokumentide ettevalmistamist, mis varem võtsid kümneid minuteid.
                Praktikas säästavad sellised lahendused meeskonnale sageli kümneid tunde
                kuus.
              </p>

              <p>
                Seda tüüpi süsteem võib toimida eraldi rakendusena või olla osa suuremast
                CRM-ist või SaaS-platvormist. Samuti võib see toetada allkirju, staatusi,
                kinnitusringe, automaatseid e-posti saatmisi, arhiveerimist, juhtpaneele
                ja integratsioone ettevõtte teiste tööriistadega.
              </p>

              <div className="service-detail-list-block">
                <h3>Dokumendigeneraatorite võimalikud kasutusviisid</h3>

                <ul>
                  <li>Klientidele lepingute automaatne ettevalmistamine</li>
                  <li>Müügipakkumiste ja hinnapakkumiste loomine</li>
                  <li>Aruannete, kokkuvõtete ja dokumentatsiooni koostamine</li>
                  <li>Vormid, mis juhivad töötajat samm-sammult läbi protsessi</li>
                  <li>Dokumentide täitmine CRM-i või vormide andmetega</li>
                  <li>PDF-ide ja dokumendinumbrite automaatne genereerimine</li>
                  <li>Dokumentide staatused ja kinnitamise workflow</li>
                  <li>Dokumentatsiooni arhiveerimine ja muudatuste ajalugu</li>
                  <li>Integratsioon e-posti, kliendibaasi ja API-dega</li>
                  <li>Päringute ja haldusdokumentide käsitlemise süsteemid</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail-cta">
        <div className="service-detail-cta__inner">
          <p className="service-detail-section__kicker">Järgmine samm</p>

          <h2>
            Soovid vähendada aega, mis kulub dokumentide käsitsi ettevalmistamisele?
          </h2>

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

export default EeServiceGeneratoryDokumentow;