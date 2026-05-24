import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import heroMain from "../assets/images/hero-main.png";

import logoBadge from "../assets/images/logo.png";
import madeInEstoniaBadge from "../assets/images/madeinestonia-pl.png";
import saasBadge from "../assets/images/saas-pl.png";
import aiReadyBadge from "../assets/images/aiready-pl.png";
import supportBadge from "../assets/images/support-pl.png";
import europeanQualityBadge from "../assets/images/europeanquality.png";

import AboutSection from "../components/sections/AboutSection.jsx";
import WhyWorkWithUsSection from "../components/sections/WhyWorkWithUsSection.jsx";
import TechMarqueeSection from "../components/sections/TechMarqueeSection.jsx";
import FounderSection from "../components/sections/FounderSection";
import AutomationAreasSection from "../components/sections/AutomationAreasSection";
import ProcessSystemsSection from "../components/sections/ProcessSystemsSection";
import AiDividerSection from "../components/sections/AiDividerSection";
import ContactSection from "../components/sections/ContactSection";

function HomePagePL() {
  console.log("RENDER: HomePagePL");
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
      alt: "Systemy ze wsparciem AI",
    },
    {
      src: supportBadge,
      alt: "Długofalowe wsparcie",
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

            <h1>Dedykowane systemy IT dla nowoczesnych firm</h1>

            <p className="home-hero__text">
              Tworzymy dedykowane systemy SaaS, CRM, panele administracyjne,
              automatyzacje procesów, generatory dokumentów oraz praktyczne
              integracje AI dopasowane do sposobu pracy Twojej firmy. Naszą
              misją jest wspierać rozwój firm poprzez technologię, która realnie
              działa.
            </p>

            <div className="home-hero__actions">
              <Link to="/pl/opisz-projekt" className="hero-btn hero-btn--primary">
                Porozmawiajmy o projekcie
                <ArrowRight size={17} strokeWidth={2} />
              </Link>

              <Link to="/pl/uslugi" className="hero-btn hero-btn--secondary">
                Nasze usługi
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

      <AboutSection />
      <WhyWorkWithUsSection />
      <FounderSection />
      <AutomationAreasSection />
      <AiDividerSection />
      <ProcessSystemsSection />
      <ContactSection />
    </>
  );
}

export default HomePagePL;