import { Link } from "react-router-dom";

import heroBg from "../../assets/images/aidivider.png";
import aiServices from "../../assets/images/aiservices.png";

function EnServiceZarzadzanieDokumentacja() {
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
            Documentation management
          </p>

          <h2>
            Systems that organise documents, statuses, versions and information
            flow inside the company.
          </h2>

          <p className="service-detail-section__lead">
            We create custom solutions for managing company documentation:
            contracts, offers, reports, forms, attachments, protocols, customer
            documents and internal process files.
          </p>

          <p className="service-detail-section__lead">
            The goal is to organise work with documents so the team knows where
            the correct file version is, what the case status is, who is
            responsible for the next step and which documents require action.
          </p>

          <div className="service-detail-content">
            <div className="service-detail-content__text">
              <h3>Why do folders and emails stop being enough?</h3>

              <p>
                In many companies, documents are scattered across email inboxes,
                computer folders, shared drives, PDF attachments, spreadsheets
                and employee messages. Over time, it becomes difficult to know
                which version is current, who approved it and what should happen
                next.
              </p>

              <p>
                A dedicated documentation system makes it possible to collect
                files, data, statuses, change history and related actions in one
                place. A document can be assigned to a customer, project,
                request, employee, deadline or specific stage of the process.
              </p>

              <p>
                The system can handle search, filtering, versioning, approval
                statuses, attachments, comments, reminders, automatic PDF
                generation and activity history. As a result, documents stop
                being chaotic files and become part of a structured workflow.
              </p>

              <p>
                Such a solution can work as a standalone document panel or as
                part of a larger CRM, SaaS system or company operations
                platform. It can be connected with forms, customer databases,
                email communication, dashboards and automation.
              </p>

              <div className="service-detail-list-block">
                <h3>What can a documentation management system include?</h3>

                <ul>
                  <li>Central database of documents, files and attachments</li>
                  <li>Documents assigned to customers, projects or cases</li>
                  <li>Document statuses, approvals and workflow stages</li>
                  <li>Change history, file versions and activity log</li>
                  <li>Search, filtering and document tagging</li>
                  <li>Automatic PDF generation based on company templates</li>
                  <li>Reminders, deadlines and email notifications</li>
                  <li>User roles and document access control</li>
                  <li>Integration with CRM, forms, email and dashboards</li>
                  <li>Possibility to expand with AI-supported document analysis</li>
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
            Do you want to organise documents and information flow in your
            company?
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

export default EnServiceZarzadzanieDokumentacja;