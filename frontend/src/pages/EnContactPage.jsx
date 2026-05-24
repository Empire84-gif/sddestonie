import heroBg from "../assets/images/aidivider.png";
import aiServices from "../assets/images/aiservices.png";

import EnContactSection from "../components/sections/EnContactSection.jsx";

function EnContactPage() {
  return (
    <main className="contact-page">
      <section className="services-hero contact-page-hero">
        <img
          className="services-hero__bg"
          src={heroBg}
          alt=""
          aria-hidden="true"
        />

        <div className="services-hero__inner container">
          <div className="services-hero__content">
            <h1>Contact</h1>
          </div>

          <div className="services-hero__visual" aria-hidden="true">
            <img src={aiServices} alt="" />
          </div>
        </div>
      </section>

      <EnContactSection />
    </main>
  );
}

export default EnContactPage;