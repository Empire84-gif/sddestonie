import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function getCurrentLanguage(pathname) {
  if (pathname === "/pl" || pathname.startsWith("/pl/")) return "pl";
  if (pathname === "/ee" || pathname.startsWith("/ee/")) return "ee";

  return "en";
}

function MainLayout() {
  const location = useLocation();
  const { i18n } = useTranslation();

  const lang = getCurrentLanguage(location.pathname);

  useEffect(() => {
    i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
  }, [lang, i18n]);

  return (
    <div className="app-shell">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
}

export default MainLayout;