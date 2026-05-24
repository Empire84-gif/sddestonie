import process01 from "../../assets/images/proces01.png";
import process02 from "../../assets/images/proces02.png";
import process03 from "../../assets/images/proces03.png";
import process04 from "../../assets/images/proces04.png";

const processCards = [
  {
    image: process01,
    label: "Tuvastamine",
    steps: [
      {
        number: "01",
        title: "Ettevõtte protsessi ja probleemi mõistmine",
        text: "Analüüsime praegust töökorraldust, korduvaid tegevusi, käsitsi andmete ümberkirjutamist, dokumente, suhtlust ning kohti, kus protsess kaotab sujuvuse.",
      },
      {
        number: "02",
        title: "Lahenduse suuna ettepanek",
        text: "Määrame, millist tüüpi süsteem sobib probleemiga kõige paremini: CRM, adminipaneel, veebivorm, dokumendigeneraator, API-integratsioon, automatiseerimine või AI-moodul.",
      },
    ],
  },
  {
    image: process02,
    label: "Ulatus",
    steps: [
      {
        number: "03",
        title: "Esimese versiooni ulatuse määramine",
        text: "Valime alustuseks kõige olulisemad funktsioonid ning määratleme andmed, kasutajarollid, dokumendid, staatused ja süsteemi põhilise töövoo.",
      },
      {
        number: "04",
        title: "Rakenduse struktuuri kavandamine",
        text: "Valmistame ette vaadete, vormide, andmebaasi, moodulite, õiguste ja süsteemiloogika struktuuri enne tegeliku arendustöö alustamist.",
      },
    ],
  },
  {
    image: process03,
    label: "Arendus",
    steps: [
      {
        number: "05",
        title: "Süsteemi ehitamine algusest peale",
        text: "Loome frontendi, backendi, andmebaasi, adminipaneeli, automatiseerimised, PDF-generaatorid, e-posti/API-integratsioonid ja AI-elemendid, kui need kuuluvad projekti ulatusse.",
      },
      {
        number: "06",
        title: "Testimine reaalsete stsenaariumidega",
        text: "Kontrollime süsteemi toimimist igapäevase töö näidetel: klient, vorm, dokument, sõnum, aruanne, ülesanne, makse või muu hallatav protsess.",
      },
    ],
  },
  {
    image: process04,
    label: "Juurutamine",
    steps: [
      {
        number: "07",
        title: "Parandused ja käivitamine",
        text: "Pärast testimist viime sisse vajalikud parandused, valmistame ette tootmiskeskkonna ja käivitame süsteemi vastavalt projekti kokkulepitud ulatusele.",
      },
      {
        number: "08",
        title: "Süsteemi edasine arendamine",
        text: "Pärast esimest versiooni saab süsteemi laiendada uute moodulitega: dashboardid, CRM, e-post, aruanded, maksed, PDF-dokumendid, integratsioonid või AI-assistent.",
      },
    ],
  },
];

function EeImplementationProcessSection() {
  return (
    <section className="implementation-process-section">
      <div className="implementation-process-section__inner container">
        <div className="implementation-process-section__head">
          <p>Juurutusprotsess</p>

          <h2>Ettevõtte probleemist toimiva süsteemini.</h2>

          <p>
            Alustame protsessi, andmete ja ettevõtte tööviisi analüüsist.
            <br />
            Alles seejärel kavandame rakenduse struktuuri, ehitame esimese
            versiooni, testime seda reaalsete stsenaariumidega ja arendame edasi
            järgmiste moodulitega.
          </p>
        </div>

        <div className="implementation-process-grid">
          {processCards.map((card) => (
            <article className="implementation-process-card" key={card.label}>
              <img src={card.image} alt="" loading="lazy" />

              <div className="implementation-process-card__overlay">
                <span className="implementation-process-card__label">
                  {card.label}
                </span>

                <div className="implementation-process-card__steps">
                  {card.steps.map((step) => (
                    <div
                      className="implementation-process-step"
                      key={step.number}
                    >
                      <span>{step.number}</span>

                      <div>
                        <h3>{step.title}</h3>
                        <p>{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EeImplementationProcessSection;