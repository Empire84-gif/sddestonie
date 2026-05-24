import { Link } from "react-router-dom";

import heroBg from "../../assets/images/aidivider.png";
import aiServices from "../../assets/images/aiservices.png";

function EnServiceSystemyCrm() {
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
          <p className="service-detail-section__kicker">CRM systems</p>

          <h2>A CRM system adapted to the way your company works, not the other way around.</h2>

          <p className="service-detail-section__lead">
            We build custom CRM systems for companies that need more control
            over clients, leads, tasks, documents, communication and case
            statuses. Instead of implementing an off-the-shelf tool full of
            unnecessary features, we design the system around the company’s real
            process.
          </p>

          <p className="service-detail-section__lead">
            Such a CRM can connect the client database, online forms, enquiry
            handling, email system, PDF documents, contact history, tasks,
            reports, dashboards and automations in one organised working
            environment.
          </p>

          <div className="service-detail-content">
            <div className="service-detail-content__text">
              <h3>Why are companies moving away from ready-made CRM systems?</h3>

              <p>
                Many popular CRM systems look impressive in sales presentations,
                but in practice they quickly turn out to be overloaded with
                features the company never uses. Navigation becomes chaotic,
                employees do not know where to find specific options, and a
                simple process starts requiring several screens, tabs and
                settings.
              </p>

              <p>
                It is also common that the basic subscription looks attractive,
                but additional features are hidden behind extra subscriptions,
                user limits, paid integrations or separate modules. In the end,
                the company pays more and more, while still having to adapt its
                process to the limitations of a ready-made platform.
              </p>

              <p>
                A custom CRM works the other way around. It is a system designed
                around the company’s way of working, its team, customers and real
                workflow. The interface can be simple, fast and logical, and each
                screen can show only the information that is actually needed for
                everyday work.
              </p>

              <p>
                A custom CRM also gives much greater automation potential. The
                system can automatically generate documents, handle forms,
                assign leads, send messages, create statuses, analyse data,
                build dashboards, integrate with APIs and execute processes that
                mass-market SaaS platforms often cannot represent properly.
              </p>

              <p>
                Such a system becomes the company’s internal software — designed
                specifically for its operating model, processes, team and visual
                style. The company receives its own tool, room for further
                development and control over logic, appearance, features and
                source code.
              </p>

              <div className="service-detail-list-block">
                <h3>What can a custom CRM include?</h3>

                <ul>
                  <li>Client, company, contact and lead database</li>
                  <li>Sales, project and customer service statuses</li>
                  <li>Contact history, notes and assigned tasks</li>
                  <li>Online forms saving data directly into the CRM</li>
                  <li>Automatic generation of offers, contracts and PDF documents</li>
                  <li>Email system with message assignment to clients</li>
                  <li>Dashboards, reports and team activity statistics</li>
                  <li>User roles, permissions and an admin panel</li>
                  <li>Notifications, reminders and automatic statuses</li>
                  <li>API integrations with the company’s external tools</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail-cta">
        <div className="service-detail-cta__inner">
          <p className="service-detail-section__kicker">Next step</p>

          <h2>Do you want a CRM that truly fits your company’s process?</h2>

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

export default EnServiceSystemyCrm;