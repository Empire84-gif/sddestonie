import heroBg from "../../assets/images/aidivider.png";
import aiServices from "../../assets/images/aiservices.png";
import { Link } from "react-router-dom";

function EnServiceAutomatyzacjaZadan() {
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
          <p className="service-detail-section__kicker">Process automation</p>

          <h2>
            Systems that take over repetitive work and organise the everyday
            workflow of your company.
          </h2>

          <p className="service-detail-section__lead">
            In many companies, a large amount of time is still lost on manual
            data entry, tracking statuses, sending messages, creating documents,
            updating spreadsheets and passing information between employees and
            tools. Over time, the process starts to exist more “in people’s
            heads” than in a structured system.
          </p>

          <p className="service-detail-section__lead">
            Process automation is not just about adding AI or a single form. It
            is about building a working environment where data moves
            automatically through the company: from a customer form, through CRM,
            documents, communication, statuses and tasks, all the way to reports
            and management dashboards.
          </p>

          <div className="service-detail-content">
            <div className="service-detail-content__text">
              <h3>What can be automated?</h3>

              <p>
                The scope of automation depends on how the company operates. In
                practice, we often automate document flow, online forms, lead
                handling, customer assignment, PDF offer and contract generation,
                message sending, reminders, reporting, project statuses, sales
                processes, customer onboarding, ticket workflows and information
                flow between systems.
              </p>

              <p>
                Many companies use Excel, email, messengers, PDF documents and
                several different SaaS applications at the same time — tools that
                do not communicate with each other. The result is duplicated
                data, organisational chaos and a large amount of manual work. A
                dedicated system makes it possible to connect these elements
                into one structured workflow.
              </p>

              <p>
                Automation can cover both simple administrative processes and
                more advanced environments: CRM systems, SaaS platforms,
                dashboards, data analytics, document generators, ticket flows,
                email systems, API integrations, data monitoring or AI-supported
                modules.
              </p>
            </div>

            <div className="service-detail-list-block">
              <h3>Most commonly automated work areas</h3>

              <ul>
                <li>Automatic generation of offers, contracts and PDF documents</li>
                <li>Online form handling and sales lead processing</li>
                <li>CRM tailored to the real company process</li>
                <li>Project statuses, tasks and team workflow</li>
                <li>Dashboards, management reports and data analysis</li>
                <li>API integrations between tools used by the company</li>
                <li>Automated messages, reminders and notifications</li>
                <li>Document, ticket and information flow inside the company</li>
                <li>AI supporting data, document and communication analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail-cta">
        <div className="service-detail-cta__inner">
          <p className="service-detail-section__kicker">Next step</p>

          <h2>
            Do you want to see what exactly can be automated in your company?
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

export default EnServiceAutomatyzacjaZadan;