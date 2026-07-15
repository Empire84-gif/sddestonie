import founderImage from "../../assets/images/founder-image.png";

export default function EnFounderSection() {
  return (
    <section className="founder-section">
      <div className="container founder-section__inner">
        <div className="founder-section__content">
          <p className="founder-section__kicker">Asutajast</p>

          <h2 className="founder-section__title">
            Loon praktilisi digilahendusi ettevõtete tegelikele vajadustele.
          </h2>

          <div className="founder-section__text">
            <p>
              Minu nimi on Karl Sebastian Handke ja ma olen Handke Holding OÜ
              asutaja. SDE kaubamärgi kaudu kavandan ja arendan ettevõtetele
              kohandatud IT-lahendusi, mis aitavad lihtsustada igapäevast tööd,
              suurendada tõhusust ja parandada kontrolli äriprotsesside üle.
            </p>

            <p>
              Minu töö keskendub äriprotsesside automatiseerimisele,
              CRM-süsteemidele, veebirakendustele, tehisintellektil põhinevatele
              tööriistadele ning olemasolevate platvormide, teenuste ja
              andmeallikate integreerimisele.
            </p>

            <p>
              Lähenen igale projektile nii ärilisest kui ka tehnilisest
              vaatenurgast. Enne lahenduse loomist analüüsin ettevõtte
              töökorraldust, selgitan välja, kus kulub asjatult aega ning milliseid
              protsesse saab paremini korraldada või automatiseerida.
            </p>

            <p>
              Alates kasutajaliidesest ja taustsüsteemist kuni süsteemiloogika
              ning integratsioonideni loon selgeid ja usaldusväärseid lahendusi,
              mis on kohandatud iga ettevõtte konkreetsetele vajadustele.
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
