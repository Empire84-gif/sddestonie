import { Link } from "react-router-dom";

import heroBg from "../../assets/images/aidivider.png";
import aiServices from "../../assets/images/aiservices.png";

function ServiceBazyDanychPL() {
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
          <p className="service-detail-section__kicker">Bazy danych</p>

          <h2>
            Uporządkowane bazy danych, które zastępują chaos w Excelu, mailach i plikach.
          </h2>

          <p className="service-detail-section__lead">
            Projektujemy bazy danych i systemy do zarządzania informacjami, które pomagają
            firmom trzymać klientów, dokumenty, zgłoszenia, projekty, statusy i historię
            działań w jednym logicznym miejscu.
          </p>

          <p className="service-detail-section__lead">
            To nie jest tylko tabela z danymi. Dobrze zaprojektowana baza staje się
            fundamentem pod CRM, automatyzacje, raporty, generatory dokumentów,
            dashboardy, formularze online i integracje API.
          </p>

          <div className="service-detail-content">
            <div className="service-detail-content__text">
              <h3>Dlaczego sama praca w arkuszach przestaje wystarczać?</h3>

              <p>
                Excel i arkusze online są dobre na początek, ale z czasem zaczynają
                tworzyć chaos: wiele wersji plików, ręczne przepisywanie danych,
                brak historii zmian, brak uprawnień, duplikaty rekordów i trudność
                w szybkim znalezieniu właściwych informacji.
              </p>

              <p>
                Dedykowana baza danych pozwala uporządkować informacje zgodnie z logiką
                firmy. Dane mogą być powiązane z klientami, projektami, dokumentami,
                zgłoszeniami, płatnościami, pracownikami lub dowolnym innym elementem
                procesu.
              </p>

              <p>
                Dzięki temu firma może mieć jeden spójny system, w którym dane są
                zapisywane, aktualizowane, filtrowane, eksportowane i wykorzystywane
                przez inne moduły. To podstawa do dalszej automatyzacji i realnej
                kontroli nad procesem.
              </p>

              <p>
                Baza danych może działać jako osobny panel administracyjny albo część
                większego systemu SaaS lub CRM. Można ją połączyć z formularzami,
                mailami, dokumentami PDF, dashboardami, raportami, API oraz modułami AI.
              </p>

              <div className="service-detail-list-block">
                <h3>Co może zawierać dedykowany system bazodanowy?</h3>

                <ul>
                  <li>Baza klientów, firm, kontaktów, projektów lub zgłoszeń</li>
                  <li>Relacje między rekordami, historią działań i dokumentami</li>
                  <li>Panel administracyjny z wyszukiwaniem i filtrowaniem</li>
                  <li>Role użytkowników, uprawnienia i kontrola dostępu</li>
                  <li>Import danych z Excela, formularzy lub istniejących systemów</li>
                  <li>Eksporty, raporty i dashboardy zarządcze</li>
                  <li>Historia zmian i uporządkowana struktura danych</li>
                  <li>Automatyczne statusy, tagi i przypisania</li>
                  <li>Integracje API z innymi narzędziami firmy</li>
                  <li>Fundament pod CRM, SaaS, AI i automatyzacje</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail-cta">
        <div className="service-detail-cta__inner">
          <p className="service-detail-section__kicker">Następny krok</p>

          <h2>Chcesz zamienić rozproszone dane w jeden uporządkowany system?</h2>

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

export default ServiceBazyDanychPL;