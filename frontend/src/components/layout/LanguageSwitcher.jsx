import { useLocation, useNavigate } from "react-router-dom";

const languageLabels = {
  en: "EN",
  ee: "EE",
  pl: "PL",
};

const routeMap = {
  home: {
    en: "/",
    ee: "/ee",
    pl: "/pl",
  },

  services: {
    en: "/services",
    ee: "/ee/teenused",
    pl: "/pl/uslugi",
  },

  projects: {
    en: "/projects",
    ee: "/ee/projektid",
    pl: "/pl/realizacje",
  },

  contact: {
    en: "/contact",
    ee: "/ee/kontakt",
    pl: "/pl/kontakt",
  },

  describeProject: {
    en: "/describe-project",
    ee: "/ee/kirjelda-projekti",
    pl: "/pl/opisz-projekt",
  },

  privacyPolicy: {
    en: "/privacy-policy",
    ee: "/ee/privaatsuspoliitika",
    pl: "/pl/polityka-prywatnosci",
  },

  terms: {
    en: "/terms",
    ee: "/ee/tingimused",
    pl: "/pl/regulamin",
  },

  taskAutomation: {
    en: "/services/task-automation",
    ee: "/ee/teenused/ulesannete-automatiseerimine",
    pl: "/pl/uslugi/automatyzacja-zadan",
  },

  aiSystems: {
    en: "/services/ai-systems",
    ee: "/ee/teenused/ai-susteemid",
    pl: "/pl/uslugi/systemy-ai",
  },

  crmSystems: {
    en: "/services/crm-systems",
    ee: "/ee/teenused/crm-susteemid",
    pl: "/pl/uslugi/systemy-crm",
  },

  saasApplications: {
    en: "/services/saas-applications",
    ee: "/ee/teenused/saas-rakendused",
    pl: "/pl/uslugi/aplikacje-saas",
  },

  documentGenerators: {
    en: "/services/document-generators",
    ee: "/ee/teenused/dokumendigeneraatorid",
    pl: "/pl/uslugi/generatory-dokumentow",
  },

  dataCollectionSystems: {
    en: "/services/data-collection-systems",
    ee: "/ee/teenused/andmete-kogumise-susteemid",
    pl: "/pl/uslugi/systemy-zbierania-danych",
  },

  customerCommunication: {
    en: "/services/customer-communication",
    ee: "/ee/teenused/kliendisuhtlus",
    pl: "/pl/uslugi/komunikacja-z-klientami",
  },

  aiLeadAssistant: {
    en: "/services/ai-lead-assistant",
    ee: "/ee/teenused/ai-lead-assistant",
    pl: "/pl/uslugi/ai-lead-assistant",
  },

  chatbotsAndAssistants: {
    en: "/services/chatbots-and-assistants",
    ee: "/ee/teenused/chatbotid-ja-assistendid",
    pl: "/pl/uslugi/chatboty-i-asystenci",
  },

  databasesAndMigrations: {
    en: "/services/databases-and-migrations",
    ee: "/ee/teenused/andmebaasid-ja-migratsioonid",
    pl: "/pl/uslugi/bazy-danych",
  },

  reportsAndDashboards: {
    en: "/services/reports-and-dashboards",
    ee: "/ee/teenused/aruanded-ja-juhtpaneelid",
    pl: "/pl/uslugi/raporty-i-dashboardy",
  },

  webScrapingAndMonitoring: {
    en: "/services/web-scraping-and-data-monitoring",
    ee: "/ee/teenused/web-scraping-ja-andmeseire",
    pl: "/pl/uslugi/web-scraping-monitoring",
  },

  documentationManagement: {
    en: "/services/documentation-management",
    ee: "/ee/teenused/dokumendihaldus",
    pl: "/pl/uslugi/zarzadzanie-dokumentacja",
  },

  digitalisationConsulting: {
    en: "/services/digitalisation-consulting",
    ee: "/ee/teenused/digitaliseerimise-noustamine",
    pl: "/pl/uslugi/doradztwo-digitalizacja",
  },
};

function getCurrentLanguage(pathname) {
  if (pathname === "/pl" || pathname.startsWith("/pl/")) return "pl";
  if (pathname === "/ee" || pathname.startsWith("/ee/")) return "ee";

  return "en";
}

function normalizePath(pathname) {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }

  return pathname;
}

function getCurrentRouteKey(pathname) {
  const currentPath = normalizePath(pathname);

  const foundRoute = Object.entries(routeMap).find(([, paths]) =>
    Object.values(paths).includes(currentPath)
  );

  return foundRoute?.[0] || "home";
}

function LanguageSwitcher() {
  const location = useLocation();
  const navigate = useNavigate();

  const currentLang = getCurrentLanguage(location.pathname);
  const currentRouteKey = getCurrentRouteKey(location.pathname);

  const changeLanguage = (nextLang) => {
    if (nextLang === currentLang) return;

    const nextPath =
      routeMap[currentRouteKey]?.[nextLang] || routeMap.home[nextLang];

    navigate(nextPath);
  };

  return (
    <div className="language-switcher" aria-label="Language switcher">
      {Object.entries(languageLabels).map(([code, label]) => (
        <button
          key={code}
          type="button"
          className={code === currentLang ? "is-active" : ""}
          aria-current={code === currentLang ? "true" : undefined}
          onClick={() => changeLanguage(code)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;