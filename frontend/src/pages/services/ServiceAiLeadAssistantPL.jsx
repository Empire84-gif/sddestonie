import { Link } from "react-router-dom";

import heroBg from "../../assets/images/aidivider.png";
import aiServices from "../../assets/images/aiservices.png";

function ServiceAiLeadAssistantPL() {
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
          <p className="service-detail-section__kicker">AI Lead Assistant</p>

          <h2>
            System, który pomaga obsługiwać zapytania klientów szybciej i bardziej
            uporządkowanie.
          </h2>

          <p className="service-detail-section__lead">
            AI Lead Assistant to dedykowany moduł, który wspiera firmę w obsłudze
            nowych zapytań, formularzy kontaktowych, leadów sprzedażowych i wiadomości
            od potencjalnych klientów.
          </p>

          <p className="service-detail-section__lead">
            Nie jest to zwykły chatbot na stronie. To narzędzie połączone z procesem
            sprzedaży, CRM, formularzami, historią kontaktu i regułami działania firmy.
          </p>

          <div className="service-detail-content">
            <div className="service-detail-content__text">
              <h3>Jak AI może pomóc w obsłudze leadów?</h3>

              <p>
                W wielu firmach nowe zapytania trafiają do skrzynki mailowej, formularza
                kontaktowego albo wiadomości w mediach społecznościowych. Część leadów
                wymaga szybkiej reakcji, część dodatkowych pytań, a część powinna zostać
                od razu przypisana do odpowiedniej osoby lub kategorii.
              </p>

              <p>
                AI Lead Assistant może pomagać w analizowaniu treści zapytań,
                klasyfikowaniu leadów, rozpoznawaniu intencji klienta, przygotowywaniu
                roboczych odpowiedzi, porządkowaniu danych i przekazywaniu informacji
                do CRM lub panelu sprzedażowego.
              </p>

              <p>
                Taki system może działać razem z formularzem analizy projektu,
                formularzem kontaktowym, skrzynką mailową, bazą klientów i dashboardem.
                Dzięki temu firma szybciej widzi, które zapytania są wartościowe,
                czego klient potrzebuje i jaki powinien być kolejny krok.
              </p>

              <p>
                AI nie podejmuje decyzji za zespół, ale skraca czas potrzebny na
                wstępną analizę, porządkowanie informacji i przygotowanie odpowiedzi.
                To szczególnie przydatne tam, gdzie firma otrzymuje wiele podobnych
                zapytań albo musi szybko oceniać, czy dany lead pasuje do oferty.
              </p>

              <div className="service-detail-list-block">
                <h3>Co może robić AI Lead Assistant?</h3>

                <ul>
                  <li>Analizować zapytania z formularzy i wiadomości email</li>
                  <li>Klasyfikować leady według typu usługi lub priorytetu</li>
                  <li>Wyciągać najważniejsze informacje z wiadomości klienta</li>
                  <li>Tworzyć robocze odpowiedzi dla zespołu sprzedaży</li>
                  <li>Zapisywać dane leadów bezpośrednio do CRM</li>
                  <li>Przypisywać zapytania do odpowiednich osób lub kategorii</li>
                  <li>Pokazywać statusy i historię kontaktu z klientem</li>
                  <li>Łączyć formularz kontaktowy z procesem sprzedażowym</li>
                  <li>Tworzyć dashboard leadów i źródeł zapytań</li>
                  <li>Wspierać kwalifikację klientów przed rozmową handlową</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail-cta">
        <div className="service-detail-cta__inner">
          <p className="service-detail-section__kicker">Następny krok</p>

          <h2>Chcesz szybciej analizować i obsługiwać zapytania klientów?</h2>

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

export default ServiceAiLeadAssistantPL;