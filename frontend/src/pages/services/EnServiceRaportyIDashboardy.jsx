import { Link } from "react-router-dom";

import heroBg from "../../assets/images/aidivider.png";
import aiServices from "../../assets/images/aiservices.png";

function EnServiceRaportyIDashboardy() {
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
            Reports and dashboards
          </p>

          <h2>
            Dashboards that show the real state of your company without manually
            combining data.
          </h2>

          <p className="service-detail-section__lead">
            We create reports, management panels and dashboards that collect
            data from processes, forms, CRM systems, documents, sales, projects
            and other sources in one clear view.
          </p>

          <p className="service-detail-section__lead">
            The goal is not to create a nice chart for the sake of a chart. The
            goal is to build a system that helps you make decisions faster,
            notice problems, control statuses and see what is really happening
            inside the company.
          </p>

          <div className="service-detail-content">
            <div className="service-detail-content__text">
              <h3>Why does manual reporting stop working?</h3>

              <p>
                In many companies, reporting still means manually collecting data
                from Excel, emails, SaaS tools, forms and documents. This takes
                time, creates errors and often means that management is looking
                at data that is already outdated.
              </p>

              <p>
                A custom dashboard can automatically collect data from the
                system, organise it and present it in views tailored to different
                roles: the business owner, manager, sales team, administration,
                customer service or operations team.
              </p>

              <p>
                A dashboard can show sales, leads, project statuses, team
                workload, number of requests, response time, documents to
                prepare, payments, customer sources, process efficiency and
                other indicators important for a specific company.
              </p>

              <p>
                These reports can be part of a CRM, SaaS application, data
                collection system or a separate analytics panel. The most
                important thing is that the data is up to date, understandable
                and connected with the real process — not manually assembled once
                a week.
              </p>

              <div className="service-detail-list-block">
                <h3>What can a company dashboard include?</h3>

                <ul>
                  <li>Management views with key company indicators</li>
                  <li>Sales, lead, customer and project reports</li>
                  <li>Status, request and team task dashboards</li>
                  <li>Automatic data collection from CRM and forms</li>
                  <li>Charts, tables, filters and role-based views</li>
                  <li>Document, payment and deadline reports</li>
                  <li>Data exports to PDF, CSV or spreadsheets</li>
                  <li>Monitoring process efficiency and response times</li>
                  <li>Alerts, notifications and automatic summaries</li>
                  <li>Possibility to expand with AI analysis and forecasting</li>
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
            Do you want to see the most important company data without manual
            reporting?
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

export default EnServiceRaportyIDashboardy;