import { Link } from "react-router-dom";

import heroBg from "../../assets/images/aidivider.png";
import aiServices from "../../assets/images/aiservices.png";

function EeServiceAutomatyzacjaZadan() {
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
          <p className="service-detail-section__kicker">Protsesside automatiseerimine</p>

          <h2>
            Süsteemid, mis võtavad üle korduva töö ja korrastavad ettevõtte igapäevase
            workflow.
          </h2>

          <p className="service-detail-section__lead">
            Paljudes ettevõtetes kaob suur osa ajast endiselt andmete käsitsi ümberkirjutamisele,
            staatuste jälgimisele, sõnumite saatmisele, dokumentide koostamisele, tabelite
            uuendamisele ning info edastamisele töötajate ja tööriistade vahel. Aja jooksul
            hakkab protsess eksisteerima rohkem „inimeste peas” kui korrastatud süsteemis.
          </p>

          <p className="service-detail-section__lead">
            Protsesside automatiseerimine ei tähenda ainult AI lisamist või ühe vormi
            loomist. Eesmärk on ehitada töökeskkond, kus andmed liiguvad automaatselt läbi
            ettevõtte etappide: kliendivormist CRM-i, dokumentidesse, suhtlusse, staatustesse,
            ülesannetesse ning lõpuks aruannetesse ja juhtpaneelidesse.
          </p>

          <div className="service-detail-content">
            <div className="service-detail-content__text">
              <h3>Mida saab automatiseerida?</h3>

              <p>
                Automatiseerimise ulatus sõltub ettevõtte töökorraldusest. Praktikas
                automatiseerime sageli dokumentide liikumist, veebivorme, müügivihjete
                käsitlemist, klientide määramist, pakkumiste ja PDF-lepingute loomist,
                sõnumite saatmist, meeldetuletusi, aruandlust, projektistaatusi,
                müügiprotsesse, klientide onboarding’ut, päringute ringlust ja infovahetust
                süsteemide vahel.
              </p>

              <p>
                Paljud ettevõtted kasutavad korraga Excelit, e-posti, suhtlusrakendusi,
                PDF-dokumente ja mitut erinevat SaaS-tööriista, mis omavahel ei suhtle.
                Tulemuseks on andmete duplikaadid, organisatsiooniline kaos ja suur hulk
                käsitsi tööd. Eritellimusel süsteem aitab need osad ühendada üheks
                korrastatud töövooks.
              </p>

              <p>
                Automatiseerimine võib hõlmata nii lihtsaid haldusprotsesse kui ka
                arenenumaid keskkondi: CRM-i, SaaS-süsteeme, dashboard’e, andmeanalüütikat,
                dokumendigeneraatoreid, päringute ringlust, e-posti süsteeme,
                API-integratsioone, andmeseiret või AI-toega mooduleid.
              </p>
            </div>

            <div className="service-detail-list-block">
              <h3>Kõige sagedamini automatiseeritavad töövaldkonnad</h3>

              <ul>
                <li>Pakkumiste, lepingute ja PDF-dokumentide automaatne loomine</li>
                <li>Veebivormide ja müügivihjete käsitlemine</li>
                <li>CRM, mis sobib ettevõtte tegeliku protsessiga</li>
                <li>Projektistaatused, ülesanded ja meeskonna töövoog</li>
                <li>Dashboard’id, juhtimisaruanded ja andmeanalüüs</li>
                <li>API-integratsioonid kasutatavate tööriistade vahel</li>
                <li>Automaatsed sõnumid, meeldetuletused ja teavitused</li>
                <li>Dokumentide, päringute ja info liikumine ettevõttes</li>
                <li>AI, mis toetab andmete, dokumentide ja suhtluse analüüsi</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail-cta">
        <div className="service-detail-cta__inner">
          <p className="service-detail-section__kicker">Järgmine samm</p>

          <h2>Soovid teada, mida sinu ettevõttes täpselt automatiseerida saab?</h2>

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

export default EeServiceAutomatyzacjaZadan;