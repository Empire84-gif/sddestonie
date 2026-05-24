import { Link } from "react-router-dom";

import heroBg from "../../assets/images/aidivider.png";
import aiServices from "../../assets/images/aiservices.png";

function EnServiceAplikacjeSaas() {
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
          <p className="service-detail-section__kicker">SaaS applications</p>

          <h2>
            Custom web applications and SaaS platforms built around real
            business processes.
          </h2>

          <p className="service-detail-section__lead">
            We build web applications and SaaS systems for companies that need
            their own tool for managing customers, processes, documents, data,
            payments, reports or team workflows.
          </p>

          <p className="service-detail-section__lead">
            Such a system can work as an internal operational platform, customer
            portal, CRM, booking system, document generator, ticket management
            tool or a SaaS product offered further to the company’s own clients.
          </p>

          <div className="service-detail-content">
            <div className="service-detail-content__text">
              <h3>Why does a custom SaaS application give you more control?</h3>

              <p>
                Ready-made tools often solve only part of the problem. A company
                uses one system for clients, another for documents, another for
                emails, another for reports — while the rest of the process
                still happens in Excel, messages and manual notes.
              </p>

              <p>
                A custom SaaS application makes it possible to connect these
                elements into one working environment. We can design exactly the
                modules, views, user roles, statuses, automations and reports
                that fit a specific business model.
              </p>

              <p>
                The system can be a simple MVP launched in stages or a complex
                platform with user accounts, an admin panel, payments, PDF
                documents, API integrations, dashboards and AI modules.
              </p>

              <p>
                The company receives its own browser-based software — visually
                and functionally aligned with its brand, team and processes.
                Without unnecessary features, random logic or dependence on the
                limitations of a mass-market platform.
              </p>

              <div className="service-detail-list-block">
                <h3>What can a custom SaaS platform include?</h3>

                <ul>
                  <li>Admin panel and user accounts</li>
                  <li>CRM, customer, company, ticket or project database</li>
                  <li>Online forms saving data directly into the system</li>
                  <li>Automatic generation of documents, offers and PDFs</li>
                  <li>Dashboards, reports, statistics and management views</li>
                  <li>User roles, permissions and login system</li>
                  <li>API integrations with external systems</li>
                  <li>Email notifications, statuses and workflow logic</li>
                  <li>Payment, booking or customer service modules</li>
                  <li>Possibility to expand the system with AI and automation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail-cta">
        <div className="service-detail-cta__inner">
          <p className="service-detail-section__kicker">Next step</p>

          <h2>Do you have an idea for your own system or SaaS application?</h2>

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

export default EnServiceAplikacjeSaas;