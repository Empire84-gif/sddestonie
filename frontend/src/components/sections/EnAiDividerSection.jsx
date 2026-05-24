import aiDividerBg from "../../assets/images/aidivider.png";
import aiRobot from "../../assets/images/ai.png";

function EnAiDividerSection() {
  return (
    <section className="ai-divider-section">
      <img
        className="ai-divider-section__bg"
        src={aiDividerBg}
        alt=""
        aria-hidden="true"
      />

      <div className="container ai-divider-section__inner">
        <div className="ai-divider-section__robot" aria-hidden="true">
          <img src={aiRobot} alt="" />
        </div>

        <div className="ai-divider-section__content">
          <h2>
            <span>AI does not replace the process.</span>
            <strong>AI strengthens a well-designed workflow.</strong>
          </h2>
        </div>
      </div>
    </section>
  );
}

export default EnAiDividerSection;