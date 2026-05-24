import { useEffect } from "react";
import { Link } from "react-router-dom";

import photo01 from "../../assets/images/photo01.png";
import photo02 from "../../assets/images/photo02.png";
import photo03 from "../../assets/images/photo03.png";
import photo04 from "../../assets/images/photo04.png";
import photo05 from "../../assets/images/photo05.png";
import photo06 from "../../assets/images/photo06.png";
import photo07 from "../../assets/images/photo07.png";
import photo08 from "../../assets/images/photo08.png";
import photo09 from "../../assets/images/photo09.png";
import photo10 from "../../assets/images/photo10.png";
import photo11 from "../../assets/images/photo11.png";
import photo12 from "../../assets/images/photo12.png";
import photo13 from "../../assets/images/photo13.png";
import photo14 from "../../assets/images/photo14.png";

const services = [
  [
    "01",
    "bi-arrow-repeat",
    "Automatiseerimine",
    "Ülesannete ja protsesside automatiseerimine",
    "Automatiseerime korduvaid tegevusi, mis võtavad meeskonnalt aega: andmete ümberkirjutamine, sõnumite saatmine, dokumentide loomine, meeldetuletused, staatused, vormide käsitlemine ja info liikumine.",
    "ulesannete-automatiseerimine",
    photo01,
  ],
  [
    "02",
    "bi-stars",
    "AI töövoog",
    "AI-integratsiooniga süsteemid",
    "Rakendame AI-d ettevõtte tegeliku töövoo osana: dokumentide analüüs, päringute kokkuvõtted, puuduvate andmete tuvastamine, päringute klassifitseerimine ja vastusemustandite koostamine kinnitamiseks.",
    "ai-susteemid",
    photo02,
  ],
  [
    "03",
    "bi-people",
    "CRM",
    "Kohandatud CRM-süsteemid",
    "Loome ettevõtte vajadustele kohandatud CRM-süsteeme: kliendibaas, kontaktiajalugu, märkmed, ülesanded, staatused, dokumendid, järeltegevused, maksed, projektid ja adminipaneelid.",
    "crm-susteemid",
    photo03,
  ],
  [
    "04",
    "bi-window-stack",
    "SaaS",
    "Veebirakendused ja SaaS-platvormid",
    "Ehitame brauseris töötavaid rakendusi: kliendiportaale, adminipaneele, päringusüsteeme, operatiivseid tööriistu, sisselogimisega portaale, dashboarde ja terviklikke SaaS-tooteid.",
    "saas-rakendused",
    photo04,
  ],
  [
    "05",
    "bi-file-earmark-plus",
    "PDF / Dokumendid",
    "Dokumendigeneraatorid",
    "Loome tööriistu, mis genereerivad lepinguid, pakkumisi, arveid, raporteid, CV-sid, PDF-vorme ja ettevõtte dokumente vormi, CRM-i või andmebaasi andmete põhjal.",
    "dokumendigeneraatorid",
    photo05,
  ],
  [
    "06",
    "bi-layout-text-window",
    "Vormid",
    "Andmete kogumise süsteemid",
    "Projekteerime veebivorme, samm-sammulisi vorme ja päringusüsteeme, mis koguvad andmeid, valideerivad infot, salvestavad kirjed andmebaasi ja käivitavad automaatseid tegevusi.",
    "andmete-kogumise-susteemid",
    photo06,
  ],
  [
    "07",
    "bi-envelope-check",
    "Suhtlus",
    "Kliendisuhtlus ja klienditeenindus",
    "Tõhustame suhtlust klientidega: automaatsed sõnumid, päringute suunamine, vastusemallid, integratsioonid e-posti, vormide, CRM-i ja meeskonnateavitustega.",
    "kliendisuhtlus",
    photo07,
  ],
  [
    "08",
    "bi-person-lines-fill",
    "AI assistent",
    "AI Lead Assistant",
    "Loome assistente, mis aitavad muuta sõnumid ja vormid korrastatud müügivihjeteks, ülesanneteks, märkmeteks, prioriteetideks ja töötajale soovitatud järgmisteks sammudeks.",
    "ai-lead-assistant",
    photo08,
  ],
  [
    "09",
    "bi-chat-dots",
    "Chatbotid",
    "Chatbotid ja reeglipõhised assistendid",
    "Ehitame prognoositavaid chatbote ja AI-ta assistente, mis põhinevad stsenaariumidel, valikutel, nuppudel ja vestlusvormidel ning juhivad klienti samm-sammult.",
    "chatbotid-ja-assistendid",
    photo09,
  ],
  [
    "10",
    "bi-database",
    "Andmed",
    "Andmebaasid ja migratsioonid",
    "Projekteerime andmebaaside struktuure, migreerime andmeid Excelist ja CSV-failidest, korrastame kirjeid, vähendame duplikaate ning loome aluse edasiseks automatiseerimiseks.",
    "andmebaasid-ja-migratsioonid",
    photo10,
  ],
  [
    "11",
    "bi-bar-chart-line",
    "Juhtpaneelid",
    "Aruanded ja juhtpaneelid",
    "Loome statistika-, aruandlus- ja juhtimisvaateid, mis näitavad olulisemaid andmeid ilma, et infot peaks käsitsi mitmest failist ja sõnumist kokku panema.",
    "aruanded-ja-juhtpaneelid",
    photo11,
  ],
  [
    "12",
    "bi-search",
    "Seire",
    "Web scraping ja andmeseire",
    "Kogume ja jälgime automaatselt internetist andmeid: hindu, pakkumisi, saadavuse muutusi, turuinfot, toodete nimekirju ja muid ärilisteks otsusteks vajalikke andmeid.",
    "web-scraping-ja-andmeseire",
    photo12,
  ],
  [
    "13",
    "bi-folder2-open",
    "Dokumendihaldus",
    "Dokumentatsiooni haldamine",
    "Ehitame süsteeme ettevõtte dokumentide hoidmiseks, otsimiseks, kategoriseerimiseks ja kontrollimiseks koos kasutajaõiguste, muudatuste ajaloo ning seosega klientide või projektidega.",
    "dokumendihaldus",
    photo13,
  ],
  [
    "14",
    "bi-lightbulb",
    "Digitaliseerimine",
    "Nõustamine ja protsesside digitaliseerimine",
    "Aitame analüüsida ettevõtte töökorraldust, tuvastada automatiseeritavad protsessid ja planeerida digitaalsete tööriistade juurutamist etapiviisiliselt — lihtsast MVP-st kuni tervikliku süsteemini.",
    "digitaliseerimise-noustamine",
    photo14,
  ],
];

function EeServicesListSection() {
  const basePath = "/ee/teenused";

  useEffect(() => {
    document.body.classList.add("animations-ready");

    const rows = document.querySelectorAll(".service-row");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.style.setProperty("--reveal-delay", `${index * 60}ms`);
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    rows.forEach((row) => observer.observe(row));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="services-section">
      <div className="container">
        <div className="services-intro">
          <p className="section-kicker">Teenuste ulatus</p>

          <h2>
            Meie teenused on mõeldud ettevõtetele, kes soovivad rakendada AI-d
            igapäevases töövoos või muuta tõhusamaks tegevusi, mis võtavad
            täna liiga palju aega.
          </h2>

          <p>
            Me ei kasuta valmis šabloone. Iga projekti loome algusest peale —
            nii-öelda tühjalt lehelt — kohandades süsteemi teie ettevõtte
            tööviisi, andmete, dokumentide ja protsessidega. Te saate
            pühendatud premium-lahenduse, mis on ehitatud konkreetsete
            organisatsiooni vajaduste jaoks ning mida saab ettevõtte kasvades
            laiendada uute moodulite, integratsioonide, automatiseerimiste ja
            AI-funktsioonidega.
          </p>
        </div>

        <div className="services-list">
          {services.map(
            ([number, icon, label, title, text, slug, photo], index) => (
              <article
                className={`service-row ${
                  index % 2 === 0 ? "from-left" : "from-right"
                }`}
                key={number}
              >
                <div className="service-number">{number}</div>

                <div className="service-content">
                  <p className="service-label">
                    <i className={`bi ${icon}`} aria-hidden="true" />
                    {label}
                    <span className="service-mobile-number">{number}</span>
                  </p>

                  <h2 className="service-title">{title}</h2>
                  <p className="service-text">{text}</p>
                </div>

                <Link to={`${basePath}/${slug}`} className="service-action">
                  Loe lähemalt
                  <i className="bi bi-arrow-right" aria-hidden="true" />
                </Link>

                <div className="service-photo" aria-hidden="true">
                  <img src={photo} alt="" loading="lazy" />
                </div>
              </article>
            )
          )}
        </div>

        <div className="services-bottom-action">
          <Link
            to="/ee"
            state={{ scrollTo: "kontakt" }}
            className="services-bottom-action__button"
          >
            Kirjuta meile
          </Link>

          <Link
            to="/ee"
            state={{ scrollTo: "problems" }}
            className="services-bottom-action__button services-bottom-action__button--light"
          >
            Näited juurutustest
          </Link>
        </div>
      </div>
    </section>
  );
}

export default EeServicesListSection;