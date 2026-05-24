import { Link } from "react-router-dom";

import heroBg from "../../assets/images/aidivider.png";
import aiServices from "../../assets/images/aiservices.png";

function EnServiceGeneratoryDokumentow() {
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
          <p className="service-detail-section__kicker">Document generators</p>

          <h2>
            Systems that help prepare documents faster, more consistently and
            without manually copying data.
          </h2>

          <p className="service-detail-section__lead">
            We build custom applications and modules for handling company
            documents: contracts, forms, offers, reports, protocols, request
            cards, administrative documentation and other files that take a
            significant amount of time for the team to prepare every day.
          </p>

          <p className="service-detail-section__lead">
            This is not about simple tools for creating documents “from
            scratch”. It is about systems that guide an employee through a
            specific process, retrieve data automatically, reduce the number of
            mistakes and make it possible to prepare a finished document much
            faster than with manual work.
          </p>

          <div className="service-detail-content">
            <div className="service-detail-content__text">
              <h3>How does such a system work?</h3>

              <p>
                In many companies, preparing a single document requires copying
                the same data between email, Excel, CRM, PDF files and forms.
                Employees have to manually copy client information, check
                correctness, control document versions and remember every
                required field.
              </p>

              <p>
                A custom system simplifies this process. The user fills in an
                organised form or selects a client from the database, and the
                system prepares the correct document according to an agreed
                template. Data can be pulled automatically from the CRM, online
                forms, previous requests or other system modules.
              </p>

              <p>
                As a result, the company reduces manual work, lowers the risk of
                mistakes and speeds up the preparation of documents that
                previously took several or even dozens of minutes. In practice,
                such solutions often save teams dozens of hours every month.
              </p>

              <p>
                This type of system can work as a standalone application or as
                part of a larger CRM or SaaS platform. It can also support
                signatures, statuses, approval workflows, automatic email
                sending, archiving, dashboards and integrations with other
                company tools.
              </p>

              <div className="service-detail-list-block">
                <h3>Example uses of document generators</h3>

                <ul>
                  <li>Automatic preparation of client contracts</li>
                  <li>Generating sales offers and quotations</li>
                  <li>Creating reports, summaries and documentation</li>
                  <li>Step-by-step forms guiding employees through the process</li>
                  <li>Filling documents with data from CRM or online forms</li>
                  <li>Automatic PDF generation and document numbering</li>
                  <li>Document statuses and approval workflows</li>
                  <li>Document archiving and change history</li>
                  <li>Integration with email, client database and APIs</li>
                  <li>Systems for handling requests and administrative documents</li>
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
            Do you want to reduce the time spent manually preparing documents?
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

export default EnServiceGeneratoryDokumentow;