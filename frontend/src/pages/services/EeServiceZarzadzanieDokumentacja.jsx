import { Link } from "react-router-dom";

import heroBg from "../../assets/images/aidivider.png";
import aiServices from "../../assets/images/aiservices.png";

function EeServiceZarzadzanieDokumentacja() {
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
          <p className="service-detail-section__kicker">Dokumendihaldus</p>

          <h2>
            Süsteemid, mis korrastavad ettevõtte dokumendid, staatused, versioonid ja
            infovahetuse.
          </h2>

          <p className="service-detail-section__lead">
            Loome eritellimusel lahendusi ettevõtte dokumentatsiooni haldamiseks:
            lepingutele, pakkumistele, aruannetele, vormidele, manustele, protokollidele,
            kliendidokumentidele ning sisemistele protsessifailidele.
          </p>

          <p className="service-detail-section__lead">
            Eesmärk on muuta töö dokumentidega selgeks ja juhitavaks, et meeskond teaks,
            kus asub õige failiversioon, milline on juhtumi staatus, kes vastutab järgmise
            sammu eest ja millised dokumendid vajavad tegevust.
          </p>

          <div className="service-detail-content">
            <div className="service-detail-content__text">
              <h3>Miks kaustadest ja e-kirjadest enam ei piisa?</h3>

              <p>
                Paljudes ettevõtetes on dokumendid laiali e-postkastides, arvutikaustades,
                jagatud ketastel, PDF-manustes, tabelites ja töötajate sõnumites. Aja jooksul
                muutub keeruliseks aru saada, milline versioon on kehtiv, kes selle kinnitas
                ja mis peaks järgmisena toimuma.
              </p>

              <p>
                Eritellimusel loodud dokumendisüsteem võimaldab koondada failid, andmed,
                staatused, muudatuste ajaloo ja seotud tegevused ühte kohta. Dokument võib
                olla seotud kliendi, projekti, päringu, töötaja, tähtaja või konkreetse
                protsessietapiga.
              </p>

              <p>
                Süsteem võib toetada otsingut, filtreerimist, versioonihaldust,
                kinnitusringe, manuseid, kommentaare, meeldetuletusi, automaatset PDF-ide
                loomist ning tegevuste ajalugu. Nii ei ole dokumendid enam juhuslikud failid,
                vaid osa korrastatud töövoost.
              </p>

              <p>
                Selline lahendus võib toimida eraldi dokumendipaneelina või olla osa
                suuremast CRM-ist, SaaS-süsteemist või ettevõtte operatiivsest platvormist.
                Seda saab ühendada vormide, kliendibaasi, e-posti, juhtpaneelide ja
                automatiseeritud protsessidega.
              </p>

              <div className="service-detail-list-block">
                <h3>Mida võib dokumendihaldussüsteem sisaldada?</h3>

                <ul>
                  <li>Keskne dokumentide, failide ja manuste baas</li>
                  <li>Klientide, projektide või juhtumitega seotud dokumendid</li>
                  <li>Dokumentide staatused, kinnitused ja ringluse etapid</li>
                  <li>Muudatuste ajalugu, failiversioonid ja tegevuslogi</li>
                  <li>Dokumentide otsing, filtreerimine ja sildistamine</li>
                  <li>PDF-ide automaatne loomine ettevõtte mallide järgi</li>
                  <li>Meeldetuletused, tähtajad ja e-posti teavitused</li>
                  <li>Kasutajarollid ja ligipääsu kontroll dokumentidele</li>
                  <li>Integratsioon CRM-i, vormide, e-posti ja juhtpaneelidega</li>
                  <li>Võimalus laiendada süsteemi AI-põhise dokumendianalüüsiga</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail-cta">
        <div className="service-detail-cta__inner">
          <p className="service-detail-section__kicker">Järgmine samm</p>

          <h2>Soovid korrastada ettevõtte dokumendid ja infoliikumise?</h2>

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

export default EeServiceZarzadzanieDokumentacja;