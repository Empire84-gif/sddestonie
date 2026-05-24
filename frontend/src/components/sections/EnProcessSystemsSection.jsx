import { AlertTriangle, Wrench } from "lucide-react";

import problem01 from "../../assets/images/problem-01.png";
import problem02 from "../../assets/images/problem-02.png";
import problem03 from "../../assets/images/problem-03.png";
import problem04 from "../../assets/images/problem-04.png";
import problem05 from "../../assets/images/problem-05.png";
import problem06 from "../../assets/images/problem-06.png";
import problem07 from "../../assets/images/problem-07.png";
import problem08 from "../../assets/images/problem-08.png";

const cases = [
  {
    number: "01",
    title: "Manual data entry",
    image: problem01,
    alt: "Automating manual data entry",
    problem:
      "The company collects data from forms, emails and Excel sheets. Employees have to manually copy the same information into documents, registers and internal reports.",
    solution:
      "We implement online forms connected to a central database, automated information flow and PDF document generation.",
    result:
      "Data is entered once, goes directly into the system and the team reduces manual copying and the number of errors.",
  },
  {
    number: "02",
    title: "Chaos in customer service",
    image: problem02,
    alt: "CRM system and customer service",
    problem:
      "Customer information is scattered across email inboxes, notes, spreadsheets, employee messages and local files.",
    solution:
      "We design a CRM tailored to the company’s process: customer database, statuses, contact history, notes, tasks, documents and dashboards.",
    result:
      "The team has one place for customer service, follow-ups, current cases and the full history of cooperation.",
    reverse: true,
  },
  {
    number: "03",
    title: "Repeated customer questions",
    image: problem03,
    alt: "Automated assistant and chatbot",
    problem:
      "Customers often ask the same questions or send incomplete enquiries, so the team has to ask for basic information again and again.",
    solution:
      "We create assistants, step-by-step forms or scenario-based chatbots that guide users and collect complete information.",
    result:
      "The company receives better prepared enquiries, while customer service becomes faster and more organised.",
  },
  {
    number: "04",
    title: "Slow offer preparation",
    image: problem04,
    alt: "Offer and PDF document generator",
    problem:
      "Preparing an offer requires copying customer data, service descriptions, prices, scope of work and cooperation terms.",
    solution:
      "We implement an offer generator with service modules, numbering, customer data, value summaries and PDF export.",
    result:
      "A professional offer can be created in minutes, without manually building the document from scratch.",
    reverse: true,
  },
  {
    number: "05",
    title: "Lack of control over documents",
    image: problem05,
    alt: "Document register and documentation management",
    problem:
      "Documents are stored in different folders, email messages, employee computers or manual registers.",
    solution:
      "We build a document register with categories, clients, dates, numbering, statuses and the ability to generate files directly from the system.",
    result:
      "Documentation becomes organised, easy to find and connected with clients and company processes.",
  },
  {
    number: "06",
    title: "Too many messages to analyse",
    image: problem06,
    alt: "AI for analysing messages and requests",
    problem:
      "The company receives many messages and requests, but it is difficult to quickly assess which ones are urgent and who should handle them.",
    solution:
      "We implement an AI module that analyses message content and recognises the topic, priority and type of case.",
    result:
      "The team understands requests faster, sets priorities more effectively and responds more efficiently.",
    reverse: true,
  },
  {
    number: "07",
    title: "Difficult document and request analysis",
    image: problem07,
    alt: "AI document and request analysis in CRM",
    problem:
      "Employees have to manually check the completeness of forms, documents, requests and attachments.",
    solution:
      "We integrate AI with the CRM so the system can indicate missing information, create summaries and suggest next steps.",
    result:
      "Request verification becomes faster, depends less on manual analysis and the workflow becomes more predictable.",
  },
  {
    number: "08",
    title: "Too much time spent on email replies",
    image: problem08,
    alt: "AI email assistant and reply automation",
    problem:
      "The team replies to dozens of similar messages and has to check the customer history every time.",
    solution:
      "We connect the CRM with an AI assistant that analyses the message, customer context and prepares a draft reply.",
    result:
      "Communication becomes faster, more consistent and less demanding in everyday work.",
    reverse: true,
  },
];

export default function EnProcessSystemsSection() {
  return (
    <section id="problems" className="problems-section">
      <div className="container">
        <div className="problems-head">
          <p className="section-kicker">Implementation examples</p>

          <h2>
            Problems we turn
            <br />
            into working systems
          </h2>

          <p>
            Every implementation starts with a specific business problem:
            manual work, scattered data, repeated messages, documents or
            processes that can be organised with technology, automation or AI.
          </p>
        </div>

        <div className="problem-cases">
          {cases.map((item) => (
            <article
              className={`problem-case ${item.reverse ? "reverse" : ""}`}
              key={item.number}
            >
              <div className="problem-case-text">
                <span className="problem-case-kicker">
                  Problem {item.number}
                </span>

                <h3>{item.title}</h3>

                <div className="problem-case-grid">
                  <div className="problem-block">
                    <span>
                      <AlertTriangle size={13} strokeWidth={1.8} />
                      Situation before implementation
                    </span>
                    <p>{item.problem}</p>
                  </div>

                  <div className="problem-block">
                    <span>
                      <Wrench size={13} strokeWidth={1.8} />
                      What we implement
                    </span>
                    <p>{item.solution}</p>
                  </div>
                </div>

                <div className="problem-result">
                  <strong>Business outcome</strong>
                  <p>{item.result}</p>
                </div>
              </div>

              <div className="problem-case-media">
                <img src={item.image} alt={item.alt} loading="lazy" />
                <span>{item.number}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}