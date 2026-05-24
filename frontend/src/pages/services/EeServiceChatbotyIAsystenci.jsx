import { Link } from "react-router-dom";

import heroBg from "../../assets/images/aidivider.png";
import aiServices from "../../assets/images/aiservices.png";

function EeServiceChatbotyIAsystenci() {
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
          <p className="service-detail-section__kicker">Chatbotid ja assistendid</p>

          <h2>
            Assistendid, mis aitavad klientidel ja meeskonnal kiiremini tegutseda, kuid
            alati konkreetse protsessi raames.
          </h2>

          <p className="service-detail-section__lead">
            Loome chatbot’e ja assistente, mis ei ole lihtsalt dekoratiivne aknake veebilehel.
            Projekteerime neid osana suuremast süsteemist: ühendatuna vormide, CRM-i,
            teadmistebaasi, dokumentide, staatuste, päringute või klienditeeninduse
            protsessiga.
          </p>

          <p className="service-detail-section__lead">
            Assistent võib vastata küsimustele, koguda andmeid, kvalifitseerida päringuid,
            edastada infot meeskonnale, aidata klienditeeninduses või toetada töötajaid
            vajaliku info kiirel leidmisel.
          </p>

          <div className="service-detail-content">
            <div className="service-detail-content__text">
              <h3>Chatbot kui protsessi tööriist, mitte lihtsalt vestlus</h3>

              <p>
                Paljude chatbot’ide suurim probleem on see, et need töötavad ülejäänud
                ettevõttest eraldi. Need vastavad üldiselt, ei salvesta andmeid õigesse
                kohta, ei loo päringuid, ei uuenda CRM-i ega aita meeskonda kliendi edasises
                teeninduses.
              </p>

              <p>
                Hästi projekteeritud assistent peaks olema osa workflow’st. See võib koguda
                kliendilt andmeid, esitada õigeid küsimusi, salvestada vastused süsteemi,
                määrata juhtumi kategooriasse, luua päringu, saata kinnituse ja edastada
                meeskonnale korrastatud kokkuvõtte.
              </p>

              <p>
                Sõltuvalt ettevõtte vajadustest võib assistent olla lihtne stsenaariumitel
                põhinev chatbot, arenenum AI-moodul või sisemine tööriist töötajatele, mis
                aitab kasutada ettevõtte teadmisi, dokumente ja kliendiajalugu.
              </p>

              <p>
                Nii ei ole chatbot enam turunduslik lisand, vaid praktiline tööriist info
                kogumiseks, päringute käsitlemiseks, klienditoeks ja esimeste kontaktietappide
                automatiseerimiseks.
              </p>

              <div className="service-detail-list-block">
                <h3>Mida võib chatbot või assistent teha?</h3>

                <ul>
                  <li>Vastata klientide korduma kippuvatele küsimustele</li>
                  <li>Koguda kontaktandmeid ja päringu detaile</li>
                  <li>Kvalifitseerida müügivihjeid ja edastada need CRM-i</li>
                  <li>Luua päringuid, staatusi ja ülesandeid meeskonnale</li>
                  <li>Saata automaatseid sõnumikinnitusi</li>
                  <li>Toetada kliente teenuse või järgmise sammu valikul</li>
                  <li>Aidata töötajatel otsida infot teadmistebaasist</li>
                  <li>Teha kokkuvõtteid vestlustest, dokumentidest või kliendiajaloost</li>
                  <li>Töötada sisemise assistendina meeskonna jaoks</li>
                  <li>Siduda veebileht, vormid, CRM ja suhtlus üheks protsessiks</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail-cta">
        <div className="service-detail-cta__inner">
          <p className="service-detail-section__kicker">Järgmine samm</p>

          <h2>Soovid luua assistendi, mis päriselt toetab ettevõtte protsessi?</h2>

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

export default EeServiceChatbotyIAsystenci;