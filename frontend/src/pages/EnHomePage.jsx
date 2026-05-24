import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import heroMain from "../assets/images/hero-main.png";

import logoBadge from "../assets/images/logo.png";
import madeInEstoniaBadge from "../assets/images/madeinestonia-en.png";
import saasBadge from "../assets/images/saas-en.png";
import aiReadyBadge from "../assets/images/aiready-en.png";
import supportBadge from "../assets/images/support-en.png";
import europeanQualityBadge from "../assets/images/europeanquality.png";

import EnAboutSection from "../components/sections/EnAboutSection.jsx";
import EnWhyWorkWithUsSection from "../components/sections/EnWhyWorkWithUsSection.jsx";
import TechMarqueeSection from "../components/sections/TechMarqueeSection.jsx";
import EnFounderSection from "../components/sections/EnFounderSection.jsx";
import EnAutomationAreasSection from "../components/sections/EnAutomationAreasSection.jsx";
import EnProcessSystemsSection from "../components/sections/EnProcessSystemsSection.jsx";
import EnAiDividerSection from "../components/sections/EnAiDividerSection.jsx";
import EnContactSection from "../components/sections/EnContactSection.jsx";

function EnHomePage() {
  console.log("RENDER: EnHomePage");

  const badges = [
    {
      src: logoBadge,
      alt: "SDE",
      className: "home-hero__badge--logo",
    },
    {
      src: madeInEstoniaBadge,
      alt: "Made in Estonia",
    },
    {
      src: saasBadge,
      alt: "Custom SaaS and CRM",
    },
    {
      src: aiReadyBadge,
      alt: "AI-ready systems",
    },
    {
      src: supportBadge,
      alt: "Long-term support",
    },
    {
      src: europeanQualityBadge,
      alt: "European Quality",
    },
  ];

  const location = useLocation();

  useEffect(() => {
    const targetId = location.state?.scrollTo;

    if (!targetId) return;

    const timeout = setTimeout(() => {
      const el = document.getElementById(targetId);

      if (!el) return;

      const offset = 60;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }, 160);

    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      <section className="home-hero">
        <div className="home-hero__image" aria-hidden="true">
          <img src={heroMain} alt="" />
        </div>

        <div className="container home-hero__inner">
          <div className="home-hero__content">
            <p className="home-hero__kicker">
              SDE · Custom Software · SaaS · CRM · AI Automation
            </p>

            <h1>Custom business systems for modern companies</h1>

            <p className="home-hero__text">
              We build custom SaaS platforms, CRM systems, admin panels,
              process automation tools, document generators and practical AI
              integrations tailored to the way your company actually works. Our
              mission is to support business growth through technology that is
              useful, structured and built for real workflows.
            </p>

            <div className="home-hero__actions">
              <Link
                to="/describe-project"
                className="hero-btn hero-btn--primary"
              >
                Let’s discuss your project
                <ArrowRight size={17} strokeWidth={2} />
              </Link>

              <Link to="/services" className="hero-btn hero-btn--secondary">
                Our services
              </Link>
            </div>

            <div className="home-hero__badges" aria-label="SDE trust badges">
              {badges.map((badge) => (
                <div
                  className={`home-hero__badge ${badge.className || ""}`}
                  key={badge.alt}
                >
                  <img src={badge.src} alt={badge.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <TechMarqueeSection />
      </section>

      <EnAboutSection />
      <EnWhyWorkWithUsSection />
      <EnFounderSection />
      <EnAutomationAreasSection />
      <EnAiDividerSection />
      <EnProcessSystemsSection />
      <EnContactSection />
    </>
  );
}

export default EnHomePage;