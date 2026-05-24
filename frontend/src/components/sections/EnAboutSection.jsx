import aboutImage from "../../assets/images/aboutphoto.png";

function EnAboutSection() {
  return (
    <section className="about-section" id="o-nas">
      <div className="container about-section__inner">
        <div className="about-section__head">
          <p className="about-section__kicker">About SDE</p>

          <h2 className="about-section__title">
            Technology that organises processes and supports business growth.
          </h2>

          <div className="about-section__text">
            <p>
              SDE — Solutions Digitales d’Estonie — is a technology brand owned
              and operated by Handke Holding OÜ. It was created in response to
              the growing need for custom IT systems, process automation and
              practical use of AI in everyday business operations.
            </p>

            <p>
              We specialise in designing and implementing SaaS systems, CRM
              platforms, admin panels, document generators, API integrations and
              AI-powered solutions that support real business workflows.
            </p>

            <p>
              We build technology around the way a company works — not the other
              way around.
            </p>
          </div>
        </div>

        <div className="about-section__actions">
          <a href="/services" className="about-section__link">
            Explore our services
          </a>
        </div>
      </div>

      <div className="about-section__image">
        <img
          className="about-section__image-bg"
          src={aboutImage}
          alt="SDE — modern business systems"
        />

        <div className="about-section__image-title">
          Experts in <br />
          <span>automation</span>
        </div>
      </div>
    </section>
  );
}

export default EnAboutSection;