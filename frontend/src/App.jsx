import { Navigate, Route, Routes } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout.jsx";

import EnHomePage from "./pages/EnHomePage.jsx";
import EeHomePage from "./pages/EeHomePage.jsx";
import HomePagePL from "./pages/HomePagePL.jsx";

import EnServicesPage from "./pages/EnServicesPage.jsx";
import EeServicesPage from "./pages/EeServicesPage.jsx";
import ServicesPagePL from "./pages/ServicesPagePL.jsx";

import EnProjectsPage from "./pages/EnProjectsPage.jsx";
import EeProjectsPage from "./pages/EeProjectsPage.jsx";
import ProjectsPagePL from "./pages/ProjectsPagePL.jsx";

import ProjectAnalysisPage from "./pages/ProjectAnalysisPage.jsx";

import EnPrivacyPolicyPage from "./pages/EnPrivacyPolicyPage.jsx";
import EePrivacyPolicyPage from "./pages/EePrivacyPolicyPage.jsx";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage.jsx";

import EnTermsPage from "./pages/EnTermsPage.jsx";
import EeTermsPage from "./pages/EeTermsPage.jsx";
import TermsPage from "./pages/TermsPage.jsx";

import NotFoundPage from "./pages/NotFoundPage.jsx";

import EnServiceAutomatyzacjaZadan from "./pages/services/EnServiceAutomatyzacjaZadan.jsx";
import EnServiceSystemyAi from "./pages/services/EnServiceSystemyAi.jsx";
import EnServiceSystemyCrm from "./pages/services/EnServiceSystemyCrm.jsx";
import EnServiceAplikacjeSaas from "./pages/services/EnServiceAplikacjeSaas.jsx";
import EnServiceGeneratoryDokumentow from "./pages/services/EnServiceGeneratoryDokumentow.jsx";
import EnServiceSystemyZbieraniaDanych from "./pages/services/EnServiceSystemyZbieraniaDanych.jsx";
import EnServiceKomunikacjaZKlientami from "./pages/services/EnServiceKomunikacjaZKlientami.jsx";
import EnServiceAiLeadAssistant from "./pages/services/EnServiceAiLeadAssistant.jsx";
import EnServiceChatbotyIAsystenci from "./pages/services/EnServiceChatbotyIAsystenci.jsx";
import EnServiceBazyDanych from "./pages/services/EnServiceBazyDanych.jsx";
import EnServiceRaportyIDashboardy from "./pages/services/EnServiceRaportyIDashboardy.jsx";
import EnServiceWebScrapingMonitoring from "./pages/services/EnServiceWebScrapingMonitoring.jsx";
import EnServiceZarzadzanieDokumentacja from "./pages/services/EnServiceZarzadzanieDokumentacja.jsx";
import EnServiceDoradztwoDigitalizacja from "./pages/services/EnServiceDoradztwoDigitalizacja.jsx";

import EeServiceAutomatyzacjaZadan from "./pages/services/EeServiceAutomatyzacjaZadan.jsx";
import EeServiceSystemyAi from "./pages/services/EeServiceSystemyAi.jsx";
import EeServiceSystemyCrm from "./pages/services/EeServiceSystemyCrm.jsx";
import EeServiceAplikacjeSaas from "./pages/services/EeServiceAplikacjeSaas.jsx";
import EeServiceGeneratoryDokumentow from "./pages/services/EeServiceGeneratoryDokumentow.jsx";
import EeServiceSystemyZbieraniaDanych from "./pages/services/EeServiceSystemyZbieraniaDanych.jsx";
import EeServiceKomunikacjaZKlientami from "./pages/services/EeServiceKomunikacjaZKlientami.jsx";
import EeServiceAiLeadAssistant from "./pages/services/EeServiceAiLeadAssistant.jsx";
import EeServiceChatbotyIAsystenci from "./pages/services/EeServiceChatbotyIAsystenci.jsx";
import EeServiceBazyDanych from "./pages/services/EeServiceBazyDanych.jsx";
import EeServiceRaportyIDashboardy from "./pages/services/EeServiceRaportyIDashboardy.jsx";
import EeServiceWebScrapingMonitoring from "./pages/services/EeServiceWebScrapingMonitoring.jsx";
import EeServiceZarzadzanieDokumentacja from "./pages/services/EeServiceZarzadzanieDokumentacja.jsx";
import EeServiceDoradztwoDigitalizacja from "./pages/services/EeServiceDoradztwoDigitalizacja.jsx";

import ServiceAutomatyzacjaZadanPL from "./pages/services/ServiceAutomatyzacjaZadanPL.jsx";
import ServiceSystemyAiPL from "./pages/services/ServiceSystemyAiPL.jsx";
import ServiceSystemyCrmPL from "./pages/services/ServiceSystemyCrmPL.jsx";
import ServiceAplikacjeSaasPL from "./pages/services/ServiceAplikacjeSaasPL.jsx";
import ServiceGeneratoryDokumentowPL from "./pages/services/ServiceGeneratoryDokumentowPL.jsx";
import ServiceSystemyZbieraniaDanychPL from "./pages/services/ServiceSystemyZbieraniaDanychPL.jsx";
import ServiceKomunikacjaZKlientamiPL from "./pages/services/ServiceKomunikacjaZKlientamiPL.jsx";
import ServiceAiLeadAssistantPL from "./pages/services/ServiceAiLeadAssistantPL.jsx";
import ServiceChatbotyIAsystenciPL from "./pages/services/ServiceChatbotyIAsystenciPL.jsx";
import ServiceBazyDanychPL from "./pages/services/ServiceBazyDanychPL.jsx";
import ServiceRaportyIDashboardyPL from "./pages/services/ServiceRaportyIDashboardyPL.jsx";
import ServiceWebScrapingMonitoringPL from "./pages/services/ServiceWebScrapingMonitoringPL.jsx";
import ServiceZarzadzanieDokumentacjaPL from "./pages/services/ServiceZarzadzanieDokumentacjaPL.jsx";
import ServiceDoradztwoDigitalizacjaPL from "./pages/services/ServiceDoradztwoDigitalizacjaPL.jsx";

function App() {
  return (
    <Routes>
      {/* English — default website version */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<EnHomePage />} />

        <Route path="services" element={<EnServicesPage />} />

        <Route
          path="services/task-automation"
          element={<EnServiceAutomatyzacjaZadan />}
        />

        <Route path="services/ai-systems" element={<EnServiceSystemyAi />} />

        <Route path="services/crm-systems" element={<EnServiceSystemyCrm />} />

        <Route
          path="services/saas-applications"
          element={<EnServiceAplikacjeSaas />}
        />

        <Route
          path="services/document-generators"
          element={<EnServiceGeneratoryDokumentow />}
        />

        <Route
          path="services/data-collection-systems"
          element={<EnServiceSystemyZbieraniaDanych />}
        />

        <Route
          path="services/customer-communication"
          element={<EnServiceKomunikacjaZKlientami />}
        />

        <Route
          path="services/ai-lead-assistant"
          element={<EnServiceAiLeadAssistant />}
        />

        <Route
          path="services/chatbots-and-assistants"
          element={<EnServiceChatbotyIAsystenci />}
        />

        <Route
          path="services/databases-and-migrations"
          element={<EnServiceBazyDanych />}
        />

        <Route
          path="services/reports-and-dashboards"
          element={<EnServiceRaportyIDashboardy />}
        />

        <Route
          path="services/web-scraping-and-data-monitoring"
          element={<EnServiceWebScrapingMonitoring />}
        />

        <Route
          path="services/documentation-management"
          element={<EnServiceZarzadzanieDokumentacja />}
        />

        <Route
          path="services/digitalisation-consulting"
          element={<EnServiceDoradztwoDigitalizacja />}
        />

        <Route path="projects" element={<EnProjectsPage />} />
        <Route path="describe-project" element={<ProjectAnalysisPage />} />

        <Route path="privacy-policy" element={<EnPrivacyPolicyPage />} />
        <Route path="terms" element={<EnTermsPage />} />
      </Route>

      {/* Old /en links redirect to the default English version */}
      <Route path="/en" element={<Navigate to="/" replace />} />
      <Route path="/en/*" element={<Navigate to="/" replace />} />

      {/* Estonian */}
      <Route path="/ee" element={<MainLayout />}>
        <Route index element={<EeHomePage />} />

        <Route path="teenused" element={<EeServicesPage />} />

        <Route
          path="teenused/ulesannete-automatiseerimine"
          element={<EeServiceAutomatyzacjaZadan />}
        />

        <Route
          path="teenused/ai-susteemid"
          element={<EeServiceSystemyAi />}
        />

        <Route
          path="teenused/crm-susteemid"
          element={<EeServiceSystemyCrm />}
        />

        <Route
          path="teenused/saas-rakendused"
          element={<EeServiceAplikacjeSaas />}
        />

        <Route
          path="teenused/dokumendigeneraatorid"
          element={<EeServiceGeneratoryDokumentow />}
        />

        <Route
          path="teenused/andmete-kogumise-susteemid"
          element={<EeServiceSystemyZbieraniaDanych />}
        />

        <Route
          path="teenused/kliendisuhtlus"
          element={<EeServiceKomunikacjaZKlientami />}
        />

        <Route
          path="teenused/ai-lead-assistant"
          element={<EeServiceAiLeadAssistant />}
        />

        <Route
          path="teenused/chatbotid-ja-assistendid"
          element={<EeServiceChatbotyIAsystenci />}
        />

        <Route
          path="teenused/andmebaasid-ja-migratsioonid"
          element={<EeServiceBazyDanych />}
        />

        <Route
          path="teenused/aruanded-ja-juhtpaneelid"
          element={<EeServiceRaportyIDashboardy />}
        />

        <Route
          path="teenused/web-scraping-ja-andmeseire"
          element={<EeServiceWebScrapingMonitoring />}
        />

        <Route
          path="teenused/dokumendihaldus"
          element={<EeServiceZarzadzanieDokumentacja />}
        />

        <Route
          path="teenused/digitaliseerimise-noustamine"
          element={<EeServiceDoradztwoDigitalizacja />}
        />

        <Route path="projektid" element={<EeProjectsPage />} />
        <Route path="kirjelda-projekti" element={<ProjectAnalysisPage />} />

        <Route path="privaatsuspoliitika" element={<EePrivacyPolicyPage />} />
        <Route path="tingimused" element={<EeTermsPage />} />
      </Route>

      {/* Polish */}
      <Route path="/pl" element={<MainLayout />}>
        <Route index element={<HomePagePL />} />

        <Route path="uslugi" element={<ServicesPagePL />} />

        <Route
          path="uslugi/automatyzacja-zadan"
          element={<ServiceAutomatyzacjaZadanPL />}
        />

        <Route path="uslugi/systemy-ai" element={<ServiceSystemyAiPL />} />

        <Route path="uslugi/systemy-crm" element={<ServiceSystemyCrmPL />} />

        <Route
          path="uslugi/aplikacje-saas"
          element={<ServiceAplikacjeSaasPL />}
        />

        <Route
          path="uslugi/generatory-dokumentow"
          element={<ServiceGeneratoryDokumentowPL />}
        />

        <Route
          path="uslugi/systemy-zbierania-danych"
          element={<ServiceSystemyZbieraniaDanychPL />}
        />

        <Route
          path="uslugi/komunikacja-z-klientami"
          element={<ServiceKomunikacjaZKlientamiPL />}
        />

        <Route
          path="uslugi/ai-lead-assistant"
          element={<ServiceAiLeadAssistantPL />}
        />

        <Route
          path="uslugi/chatboty-i-asystenci"
          element={<ServiceChatbotyIAsystenciPL />}
        />

        <Route path="uslugi/bazy-danych" element={<ServiceBazyDanychPL />} />

        <Route
          path="uslugi/raporty-i-dashboardy"
          element={<ServiceRaportyIDashboardyPL />}
        />

        <Route
          path="uslugi/web-scraping-monitoring"
          element={<ServiceWebScrapingMonitoringPL />}
        />

        <Route
          path="uslugi/zarzadzanie-dokumentacja"
          element={<ServiceZarzadzanieDokumentacjaPL />}
        />

        <Route
          path="uslugi/doradztwo-digitalizacja"
          element={<ServiceDoradztwoDigitalizacjaPL />}
        />

        <Route path="realizacje" element={<ProjectsPagePL />} />
        <Route path="opisz-projekt" element={<ProjectAnalysisPage />} />

        <Route path="polityka-prywatnosci" element={<PrivacyPolicyPage />} />
        <Route path="regulamin" element={<TermsPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;