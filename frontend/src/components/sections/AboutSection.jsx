import aboutImage from "../../assets/images/aboutphoto.png";

function AboutSection() {
  return (
    <section className="about-section" id="o-nas">
      <div className="container about-section__inner">
        <div className="about-section__head">
          <p className="about-section__kicker">O SDE</p>

          <h2 className="about-section__title">
            Technologia, która porządkuje procesy i wspiera rozwój firm.
          </h2>

          <div className="about-section__text">
            <p>
              SDE — Solutions Digitales d’Estonie — jest marką technologiczną
              należącą do Handke Holding OÜ. Powstała jako odpowiedź na rosnące
              zapotrzebowanie firm na dedykowane systemy IT, automatyzację
              procesów oraz praktyczne wykorzystanie AI w codziennej pracy.
            </p>

            <p>
              Specjalizujemy się w projektowaniu i wdrażaniu systemów SaaS, CRM,
              paneli administracyjnych, generatorów dokumentów, integracji API
              oraz rozwiązań AI wspierających realne procesy biznesowe.
            </p>

            <p>
              Budujemy technologię wokół sposobu działania firmy — nie odwrotnie.
            </p>
          </div>
        </div>

        <div className="about-section__actions">
          <a href="/pl/uslugi" className="about-section__link">
            Sprawdź nasze usługi
          </a>
        </div>
      </div>

      <div className="about-section__image">
        <img
          className="about-section__image-bg"
          src={aboutImage}
          alt="SDE — nowoczesne systemy biznesowe"
        />

        <div className="about-section__image-title">
          Eksperci w <br />
          <span>automatyzacji</span>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;