import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";

import heroBg from "../assets/images/aidivider.png";
import aiServices from "../assets/images/aiservices.png";
import automatedCrmPreview from "../assets/images/projects-automated-crm.png";
import internalCrmPreview from "../assets/images/projects-internal-crm.png";
import crmWorkflowPreview from "../assets/images/projects-crm-workflow.png";
import alifioPreview from "../assets/images/projects-alifio-booking.png";
import alifioAssistantPreview from "../assets/images/projects-alifio-assistant.png";

const projects = [
  {
    kicker: "Implementation example",
    title: "Automated CRM and customer management system",
    label: "System panel",
    image: automatedCrmPreview,
    intro: [
      "This system was designed for a Polish client as a fully automated environment for managing customers, orders, communication and data processing from online forms and other input sources.",
      "The platform combines CRM, operational management, workflow automation, email communication, payment handling and document generation in one central working environment.",
      "The main goal of the system is to reduce manual work as much as possible and automatically take over processes that are still handled manually in many companies — from copying data from forms, creating customer records and order numbers, to sending documents, reminders and email communication.",
    ],
    beforeImage: [
      {
        title: "Automatic data processing",
        text: "The system starts working at the online form stage on the client's website. Data submitted by users is automatically collected and processed according to predefined business rules.",
        items: [
          "automatically create or update customer records",
          "assign order, request or booking numbers",
          "assign statuses and workflow stages",
          "generate operational tasks",
          "trigger automation processes",
          "create documents and confirmations",
          "assign data to the right departments or users",
        ],
      },
      {
        title: "Advanced email communication system",
        text: "One of the key elements of the solution is an advanced email communication system integrated directly with the platform logic.",
        items: [
          "request confirmations",
          "status messages",
          "reminders",
          "payment information",
          "PDF documents",
          "invoices",
          "marketing messages",
          "operational communication",
        ],
      },
    ],
    afterImage: [
      {
        title: "Actions performed directly from email messages",
        text: "Communication is not one-way. The platform also allows specific actions to be performed directly from email messages.",
        items: [
          "withdrawing marketing consents independently",
          "updating selected data",
          "confirming or rejecting actions",
          "moving through the next stages of the process",
          "performing actions without logging into a separate panel",
        ],
      },
      {
        title: "SMS, payments and financial processes",
        text: "The platform can be extended with an SMS module, payment handling and automatic generation of financial documents.",
        items: [
          "SMS reminders",
          "status notifications",
          "codes or confirmations",
          "automatic messages related to the customer's process",
          "invoices",
          "confirmations",
          "settlements",
          "financial reports",
        ],
      },
      {
        title: "Documents, integrations and scalability",
        text: "A major advantage of the solution is the ability to automatically generate documents based on data already stored in the system. The platform can be adapted to the company's individual operating process and extended with additional features, integrations and automations.",
        items: [
          "CRM",
          "ERP",
          "payment systems",
          "mailing tools",
          "external APIs",
          "dashboards",
          "reporting platforms",
          "AI tools supporting data analysis or communication",
        ],
      },
      {
        title: "Data export",
        text: "An important part of the system is also the ability to export data into formats required by the client or the company's operational process.",
        items: [
          "CSV",
          "Excel",
          "PDF",
          "JSON",
          "custom reports",
          "dedicated import files for other systems",
        ],
      },
    ],
    result:
      "The greatest value of this solution is full process automation, the reduction of errors caused by manual work and the creation of one structured environment that integrates forms, communication, documents, payments and customer data in a single system. The company gains greater control over its processes, faster customer service and the ability to scale operations without proportionally increasing the number of manual tasks performed by the team.",
  },
  {
    kicker: "Internal business system",
    title: "Company dashboard and internal CRM system",
    label: "Internal CRM dashboard",
    image: internalCrmPreview,
    intro: [
      "This system was designed as an internal company management center, combining CRM, operational panel, document system, email, tasks, projects and reporting in one environment.",
      "Its purpose is to organize the company's daily work and reduce the need to use many separate tools at the same time.",
      "The platform allows the company to manage customers, contact history, documents, offers, invoices, payments, tasks and projects from one panel.",
    ],
    beforeImage: [
      {
        title: "Company operational center",
        text: "All key operational data is kept in one place, allowing the team to find information faster, control statuses and manage ongoing customer service more effectively.",
        items: [
          "customer and contact database",
          "document module",
          "offer and invoice generator",
          "payment register",
          "project module",
          "task module",
        ],
      },
      {
        title: "Documents and communication",
        text: "The system organizes documents and customer communication directly inside the company panel, without the need to work across many scattered tools.",
        items: [
          "offers, invoices, contracts and reports",
          "automatic use of customer data in documents",
          "internal email system",
          "assigning messages to customers or projects",
          "statuses, archiving and contact history",
        ],
      },
    ],
    afterImage: [
      {
        title: "Dashboard and reporting",
        text: "The dashboard makes it possible to monitor basic company information and current operational activities.",
        items: [
          "number of customers",
          "number of documents",
          "payment statuses",
          "active projects",
          "team tasks",
          "analytics views tailored to the company",
        ],
      },
      {
        title: "Login and settings",
        text: "The system can support user accounts, a settings panel and access control for selected modules.",
        items: [
          "user login",
          "settings panel",
          "roles and permissions",
          "data access control",
          "configuration of company modules",
        ],
      },
      {
        title: "System expansion",
        text: "The platform can be developed step by step — from a simple CRM and document system, through an email center and payments, to automation and AI modules.",
        items: [
          "workflow automations",
          "PDF generation",
          "API integrations",
          "AI modules for data analysis",
          "customer service support",
          "team work organization",
        ],
      },
    ],
    result:
      "The greatest value of this solution is the centralization of data and processes. Instead of managing customers in one place, documents in another, payments in spreadsheets and communication in an email inbox, the company receives one consistent environment that organizes daily work and provides greater control over operations.",
  },
  {
    kicker: "Custom CRM",
    title: "Custom CRM and workflow management system",
    label: "CRM and workflow dashboard",
    image: crmWorkflowPreview,
    intro: [
      "This system was designed as a custom CRM environment for managing customer relationships, sales processes, communication and the company's daily work organization.",
      "Its goal is not only to store customer data, but to organize the entire operational workflow in one central system.",
      "The platform combines the functions of a classic CRM, an operational panel, a document system and a tool for automating business processes.",
    ],
    beforeImage: [
      {
        title: "For companies that want to organize their work",
        text: "The system was created for companies that lose time on manual tasks, work across many separate tools and need their own environment tailored to the company's real process.",
        items: [
          "reducing manual data entry",
          "replacing Excel sheets and scattered tools",
          "organizing communication and statuses",
          "automating daily operations",
          "a dedicated working environment tailored to the company",
        ],
      },
      {
        title: "Process handling from lead to delivery",
        text: "The CRM supports the full process from the first customer contact to project delivery or sale completion.",
        items: [
          "collecting data from online forms",
          "handling email messages",
          "automatic creation of customer records",
          "assigning statuses",
          "generating tasks",
          "organizing the team's work pipeline",
        ],
      },
    ],
    afterImage: [
      {
        title: "System modules",
        text: "Built-in modules allow the company to manage customers, projects, documents, tasks and communication in one place.",
        items: [
          "lead and customer management",
          "sales pipeline",
          "projects and tasks",
          "email communication",
          "PDF documents",
          "offers, reports and contracts",
          "statuses and delivery stages",
          "tasks assigned to users",
        ],
      },
      {
        title: "Login, users and permissions",
        text: "The system includes user accounts and login functionality, allowing each team member to work in their own environment with the right level of access.",
        items: [
          "employee accounts",
          "user roles",
          "module permissions",
          "limiting customer visibility",
          "access control for projects",
          "secure team collaboration",
        ],
      },
      {
        title: "Possibility of further development",
        text: "The platform can grow together with the company and be extended with additional integrations, automations and AI modules.",
        items: [
          "API integrations",
          "online payments",
          "dashboards and analytics",
          "AI modules supporting customer service",
          "automatic response generation",
          "lead classification",
          "workflow automation",
          "ticketing system or helpdesk",
        ],
      },
    ],
    result:
      "The greatest value for the company is reducing operational chaos and centralizing data and processes in one place. Instead of switching between emails, documents, spreadsheets and messengers, the team works in one structured environment adapted to the company's real operating model. It is a dedicated system built around a specific business process, which can grow together with the company and its needs.",
  },
  {
    kicker: "SaaS booking system",
    title: "Alifio online booking platform",
    label: "Booking system dashboard",
    image: alifioPreview,
    intro: [
      "Alifio was designed as a modern SaaS online booking system created primarily for the Polish market and service-based companies operating with appointment scheduling.",
      "The platform was built for salons, clinics, service points and companies that need a structured and fully automated environment for managing bookings, customers, staff and communication.",
      "The system works as a dedicated installation for each client, which means it can be adapted to the company's specific work model, service process and visual identity.",
    ],
    beforeImage: [
      {
        title: "Online booking on the client's website",
        text: "Alifio integrates directly with the client's website through a button or online booking module. The end user can independently choose a service, appointment time and employee.",
        items: [
          "booking button or module on the client's website",
          "independent service selection",
          "selection of appointment time and employee",
          "process without manual staff handling",
          "dedicated installation for each client",
        ],
      },
      {
        title: "Automatic calendar management",
        text: "One of the key elements of the platform is intelligent calendar and availability management. The system automatically organizes the schedule based on the service point configuration.",
        items: [
          "employee schedules",
          "staff availability",
          "service duration",
          "breaks",
          "days off",
          "time restrictions",
          "business configuration of the service point",
        ],
      },
    ],
    afterImage: [
      {
        title: "Email and SMS communication",
        text: "The platform includes an advanced email communication system and can be extended with an SMS notification module.",
        items: [
          "booking confirmations",
          "appointment reminders",
          "status changes",
          "organizational communication",
          "marketing messages",
          "sending documents and operational information",
          "SMS notifications about appointments and schedule changes",
        ],
      },
      {
        title: "Consents, data and automation",
        text: "Alifio supports data automation and marketing consent management. The platform can automatically update user consent statuses based on actions performed directly from email messages.",
        items: [
          "automatic update of marketing consents",
          "data synchronization without manual handling",
          "customer data management",
          "automatic employee records",
          "schedule organization",
        ],
      },
      {
        title: "Employee accounts and permissions",
        text: "The solution includes an advanced user and permissions system. Each employee can have their own account with an individual access scope.",
        items: [
          "limiting data visibility",
          "assigning employees to specific services",
          "schedule management",
          "defining roles and permissions",
          "access control for administrative modules",
        ],
      },
      {
        title: "Chatbot and visual personalization",
        text: "An important part of the system is the built-in chatbot supporting the appointment booking process and the ability to adapt the platform's appearance to the client's visual identity.",
        items: [
          "chatbot supporting appointment booking",
          "answers to basic questions",
          "guiding customers to the right appointment times or services",
          "global accent color change",
          "visual personalization for the client's brand",
        ],
      },
    ],
    result:
      "The greatest value of this solution is the full automation of the booking process and the centralization of all key elements of a service-based company in one environment. Instead of manually managing the calendar, messages, reminders and staff availability, the company receives a system that organizes the customer service process automatically, reduces manual work and allows the business to scale without proportionally increasing the workload of the team.",
  },
  {
    kicker: "Booking assistant",
    title: "Alifio booking assistant",
    label: "Assistant interface",
    image: alifioAssistantPreview,
    variant: "portrait",
    intro: [
      "This project presents an automatic booking assistant built into the Alifio system. The assistant was designed as part of the appointment booking process, not as a simple marketing chatbot.",
      "Its role is to guide the user through the booking, help with choosing a service, find an available appointment time and reduce the number of repetitive questions sent to staff.",
      "As a result, the service point can handle more inquiries automatically, while the customer receives a simpler and more intuitive way to move through the booking process.",
    ],
    beforeImage: [
      {
        title: "Assistant as part of the booking process",
        text: "The assistant works inside the booking system and guides the user step by step through the most important decisions.",
        items: [
          "support with choosing a service",
          "guidance through available appointment times",
          "directing the customer to the right employee",
          "answers to basic questions",
          "reducing the number of manual messages sent to staff",
        ],
      },
      {
        title: "Support for the end customer",
        text: "The user does not need to analyze the entire system alone or search for information in many places. The assistant helps them move through the process faster and more comfortably.",
        items: [
          "simpler appointment selection",
          "fewer abandoned bookings",
          "clear step-by-step communication",
          "more intuitive process for the customer",
          "automatic guidance to the next stage",
        ],
      },
    ],
    afterImage: [
      {
        title: "Benefit for the service company",
        text: "The assistant reduces the team's workload from repetitive questions and helps maintain a smooth booking process.",
        items: [
          "less manual replying",
          "faster customer service",
          "greater availability outside business hours",
          "better organization of the booking process",
          "possibility of further automation development",
        ],
      },
      {
        title: "Integration with the Alifio system",
        text: "The assistant can be connected with services, employees, the calendar, availability and email or SMS communication.",
        items: [
          "calendar integration",
          "employee availability",
          "service list",
          "email notifications",
          "possibility to extend with SMS",
          "shared data with the booking system",
        ],
      },
    ],
    result:
      "The greatest value of this solution is the combination of online booking with intelligent guidance through the process. The company receives not only a calendar, but also an assistant that helps customers find the right appointment faster, reduces the number of manual messages and increases the automation of customer service.",
  },
];

function EnProjectsPage() {
  useEffect(() => {
    document.body.classList.add("projects-page-active");

    return () => {
      document.body.classList.remove("projects-page-active");
    };
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  const activeProject = projects[activeIndex];

  const goPrev = () => {
    setDirection("prev");
    setActiveIndex((current) =>
      current === 0 ? projects.length - 1 : current - 1
    );
  };

  const goNext = () => {
    setDirection("next");
    setActiveIndex((current) =>
      current === projects.length - 1 ? 0 : current + 1
    );
  };

  return (
    <main>
      <section className="services-hero projects-hero">
        <img
          className="services-hero__bg"
          src={heroBg}
          alt=""
          aria-hidden="true"
        />

        <div className="services-hero__inner container">
          <div className="services-hero__content">
            <h1>Projects</h1>
          </div>

          <div className="services-hero__visual" aria-hidden="true">
            <img src={aiServices} alt="" />
          </div>
        </div>
      </section>

      <section className="projects-showcase-section">
        <div className="projects-showcase-section__inner">
          <div className="projects-showcase-section__nav">
            <button type="button" onClick={goPrev}>
              <ArrowLeft size={17} />
              Prev
            </button>

            <span>
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(projects.length).padStart(2, "0")}
            </span>

            <button type="button" onClick={goNext}>
              Next
              <ArrowRight size={17} />
            </button>
          </div>

          <article
            key={activeProject.title}
            className={`projects-showcase-section__slide is-${direction}`}
          >
            <div className="projects-showcase-section__top">
              <p className="projects-showcase-section__kicker">
                {activeProject.kicker}
              </p>

              <h2>{activeProject.title}</h2>

              <div className="projects-showcase-section__lead">
                {activeProject.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="projects-showcase-section__blocks">
                {activeProject.beforeImage.map((block) => (
                  <div
                    className="projects-showcase-section__block"
                    key={block.title}
                  >
                    <h3>{block.title}</h3>
                    <p>{block.text}</p>

                    <ul>
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="projects-showcase-section__continue">
                <span>Full description continues below the image</span>
                <ArrowDown size={18} />
              </div>
            </div>

            <div
              className={`projects-showcase-section__preview ${
                activeProject.variant === "portrait" ? "is-portrait" : ""
              }`}
            >
              <h3>{activeProject.label}</h3>

              <div className="projects-showcase-section__image">
                <img src={activeProject.image} alt={activeProject.label} />
              </div>
            </div>

            <div className="projects-showcase-section__after">
              <div className="projects-showcase-section__blocks">
                {activeProject.afterImage.map((block) => (
                  <div
                    className="projects-showcase-section__block"
                    key={block.title}
                  >
                    <h3>{block.title}</h3>
                    <p>{block.text}</p>

                    <ul>
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="projects-showcase-section__result">
                <h3>Implementation outcome</h3>
                <p>{activeProject.result}</p>
              </div>

              <div className="projects-showcase-section__cta">
                <p>Would you like a similar system for your company?</p>

                <Link to="/en" state={{ scrollTo: "kontakt" }}>
                  Let’s talk about your project
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default EnProjectsPage;