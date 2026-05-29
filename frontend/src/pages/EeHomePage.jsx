import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import heroMain from "../assets/images/hero-main.png";
import heroMobile from "../assets/images/hero-mobile.png";

import logoBadge from "../assets/images/logo.png";
import madeInEstoniaBadge from "../assets/images/madeinestonia-ee.png";
import saasBadge from "../assets/images/saas-ee.png";
import aiReadyBadge from "../assets/images/aiready-ee.png";
import supportBadge from "../assets/images/support-ee.png";
import europeanQualityBadge from "../assets/images/europeanquality.png";

import EeAboutSection from "../components/sections/EeAboutSection.jsx";
import EeWhyWorkWithUsSection from "../components/sections/EeWhyWorkWithUsSection.jsx";
import TechMarqueeSection from "../components/sections/TechMarqueeSection.jsx";
import EeFounderSection from "../components/sections/EeFounderSection.jsx";
import EeAutomationAreasSection from "../components/sections/EeAutomationAreasSection.jsx";
import EeProcessSystemsSection from "../components/sections/EeProcessSystemsSection.jsx";
import EeAiDividerSection from "../components/sections/EeAiDividerSection.jsx";
import EeContactSection from "../components/sections/EeContactSection.jsx";

import PageMeta from "../components/seo/PageMeta.jsx";

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
    <PageMeta
  title="SDE — Kohandatud SaaS, CRM ja äriprotsesside automatiseerimine"
  description="SDE loob SaaS-platvorme, CRM-süsteeme, halduspaneele, automaatseid e-posti süsteeme, makselahenduste integratsioone, veebivorme, dokumendigeneraatoreid, aruandlusvaateid, andmebaase ja praktilisi AI-lahendusi ettevõtetele."
  canonical="https://www.sddestonie.com/ee"
  ogUrl="https://www.sddestonie.com/ee"
  locale="et_EE"
/>
      <section className="home-hero">
        <div className="home-hero__image home-hero__image--desktop" aria-hidden="true">
  <img src={heroMain} alt="Robot" />
</div>

<div className="home-hero__image home-hero__image--mobile" aria-hidden="true">
  <img src={heroMobile} alt="Robot" />
</div>

        <div className="container home-hero__inner">
          <div className="home-hero__content">
            <p className="home-hero__kicker">
  SDE · Kohandatud SaaS · CRM · Automatiseerimine · AI · Maksed
</p>

<h1>IT-süsteemid, mis automatiseerivad ettevõtte igapäevatööd</h1>

<p className="home-hero__text">
  Loome SaaS-platvorme, CRM-süsteeme, halduspaneele, automaatseid
  e-posti süsteeme, makselahenduste integratsioone, veebivorme,
  dokumendigeneraatoreid, aruandlusvaateid, andmebaase ja praktilisi
  AI-lahendusi. SDE loob tööriistu, mis korrastavad protsesse, vähendavad
  käsitsi tehtavat tööd ja toetavad ettevõtte igapäevast toimimist ühes
  selges süsteemis.
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