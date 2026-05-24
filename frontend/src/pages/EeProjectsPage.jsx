import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";

import heroBg from "../assets/images/aidivider.png";
import aiServices from "../assets/images/aiservices.png";
import automatedCrmPreview from "../assets/images/projects-automated-crm.png";
import internalCrmPreview from "../assets/images/projects-internal-crm.png";
import crmWorkflowPreview from "../assets/images/projects-crm-workflow.png";
import alifioPreview from "../assets/images/projects-alifio-booking.png";
import alifioAssistantPreview from "../assets/images/projects-alifio-assistant.png";

const projects = [
  {
    kicker: "Teostuse näide",
    title: "Automaatne CRM ja kliendihaldussüsteem",
    label: "Süsteemi paneel",
    image: automatedCrmPreview,
    intro: [
      "See süsteem loodi Poola kliendile täielikult automatiseeritud keskkonnana klientide, tellimuste, suhtluse ning veebivormidest ja teistest sisendallikatest tulevate andmete töötlemiseks.",
      "Platvorm ühendab CRM-i, operatsioonisüsteemi, töövoogude automatiseerimise, e-posti suhtluse, maksete halduse ja dokumentide genereerimise ühte kesksesse töökeskkonda.",
      "Süsteemi peamine eesmärk on vähendada käsitsi tehtavat tööd nii palju kui võimalik ning võtta automaatselt üle protsessid, mida paljudes ettevõtetes tehakse endiselt käsitsi — alates vormiandmete ümberkirjutamisest, kliendikaartide ja tellimusnumbrite loomisest kuni dokumentide, meeldetuletuste ja e-kirjade saatmiseni.",
    ],
    beforeImage: [
      {
        title: "Automaatne andmetöötlus",
        text: "Süsteem alustab tööd juba kliendi veebilehel oleva veebivormi etapis. Kasutajate saadetud andmed kogutakse automaatselt ja töödeldakse eelnevalt määratud ärireeglite alusel.",
        items: [
          "luua või uuendada automaatselt kliendikaarte",
          "määrata tellimuste, päringute või broneeringute numbreid",
          "määrata staatusi ja töövoo etappe",
          "genereerida operatiivseid ülesandeid",
          "käivitada automatiseerimisprotsesse",
          "luua dokumente ja kinnitusi",
          "suunata andmed õigetele osakondadele või kasutajatele",
        ],
      },
      {
        title: "Laiendatud e-posti süsteem",
        text: "Üks lahenduse võtmeelemente on arenenud e-posti suhtlussüsteem, mis on integreeritud otse platvormi loogikaga.",
        items: [
          "päringute kinnitused",
          "staatuse teavitused",
          "meeldetuletused",
          "maksete info",
          "PDF-dokumendid",
          "arved",
          "turundussõnumid",
          "operatiivne suhtlus",
        ],
      },
    ],
    afterImage: [
      {
        title: "Tegevused otse e-kirjast",
        text: "Suhtlus ei ole ainult ühesuunaline. Platvorm võimaldab teha valitud toiminguid ka otse e-kirjade kaudu.",
        items: [
          "turundusnõusolekute iseseisev tagasivõtmine",
          "valitud andmete uuendamine",
          "tegevuste kinnitamine või tagasilükkamine",
          "järgmiste protsessietappide läbimine",
          "toimingute tegemine ilma eraldi paneeli sisse logimata",
        ],
      },
      {
        title: "SMS, maksed ja finantsprotsessid",
        text: "Platvormi saab laiendada SMS-mooduli, maksete halduse ja finantsdokumentide automaatse genereerimisega.",
        items: [
          "SMS-meeldetuletused",
          "staatuse teavitused",
          "koodid või kinnitused",
          "automaatsed sõnumid kliendiprotsessi kohta",
          "arved",
          "kinnitused",
          "arveldused",
          "finantsaruanded",
        ],
      },
      {
        title: "Dokumendid, integratsioonid ja skaleeritavus",
        text: "Lahenduse suur eelis on võimalus genereerida dokumente automaatselt süsteemis juba olemasolevate andmete põhjal. Platvormi saab kohandada ettevõtte individuaalse tööprotsessi järgi ning laiendada täiendavate funktsioonide, integratsioonide ja automatiseerimistega.",
        items: [
          "CRM",
          "ERP",
          "maksesüsteemid",
          "e-posti tööriistad",
          "välised API-d",
          "juhtpaneelid",
          "aruandlusplatvormid",
          "AI-tööriistad andmeanalüüsi või suhtluse toetamiseks",
        ],
      },
      {
        title: "Andmete eksport",
        text: "Süsteemi oluline osa on ka võimalus eksportida andmeid formaatidesse, mida klient või ettevõtte operatiivne protsess vajab.",
        items: [
          "CSV",
          "Excel",
          "PDF",
          "JSON",
          "kohandatud aruanded",
          "spetsiaalsed importfailid teiste süsteemide jaoks",
        ],
      },
    ],
    result:
      "Lahenduse suurim väärtus on protsesside täielik automatiseerimine, käsitsi tehtavast tööst tekkivate vigade vähendamine ning ühe korrastatud keskkonna loomine, mis ühendab vormid, suhtluse, dokumendid, maksed ja kliendiandmed ühte süsteemi. Ettevõte saab parema kontrolli protsesside üle, kiirema klienditeeninduse ning võimaluse tegevust skaleerida ilma, et käsitsi tehtavate tööde arv meeskonnas samas mahus kasvaks.",
  },
  {
    kicker: "Ettevõtte sisemine süsteem",
    title: "Ettevõtte juhtpaneel ja sisemine CRM-süsteem",
    label: "Sisemine CRM-juhtpaneel",
    image: internalCrmPreview,
    intro: [
      "See süsteem loodi ettevõtte sisemiseks juhtimiskeskuseks, mis ühendab CRM-i, operatiivpaneeli, dokumentide süsteemi, e-posti, ülesanded, projektid ja aruandluse ühte keskkonda.",
      "Selle eesmärk on korrastada ettevõtte igapäevatööd ja vähendada vajadust kasutada korraga paljusid eraldi tööriistu.",
      "Platvorm võimaldab hallata kliente, suhtlusajalugu, dokumente, pakkumisi, arveid, makseid, ülesandeid ja projekte ühest paneelist.",
    ],
    beforeImage: [
      {
        title: "Ettevõtte operatiivkeskus",
        text: "Kõik olulisemad operatiivandmed asuvad ühes kohas, mis aitab meeskonnal kiiremini infot leida, staatusi kontrollida ja igapäevast klienditeenindust juhtida.",
        items: [
          "klientide ja kontaktide andmebaas",
          "dokumentide moodul",
          "pakkumiste ja arvete generaator",
          "maksete register",
          "projektide moodul",
          "ülesannete moodul",
        ],
      },
      {
        title: "Dokumendid ja suhtlus",
        text: "Süsteem korrastab dokumendid ja kliendisuhtluse otse ettevõtte paneelis, ilma et oleks vaja töötada paljudes hajutatud tööriistades.",
        items: [
          "pakkumised, arved, lepingud ja aruanded",
          "kliendiandmete automaatne kasutamine dokumentides",
          "sisemine e-posti süsteem",
          "kirjade sidumine klientide või projektidega",
          "staatused, arhiveerimine ja suhtlusajalugu",
        ],
      },
    ],
    afterImage: [
      {
        title: "Juhtpaneel ja aruandlus",
        text: "Juhtpaneel võimaldab jälgida ettevõtte põhiinfot ja jooksvaid operatiivseid tegevusi.",
        items: [
          "klientide arv",
          "dokumentide arv",
          "maksete staatused",
          "aktiivsed projektid",
          "meeskonna ülesanded",
          "ettevõtte järgi kohandatud analüütilised vaated",
        ],
      },
      {
        title: "Sisselogimine ja seaded",
        text: "Süsteem saab toetada kasutajakontosid, seadete paneeli ning ligipääsu kontrolli valitud moodulitele.",
        items: [
          "kasutajate sisselogimine",
          "seadete paneel",
          "rollid ja õigused",
          "andmetele ligipääsu kontroll",
          "ettevõtte moodulite seadistamine",
        ],
      },
      {
        title: "Süsteemi edasiarendus",
        text: "Platvormi saab arendada etapiviisiliselt — lihtsast CRM-ist ja dokumentidest kuni e-posti keskuse, maksete, automatiseerimiste ja AI-mooduliteni.",
        items: [
          "töövoogude automatiseerimine",
          "PDF-ide genereerimine",
          "API-integratsioonid",
          "AI-moodulid andmeanalüüsiks",
          "klienditeeninduse tugi",
          "meeskonnatöö korraldamine",
        ],
      },
    ],
    result:
      "Lahenduse suurim väärtus on andmete ja protsesside koondamine ühte kohta. Selle asemel, et hoida kliente ühes tööriistas, dokumente teises, makseid tabelites ja suhtlust e-postkastis, saab ettevõte ühe tervikliku keskkonna, mis korrastab igapäevatöö ja annab parema kontrolli operatsioonide üle.",
  },
  {
    kicker: "Kohandatud CRM",
    title: "Kohandatud CRM ja töövoogude juhtimissüsteem",
    label: "CRM-i ja töövoo juhtpaneel",
    image: crmWorkflowPreview,
    intro: [
      "See süsteem loodi kohandatud CRM-keskkonnana kliendisuhete, müügiprotsesside, suhtluse ja ettevõtte igapäevase töökorralduse juhtimiseks.",
      "Selle eesmärk ei ole ainult kliendiandmete säilitamine, vaid kogu operatiivse töövoo korrastamine ühes keskses süsteemis.",
      "Platvorm ühendab klassikalise CRM-i, operatiivpaneeli, dokumentide süsteemi ja äriprotsesside automatiseerimise tööriista funktsioonid.",
    ],
    beforeImage: [
      {
        title: "Ettevõtetele, kes tahavad töö korrastada",
        text: "Süsteem loodi ettevõtetele, kes kaotavad aega käsitsi tehtavatele tegevustele, töötavad paljudes eraldi tööriistades ja vajavad oma tööprotsessile kohandatud keskkonda.",
        items: [
          "käsitsi andmesisestuse vähendamine",
          "Exceli tabelite ja hajutatud tööriistade asendamine",
          "suhtluse ja staatuste korrastamine",
          "igapäevaste tegevuste automatiseerimine",
          "ettevõttele kohandatud oma töökeskkond",
        ],
      },
      {
        title: "Protsessi haldus leadist teostuseni",
        text: "CRM võimaldab hallata kogu protsessi alates esimesest kliendikontaktist kuni projekti või müügi teostuseni.",
        items: [
          "andmete kogumine veebivormidest",
          "e-kirjade haldus",
          "kliendikirjete automaatne loomine",
          "staatuste määramine",
          "ülesannete genereerimine",
          "meeskonna töövoo korraldamine",
        ],
      },
    ],
    afterImage: [
      {
        title: "Süsteemi moodulid",
        text: "Sisseehitatud moodulid võimaldavad ettevõttel hallata kliente, projekte, dokumente, ülesandeid ja suhtlust ühes kohas.",
        items: [
          "leadide ja klientide haldus",
          "müügitoru",
          "projektid ja ülesanded",
          "e-posti suhtlus",
          "PDF-dokumendid",
          "pakkumised, aruanded ja lepingud",
          "staatused ja teostusetapid",
          "kasutajatele määratud ülesanded",
        ],
      },
      {
        title: "Sisselogimine, kasutajad ja õigused",
        text: "Süsteemil on kasutajate ja sisselogimise moodul, tänu millele saab iga meeskonnaliige töötada oma keskkonnas sobiva ligipääsutasemega.",
        items: [
          "töötajate kontod",
          "kasutajarollid",
          "moodulite õigused",
          "klientide nähtavuse piiramine",
          "projektidele ligipääsu kontroll",
          "turvaline meeskonnatöö",
        ],
      },
      {
        title: "Edasise laiendamise võimalus",
        text: "Platvorm saab kasvada koos ettevõttega ning seda saab laiendada täiendavate integratsioonide, automatiseerimiste ja AI-moodulitega.",
        items: [
          "API-integratsioonid",
          "veebimaksed",
          "juhtpaneelid ja analüütika",
          "AI-moodulid klienditeeninduse toetamiseks",
          "automaatne vastuste genereerimine",
          "leadide klassifitseerimine",
          "töövoogude automatiseerimine",
          "ticketing-süsteem või helpdesk",
        ],
      },
    ],
    result:
      "Ettevõtte jaoks on suurim väärtus operatiivse kaose vähendamine ning andmete ja protsesside koondamine ühte kohta. Selle asemel, et liikuda e-kirjade, dokumentide, tabelite ja suhtluskanalite vahel, töötab meeskond ühes korrastatud keskkonnas, mis on kohandatud ettevõtte tegeliku töökorralduse järgi. See on konkreetse äriprotsessi ümber ehitatud süsteem, mis saab areneda koos ettevõtte ja selle vajadustega.",
  },
  {
    kicker: "SaaS-broneerimissüsteem",
    title: "Alifio veebibroneeringute platvorm",
    label: "Broneerimissüsteemi juhtpaneel",
    image: alifioPreview,
    intro: [
      "Alifio loodi kaasaegse SaaS-tüüpi veebibroneerimissüsteemina, mis on mõeldud eelkõige Poola turule ja teenusettevõtetele, kelle töö põhineb aegade broneerimisel.",
      "Platvorm on loodud salongidele, kabinettidele, teeninduspunktidele ja ettevõtetele, kes vajavad korrastatud ja täielikult automatiseeritud keskkonda broneeringute, klientide, personali ja suhtluse haldamiseks.",
      "Süsteem töötab iga kliendi jaoks eraldi kohandatud paigaldusena, tänu millele saab seda sobitada konkreetse ettevõtte töökorralduse, klienditeenindusprotsessi ja visuaalse identiteediga.",
    ],
    beforeImage: [
      {
        title: "Veebibroneering kliendi veebilehel",
        text: "Alifio integreerub otse kliendi veebilehega nupu või veebibroneeringu mooduli kaudu. Lõppkasutaja saab ise valida teenuse, aja ja töötaja.",
        items: [
          "broneerimisnupp või moodul kliendi veebilehel",
          "teenuse iseseisev valik",
          "aja ja töötaja valik",
          "protsess ilma personali käsitsi sekkumiseta",
          "iga kliendi jaoks eraldi paigaldus",
        ],
      },
      {
        title: "Automaatne kalendrihaldus",
        text: "Platvormi üks võtmeelemente on intelligentne kalendri ja saadavuse haldus. Süsteem koostab ajakava automaatselt teeninduspunkti seadistuste põhjal.",
        items: [
          "töötajate graafikud",
          "personali saadavus",
          "teenuste kestus",
          "pausid",
          "vabad päevad",
          "ajalised piirangud",
          "teeninduspunkti äriloogika seadistus",
        ],
      },
    ],
    afterImage: [
      {
        title: "E-posti ja SMS-suhtlus",
        text: "Platvormil on arenenud e-posti suhtlussüsteem ning seda saab laiendada SMS-teavituste mooduliga.",
        items: [
          "broneeringu kinnitused",
          "visiidi meeldetuletused",
          "staatuse muudatused",
          "korralduslik suhtlus",
          "turundussõnumid",
          "dokumentide ja operatiivse info saatmine",
          "SMS-teavitused aegade ja muudatuste kohta",
        ],
      },
      {
        title: "Nõusolekud, andmed ja automatiseerimine",
        text: "Alifio toetab andmete ja turundusnõusolekute automatiseerimist. Platvorm saab automaatselt uuendada kasutajate nõusolekute staatusi e-kirja kaudu tehtud toimingute põhjal.",
        items: [
          "turundusnõusolekute automaatne uuendamine",
          "andmete sünkroonimine ilma käsitsi tööta",
          "kliendiandmete haldus",
          "töötajakaartide automaatne loomine",
          "ajakavade korraldamine",
        ],
      },
      {
        title: "Töötajate kontod ja õigused",
        text: "Lahendusel on laiendatud kasutajate ja õiguste süsteem. Igal töötajal võib olla oma konto individuaalse ligipääsuulatusega.",
        items: [
          "andmete nähtavuse piiramine",
          "töötajate sidumine konkreetsete teenustega",
          "ajakavade haldamine",
          "rollide ja õiguste määramine",
          "haldusmoodulitele ligipääsu kontroll",
        ],
      },
      {
        title: "Chatbot ja visuaalne personaliseerimine",
        text: "Süsteemi oluline osa on sisseehitatud chatbot, mis toetab aja broneerimise protsessi, ning võimalus kohandada platvormi välimust kliendi visuaalse identiteedi järgi.",
        items: [
          "chatbot, mis toetab aja broneerimist",
          "vastused põhiküsimustele",
          "kliendi suunamine sobivate aegade või teenuste juurde",
          "aktsentvärvi globaalne muutmine",
          "välimuse kohandamine kliendi brändi järgi",
        ],
      },
    ],
    result:
      "Lahenduse suurim väärtus on broneerimisprotsessi täielik automatiseerimine ning teenusettevõtte kõige olulisemate tööelementide koondamine ühte keskkonda. Selle asemel, et hallata käsitsi kalendrit, sõnumeid, meeldetuletusi ja personali saadavust, saab ettevõte süsteemi, mis korraldab klienditeeninduse protsessi automaatselt, vähendab käsitsi tööd ja võimaldab äri kasvatada ilma meeskonna koormust samas mahus suurendamata.",
  },
  {
    kicker: "Broneerimisassistent",
    title: "Alifio broneerimisassistent",
    label: "Assistendi kasutajaliides",
    image: alifioAssistantPreview,
    variant: "portrait",
    intro: [
      "See projekt näitab automaatset broneerimisassistenti, mis on ehitatud Alifio süsteemi sisse. Assistent on loodud osana aja broneerimise protsessist, mitte tavalise turundusliku chatbotina.",
      "Selle ülesanne on juhendada kasutajat broneeringu tegemisel, aidata teenuse valikul, leida sobiv vaba aeg ja vähendada korduvate küsimuste hulka, mida muidu peaks teenindus käsitsi lahendama.",
      "Tänu sellele saab teeninduspunkt automaatselt käsitleda rohkem päringuid ning klient saab lihtsama ja intuitiivsema viisi broneerimisprotsessi läbimiseks.",
    ],
    beforeImage: [
      {
        title: "Assistent kui broneerimisprotsessi osa",
        text: "Assistent töötab broneerimissüsteemi sees ja juhendab kasutajat samm-sammult läbi kõige olulisemate otsuste.",
        items: [
          "abi teenuse valikul",
          "juhendamine vabade aegade vahel",
          "suunamine sobiva töötaja juurde",
          "vastused põhiküsimustele",
          "käsitsi teenindusele saadetavate sõnumite vähendamine",
        ],
      },
      {
        title: "Tugi lõppkliendile",
        text: "Kasutaja ei pea kogu süsteemi ise läbi analüüsima ega otsima infot mitmest kohast. Assistent aitab tal protsessi läbida kiiremini ja mugavamalt.",
        items: [
          "lihtsam aja valik",
          "vähem pooleli jäetud broneeringuid",
          "selge samm-sammuline suhtlus",
          "kliendile intuitiivsem protsess",
          "automaatne juhendamine järgmise etapini",
        ],
      },
    ],
    afterImage: [
      {
        title: "Kasu teenusettevõttele",
        text: "Assistent vabastab meeskonna korduvatest küsimustest ja aitab hoida broneerimisprotsessi sujuvana.",
        items: [
          "vähem käsitsi vastamist",
          "kiirem klienditeenindus",
          "suurem kättesaadavus väljaspool tööaega",
          "parem broneerimisprotsessi korraldus",
          "võimalus laiendada lahendust täiendavate automatiseerimistega",
        ],
      },
      {
        title: "Integratsioon Alifio süsteemiga",
        text: "Assistendi saab ühendada teenuste, töötajate, kalendri, saadavuse ning e-posti või SMS-suhtlusega.",
        items: [
          "kalendri integratsioon",
          "töötajate saadavus",
          "teenuste nimekiri",
          "e-posti teavitused",
          "võimalus laiendada SMS-idega",
          "ühised andmed broneerimissüsteemiga",
        ],
      },
    ],
    result:
      "Lahenduse suurim väärtus on veebibroneeringu ühendamine intelligentse kasutajajuhendamisega. Ettevõte ei saa ainult kalendrit, vaid ka assistendi, mis aitab klientidel kiiremini sobiva aja leida, vähendab käsitsi saadetavate sõnumite hulka ja suurendab klienditeeninduse automatiseeritust.",
  },
];

function EeProjectsPage() {
  useEffect(() => {
    document.body.classList.add("projects-page-active");

    return () => {
      document.body.classList.remove("projects-page-active");
    };
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  const activeProject = projects[activeIndex];

  const goPrev = () => {
    setDirection("prev");
    setActiveIndex((current) =>
      current === 0 ? projects.length - 1 : current - 1
    );
  };

  const goNext = () => {
    setDirection("next");
    setActiveIndex((current) =>
      current === projects.length - 1 ? 0 : current + 1
    );
  };

  return (
    <main>
      <section className="services-hero projects-hero">
        <img
          className="services-hero__bg"
          src={heroBg}
          alt=""
          aria-hidden="true"
        />

        <div className="services-hero__inner container">
          <div className="services-hero__content">
            <h1>Projektid</h1>
          </div>

          <div className="services-hero__visual" aria-hidden="true">
            <img src={aiServices} alt="" />
          </div>
        </div>
      </section>

      <section className="projects-showcase-section">
        <div className="projects-showcase-section__inner">
          <div className="projects-showcase-section__nav">
            <button type="button" onClick={goPrev}>
              <ArrowLeft size={17} />
              Eelmine
            </button>

            <span>
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(projects.length).padStart(2, "0")}
            </span>

            <button type="button" onClick={goNext}>
              Järgmine
              <ArrowRight size={17} />
            </button>
          </div>

          <article
            key={activeProject.title}
            className={`projects-showcase-section__slide is-${direction}`}
          >
            <div className="projects-showcase-section__top">
              <p className="projects-showcase-section__kicker">
                {activeProject.kicker}
              </p>

              <h2>{activeProject.title}</h2>

              <div className="projects-showcase-section__lead">
                {activeProject.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="projects-showcase-section__blocks">
                {activeProject.beforeImage.map((block) => (
                  <div
                    className="projects-showcase-section__block"
                    key={block.title}
                  >
                    <h3>{block.title}</h3>
                    <p>{block.text}</p>

                    <ul>
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="projects-showcase-section__continue">
                <span>Kirjeldus jätkub pildi all</span>
                <ArrowDown size={18} />
              </div>
            </div>

            <div
              className={`projects-showcase-section__preview ${
                activeProject.variant === "portrait" ? "is-portrait" : ""
              }`}
            >
              <h3>{activeProject.label}</h3>

              <div className="projects-showcase-section__image">
                <img src={activeProject.image} alt={activeProject.label} />
              </div>
            </div>

            <div className="projects-showcase-section__after">
              <div className="projects-showcase-section__blocks">
                {activeProject.afterImage.map((block) => (
                  <div
                    className="projects-showcase-section__block"
                    key={block.title}
                  >
                    <h3>{block.title}</h3>
                    <p>{block.text}</p>

                    <ul>
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="projects-showcase-section__result">
                <h3>Teostuse tulemus</h3>
                <p>{activeProject.result}</p>
              </div>

              <div className="projects-showcase-section__cta">
                <p>Kas soovid oma ettevõttele sarnast süsteemi?</p>

                <Link to="/ee" state={{ scrollTo: "kontakt" }}>
                  Räägime sinu projektist
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default EeProjectsPage;