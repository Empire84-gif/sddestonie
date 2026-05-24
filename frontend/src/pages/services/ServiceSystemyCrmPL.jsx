import { Link } from "react-router-dom";

import heroBg from "../../assets/images/aidivider.png";
import aiServices from "../../assets/images/aiservices.png";

function ServiceSystemyCrmPL() {
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
          <p className="service-detail-section__kicker">Systemy CRM</p>

          <h2>CRM dopasowany do sposobu pracy firmy, a nie odwrotnie.</h2>

          <p className="service-detail-section__lead">
            Tworzymy dedykowane systemy CRM dla firm, które potrzebują większej kontroli
            nad klientami, leadami, zadaniami, dokumentami, komunikacją i statusem spraw.
            Zamiast wdrażać gotowe narzędzie pełne zbędnych funkcji, projektujemy system
            wokół realnego procesu firmy.
          </p>

          <p className="service-detail-section__lead">
            Taki CRM może łączyć bazę klientów, formularze online, obsługę zgłoszeń,
            system mailowy, dokumenty PDF, historię kontaktu, zadania, raporty,
            dashboardy i automatyzacje w jednym uporządkowanym środowisku pracy.
          </p>

          <div className="service-detail-content">
            <div className="service-detail-content__text">
              <h3>Dlaczego firmy odchodzą od gotowych CRM?</h3>

              <p>
                Wiele popularnych systemów CRM wygląda dobrze na prezentacjach
                sprzedażowych, ale w praktyce bardzo szybko okazuje się, że są
                przeładowane funkcjami, których firma nigdy nie używa. Nawigacja
                staje się chaotyczna, pracownicy nie wiedzą, gdzie znaleźć konkretne
                opcje, a prosty proces zaczyna wymagać przechodzenia przez kilka
                ekranów, zakładek i ustawień.
              </p>

              <p>
                Często dochodzi też do sytuacji, w której podstawowy abonament wygląda
                atrakcyjnie, ale kolejne funkcje są ukryte za dodatkowymi subskrypcjami,
                limitami użytkowników, płatnymi integracjami albo osobnymi modułami.
                Finalnie firma płaci coraz więcej, a nadal musi dopasowywać swój proces
                do ograniczeń narzuconych przez gotową platformę.
              </p>

              <p>
                Dedykowany CRM działa odwrotnie. To system projektowany wokół sposobu
                pracy firmy, jej zespołu, klientów i realnego workflow. Interfejs może
                być prosty, szybki i logiczny, a każdy ekran może pokazywać tylko te
                informacje, które są naprawdę potrzebne do codziennej pracy.
              </p>

              <p>
                Własny CRM daje również większe możliwości automatyzacji. System może
                automatycznie generować dokumenty, obsługiwać formularze, przypisywać
                leady, wysyłać wiadomości, tworzyć statusy, analizować dane, budować
                dashboardy, integrować się z API i wykonywać procesy, których masowe
                platformy SaaS często nie są w stanie dobrze odwzorować.
              </p>

              <p>
                Taki system staje się wewnętrznym programem firmy — zaprojektowanym
                specjalnie pod jej model działania, procesy, zespół i styl wizualny.
                Firma otrzymuje własne narzędzie, możliwość dalszej rozbudowy oraz
                kontrolę nad logiką, wyglądem, funkcjami i kodem źródłowym.
              </p>

              <div className="service-detail-list-block">
                <h3>Co może zawierać dedykowany CRM?</h3>

                <ul>
                  <li>Baza klientów, firm, kontaktów i leadów</li>
                  <li>Statusy sprzedaży, projektów i obsługi klienta</li>
                  <li>Historia kontaktu, notatki i przypisane zadania</li>
                  <li>Formularze online zapisujące dane bezpośrednio do CRM</li>
                  <li>Automatyczne generowanie ofert, umów i dokumentów PDF</li>
                  <li>System mailowy z przypisywaniem wiadomości do klientów</li>
                  <li>Dashboardy, raporty i statystyki działań zespołu</li>
                  <li>Role użytkowników, uprawnienia i panel administracyjny</li>
                  <li>Powiadomienia, przypomnienia i automatyczne statusy</li>
                  <li>Integracje API z zewnętrznymi narzędziami firmy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail-cta">
        <div className="service-detail-cta__inner">
          <p className="service-detail-section__kicker">Następny krok</p>

          <h2>Chcesz CRM, który naprawdę pasuje do procesu Twojej firmy?</h2>

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

export default ServiceSystemyCrmPL;