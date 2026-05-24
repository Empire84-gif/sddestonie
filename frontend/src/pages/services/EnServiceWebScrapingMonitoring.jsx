import { Link } from "react-router-dom";

import heroBg from "../../assets/images/aidivider.png";
import aiServices from "../../assets/images/aiservices.png";

function EnServiceWebScrapingMonitoring() {
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
            Web scraping and monitoring
          </p>

          <h2>
            Systems that automatically collect and monitor data from the
            internet.
          </h2>

          <p className="service-detail-section__lead">
            We create custom tools for collecting, organising and monitoring
            data from websites, directories, offers, price lists, listings,
            search results, industry portals and other publicly available
            sources.
          </p>

          <p className="service-detail-section__lead">
            The goal is not just to collect data. The goal is to build a system
            that regularly checks for changes, saves information in a database,
            displays it in a panel, sends alerts and helps the company react to
            the market faster.
          </p>

          <div className="service-detail-content">
            <div className="service-detail-content__text">
              <h3>Why does a company need data monitoring?</h3>

              <p>
                In many industries, important information is scattered across
                many websites: competitor prices, product availability, new
                listings, offer changes, portal content, directory data, reviews,
                statuses or announcements. Checking such sources manually takes
                time and makes it easy to miss something important.
              </p>

              <p>
                A dedicated monitoring system can automatically collect data
                according to agreed rules, save change history, compare results,
                filter information and show only what actually requires
                attention.
              </p>

              <p>
                Such a tool can work as an internal panel, reporting module,
                alert system or part of a larger SaaS application. Data can go
                into a database, dashboard, spreadsheet, CRM, PDF report or
                automated email notification.
              </p>

              <p>
                We design these solutions with a focus on stability, reasonable
                collection frequency, clear data structure and respect for the
                rules of the data sources. The system should support analysis
                and monitoring, not create another layer of chaotic files.
              </p>

              <div className="service-detail-list-block">
                <h3>What can be monitored or collected automatically?</h3>

                <ul>
                  <li>Product, service and competitor offer prices</li>
                  <li>Availability of products, listings or places</li>
                  <li>New posts, announcements, updates and content changes</li>
                  <li>Directory, technical or industry-specific data</li>
                  <li>Listings, offer lists and public registers</li>
                  <li>Changes on customer, partner or market websites</li>
                  <li>Email alerts after an important change is detected</li>
                  <li>Dashboards with history and data comparison</li>
                  <li>Data export to CSV, PDF, CRM or database</li>
                  <li>Data analysis supported by automation or AI</li>
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
            Do you want to automatically monitor data that matters to your
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

export default EnServiceWebScrapingMonitoring;