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

import EeAboutSection from "../components/sections/EeAboutSection.jsx";
import EeWhyWorkWithUsSection from "../components/sections/EeWhyWorkWithUsSection.jsx";
import TechMarqueeSection from "../components/sections/TechMarqueeSection.jsx";
import EeFounderSection from "../components/sections/EeFounderSection.jsx";
import EeAutomationAreasSection from "../components/sections/EeAutomationAreasSection.jsx";
import EeProcessSystemsSection from "../components/sections/EeProcessSystemsSection.jsx";
import EeAiDividerSection from "../components/sections/EeAiDividerSection.jsx";
import EeContactSection from "../components/sections/EeContactSection.jsx";

function EeHomePage() {
  console.log("RENDER: EeHomePage");

  const badges = [
    {
      src: logoBadge,
      alt: "SDE",
      className: "home-hero__badge--logo",
    },
    {
      src: madeInEstoniaBadge,
      alt: "Loodud Eestis",
    },
    {
      src: saasBadge,
      alt: "Kohandatud SaaS ja CRM",
    },
    {
      src: aiReadyBadge,
      alt: "AI-toega süsteemid",
    },
    {
      src: supportBadge,
      alt: "Pikaajaline tugi",
    },
    {
      src: europeanQualityBadge,
      alt: "Euroopa kvaliteet",
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
              SDE · Kohandatud tarkvara · SaaS · CRM · AI-automaatika
            </p>

            <h1>Kaasaegsetele ettevõtetele kohandatud IT-süsteemid</h1>

            <p className="home-hero__text">
              Loome kohandatud SaaS-süsteeme, CRM-lahendusi, halduspaneele,
              protsesside automatiseerimist, dokumendigeneraatoreid ja
              praktilisi AI-integratsioone, mis on ehitatud teie ettevõtte
              tegeliku tööviisi ümber. Meie eesmärk on toetada ettevõtete kasvu
              tehnoloogiaga, mis päriselt töötab.
            </p>

            <div className="home-hero__actions">
              <Link
                to="/ee/kirjelda-projekti"
                className="hero-btn hero-btn--primary"
              >
                Räägime projektist
                <ArrowRight size={17} strokeWidth={2} />
              </Link>

              <Link to="/ee/teenused" className="hero-btn hero-btn--secondary">
                Meie teenused
              </Link>
            </div>

            <div className="home-hero__badges" aria-label="SDE usaldusmärgid">
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

      <EeAboutSection />
      <EeWhyWorkWithUsSection />
      <EeFounderSection />
      <EeAutomationAreasSection />
      <EeAiDividerSection />
      <EeProcessSystemsSection />
      <EeContactSection />
    </>
  );
}

export default EeHomePage;