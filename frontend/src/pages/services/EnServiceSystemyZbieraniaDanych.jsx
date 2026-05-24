import { Link } from "react-router-dom";

import heroBg from "../../assets/images/aidivider.png";
import aiServices from "../../assets/images/aiservices.png";

function EnServiceSystemyZbieraniaDanych() {
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
          <p className="service-detail-section__kicker">Data collection</p>

          <h2>
            Systems that collect data from forms, files and processes in one
            organised place.
          </h2>

          <p className="service-detail-section__lead">
            We create custom systems for collecting, organising and processing
            data that often reaches companies through emails, spreadsheets,
            forms, PDF documents, customer messages or manual employee notes.
          </p>

          <p className="service-detail-section__lead">
            The goal is not simply to “add a form”, but to build a logical
            process: data goes into a database, is validated, assigned to a
            client or case, and can then trigger documents, statuses, tasks,
            reports or automation.
          </p>

          <div className="service-detail-content">
            <div className="service-detail-content__text">
              <h3>Why is collecting data alone not enough?</h3>

              <p>
                In many companies, data is scattered between email inboxes,
                Excel, Google Forms, PDF documents and customer messages. The
                problem appears when the team needs to quickly find specific
                information, check the history of a case, prepare a document or
                pass the data further.
              </p>

              <p>
                A dedicated data collection system organises this chaos. Instead
                of manually copying information between tools, the company can
                have its own forms, database, admin panel, statuses, filters,
                exports, documents and automatic actions after data is submitted.
              </p>

              <p>
                Such a solution can handle customer enquiries, registrations,
                recruitment, orders, surveys, documentation, field reports,
                internal forms, project data or any other process where the
                company regularly collects information from people or systems.
              </p>

              <p>
                Data can be cleaned, checked, grouped and assigned to the right
                records immediately. This makes the system a foundation for
                further automation: CRM, reports, dashboards, PDF documents,
                notifications, API integrations and AI modules.
              </p>

              <div className="service-detail-list-block">
                <h3>What can a data collection system include?</h3>

                <ul>
                  <li>Custom online forms for customers or employees</li>
                  <li>Database with search, filters and change history</li>
                  <li>Admin panel for handling submissions and records</li>
                  <li>Data validation and fewer input errors</li>
                  <li>Automatic assignment of data to clients or cases</li>
                  <li>Exports, reports, dashboards and management views</li>
                  <li>Generating PDF documents from submitted data</li>
                  <li>Email notifications and process statuses</li>
                  <li>Integrations with CRM, APIs, spreadsheets or external systems</li>
                  <li>Possibility to expand the system with automation and AI</li>
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
            Do you want to organise data that is currently scattered across
            emails and spreadsheets?
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

export default EnServiceSystemyZbieraniaDanych;