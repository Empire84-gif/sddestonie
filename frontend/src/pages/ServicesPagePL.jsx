import heroBg from "../assets/images/aidivider.png";
import aiServices from "../assets/images/aiservices.png";

import ServicesListSection from "../components/sections/ServicesListSection.jsx";
import TechnologyStackSection from "../components/sections/TechnologyStackSection.jsx";
import ImplementationProcessSection from "../components/sections/ImplementationProcessSection.jsx";
import ServicesFinalCtaSection from "../components/sections/ServicesFinalCtaSection.jsx";

function ServicesPage() {
  return (
    <main>
      <section className="services-hero">
        <img className="services-hero__bg" src={heroBg} alt="" aria-hidden="true" />

        <div className="services-hero__inner container">
          <div className="services-hero__content">
            <h1>Nasze usługi</h1>
          </div>

          <div className="services-hero__visual" aria-hidden="true">
            <img src={aiServices} alt="" />
          </div>
        </div>
        <ServicesListSection />
        <TechnologyStackSection />
        <ImplementationProcessSection />
        <ServicesFinalCtaSection />
      </section>
    </main>
  );
}

export default ServicesPage;