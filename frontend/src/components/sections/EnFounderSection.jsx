import founderImage from "../../assets/images/founder-image.png";

export default function EnFounderSection() {
  return (
    <section className="founder-section">
      <div className="container founder-section__inner">
        <div className="founder-section__content">
          <p className="founder-section__kicker">About the founder</p>

          <h2 className="founder-section__title">
            I build practical digital systems for real business needs.
          </h2>

          <div className="founder-section__text">
            <p>
              My name is Karl Sebastian Handke and I am the founder of Handke
              Holding OÜ. Through the SDE brand, I design and develop tailored
              IT solutions for companies that want to simplify their work,
              improve efficiency and gain better control over their processes.
            </p>

            <p>
              My work focuses on business automation, CRM systems, web
              applications, AI-powered tools and integrations between existing
              platforms, services and data.
            </p>

            <p>
              I approach every project from both a business and technical
              perspective. Before building a solution, I analyse how the company
              currently works, where time is being lost and which processes can
              be organised or automated.
            </p>

            <p>
              From the interface and backend to system logic and integrations,
              I create solutions that are clear, reliable and adapted to the
              specific needs of each business.
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
