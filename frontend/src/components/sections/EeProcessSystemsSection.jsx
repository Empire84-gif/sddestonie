import { AlertTriangle, Wrench } from "lucide-react";

import problem01 from "../../assets/images/problem-01.png";
import problem02 from "../../assets/images/problem-02.png";
import problem03 from "../../assets/images/problem-03.png";
import problem04 from "../../assets/images/problem-04.png";
import problem05 from "../../assets/images/problem-05.png";
import problem06 from "../../assets/images/problem-06.png";
import problem07 from "../../assets/images/problem-07.png";
import problem08 from "../../assets/images/problem-08.png";

const cases = [
  {
    number: "01",
    title: "Andmete käsitsi ümberkirjutamine",
    image: problem01,
    alt: "Andmete sisestamise automatiseerimine",
    problem:
      "Ettevõte kogub andmeid vormidest, e-kirjadest ja Exceli tabelitest. Töötajad peavad samu andmeid käsitsi dokumentidesse, registritesse ja sisemistesse ülevaadetesse ümber tõstma.",
    solution:
      "Loome veebivormid, mis on ühendatud keskse andmebaasi, automaatse infoliikumise ja PDF-dokumentide genereerimisega.",
    result:
      "Andmed sisestatakse üks kord, liiguvad kohe süsteemi ning meeskond vähendab käsitsi kopeerimist ja vigade arvu.",
  },
  {
    number: "02",
    title: "Kaos kliendihalduses",
    image: problem02,
    alt: "CRM-süsteem ja kliendihaldus",
    problem:
      "Kliendiinfo on hajutatud e-posti, märkmete, tabelite, töötajate sõnumite ja kohalike failide vahel.",
    solution:
      "Kavandame ettevõtte protsessiga kohandatud CRM-i: kliendibaas, staatused, kontaktiajalugu, märkmed, ülesanded, dokumendid ja juhtpaneel.",
    result:
      "Meeskonnal on üks keskne koht klientide teenindamiseks, järeltegevusteks, jooksvateks asjadeks ja koostöö ajaloo jälgimiseks.",
    reverse: true,
  },
  {
    number: "03",
    title: "Korduvad kliendiküsimused",
    image: problem03,
    alt: "Automaatne assistent ja vestlusrobot",
    problem:
      "Kliendid esitavad sageli samu küsimusi või saadavad poolikuid päringuid, mistõttu peab meeskond korduvalt põhiteavet täpsustama.",
    solution:
      "Loome assistente, samm-sammulisi vorme või stsenaariumipõhiseid vestlusroboteid, mis juhendavad kasutajat ja koguvad täielikud andmed.",
    result:
      "Ettevõte saab paremini ettevalmistatud päringuid ning klienditeenindus muutub kiiremaks ja korrastatumaks.",
  },
  {
    number: "04",
    title: "Aeglane pakkumiste koostamine",
    image: problem04,
    alt: "Pakkumiste ja PDF-dokumentide generaator",
    problem:
      "Pakkumise koostamine nõuab kliendiandmete, teenusekirjelduste, hindade, töömahu ja koostöötingimuste käsitsi kokkupanemist.",
    solution:
      "Loome pakkumiste generaatori koos teenusemoodulite, numeratsiooni, kliendiandmete, summaarse väärtuse ja PDF-ekspordiga.",
    result:
      "Professionaalse pakkumise saab koostada mõne minutiga, ilma et dokumenti peaks iga kord nullist käsitsi üles ehitama.",
    reverse: true,
  },
  {
    number: "05",
    title: "Puudulik kontroll dokumentide üle",
    image: problem05,
    alt: "Dokumendiregister ja dokumentatsiooni haldus",
    problem:
      "Dokumente hoitakse erinevates kaustades, e-kirjades, töötajate arvutites või käsitsi peetavates registrites.",
    solution:
      "Loome dokumendiregistri kategooriate, klientide, kuupäevade, numeratsiooni, staatuste ja süsteemist failide genereerimise võimalusega.",
    result:
      "Dokumentatsioon on korrastatud, kiiresti leitav ning seotud klientide ja ettevõtte protsessidega.",
  },
  {
    number: "06",
    title: "Liiga palju sõnumeid analüüsimiseks",
    image: problem06,
    alt: "AI sõnumite ja päringute analüüsiks",
    problem:
      "Ettevõte saab palju sõnumeid ja päringuid, kuid keeruline on kiiresti hinnata, millised neist on kiireloomulised ja kellele need suunata.",
    solution:
      "Rakendame AI-mooduli, mis analüüsib sõnumi sisu ning tuvastab teema, prioriteedi ja pöördumise tüübi.",
    result:
      "Meeskond mõistab päringuid kiiremini, seab prioriteete täpsemalt ja reageerib tõhusamalt.",
    reverse: true,
  },
  {
    number: "07",
    title: "Dokumentide ja päringute kontroll võtab liiga kaua",
    image: problem07,
    alt: "AI dokumentide ja päringute analüüs CRM-is",
    problem:
      "Töötajad peavad käsitsi kontrollima vormide, dokumentide, päringute ja manuste täielikkust.",
    solution:
      "Integreerime AI CRM-iga, et süsteem osutaks puudustele, looks kokkuvõtteid ja soovitaks järgmisi samme.",
    result:
      "Päringute kontroll on kiirem, sõltub vähem käsitsi analüüsist ning töövoog muutub paremini prognoositavaks.",
  },
  {
    number: "08",
    title: "Liiga palju aega e-kirjadele vastamiseks",
    image: problem08,
    alt: "AI e-posti assistent ja vastuste automatiseerimine",
    problem:
      "Meeskond vastab kümnetele sarnastele e-kirjadele ning peab iga kord kontrollima kliendi ajalugu ja varasemat konteksti.",
    solution:
      "Ühendame CRM-i AI-assistendiga, mis analüüsib sõnumit, kliendi konteksti ja koostab vastuse mustandi.",
    result:
      "Suhtlus muutub kiiremaks ja ühtlasemaks ning koormab meeskonda igapäevatöös vähem.",
    reverse: true,
  },
];

export default function EeProcessSystemsSection() {
  return (
    <section id="problems" className="problems-section">
      <div className="container">
        <div className="problems-head">
          <p className="section-kicker">Näited juurutustest</p>

          <h2>
            Probleemid, mille muudame
            <br />
            toimivateks süsteemideks
          </h2>

          <p>
            Iga juurutus algab konkreetsest probleemist ettevõttes: käsitsi
            tehtavast tööst, andmekaosest, korduvatest sõnumitest, dokumentidest
            või protsessidest, mida saab tehnoloogia, automatiseerimise või AI
            abil korrastada.
          </p>
        </div>

        <div className="problem-cases">
          {cases.map((item) => (
            <article
              className={`problem-case ${item.reverse ? "reverse" : ""}`}
              key={item.number}
            >
              <div className="problem-case-text">
                <span className="problem-case-kicker">
                  Probleem {item.number}
                </span>

                <h3>{item.title}</h3>

                <div className="problem-case-grid">
                  <div className="problem-block">
                    <span>
                      <AlertTriangle size={13} strokeWidth={1.8} />
                      Olukord enne juurutust
                    </span>
                    <p>{item.problem}</p>
                  </div>

                  <div className="problem-block">
                    <span>
                      <Wrench size={13} strokeWidth={1.8} />
                      Mida juurutame
                    </span>
                    <p>{item.solution}</p>
                  </div>
                </div>

                <div className="problem-result">
                  <strong>Tulemus ettevõtte jaoks</strong>
                  <p>{item.result}</p>
                </div>
              </div>

              <div className="problem-case-media">
                <img src={item.image} alt={item.alt} loading="lazy" />
                <span>{item.number}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}