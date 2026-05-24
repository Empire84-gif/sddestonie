import process01 from "../../assets/images/proces01.png";
import process02 from "../../assets/images/proces02.png";
import process03 from "../../assets/images/proces03.png";
import process04 from "../../assets/images/proces04.png";

const processCards = [
  {
    image: process01,
    label: "Discovery",
    steps: [
      {
        number: "01",
        title: "Understanding the company process and problem",
        text: "We analyse the current way of working, repetitive tasks, manual data entry, documents, communication and the points where the process loses efficiency.",
      },
      {
        number: "02",
        title: "Proposed solution direction",
        text: "We define what type of system best fits the problem: CRM, admin panel, online form, document generator, API integration, automation or AI module.",
      },
    ],
  },
  {
    image: process02,
    label: "Scope",
    steps: [
      {
        number: "03",
        title: "Defining the first version",
        text: "We select the most important features for the first stage and define the data, user roles, documents, statuses and core workflow inside the system.",
      },
      {
        number: "04",
        title: "Application structure design",
        text: "We prepare the structure of views, forms, database, modules, permissions and system logic before the actual development begins.",
      },
    ],
  },
  {
    image: process03,
    label: "Build",
    steps: [
      {
        number: "05",
        title: "Building the system from scratch",
        text: "We build the frontend, backend, database, admin panel, automations, PDF generators, email/API integrations and AI elements if they are part of the scope.",
      },
      {
        number: "06",
        title: "Testing on real scenarios",
        text: "We test the system using examples from everyday work: customer, form, document, message, report, task, payment or another supported process.",
      },
    ],
  },
  {
    image: process04,
    label: "Launch",
    steps: [
      {
        number: "07",
        title: "Corrections and deployment",
        text: "After testing, we make the necessary corrections, prepare the production environment and launch the system according to the agreed project scope.",
      },
      {
        number: "08",
        title: "Further system development",
        text: "After the first version, the system can be expanded with additional modules: dashboards, CRM, email workflows, reports, payments, PDF documents, integrations or an AI assistant.",
      },
    ],
  },
];

function EnImplementationProcessSection() {
  return (
    <section className="implementation-process-section">
      <div className="implementation-process-section__inner container">
        <div className="implementation-process-section__head">
          <p>Implementation process</p>

          <h2>From a business problem to a working system.</h2>

          <p>
            We start by analysing the process, data and the way the company
            works.
            <br />
            Only then do we design the application structure, build the first
            version of the system, test it on real scenarios and expand it with
            further modules.
          </p>
        </div>

        <div className="implementation-process-grid">
          {processCards.map((card) => (
            <article className="implementation-process-card" key={card.label}>
              <img src={card.image} alt="" loading="lazy" />

              <div className="implementation-process-card__overlay">
                <span className="implementation-process-card__label">
                  {card.label}
                </span>

                <div className="implementation-process-card__steps">
                  {card.steps.map((step) => (
                    <div
                      className="implementation-process-step"
                      key={step.number}
                    >
                      <span>{step.number}</span>

                      <div>
                        <h3>{step.title}</h3>
                        <p>{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EnImplementationProcessSection;