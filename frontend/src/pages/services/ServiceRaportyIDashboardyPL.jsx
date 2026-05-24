import { Link } from "react-router-dom";

import heroBg from "../../assets/images/aidivider.png";
import aiServices from "../../assets/images/aiservices.png";

function ServiceRaportyIDashboardyPL() {
  return (
    <main>
      <section className="services-hero">
        <img className="services-hero__bg" src={heroBg} alt="" aria-hidden="true" />

        <div className="services-hero__inner container">
          <div className="services-hero__content">
            <h1>Nasze usługi</h1>
          </div>

          <div className="services-hero__visual" aria-hidden="true">
            <img src={aiServices} alt="" />
          </div>
        </div>
      </section>

      <section className="service-detail-section">
        <div className="container service-detail-section__inner">
          <p className="service-detail-section__kicker">Raporty i dashboardy</p>

          <h2>
            Dashboardy, które pokazują realny obraz firmy bez ręcznego składania danych.
          </h2>

          <p className="service-detail-section__lead">
            Tworzymy raporty, panele zarządcze i dashboardy, które zbierają dane z procesów,
            formularzy, CRM, dokumentów, sprzedaży, projektów i innych źródeł w jednym
            czytelnym widoku.
          </p>

          <p className="service-detail-section__lead">
            Celem nie jest ładny wykres dla samego wykresu. Chodzi o system, który pomaga
            szybciej podejmować decyzje, zauważać problemy, kontrolować statusy i widzieć,
            co naprawdę dzieje się w firmie.
          </p>

          <div className="service-detail-content">
            <div className="service-detail-content__text">
              <h3>Dlaczego raporty ręczne przestają działać?</h3>

              <p>
                W wielu firmach raportowanie nadal polega na ręcznym zbieraniu danych
                z Excela, maili, systemów SaaS, formularzy i dokumentów. To zabiera czas,
                generuje błędy i sprawia, że zarząd często patrzy na dane, które są już
                nieaktualne.
              </p>

              <p>
                Dedykowany dashboard może automatycznie pobierać dane z systemu,
                porządkować je i prezentować w formie widoków dopasowanych do różnych
                ról: właściciela firmy, managera, sprzedaży, administracji, obsługi
                klienta albo zespołu operacyjnego.
              </p>

              <p>
                Dashboard może pokazywać sprzedaż, leady, statusy projektów, obciążenie
                zespołu, liczbę zgłoszeń, czas reakcji, dokumenty do przygotowania,
                płatności, źródła klientów, efektywność procesów oraz inne wskaźniki
                ważne dla konkretnej firmy.
              </p>

              <p>
                Takie raporty mogą być częścią CRM, aplikacji SaaS, systemu zbierania
                danych albo osobnym panelem analitycznym. Najważniejsze jest to, aby dane
                były aktualne, zrozumiałe i powiązane z realnym procesem, a nie ręcznie
                składane raz w tygodniu.
              </p>

              <div className="service-detail-list-block">
                <h3>Co może zawierać dashboard firmowy?</h3>

                <ul>
                  <li>Widoki zarządcze z kluczowymi wskaźnikami firmy</li>
                  <li>Raporty sprzedaży, leadów, klientów i projektów</li>
                  <li>Dashboard statusów, zgłoszeń i zadań zespołu</li>
                  <li>Automatyczne pobieranie danych z CRM i formularzy</li>
                  <li>Wykresy, tabele, filtry i widoki według ról</li>
                  <li>Raporty dokumentów, płatności i terminów</li>
                  <li>Eksporty danych do PDF, CSV lub arkuszy</li>
                  <li>Monitoring efektywności procesów i czasu reakcji</li>
                  <li>Alerty, powiadomienia i automatyczne podsumowania</li>
                  <li>Możliwość rozbudowy o analizę AI i prognozowanie</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail-cta">
        <div className="service-detail-cta__inner">
          <p className="service-detail-section__kicker">Następny krok</p>

          <h2>Chcesz widzieć najważniejsze dane firmy bez ręcznego raportowania?</h2>

          <p>
            Możesz wysłać krótką wiadomość przez zwykły formularz kontaktowy albo od razu
            opisać proces dokładniej w formularzu analizy projektu.
          </p>

          <div className="service-detail-cta__actions">
            <Link
              to="/pl"
              state={{ scrollTo: "kontakt" }}
              className="service-detail-cta__button service-detail-cta__button--primary"
            >
              Szybki kontakt
            </Link>

            <Link
              to="/pl/opisz-projekt"
              className="service-detail-cta__button service-detail-cta__button--secondary"
            >
              Opisz projekt dokładniej
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ServiceRaportyIDashboardyPL;