import { Link } from "react-router-dom";

import heroBg from "../../assets/images/aidivider.png";
import aiServices from "../../assets/images/aiservices.png";

function ServiceSystemyAiPL() {
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
          <p className="service-detail-section__kicker">Systemy AI</p>

          <h2>
            AI jako część realnego systemu pracy, a nie osobna technologia bez kontekstu.
          </h2>

          <p className="service-detail-section__lead">
            W SDE projektujemy systemy, w których AI wspiera konkretny proces biznesowy:
            analizę danych, obsługę zapytań, pracę z dokumentami, komunikację z klientami,
            przygotowanie odpowiedzi, wyszukiwanie informacji albo porządkowanie danych
            z wielu źródeł.
          </p>

          <p className="service-detail-section__lead">
            Nie traktujemy AI jako magicznego dodatku do strony. Największą wartość daje
            wtedy, gdy jest połączone z CRM, formularzami, bazą danych, dokumentami,
            dashboardami, systemem mailowym lub wewnętrznym workflow firmy.
          </p>

          <div className="service-detail-content">
            <div className="service-detail-content__text">
              <h3>Jak AI może działać w firmowym systemie?</h3>

              <p>
                System ze wsparciem AI może analizować wiadomości od klientów, klasyfikować
                zgłoszenia, podpowiadać odpowiedzi, streszczać dokumenty, wyciągać dane
                z plików, pomagać w obsłudze leadów, wspierać handlowców, porządkować notatki
                albo przygotowywać treści na podstawie danych znajdujących się w systemie.
              </p>

              <p>
                Kluczowe jest jednak to, aby AI miało dostęp do właściwego kontekstu:
                danych klienta, historii komunikacji, statusu projektu, dokumentów, notatek,
                wcześniejszych decyzji oraz reguł działania firmy. Dopiero wtedy może realnie
                pomagać, zamiast generować ogólne odpowiedzi oderwane od procesu.
              </p>

              <p>
                Dlatego budujemy rozwiązania, w których AI jest jednym z modułów większego
                systemu. Może działać jako asystent wewnętrzny, moduł analizy dokumentów,
                wsparcie obsługi klienta, narzędzie do pracy z bazą wiedzy, automatyczny
                klasyfikator zgłoszeń albo element workflow sprzedażowego i administracyjnego.
              </p>

              <div className="service-detail-list-block">
                <h3>Przykładowe zastosowania AI w systemach firmowych</h3>

                <ul>
                  <li>AI assistant dla zespołu obsługi klienta lub sprzedaży</li>
                  <li>Analiza wiadomości, zgłoszeń i formularzy online</li>
                  <li>Streszczanie dokumentów, maili, notatek i historii klienta</li>
                  <li>Wyszukiwanie informacji w firmowej bazie wiedzy</li>
                  <li>Klasyfikacja leadów, zapytań i priorytetów</li>
                  <li>Generowanie roboczych odpowiedzi i treści</li>
                  <li>Analiza danych z CRM, raportów i dashboardów</li>
                  <li>Automatyczne porządkowanie informacji z wielu źródeł</li>
                  <li>Wsparcie procesów administracyjnych i dokumentowych</li>
                  <li>Integracja modeli AI z dedykowanym systemem SaaS lub CRM</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail-cta">
        <div className="service-detail-cta__inner">
          <p className="service-detail-section__kicker">Następny krok</p>

          <h2>Chcesz sprawdzić, gdzie AI może realnie pomóc w Twojej firmie?</h2>

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

export default ServiceSystemyAiPL;