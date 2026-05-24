import { Link } from "react-router-dom";

import heroBg from "../../assets/images/aidivider.png";
import aiServices from "../../assets/images/aiservices.png";

function EnServiceSystemyAi() {
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
          <p className="service-detail-section__kicker">AI systems</p>

          <h2>
            AI as part of a real working system, not a separate technology
            without context.
          </h2>

          <p className="service-detail-section__lead">
            At SDE, we design systems where AI supports a specific business
            process: data analysis, enquiry handling, document work, customer
            communication, response preparation, information search or
            organising data from multiple sources.
          </p>

          <p className="service-detail-section__lead">
            We do not treat AI as a magic add-on to a website. It brings the
            most value when it is connected with CRM, forms, databases,
            documents, dashboards, email systems or the company’s internal
            workflow.
          </p>

          <div className="service-detail-content">
            <div className="service-detail-content__text">
              <h3>How can AI work inside a business system?</h3>

              <p>
                An AI-supported system can analyse customer messages, classify
                requests, suggest replies, summarise documents, extract data
                from files, support lead handling, assist sales teams, organise
                notes or prepare content based on data already stored in the
                system.
              </p>

              <p>
                The key is that AI needs access to the right context: customer
                data, communication history, project status, documents, notes,
                previous decisions and company rules. Only then can it genuinely
                help, instead of generating generic answers detached from the
                process.
              </p>

              <p>
                That is why we build solutions where AI is one module of a
                larger system. It can work as an internal assistant, document
                analysis module, customer support aid, knowledge base tool,
                automatic request classifier or part of a sales and
                administrative workflow.
              </p>

              <div className="service-detail-list-block">
                <h3>Example uses of AI in business systems</h3>

                <ul>
                  <li>AI assistant for customer service or sales teams</li>
                  <li>Analysis of messages, requests and online forms</li>
                  <li>Summaries of documents, emails, notes and customer history</li>
                  <li>Searching information in a company knowledge base</li>
                  <li>Classification of leads, enquiries and priorities</li>
                  <li>Generating draft replies and content</li>
                  <li>Analysis of CRM data, reports and dashboards</li>
                  <li>Automatic organisation of information from many sources</li>
                  <li>Support for administrative and document workflows</li>
                  <li>Integration of AI models with a custom SaaS or CRM system</li>
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
            Do you want to see where AI can genuinely help in your company?
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

export default EnServiceSystemyAi;