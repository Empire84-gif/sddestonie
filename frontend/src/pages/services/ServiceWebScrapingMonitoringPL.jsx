import { Link } from "react-router-dom";

import heroBg from "../../assets/images/aidivider.png";
import aiServices from "../../assets/images/aiservices.png";

function ServiceWebScrapingMonitoringPL() {
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
          <p className="service-detail-section__kicker">Web scraping i monitoring</p>

          <h2>
            Systemy, które automatycznie zbierają i monitorują dane z internetu.
          </h2>

          <p className="service-detail-section__lead">
            Tworzymy dedykowane narzędzia do pobierania, porządkowania i monitorowania
            danych ze stron internetowych, katalogów, ofert, cenników, ogłoszeń,
            wyników wyszukiwania, portali branżowych oraz innych publicznie dostępnych
            źródeł.
          </p>

          <p className="service-detail-section__lead">
            Celem nie jest samo pobranie danych. Chodzi o system, który regularnie
            sprawdza zmiany, zapisuje informacje w bazie, pokazuje je w panelu,
            wysyła alerty i pozwala firmie szybciej reagować na rynek.
          </p>

          <div className="service-detail-content">
            <div className="service-detail-content__text">
              <h3>Po co firmie monitoring danych?</h3>

              <p>
                W wielu branżach ważne informacje są rozproszone po wielu stronach:
                ceny konkurencji, dostępność produktów, nowe ogłoszenia, zmiany ofert,
                treści z portali, dane katalogowe, opinie, statusy lub komunikaty.
                Ręczne sprawdzanie takich źródeł jest czasochłonne i łatwo coś przeoczyć.
              </p>

              <p>
                Dedykowany system monitoringu może automatycznie pobierać dane według
                ustalonych reguł, zapisywać historię zmian, porównywać wyniki, filtrować
                informacje i pokazywać tylko to, co naprawdę wymaga uwagi.
              </p>

              <p>
                Takie narzędzie może działać jako wewnętrzny panel, moduł raportowy,
                system alertów lub element większej aplikacji SaaS. Dane mogą trafiać
                do bazy, dashboardu, arkusza, CRM, raportu PDF albo automatycznego
                powiadomienia mailowego.
              </p>

              <p>
                Projektujemy takie rozwiązania z naciskiem na stabilność, sensowną
                częstotliwość pobierania danych, przejrzystą strukturę informacji
                i zgodność z zasadami korzystania ze źródeł. System ma wspierać analizę
                i monitoring, a nie tworzyć chaos kolejnych plików.
              </p>

              <div className="service-detail-list-block">
                <h3>Co można monitorować lub pobierać automatycznie?</h3>

                <ul>
                  <li>Ceny produktów, usług i ofert konkurencji</li>
                  <li>Dostępność produktów, ogłoszeń lub miejsc</li>
                  <li>Nowe wpisy, komunikaty, aktualizacje i zmiany treści</li>
                  <li>Dane katalogowe, techniczne lub branżowe</li>
                  <li>Ogłoszenia, listy ofert i publiczne rejestry</li>
                  <li>Zmiany na stronach klientów, partnerów lub rynku</li>
                  <li>Alerty mailowe po wykryciu ważnej zmiany</li>
                  <li>Dashboardy z historią i porównaniem danych</li>
                  <li>Eksport danych do CSV, PDF, CRM lub bazy danych</li>
                  <li>Analizę danych z pomocą automatyzacji lub AI</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail-cta">
        <div className="service-detail-cta__inner">
          <p className="service-detail-section__kicker">Następny krok</p>

          <h2>Chcesz automatycznie monitorować dane ważne dla Twojej firmy?</h2>

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

export default ServiceWebScrapingMonitoringPL;