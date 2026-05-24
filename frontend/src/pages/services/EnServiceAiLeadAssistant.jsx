import { Link } from "react-router-dom";

import heroBg from "../../assets/images/aidivider.png";
import aiServices from "../../assets/images/aiservices.png";

function EnServiceAiLeadAssistant() {
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
          <p className="service-detail-section__kicker">AI Lead Assistant</p>

          <h2>
            A system that helps handle customer enquiries faster and in a more
            organised way.
          </h2>

          <p className="service-detail-section__lead">
            AI Lead Assistant is a dedicated module that supports companies in
            handling new enquiries, contact forms, sales leads and messages from
            potential customers.
          </p>

          <p className="service-detail-section__lead">
            It is not a simple website chatbot. It is a tool connected with the
            sales process, CRM, forms, contact history and the company’s own
            operating rules.
          </p>

          <div className="service-detail-content">
            <div className="service-detail-content__text">
              <h3>How can AI help with lead handling?</h3>

              <p>
                In many companies, new enquiries arrive through an email inbox,
                contact form or social media message. Some leads require a fast
                response, some need additional questions, and others should be
                assigned immediately to the right person or category.
              </p>

              <p>
                AI Lead Assistant can help analyse enquiry content, classify
                leads, recognise customer intent, prepare draft replies, organise
                data and pass information into a CRM or sales panel.
              </p>

              <p>
                Such a system can work together with a project analysis form,
                contact form, email inbox, customer database and dashboard. This
                allows the company to quickly see which enquiries are valuable,
                what the customer needs and what the next step should be.
              </p>

              <p>
                AI does not make decisions instead of the team, but it reduces
                the time needed for initial analysis, data organisation and
                response preparation. This is especially useful where a company
                receives many similar enquiries or needs to quickly assess
                whether a lead fits the offer.
              </p>

              <div className="service-detail-list-block">
                <h3>What can AI Lead Assistant do?</h3>

                <ul>
                  <li>Analyse enquiries from forms and email messages</li>
                  <li>Classify leads by service type or priority</li>
                  <li>Extract the most important information from customer messages</li>
                  <li>Create draft replies for the sales team</li>
                  <li>Save lead data directly into the CRM</li>
                  <li>Assign enquiries to the right people or categories</li>
                  <li>Show statuses and customer contact history</li>
                  <li>Connect the contact form with the sales process</li>
                  <li>Create lead dashboards and enquiry source reports</li>
                  <li>Support customer qualification before a sales conversation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail-cta">
        <div className="service-detail-cta__inner">
          <p className="service-detail-section__kicker">Next step</p>

          <h2>Do you want to analyse and handle customer enquiries faster?</h2>

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

export default EnServiceAiLeadAssistant;