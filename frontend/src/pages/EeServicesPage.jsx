import heroBg from "../assets/images/aidivider.png";
import aiServices from "../assets/images/aiservices.png";

import EeServicesListSection from "../components/sections/EeServicesListSection.jsx";
import EeTechnologyStackSection from "../components/sections/EeTechnologyStackSection.jsx";
import EeImplementationProcessSection from "../components/sections/EeImplementationProcessSection.jsx";
import EeServicesFinalCtaSection from "../components/sections/EeServicesFinalCtaSection.jsx";

function EeServicesPage() {
  return (
    <main>
      <section className="services-hero">
        <img
          className="services-hero__bg"
          src={heroBg}
          alt=""
          aria-hidden="true"
        />

        <div className="services-hero__inner container">
          <div className="services-hero__content">
            <h1>Meie teenused</h1>
          </div>

          <div className="services-hero__visual" aria-hidden="true">
            <img src={aiServices} alt="" />
          </div>
        </div>
      </section>

      <EeServicesListSection />
      <EeTechnologyStackSection />
      <EeImplementationProcessSection />
      <EeServicesFinalCtaSection />
    </main>
  );
}

export default EeServicesPage;