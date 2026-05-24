import { Link } from "react-router-dom";

import heroBg from "../../assets/images/aidivider.png";
import aiServices from "../../assets/images/aiservices.png";

function EeServiceDoradztwoDigitalizacja() {
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
          <p className="service-detail-section__kicker">Nõustamine ja digitaliseerimine</p>

          <h2>
            Aitame muuta igapäevase operatiivse kaose konkreetseks süsteemiplaaniks.
          </h2>

          <p className="service-detail-section__lead">
            Nõustamine ja protsesside digitaliseerimine on etapp, kus analüüsime, kuidas
            ettevõte täna töötab: kus andmeid sisestatakse käsitsi, millised ülesanded
            korduvad, kus tekivad vead ja milliseid valdkondi saab tehnoloogia abil
            korrastada.
          </p>

          <p className="service-detail-section__lead">
            See sobib ettevõtetele, kes teavad, et kaotavad aega käsitsi töö peale, kuid
            kellel ei ole veel valmis ideed CRM-i, SaaS-i, automatiseerimise, vormi,
            dashboard’i või AI-süsteemi jaoks.
          </p>

          <div className="service-detail-content">
            <div className="service-detail-content__text">
              <h3>Probleemi kirjeldusest konkreetse lahenduse kaardini</h3>

              <p>
                Sageli ei ole suurim probleem tööriistade puudumine, vaid selge ülevaate
                puudumine protsessist. Ettevõte kasutab e-kirju, tabeleid, faile,
                suhtlusrakendusi ja mitut erinevat tööriista, kuid keegi ei näe kogu
                töövoogu algusest lõpuni.
              </p>

              <p>
                Digitaliseerimise käigus aitame tuvastada, milliseid tegevusi tasub
                automatiseerida, millised andmed peaksid liikuma ühte andmebaasi, milliseid
                dokumente saab luua automaatselt ja kus süsteem saab asendada korduvat
                käsitsi tööd.
              </p>

              <p>
                Tulemuseks ei ole üldine presentatsioon, vaid praktiline rakendamise suund:
                mida ehitada esimesena, millistel moodulitel on mõtet, kuidas riski vähendada,
                millest alustada MVP-ga ja kuidas süsteemi järk-järgult edasi arendada.
              </p>

              <p>
                Nii ei investeeri ettevõte juhuslikesse tööriistadesse, vaid saab lahenduse
                plaani, mis on kohandatud tema enda protsessi, meeskonna, andmete ja
                äriliste eesmärkide järgi.
              </p>

              <div className="service-detail-list-block">
                <h3>Mida hõlmab nõustamine ja protsessianalüüs?</h3>

                <ul>
                  <li>Ettevõtte praeguse tööviisi kaardistamine</li>
                  <li>Käsitsi tehtavate ja korduvate ülesannete tuvastamine</li>
                  <li>Andmete, dokumentide ja suhtluse liikumise kaardistamine</li>
                  <li>Automatiseerimise või lihtsustamise võimaluste leidmine</li>
                  <li>Õige süsteemitüübi valik: CRM, SaaS, paneel, vorm või AI</li>
                  <li>MVP ja etapiviisilise rakendamise plaan</li>
                  <li>Praegu kasutatavate tööriistade analüüs</li>
                  <li>Soovitused API-integratsioonide ja andmebaasi osas</li>
                  <li>Prioriteetide, moodulite ja tööjärjekorra määramine</li>
                  <li>Suuna loomine eritellimusel ettevõttesüsteemi jaoks</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail-cta">
        <div className="service-detail-cta__inner">
          <p className="service-detail-section__kicker">Järgmine samm</p>

          <h2>Sa ei tea veel, milline süsteem oleks sinu ettevõtte jaoks parim?</h2>

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

export default EeServiceDoradztwoDigitalizacja;