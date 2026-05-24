import founderImage from "../../assets/images/founder-image.png";

export default function EeFounderSection() {
  return (
    <section className="founder-section">
      <div className="container founder-section__inner">
        <div className="founder-section__content">
          <p className="founder-section__kicker">Paar sõna minult</p>

          <h2 className="founder-section__title">
            Tehnoloogia algab inimese ja protsessi mõistmisest.
          </h2>

          <div className="founder-section__text">
            <p>
              Minu nimi on Karl Sebastian Handke ja ma olen Handke Holding OÜ
              asutaja — Eesti ettevõtte, mille raames arendan kahte
              tegevussuunda: Solutions Digitales d’Estonie kui tehnoloogiabrändi,
              mis keskendub IT-lahendustele, ning Hansa Careers kui brändi, mis
              toetab ettevõtteid töövahenduse valdkonnas Euroopa Liidu ja EMP
              piirkonnas.
            </p>

            <p>
              SDE-s ühendan ettevõtja ja arendaja vaatenurga. Minu töö keskendub
              protsesside automatiseerimisele, CRM-süsteemide, SaaS-rakenduste
              ja AI-lahenduste loomisele seal, kus need saavad ettevõtte tööd
              päriselt lihtsamaks, kiiremaks ja paremini juhitavaks muuta.
            </p>

            <p>
              Töötan peamiselt Pythonis, Reactis ja Next.js-is, arendades
              süsteemide taustaloogikat Flaski, Node.js-i, SQL/PostgreSQL
              andmebaaside, API-integratsioonide ning OpenAI API põhiste
              lahendustega. Tehnoloogia on siiski ainult tööriist — kõige
              olulisem on mõista, kus ettevõte kaotab aega, kus tekib segadus ja
              milliseid protsesse saab korrastada, lihtsustada või
              automatiseerida.
            </p>

            <p>
              Eelistan ehitada lahendusi algusest peale — alates kasutajaliidesest
              ja kasutajakogemusest kuni backendi, süsteemiloogika,
              integratsioonide ja andmevoogudeni. See võimaldab kohandada iga
              projekti konkreetse ettevõtte tööviisi järgi, mitte vastupidi.
            </p>

            <p>
              Arendan järjepidevalt oma programmeerimisoskusi; praegu laiendan
              teadmisi C++ valdkonnas, et kavandada veelgi tehniliselt
              nõudlikumaid lahendusi — tõhusaid, stabiilseid ja suuremaks
              mahuks valmis süsteeme. Kui teie ettevõte soovib töötada kiiremini,
              targemalt ja suurema kontrolliga, siis kutsun teid koostööle.
            </p>
          </div>
        </div>

        <div className="founder-section__image" aria-hidden="true">
          <img src={founderImage} alt="" />
        </div>
      </div>
    </section>
  );
}