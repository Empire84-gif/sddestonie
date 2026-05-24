import heroBg from "../assets/images/aidivider.png";
import aiServices from "../assets/images/aiservices.png";

import EnServicesListSection from "../components/sections/EnServicesListSection.jsx";
import EnTechnologyStackSection from "../components/sections/EnTechnologyStackSection.jsx";
import EnImplementationProcessSection from "../components/sections/EnImplementationProcessSection.jsx";
import EnServicesFinalCtaSection from "../components/sections/EnServicesFinalCtaSection.jsx";

function EnServicesPage() {
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
            <h1>Our services</h1>
          </div>

          <div className="services-hero__visual" aria-hidden="true">
            <img src={aiServices} alt="" />
          </div>
        </div>
      </section>

      <EnServicesListSection />
      <EnTechnologyStackSection />
      <EnImplementationProcessSection />
      <EnServicesFinalCtaSection />
    </main>
  );
}

export default EnServicesPage;