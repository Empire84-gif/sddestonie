import { Link } from "react-router-dom";

import heroBg from "../../assets/images/aidivider.png";
import aiServices from "../../assets/images/aiservices.png";

function EeServiceKomunikacjaZKlientami() {
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
          <p className="service-detail-section__kicker">Kliendisuhtlus</p>

          <h2>
            Süsteemid, mis korrastavad kliendisuhtluse ja seovad sõnumid ettevõtte
            protsessiga.
          </h2>

          <p className="service-detail-section__lead">
            Loome lahendusi, mis aitavad ettevõtetel hallata kliendisuhtlust palju
            korrastatumalt kui tavaline e-postkast. Sõnumid, päringud, vormid, märkmed
            ja suhtlusajalugu võivad liikuda ühte süsteemi, mis on seotud kliendi, projekti
            või konkreetse juhtumiga.
          </p>

          <p className="service-detail-section__lead">
            Eesmärk ei ole inimest asendada, vaid eemaldada kaos: kes vastas, milline on
            juhtumi staatus, mida klient vajab, millised dokumendid on saadetud ja mis
            peaks järgmisena toimuma.
          </p>

          <div className="service-detail-content">
            <div className="service-detail-content__text">
              <h3>Miks tavalisest e-postkastist enam ei piisa?</h3>

              <p>
                Kui ettevõte teenindab paljusid kliente, hajub suhtlus kiiresti e-kirjade,
                vormide, telefonikõnede, märkmete ja töötajate sõnumite vahel. Selle tulemusel
                on raske näha kogu juhtumi ajalugu, määrata vastutust või aru saada, millised
                päringud ootavad endiselt vastust.
              </p>

              <p>
                Eritellimusel loodud suhtlussüsteem võib korrastada sõnumeid klientide,
                projektide, staatuste ja prioriteetide järgi. Iga sõnum võib olla seotud
                konkreetse juhtumiga ning meeskond näeb, mis on juba tehtud ja mis vajab
                reageerimist.
              </p>

              <p>
                Selline süsteem võib töötada koos CRM-i, veebivormide, PDF-dokumentide,
                juhtpaneelide ja automatiseeritud töövoogudega. Kliendi sõnum võib kohe
                luua päringu, uuendada staatust, määrata ülesande, saata kinnituse või
                käivitada järgmise protsessi.
              </p>

              <p>
                Suhtlust saab toetada ka AI — näiteks kliendiajaloo kokkuvõtte, päringu
                klassifitseerimise, vastuse mustandi ettevalmistamise või teadmistebaasist
                info otsimisega. Kõige olulisem on aga see, et AI töötaks konkreetse protsessi
                kontekstis, mitte eraldiseisva chatbot’ina.
              </p>

              <div className="service-detail-list-block">
                <h3>Mida võib kliendisuhtluse süsteem sisaldada?</h3>

                <ul>
                  <li>Kliendi või juhtumiga seotud suhtlusajalugu</li>
                  <li>Päringute, staatuste ja prioriteetide süsteem</li>
                  <li>Sõnumite määramine töötajatele või osakondadele</li>
                  <li>Automaatsed kinnitused ja e-posti teavitused</li>
                  <li>Integratsioon veebivormide ja CRM-iga</li>
                  <li>Sisemised märkmed ja tegevuste ajaloo nähtavus</li>
                  <li>Vastusemallid ja korrastatud teenindusworkflow</li>
                  <li>Juhtpaneelid päringute arvu ja reageerimisaja jälgimiseks</li>
                  <li>AI, mis toetab sõnumite analüüsi ja vastuste ettevalmistamist</li>
                  <li>Suhtluse ühendamine dokumentide, ülesannete ja aruannetega</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail-cta">
        <div className="service-detail-cta__inner">
          <p className="service-detail-section__kicker">Järgmine samm</p>

          <h2>Soovid korrastada kliendisuhtluse ühte süsteemi?</h2>

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

export default EeServiceKomunikacjaZKlientami;