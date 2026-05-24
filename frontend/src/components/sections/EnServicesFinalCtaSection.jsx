import { Link } from "react-router-dom";

function EnServicesFinalCtaSection() {
  return (
    <section className="services-final-cta-section">
      <div className="services-final-cta-section__inner container">
        <p className="services-final-cta-section__kicker">
          Next step
        </p>

        <h2>
          How much work in your company is still done manually,
          even though a system could handle it?
        </h2>

        <p className="services-final-cta-section__text">
          Forms, documents, emails, statuses, reports, data entry, manual CRM
          updates or managing processes in Excel — very often this is not a
          people problem, but the lack of a well-designed system.
          <br />
          <br />
          Tell us which process in your company takes the most time today.
          We are ready to review it and suggest a practical direction.
        </p>

        <div className="services-final-cta-section__actions">
          <Link
            to="/describe-project"
            className="services-final-cta-section__button services-final-cta-section__button--primary"
          >
            Describe a process to automate
          </Link>

          <Link
            to="/projects"
            className="services-final-cta-section__button services-final-cta-section__button--secondary"
          >
            Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

export default EnServicesFinalCtaSection;