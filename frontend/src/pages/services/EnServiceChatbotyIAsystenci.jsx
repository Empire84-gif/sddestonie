import { Link } from "react-router-dom";

import heroBg from "../../assets/images/aidivider.png";
import aiServices from "../../assets/images/aiservices.png";

function EnServiceChatbotyIAsystenci() {
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
            Chatbots and assistants
          </p>

          <h2>
            Assistants that help customers and teams work faster, but always as
            part of a specific process.
          </h2>

          <p className="service-detail-section__lead">
            We create chatbots and assistants that are not just decorative
            widgets on a website. We design them as part of a larger system:
            connected with forms, CRM, knowledge bases, documents, statuses,
            tickets or customer service workflows.
          </p>

          <p className="service-detail-section__lead">
            An assistant can answer questions, collect data, qualify enquiries,
            pass information to the team, support customer service or help
            employees quickly find the information they need.
          </p>

          <div className="service-detail-content">
            <div className="service-detail-content__text">
              <h3>A chatbot as a process tool, not just a conversation</h3>

              <p>
                The biggest problem with many chatbots is that they operate
                separately from the rest of the company. They answer in a
                generic way, do not save data where it should go, do not create
                tickets, do not update the CRM and do not help the team continue
                customer service after the conversation.
              </p>

              <p>
                A well-designed assistant should be part of the workflow. It can
                collect customer data, ask the right questions, save answers in
                the system, assign the case to a category, create a ticket, send
                confirmation and provide the team with an organised summary.
              </p>

              <p>
                Depending on the company’s needs, the assistant can be a simple
                scenario-based chatbot, a more advanced AI module or an internal
                tool for employees that helps them work with company knowledge,
                documents and customer history.
              </p>

              <p>
                This way, a chatbot stops being a marketing add-on and becomes a
                practical tool for collecting information, handling enquiries,
                supporting customers and automating the first stages of contact.
              </p>

              <div className="service-detail-list-block">
                <h3>What can a chatbot or assistant do?</h3>

                <ul>
                  <li>Answer the most common customer questions</li>
                  <li>Collect contact details and enquiry information</li>
                  <li>Qualify leads and send them to the CRM</li>
                  <li>Create tickets, statuses and tasks for the team</li>
                  <li>Send automatic message confirmations</li>
                  <li>Support customers in choosing a service or next step</li>
                  <li>Help employees search information in a knowledge base</li>
                  <li>Summarise conversations, documents or customer history</li>
                  <li>Work as an internal assistant for the team</li>
                  <li>Connect the website, forms, CRM and communication into one process</li>
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
            Do you want to build an assistant that genuinely supports your
            company’s process?
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

export default EnServiceChatbotyIAsystenci;