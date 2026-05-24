import aiDividerBg from "../../assets/images/aidivider.png";
import aiRobot from "../../assets/images/ai.png";

function AiDividerSection() {
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
            <span>AI nie zastępuje procesu.</span>
            <strong>AI wzmacnia dobrze zaprojektowany workflow.</strong>
          </h2>
        </div>
      </div>
    </section>
  );
}

export default AiDividerSection;