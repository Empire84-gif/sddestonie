import { Link } from "react-router-dom";

import heroBg from "../../assets/images/aidivider.png";
import aiServices from "../../assets/images/aiservices.png";

function EnServiceKomunikacjaZKlientami() {
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
            Customer communication
          </p>

          <h2>
            Systems that organise customer contact and connect messages with
            your company’s workflow.
          </h2>

          <p className="service-detail-section__lead">
            We create solutions that help companies manage customer
            communication in a more structured way than a regular email inbox.
            Messages, requests, forms, notes and contact history can all go into
            one system connected with a customer, project or case.
          </p>

          <p className="service-detail-section__lead">
            The goal is not to replace people, but to remove chaos: who replied,
            what the case status is, what the customer needs, which documents
            have been sent and what should happen next.
          </p>

          <div className="service-detail-content">
            <div className="service-detail-content__text">
              <h3>Why is an email inbox alone no longer enough?</h3>

              <p>
                When a company handles many customers, communication quickly
                spreads across emails, forms, phone calls, notes and employee
                messages. As a result, it becomes difficult to check the full
                history of a case, assign responsibility or see which enquiries
                are still waiting for a reply.
              </p>

              <p>
                A dedicated communication system can organise messages by
                customer, project, status and priority. Each message can be
                assigned to a specific case, and the team can see what has
                already been done and what still requires action.
              </p>

              <p>
                Such a system can work together with CRM, online forms, PDF
                documents, dashboards and automation. A customer message can
                immediately create a ticket, update a status, assign a task,
                send a confirmation or trigger the next workflow step.
              </p>

              <p>
                Communication can also be supported by AI — for example by
                summarising customer history, classifying a request, preparing a
                draft reply or searching for information in a knowledge base.
                The most important thing, however, is that AI works in the
                context of a specific process, not as a disconnected chatbot.
              </p>

              <div className="service-detail-list-block">
                <h3>What can a customer communication system include?</h3>

                <ul>
                  <li>Communication history assigned to a customer or case</li>
                  <li>Ticket, status and priority system</li>
                  <li>Assigning messages to employees or departments</li>
                  <li>Automatic confirmations and email notifications</li>
                  <li>Integration with online forms and CRM</li>
                  <li>Internal notes and visibility of action history</li>
                  <li>Reply templates and structured customer service workflow</li>
                  <li>Dashboards showing case volume and response time</li>
                  <li>AI supporting message analysis and draft replies</li>
                  <li>Connection with documents, tasks and reports</li>
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
            Do you want to organise customer communication in one system?
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

export default EnServiceKomunikacjaZKlientami;