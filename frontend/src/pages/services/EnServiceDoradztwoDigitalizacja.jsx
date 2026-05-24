import { Link } from "react-router-dom";

import heroBg from "../../assets/images/aidivider.png";
import aiServices from "../../assets/images/aiservices.png";

function EnServiceDoradztwoDigitalizacja() {
  return (
    <main>
      <section className="services-hero">
        <img className="services-hero__bg" src={heroBg} alt="" aria-hidden="true" />

        <div className="services-hero__inner container">
          <div className="services-hero__content">
            <h1>Our services</h1>
          </div>

          <div className="services-hero__visual" aria-hidden="true">
            <img src={aiServices} alt="" />
          </div>
        </div>
      </section>

      <section className="service-detail-section">
        <div className="container service-detail-section__inner">
          <p className="service-detail-section__kicker">
            Consulting and digitalisation
          </p>

          <h2>
            We help turn everyday operational chaos into a concrete system plan.
          </h2>

          <p className="service-detail-section__lead">
            Consulting and process digitalisation is the stage where we analyse
            how the company works today: where data is copied manually, which
            tasks repeat, where errors appear and which areas can be organised
            through technology.
          </p>

          <p className="service-detail-section__lead">
            This is a good option for companies that know they are losing time
            on manual work, but do not yet have a clear idea for a CRM, SaaS
            platform, automation, form, dashboard or AI-supported system.
          </p>

          <div className="service-detail-content">
            <div className="service-detail-content__text">
              <h3>From a business problem to a practical solution map</h3>

              <p>
                Very often the biggest problem is not the lack of tools, but the
                lack of a clear view of the process. A company uses emails,
                spreadsheets, files, messengers and several applications, but no
                one can see the full workflow from beginning to end.
              </p>

              <p>
                As part of digitalisation, we help identify which activities are
                worth automating, which data should go into one database, which
                documents can be generated automatically and where a system can
                replace repetitive manual work.
              </p>

              <p>
                The result is not a generic presentation, but a practical
                implementation direction: what should be built first, which
                modules make sense, how to reduce risk, where to start with an
                MVP and how to expand the system step by step.
              </p>

              <p>
                This way, the company does not invest in random tools, but gets
                a solution plan adapted to its own process, team, data and
                business goals.
              </p>

              <div className="service-detail-list-block">
                <h3>What does consulting and process analysis include?</h3>

                <ul>
                  <li>Understanding the company’s current way of working</li>
                  <li>Identifying manual and repetitive tasks</li>
                  <li>Mapping data, document and communication flows</li>
                  <li>Indicating areas for automation or simplification</li>
                  <li>
                    Selecting the right type of system: CRM, SaaS, admin panel,
                    form or AI module
                  </li>
                  <li>Planning an MVP and staged implementation</li>
                  <li>Analysing the tools currently used by the company</li>
                  <li>Recommendations for API integrations and database structure</li>
                  <li>Defining priorities, modules and the order of work</li>
                  <li>Preparing the direction for a dedicated company system</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail-cta">
        <div className="service-detail-cta__inner">
          <p className="service-detail-section__kicker">Next step</p>

          <h2>
            Not sure yet what kind of system would be best for your company?
          </h2>

          <p>
            You can send a short message through the regular contact form or
            describe your process in more detail using the project analysis
            form.
          </p>

          <div className="service-detail-cta__actions">
            <Link
              to="/"
              state={{ scrollTo: "kontakt" }}
              className="service-detail-cta__button service-detail-cta__button--primary"
            >
              Quick contact
            </Link>

            <Link
              to="/describe-project"
              className="service-detail-cta__button service-detail-cta__button--secondary"
            >
              Describe the project in detail
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default EnServiceDoradztwoDigitalizacja;