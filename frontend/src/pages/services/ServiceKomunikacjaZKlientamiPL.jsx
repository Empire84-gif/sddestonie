import { Link } from "react-router-dom";

import heroBg from "../../assets/images/aidivider.png";
import aiServices from "../../assets/images/aiservices.png";

function ServiceKomunikacjaZKlientamiPL() {
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
          <p className="service-detail-section__kicker">Komunikacja z klientami</p>

          <h2>Systemy, które porządkują kontakt z klientem i łączą wiadomości z procesem firmy.</h2>

          <p className="service-detail-section__lead">
            Tworzymy rozwiązania, które pomagają firmom zarządzać komunikacją z klientami
            w sposób bardziej uporządkowany niż zwykła skrzynka mailowa. Wiadomości,
            zgłoszenia, formularze, notatki i historia kontaktu mogą trafiać do jednego
            systemu powiązanego z klientem, projektem lub sprawą.
          </p>

          <p className="service-detail-section__lead">
            Celem nie jest zastąpienie człowieka, tylko usunięcie chaosu: kto odpisał,
            jaki jest status sprawy, czego klient potrzebuje, jakie dokumenty były wysłane
            i co powinno wydarzyć się dalej.
          </p>

          <div className="service-detail-content">
            <div className="service-detail-content__text">
              <h3>Dlaczego sama skrzynka mailowa przestaje wystarczać?</h3>

              <p>
                Gdy firma obsługuje wielu klientów, komunikacja szybko rozprasza się między
                mailami, formularzami, telefonami, notatkami i wiadomościami pracowników.
                W efekcie trudno sprawdzić pełną historię sprawy, przypisać odpowiedzialność
                lub zobaczyć, które zapytania nadal czekają na odpowiedź.
              </p>

              <p>
                Dedykowany system komunikacji może porządkować wiadomości według klientów,
                projektów, statusów i priorytetów. Każda wiadomość może być przypisana do
                konkretnej sprawy, a zespół widzi, co zostało już zrobione i co wymaga reakcji.
              </p>

              <p>
                Taki system może działać razem z CRM, formularzami online, dokumentami PDF,
                dashboardami i automatyzacjami. Wiadomość od klienta może od razu tworzyć
                zgłoszenie, aktualizować status, przypisywać zadanie, wysyłać potwierdzenie
                albo uruchamiać dalszy workflow.
              </p>

              <p>
                Komunikacja może być też wspierana przez AI — na przykład przez podsumowanie
                historii klienta, klasyfikację zgłoszenia, przygotowanie roboczej odpowiedzi
                lub wyszukanie informacji w bazie wiedzy. Najważniejsze jest jednak to, aby
                AI działało w kontekście konkretnego procesu, a nie jako oderwany chatbot.
              </p>

              <div className="service-detail-list-block">
                <h3>Co może zawierać system komunikacji z klientami?</h3>

                <ul>
                  <li>Historia komunikacji przypisana do klienta lub sprawy</li>
                  <li>System zgłoszeń, statusów i priorytetów</li>
                  <li>Przypisywanie wiadomości do pracowników lub działów</li>
                  <li>Automatyczne potwierdzenia i powiadomienia mailowe</li>
                  <li>Integracja z formularzami online i CRM</li>
                  <li>Notatki wewnętrzne i widoczność historii działań</li>
                  <li>Szablony odpowiedzi i uporządkowany workflow obsługi</li>
                  <li>Dashboardy pokazujące liczbę spraw i czas reakcji</li>
                  <li>AI wspierające analizę wiadomości i przygotowanie odpowiedzi</li>
                  <li>Połączenie komunikacji z dokumentami, zadaniami i raportami</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail-cta">
        <div className="service-detail-cta__inner">
          <p className="service-detail-section__kicker">Następny krok</p>

          <h2>Chcesz uporządkować komunikację z klientami w jednym systemie?</h2>

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

export default ServiceKomunikacjaZKlientamiPL;