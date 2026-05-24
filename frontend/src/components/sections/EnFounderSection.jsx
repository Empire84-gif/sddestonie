import founderImage from "../../assets/images/founder-image.png";

export default function EnFounderSection() {
  return (
    <section className="founder-section">
      <div className="container founder-section__inner">
        <div className="founder-section__content">
          <p className="founder-section__kicker">A few words from me</p>

          <h2 className="founder-section__title">
            Technology begins with understanding people and processes.
          </h2>

          <div className="founder-section__text">
            <p>
              My name is Karl Sebastian Handke and I am the founder of Handke
              Holding OÜ — an Estonian company through which I develop two main
              areas of activity: Solutions Digitales d’Estonie as a technology
              brand specialised in IT solutions, and Hansa Careers as a brand
              supporting companies in the field of workforce intermediation
              across the EU/EEA.
            </p>

            <p>
              At SDE, I combine the perspective of an entrepreneur and a
              developer. I specialise in process automation, CRM system design,
              SaaS applications and AI implementations where they can genuinely
              improve the way a company works.
            </p>

            <p>
              I work mainly with Python, React and Next.js, supported by Flask,
              Node.js, SQL/PostgreSQL databases, API integrations and solutions
              based on the OpenAI API. Technology itself is only a tool — the
              key is understanding where a company loses time, where operational
              chaos appears and which processes can be organised, simplified or
              automated.
            </p>

            <p>
              I prefer building solutions from the ground up — from interface
              and user experience, through backend, system logic and
              integrations, to the flow of data. This allows each project to be
              shaped around the way a specific company works, not the other way
              around.
            </p>

            <p>
              I continuously develop my programming skills and I am currently
              expanding my knowledge of C++ to design even more advanced
              technical solutions — efficient, stable and ready for greater
              scale. If your company wants to work faster, smarter and with more
              control, I would be glad to discuss how we can work together.
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