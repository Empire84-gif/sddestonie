import { Link } from "react-router-dom";

import heroBg from "../../assets/images/aidivider.png";
import aiServices from "../../assets/images/aiservices.png";

function EnServiceBazyDanych() {
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
          <p className="service-detail-section__kicker">Databases</p>

          <h2>
            Structured databases that replace chaos in Excel, emails and files.
          </h2>

          <p className="service-detail-section__lead">
            We design databases and information management systems that help
            companies keep clients, documents, requests, projects, statuses and
            activity history in one logical place.
          </p>

          <p className="service-detail-section__lead">
            This is not just a table with data. A well-designed database becomes
            the foundation for CRM systems, automation, reports, document
            generators, dashboards, online forms and API integrations.
          </p>

          <div className="service-detail-content">
            <div className="service-detail-content__text">
              <h3>Why do spreadsheets eventually stop being enough?</h3>

              <p>
                Excel and online spreadsheets are useful at the beginning, but
                over time they often create chaos: many versions of files,
                manual data entry, no change history, no permissions, duplicate
                records and difficulty finding the right information quickly.
              </p>

              <p>
                A dedicated database makes it possible to organise information
                according to the company’s logic. Data can be connected with
                clients, projects, documents, requests, payments, employees or
                any other part of the process.
              </p>

              <p>
                As a result, the company can have one consistent system where
                data is saved, updated, filtered, exported and used by other
                modules. This becomes the basis for further automation and real
                control over the process.
              </p>

              <p>
                A database can work as a standalone admin panel or as part of a
                larger SaaS or CRM system. It can be connected with forms,
                emails, PDF documents, dashboards, reports, APIs and AI modules.
              </p>

              <div className="service-detail-list-block">
                <h3>What can a custom database system include?</h3>

                <ul>
                  <li>Client, company, contact, project or request database</li>
                  <li>Relations between records, activity history and documents</li>
                  <li>Admin panel with search and filtering</li>
                  <li>User roles, permissions and access control</li>
                  <li>Importing data from Excel, forms or existing systems</li>
                  <li>Exports, reports and management dashboards</li>
                  <li>Change history and structured data architecture</li>
                  <li>Automatic statuses, tags and assignments</li>
                  <li>API integrations with other company tools</li>
                  <li>Foundation for CRM, SaaS, AI and automation</li>
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
            Do you want to turn scattered data into one structured system?
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

export default EnServiceBazyDanych;