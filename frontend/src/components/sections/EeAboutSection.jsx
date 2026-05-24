import aboutImage from "../../assets/images/aboutphoto.png";

function EeAboutSection() {
  return (
    <section className="about-section" id="o-nas">
      <div className="container about-section__inner">
        <div className="about-section__head">
          <p className="about-section__kicker">SDE-st</p>

          <h2 className="about-section__title">
            Tehnoloogia, mis korrastab protsesse ja toetab ettevõtete kasvu.
          </h2>

          <div className="about-section__text">
            <p>
              SDE — Solutions Digitales d’Estonie — on tehnoloogiabränd, mis
              kuulub Handke Holding OÜ-le. See loodi vastusena ettevõtete
              kasvavale vajadusele kohandatud IT-süsteemide, protsesside
              automatiseerimise ning AI praktilise kasutamise järele igapäevases
              töös.
            </p>

            <p>
              Oleme spetsialiseerunud SaaS-süsteemide, CRM-lahenduste,
              halduspaneelide, dokumendigeneraatorite, API-integratsioonide ja
              AI-lahenduste kavandamisele ning juurutamisele, mis toetavad
              päriselt toimivaid äriprotsesse.
            </p>

            <p>
              Ehitame tehnoloogiat ettevõtte tööviisi ümber — mitte vastupidi.
            </p>
          </div>
        </div>

        <div className="about-section__actions">
          <a href="/ee/teenused" className="about-section__link">
            Vaata meie teenuseid
          </a>
        </div>
      </div>

      <div className="about-section__image">
        <img
          className="about-section__image-bg"
          src={aboutImage}
          alt="SDE — kaasaegsed ärisüsteemid"
        />

        <div className="about-section__image-title">
          Eksperdid <br />
          <span>automatiseerimises</span>
        </div>
      </div>
    </section>
  );
}

export default EeAboutSection;