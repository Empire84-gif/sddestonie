import { Link, useLocation } from "react-router-dom";

import logoBlack from "../../assets/images/logo-black.png";

const footerPaths = {
  en: {
    home: "/",
    services: "/services",
    projects: "/projects",
    projectForm: "/describe-project",
    privacy: "/privacy-policy",
    terms: "/terms",
  },
  ee: {
    home: "/ee",
    services: "/ee/teenused",
    projects: "/ee/projektid",
    projectForm: "/ee/kirjelda-projekti",
    privacy: "/ee/privaatsuspoliitika",
    terms: "/ee/tingimused",
  },
  pl: {
    home: "/pl",
    services: "/pl/uslugi",
    projects: "/pl/realizacje",
    projectForm: "/pl/opisz-projekt",
    privacy: "/pl/polityka-prywatnosci",
    terms: "/pl/regulamin",
  },
};

const footerCopy = {
  en: {
    tagline:
      "Custom CRM systems, SaaS platforms, automation and AI-ready solutions designed around real business processes.",
    footerNavLabel: "Footer navigation",
    legalNavLabel: "Legal documents",
    page: "Website",
    home: "Home",
    services: "Services",
    projects: "Projects",
    projectForm: "Describe project",
    documents: "Documents",
    privacy: "Privacy Policy",
    terms: "Terms and Conditions",
    contact: "Contact",
    ownership:
      "© 2026 Handke Holding OÜ · SDE is a brand owned and operated by Handke Holding OÜ.",
    company:
      "Sakala tn 7-2, 10141 Tallinn, Estonia · Registry code: 17387477 · VAT EU: EE102932869",
  },

  ee: {
    tagline:
      "Kohandatud CRM-süsteemid, SaaS-platvormid, automatiseerimine ja AI-valmidusega lahendused, mis on loodud päris äriprotsesside ümber.",
    footerNavLabel: "Jaluse navigeerimine",
    legalNavLabel: "Õigusdokumendid",
    page: "Veebileht",
    home: "Avaleht",
    services: "Teenused",
    projects: "Projektid",
    projectForm: "Kirjelda projekti",
    documents: "Dokumendid",
    privacy: "Privaatsuspoliitika",
    terms: "Tingimused",
    contact: "Kontakt",
    ownership:
      "© 2026 Handke Holding OÜ · SDE on kaubamärk, mis kuulub ettevõttele Handke Holding OÜ ja mida ettevõte haldab.",
    company:
      "Sakala tn 7-2, 10141 Tallinn, Eesti · Registrikood: 17387477 · EL KMKR: EE102932869",
  },

  pl: {
    tagline:
      "Dedykowane systemy CRM, SaaS, automatyzacje i rozwiązania AI projektowane wokół realnych procesów firmy.",
    footerNavLabel: "Nawigacja stopki",
    legalNavLabel: "Dokumenty prawne",
    page: "Strona",
    home: "Start",
    services: "Usługi",
    projects: "Realizacje",
    projectForm: "Opisz projekt",
    documents: "Dokumenty",
    privacy: "Polityka Prywatności",
    terms: "Regulamin",
    contact: "Kontakt",
    ownership:
      "© 2026 Handke Holding OÜ · SDE jest marką należącą do Handke Holding OÜ.",
    company:
      "Sakala tn 7-2, 10141 Tallinn, Estonia · Numer rejestrowy: 17387477 · VAT UE: EE102932869",
  },
};

function getCurrentLanguage(pathname) {
  if (pathname === "/pl" || pathname.startsWith("/pl/")) return "pl";
  if (pathname === "/ee" || pathname.startsWith("/ee/")) return "ee";

  return "en";
}

function Footer() {
  const location = useLocation();

  const lang = getCurrentLanguage(location.pathname);
  const currentPaths = footerPaths[lang];
  const copy = footerCopy[lang];

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__main">
          <div className="site-footer__brand">
            <Link
              to={currentPaths.home}
              className="site-footer__logo"
              aria-label="SDE"
            >
              <img src={logoBlack} alt="SDE" />
            </Link>

            <p className="site-footer__tagline">{copy.tagline}</p>
          </div>

          <div className="site-footer__columns">
            <nav
              className="site-footer__column"
              aria-label={copy.footerNavLabel}
            >
              <p>{copy.page}</p>
              <Link to={currentPaths.home}>{copy.home}</Link>
              <Link to={currentPaths.services}>{copy.services}</Link>
              <Link to={currentPaths.projects}>{copy.projects}</Link>
              <Link to={currentPaths.projectForm}>{copy.projectForm}</Link>
            </nav>

            <nav
              className="site-footer__column"
              aria-label={copy.legalNavLabel}
            >
              <p>{copy.documents}</p>
              <Link to={currentPaths.privacy}>{copy.privacy}</Link>
              <Link to={currentPaths.terms}>{copy.terms}</Link>
            </nav>

            <div className="site-footer__column site-footer__column--contact">
              <p>{copy.contact}</p>
              <a href="mailto:office@sddestonie.com">office@sddestonie.com</a>
              <a href="tel:+37256171770">+372 5617 1770</a>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>{copy.ownership}</p>
          <p>{copy.company}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;