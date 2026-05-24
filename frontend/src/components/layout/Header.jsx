import { useEffect, useState } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

import LanguageSwitcher from "./LanguageSwitcher.jsx";

import logoWhite from "../../assets/images/logo-white.png";
import logoBlack from "../../assets/images/logo-black.png";

const externalGiftUrl = "https://www.handkeholding.com";

const pathConfig = {
  en: {
    home: "/",
    aboutId: "o-nas",
    contactId: "kontakt",
    services: "/services",
    projects: "/projects",
    projectForm: "/describe-project",
    gift: externalGiftUrl,
  },
  ee: {
    home: "/ee",
    aboutId: "o-nas",
    contactId: "kontakt",
    services: "/ee/teenused",
    projects: "/ee/projektid",
    projectForm: "/ee/kirjelda-projekti",
    gift: externalGiftUrl,
  },
  pl: {
    home: "/pl",
    aboutId: "o-nas",
    contactId: "kontakt",
    services: "/pl/uslugi",
    projects: "/pl/realizacje",
    projectForm: "/pl/opisz-projekt",
    gift: externalGiftUrl,
  },
};

const copy = {
  en: {
    navLabel: "Main navigation",
    home: "Home",
    about: "About",
    services: "Services",
    projects: "Projects",
    contact: "Contact",
    quickContact: "Quick contact",
    describeProject: "Describe project",
    companyCta: "Handke Holding OÜ",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    expandServices: "Expand services menu",
    expandContact: "Expand contact menu",
    megaKicker: "Service scope",
    megaTitle: "Business systems, automation and AI-ready tools",
    servicesItems: [
      {
        title: "Task & process automation",
        slug: "task-automation",
      },
      {
        title: "AI-integrated systems",
        slug: "ai-systems",
      },
      {
        title: "Custom CRM systems",
        slug: "crm-systems",
      },
      {
        title: "Web applications & SaaS platforms",
        slug: "saas-applications",
      },
      {
        title: "Document generators",
        slug: "document-generators",
      },
      {
        title: "Data collection systems",
        slug: "data-collection-systems",
      },
      {
        title: "Customer communication systems",
        slug: "customer-communication",
      },
      {
        title: "AI Lead Assistant",
        slug: "ai-lead-assistant",
      },
      {
        title: "Chatbots & rule-based assistants",
        slug: "chatbots-and-assistants",
      },
      {
        title: "Databases & migrations",
        slug: "databases-and-migrations",
      },
      {
        title: "Reports & dashboards",
        slug: "reports-and-dashboards",
      },
      {
        title: "Web scraping & data monitoring",
        slug: "web-scraping-and-data-monitoring",
      },
      {
        title: "Documentation management",
        slug: "documentation-management",
      },
      {
        title: "Digitalisation consulting",
        slug: "digitalisation-consulting",
      },
    ],
  },

  ee: {
    navLabel: "Peamine navigeerimine",
    home: "Avaleht",
    about: "Meist",
    services: "Teenused",
    projects: "Projektid",
    contact: "Kontakt",
    quickContact: "Kiire kontakt",
    describeProject: "Kirjelda projekti",
    companyCta: "Handke Holding OÜ",
    openMenu: "Ava menüü",
    closeMenu: "Sulge menüü",
    expandServices: "Ava teenuste menüü",
    expandContact: "Ava kontaktimenüü",
    megaKicker: "Teenuste valdkond",
    megaTitle: "Ärisüsteemid, automatiseerimine ja AI-valmidusega tööriistad",
    servicesItems: [
      {
        title: "Tööülesannete ja protsesside automatiseerimine",
        slug: "ulesannete-automatiseerimine",
      },
      {
        title: "AI-integratsiooniga süsteemid",
        slug: "ai-susteemid",
      },
      {
        title: "Kohandatud CRM-süsteemid",
        slug: "crm-susteemid",
      },
      {
        title: "Veebirakendused ja SaaS-platvormid",
        slug: "saas-rakendused",
      },
      {
        title: "Dokumendigeneraatorid",
        slug: "dokumendigeneraatorid",
      },
      {
        title: "Andmete kogumise süsteemid",
        slug: "andmete-kogumise-susteemid",
      },
      {
        title: "Kliendisuhtluse süsteemid",
        slug: "kliendisuhtlus",
      },
      {
        title: "AI Lead Assistant",
        slug: "ai-lead-assistant",
      },
      {
        title: "Chatbotid ja reeglipõhised assistendid",
        slug: "chatbotid-ja-assistendid",
      },
      {
        title: "Andmebaasid ja migratsioonid",
        slug: "andmebaasid-ja-migratsioonid",
      },
      {
        title: "Aruanded ja juhtpaneelid",
        slug: "aruanded-ja-juhtpaneelid",
      },
      {
        title: "Web scraping ja andmeseire",
        slug: "web-scraping-ja-andmeseire",
      },
      {
        title: "Dokumendihaldus",
        slug: "dokumendihaldus",
      },
      {
        title: "Digitaliseerimise nõustamine",
        slug: "digitaliseerimise-noustamine",
      },
    ],
  },

  pl: {
    navLabel: "Główna nawigacja",
    home: "Start",
    about: "O nas",
    services: "Usługi",
    projects: "Realizacje",
    contact: "Kontakt",
    quickContact: "Szybki kontakt",
    describeProject: "Opisz projekt",
    companyCta: "Handke Holding OÜ",
    openMenu: "Otwórz menu",
    closeMenu: "Zamknij menu",
    expandServices: "Rozwiń menu usług",
    expandContact: "Rozwiń menu kontaktu",
    megaKicker: "Zakres usług",
    megaTitle: "Systemy, automatyzacje i narzędzia dla firm",
    servicesItems: [
      {
        title: "Automatyzacja zadań i procesów",
        slug: "automatyzacja-zadan",
      },
      {
        title: "Systemy z integracją AI",
        slug: "systemy-ai",
      },
      {
        title: "Dedykowane systemy CRM",
        slug: "systemy-crm",
      },
      {
        title: "Aplikacje webowe i platformy SaaS",
        slug: "aplikacje-saas",
      },
      {
        title: "Generatory dokumentów",
        slug: "generatory-dokumentow",
      },
      {
        title: "Systemy zbierania danych",
        slug: "systemy-zbierania-danych",
      },
      {
        title: "Komunikacja i obsługa klientów",
        slug: "komunikacja-z-klientami",
      },
      {
        title: "AI Lead Assistant",
        slug: "ai-lead-assistant",
      },
      {
        title: "Chatboty i asystenci regułowi",
        slug: "chatboty-i-asystenci",
      },
      {
        title: "Bazy danych i migracje",
        slug: "bazy-danych",
      },
      {
        title: "Raporty i dashboardy",
        slug: "raporty-i-dashboardy",
      },
      {
        title: "Web scraping i monitoring danych",
        slug: "web-scraping-monitoring",
      },
      {
        title: "Zarządzanie dokumentacją",
        slug: "zarzadzanie-dokumentacja",
      },
      {
        title: "Doradztwo i digitalizacja procesów",
        slug: "doradztwo-digitalizacja",
      },
    ],
  },
};

function getCurrentLanguage(pathname) {
  if (pathname === "/pl" || pathname.startsWith("/pl/")) return "pl";
  if (pathname === "/ee" || pathname.startsWith("/ee/")) return "ee";

  return "en";
}

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const lang = getCurrentLanguage(location.pathname);
  const currentPaths = pathConfig[lang];
  const currentCopy = copy[lang];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileContactOpen, setIsMobileContactOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);

  const submenuItems = currentCopy.servicesItems.map((item) => ({
    ...item,
    href: `${currentPaths.services}/${item.slug}`,
  }));

  const closeAllMenus = () => {
    document.activeElement?.blur();

    setIsMobileOpen(false);
    setIsMobileServicesOpen(false);
    setIsMobileContactOpen(false);
    setIsServicesDropdownOpen(false);
    setIsContactDropdownOpen(false);

    setTimeout(() => {
      document.activeElement?.blur();

      setIsMobileOpen(false);
      setIsMobileServicesOpen(false);
      setIsMobileContactOpen(false);
      setIsServicesDropdownOpen(false);
      setIsContactDropdownOpen(false);
    }, 80);
  };

  const scrollToSection = (sectionId) => {
    closeAllMenus();

    const scroll = () => {
      const section = document.getElementById(sectionId);
      if (!section) return;

      const headerOffset = 96;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: sectionTop - headerOffset,
        behavior: "smooth",
      });
    };

    if (location.pathname !== currentPaths.home) {
      navigate(currentPaths.home);
      setTimeout(scroll, 180);
      return;
    }

    setTimeout(scroll, 0);
  };

  const scrollToAbout = (event) => {
    event.preventDefault();
    scrollToSection(currentPaths.aboutId);
  };

  const scrollToContact = (event) => {
    event.preventDefault();
    scrollToSection(currentPaths.contactId);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", isMobileOpen);

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeAllMenus();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.classList.remove("mobile-menu-open");
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMobileOpen]);

  return (
    <>
      <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
        <div className="site-header__inner container">
          <Link
            to={currentPaths.home}
            className="brand-link"
            onClick={closeAllMenus}
          >
            <img
              className="brand-logo brand-logo--white"
              src={logoWhite}
              alt="SDE"
            />

            <img
              className="brand-logo brand-logo--black"
              src={logoBlack}
              alt="SDE"
            />

            <span className="brand-divider" aria-hidden="true" />

            <span className="brand-name">
              <span>Solutions</span>
              <span>Digitales</span>
              <span>d’Estonie</span>
            </span>
          </Link>

          <nav className="main-nav" aria-label={currentCopy.navLabel}>
            <NavLink to={currentPaths.home} end onClick={closeAllMenus}>
              {currentCopy.home}
            </NavLink>

            <a
              href={`${currentPaths.home}#${currentPaths.aboutId}`}
              onClick={scrollToAbout}
            >
              {currentCopy.about}
            </a>

            <div
              className={`nav-dropdown ${
                isServicesDropdownOpen ? "is-open" : ""
              }`}
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <NavLink
                to={currentPaths.services}
                className="nav-dropdown__trigger"
                onClick={closeAllMenus}
              >
                {currentCopy.services}
                <ChevronDown size={14} strokeWidth={2} />
              </NavLink>

              <div className="mega-menu">
                <div className="mega-menu__inner container">
                  <div className="mega-menu__intro">
                    <p>{currentCopy.megaKicker}</p>
                    <h3>{currentCopy.megaTitle}</h3>
                  </div>

                  <div className="mega-menu__links">
                    {submenuItems.map((item) => (
                      <Link
                        to={item.href}
                        className="mega-menu__link"
                        key={item.href}
                        onClick={closeAllMenus}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <NavLink to={currentPaths.projects} onClick={closeAllMenus}>
              {currentCopy.projects}
            </NavLink>

            <div
              className={`nav-dropdown nav-dropdown--small ${
                isContactDropdownOpen ? "is-open" : ""
              }`}
              onMouseEnter={() => setIsContactDropdownOpen(true)}
              onMouseLeave={() => setIsContactDropdownOpen(false)}
            >
              <button
                type="button"
                className="nav-dropdown__trigger"
                aria-expanded={isContactDropdownOpen}
                onClick={() => setIsContactDropdownOpen((value) => !value)}
              >
                {currentCopy.contact}
                <ChevronDown size={14} strokeWidth={2} />
              </button>

              <div className="small-menu">
                <div className="small-menu__inner">
                  <a
                    href={`${currentPaths.home}#${currentPaths.contactId}`}
                    className="small-menu__link"
                    onClick={scrollToContact}
                  >
                    {currentCopy.quickContact}
                  </a>

                  <Link
                    to={currentPaths.projectForm}
                    className="small-menu__link"
                    onClick={closeAllMenus}
                  >
                    {currentCopy.describeProject}
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          <div className="header-actions">
            <div className="header-language">
              <LanguageSwitcher />
            </div>

            <a
              href={currentPaths.gift}
              className="header-cta"
              target="_blank"
              rel="noreferrer"
              onClick={closeAllMenus}
            >
              {currentCopy.companyCta}
            </a>

            <button
              className="burger-button"
              type="button"
              aria-label={
                isMobileOpen ? currentCopy.closeMenu : currentCopy.openMenu
              }
              aria-expanded={isMobileOpen}
              onClick={() => setIsMobileOpen((value) => !value)}
            >
              <Menu size={25} strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mobile-menu ${isMobileOpen ? "is-open" : ""}`}
        aria-hidden={!isMobileOpen}
      >
        <button
          className="mobile-menu__overlay"
          type="button"
          aria-label={currentCopy.closeMenu}
          onClick={closeAllMenus}
        />

        <aside className="mobile-menu__panel">
          <div className="mobile-menu__top">
            <Link
              to={currentPaths.home}
              className="mobile-menu__brand"
              onClick={closeAllMenus}
            >
              <img src={logoBlack} alt="SDE" />

              <span>
                <span>Solutions</span>
                <span>Digitales</span>
                <span>d’Estonie</span>
              </span>
            </Link>

            <button
              className="mobile-menu__close"
              type="button"
              aria-label={currentCopy.closeMenu}
              onClick={closeAllMenus}
            >
              <X size={26} strokeWidth={1.8} />
            </button>
          </div>

          <nav className="mobile-nav" aria-label={currentCopy.navLabel}>
            <NavLink to={currentPaths.home} end onClick={closeAllMenus}>
              {currentCopy.home}
            </NavLink>

            <a
              href={`${currentPaths.home}#${currentPaths.aboutId}`}
              onClick={scrollToAbout}
            >
              {currentCopy.about}
            </a>

            <div className="mobile-nav__split">
              <NavLink to={currentPaths.services} onClick={closeAllMenus}>
                {currentCopy.services}
              </NavLink>

              <button
                type="button"
                aria-label={currentCopy.expandServices}
                aria-expanded={isMobileServicesOpen}
                onClick={() => setIsMobileServicesOpen((value) => !value)}
              >
                <ChevronDown
                  size={16}
                  strokeWidth={2}
                  className={isMobileServicesOpen ? "is-open" : ""}
                />
              </button>
            </div>

            {isMobileServicesOpen && (
              <div className="mobile-nav__submenu">
                {submenuItems.map((item) => (
                  <Link to={item.href} key={item.href} onClick={closeAllMenus}>
                    {item.title}
                  </Link>
                ))}
              </div>
            )}

            <NavLink to={currentPaths.projects} onClick={closeAllMenus}>
              {currentCopy.projects}
            </NavLink>

            <div className="mobile-nav__split">
              <a
                href={`${currentPaths.home}#${currentPaths.contactId}`}
                onClick={scrollToContact}
              >
                {currentCopy.contact}
              </a>

              <button
                type="button"
                aria-label={currentCopy.expandContact}
                aria-expanded={isMobileContactOpen}
                onClick={() => setIsMobileContactOpen((value) => !value)}
              >
                <ChevronDown
                  size={16}
                  strokeWidth={2}
                  className={isMobileContactOpen ? "is-open" : ""}
                />
              </button>
            </div>

            {isMobileContactOpen && (
              <div className="mobile-nav__submenu">
                <a
                  href={`${currentPaths.home}#${currentPaths.contactId}`}
                  onClick={scrollToContact}
                >
                  {currentCopy.quickContact}
                </a>

                <Link to={currentPaths.projectForm} onClick={closeAllMenus}>
                  {currentCopy.describeProject}
                </Link>
              </div>
            )}
          </nav>

          <div className="mobile-menu__bottom">
            <LanguageSwitcher />

            <a
              href={currentPaths.gift}
              className="mobile-menu__cta"
              target="_blank"
              rel="noreferrer"
              onClick={closeAllMenus}
            >
              {currentCopy.companyCta}
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}

export default Header;