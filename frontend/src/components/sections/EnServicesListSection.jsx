import { useEffect } from "react";
import { Link } from "react-router-dom";

import photo01 from "../../assets/images/photo01.png";
import photo02 from "../../assets/images/photo02.png";
import photo03 from "../../assets/images/photo03.png";
import photo04 from "../../assets/images/photo04.png";
import photo05 from "../../assets/images/photo05.png";
import photo06 from "../../assets/images/photo06.png";
import photo07 from "../../assets/images/photo07.png";
import photo08 from "../../assets/images/photo08.png";
import photo09 from "../../assets/images/photo09.png";
import photo10 from "../../assets/images/photo10.png";
import photo11 from "../../assets/images/photo11.png";
import photo12 from "../../assets/images/photo12.png";
import photo13 from "../../assets/images/photo13.png";
import photo14 from "../../assets/images/photo14.png";

const services = [
  [
    "01",
    "bi-arrow-repeat",
    "Automation",
    "Task and process automation",
    "We automate repetitive tasks that take time away from your team: copying data, sending messages, creating documents, reminders, statuses, form handling and information flow.",
    "task-automation",
    photo01,
  ],
  [
    "02",
    "bi-stars",
    "AI Workflow",
    "AI-integrated systems",
    "We implement AI as part of real company workflows: document analysis, request summaries, missing data detection, enquiry classification and draft replies prepared for approval.",
    "ai-systems",
    photo02,
  ],
  [
    "03",
    "bi-people",
    "CRM",
    "Custom CRM systems",
    "We build CRM systems tailored to your company: customer database, contact history, notes, tasks, statuses, documents, follow-ups, payments, projects and admin panels.",
    "crm-systems",
    photo03,
  ],
  [
    "04",
    "bi-window-stack",
    "SaaS",
    "Web applications and SaaS platforms",
    "We build browser-based applications: client portals, admin panels, ticketing systems, operational tools, login-based platforms, dashboards and complete SaaS products.",
    "saas-applications",
    photo04,
  ],
  [
    "05",
    "bi-file-earmark-plus",
    "PDF / Documents",
    "Document generators",
    "We create tools that generate contracts, offers, invoices, reports, CVs, PDF forms and company documents based on data from forms, CRM systems or databases.",
    "document-generators",
    photo05,
  ],
  [
    "06",
    "bi-layout-text-window",
    "Forms",
    "Data collection systems",
    "We design online forms, step-by-step forms and request systems that collect data, validate information, save records in a database and trigger automated actions.",
    "data-collection-systems",
    photo06,
  ],
  [
    "07",
    "bi-envelope-check",
    "Communication",
    "Customer communication systems",
    "We improve customer communication: automated messages, enquiry routing, reply templates, integrations with email, forms, CRM systems and team notifications.",
    "customer-communication",
    photo07,
  ],
  [
    "08",
    "bi-person-lines-fill",
    "AI Assistant",
    "AI Lead Assistant",
    "We create assistants that help turn messages and forms into structured leads, tasks, notes, priorities and suggested next steps for your team.",
    "ai-lead-assistant",
    photo08,
  ],
  [
    "09",
    "bi-chat-dots",
    "Chatbots",
    "Chatbots and rule-based assistants",
    "We build predictable chatbots and non-AI assistants based on scenarios, choices, buttons and conversational forms that guide customers step by step.",
    "chatbots-and-assistants",
    photo09,
  ],
  [
    "10",
    "bi-database",
    "Data",
    "Databases and migrations",
    "We design database structures, migrate data from Excel and CSV files, organise records, reduce duplicates and prepare a foundation for further business automation.",
    "databases-and-migrations",
    photo10,
  ],
  [
    "11",
    "bi-bar-chart-line",
    "Dashboards",
    "Reports and dashboards",
    "We create statistics panels, operational reports and management views that show key information without manually combining data from many files and messages.",
    "reports-and-dashboards",
    photo11,
  ],
  [
    "12",
    "bi-search",
    "Monitoring",
    "Web scraping and data monitoring",
    "We automatically collect and monitor public web data: prices, offers, availability changes, market information, product lists and other data needed for business decisions.",
    "web-scraping-and-data-monitoring",
    photo12,
  ],
  [
    "13",
    "bi-folder2-open",
    "Documentation",
    "Documentation management",
    "We build systems for storing, searching, categorising and controlling company documents, with user permissions, change history and links to clients or projects.",
    "documentation-management",
    photo13,
  ],
  [
    "14",
    "bi-lightbulb",
    "Digitalisation",
    "Digitalisation consulting",
    "We help analyse how your company works, identify processes suitable for automation and plan the implementation of digital tools step by step — from a simple MVP to a complex system.",
    "digitalisation-consulting",
    photo14,
  ],
];

function EnServicesListSection() {
  const basePath = "/services";

  useEffect(() => {
    document.body.classList.add("animations-ready");

    const rows = document.querySelectorAll(".service-row");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.style.setProperty("--reveal-delay", `${index * 60}ms`);
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    rows.forEach((row) => observer.observe(row));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="services-section">
      <div className="container">
        <div className="services-intro">
          <p className="section-kicker">Service scope</p>

          <h2>
            Our services are for companies that want to implement AI in everyday
            workflows or improve operations that currently take too much time.
          </h2>

          <p>
            We do not work from generic templates. Every project is built from
            the ground up — starting from a blank page — so the system fits the
            way your company works, its data, documents and processes. You
            receive a dedicated premium solution designed around specific
            organisational needs, with room for future modules, integrations,
            automation and AI features.
          </p>
        </div>

        <div className="services-list">
          {services.map(
            ([number, icon, label, title, text, slug, photo], index) => (
              <article
                className={`service-row ${
                  index % 2 === 0 ? "from-left" : "from-right"
                }`}
                key={number}
              >
                <div className="service-number">{number}</div>

                <div className="service-content">
                  <p className="service-label">
                    <i className={`bi ${icon}`} aria-hidden="true" />
                    {label}
                    <span className="service-mobile-number">{number}</span>
                  </p>

                  <h2 className="service-title">{title}</h2>
                  <p className="service-text">{text}</p>
                </div>

                <Link to={`${basePath}/${slug}`} className="service-action">
                  Learn more
                  <i className="bi bi-arrow-right" aria-hidden="true" />
                </Link>

                <div className="service-photo" aria-hidden="true">
                  <img src={photo} alt="" loading="lazy" />
                </div>
              </article>
            )
          )}
        </div>

        <div className="services-bottom-action">
          <Link
            to="/"
            state={{ scrollTo: "kontakt" }}
            className="services-bottom-action__button"
          >
            Contact us
          </Link>

          <Link
            to="/"
            state={{ scrollTo: "problems" }}
            className="services-bottom-action__button services-bottom-action__button--light"
          >
            Implementation examples
          </Link>
        </div>
      </div>
    </section>
  );
}

export default EnServicesListSection;