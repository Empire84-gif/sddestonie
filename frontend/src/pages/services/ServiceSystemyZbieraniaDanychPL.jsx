import { Link } from "react-router-dom";

import heroBg from "../../assets/images/aidivider.png";
import aiServices from "../../assets/images/aiservices.png";

function ServiceSystemyZbieraniaDanychPL() {
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
          <p className="service-detail-section__kicker">Zbieranie danych</p>

          <h2>Systemy, które zbierają dane z formularzy, plików i procesów w jednym uporządkowanym miejscu.</h2>

          <p className="service-detail-section__lead">
            Tworzymy dedykowane systemy do zbierania, porządkowania i przetwarzania danych,
            które dziś często trafiają do firmy przez maile, arkusze, formularze, dokumenty
            PDF, wiadomości od klientów albo ręczne notatki pracowników.
          </p>

          <p className="service-detail-section__lead">
            Celem nie jest samo „dodanie formularza”, ale zbudowanie logicznego procesu:
            dane trafiają do bazy, są walidowane, przypisywane do klienta lub sprawy,
            a następnie mogą uruchamiać dokumenty, statusy, zadania, raporty albo
            automatyzacje.
          </p>

          <div className="service-detail-content">
            <div className="service-detail-content__text">
              <h3>Dlaczego samo zbieranie danych to za mało?</h3>

              <p>
                W wielu firmach dane są rozproszone pomiędzy skrzynką mailową, Excelem,
                formularzami Google, dokumentami PDF i wiadomościami od klientów.
                Problem pojawia się wtedy, gdy trzeba szybko znaleźć konkretną informację,
                sprawdzić historię sprawy, przygotować dokument albo przekazać dane dalej.
              </p>

              <p>
                Dedykowany system zbierania danych porządkuje ten chaos. Zamiast ręcznie
                przepisywać informacje między narzędziami, firma może mieć własne formularze,
                bazę danych, panel administracyjny, statusy, filtry, eksporty, dokumenty
                i automatyczne akcje po przesłaniu danych.
              </p>

              <p>
                Takie rozwiązanie może obsługiwać zgłoszenia klientów, zapisy, rekrutacje,
                zamówienia, ankiety, dokumentację, raporty terenowe, formularze wewnętrzne,
                dane projektowe albo każdy inny proces, w którym firma regularnie zbiera
                informacje od ludzi lub systemów.
              </p>

              <p>
                Dane mogą być od razu czyszczone, sprawdzane, grupowane i przypisywane
                do odpowiednich rekordów. Dzięki temu system staje się fundamentem
                dla dalszej automatyzacji: CRM, raportów, dashboardów, dokumentów PDF,
                powiadomień, integracji API i modułów AI.
              </p>

              <div className="service-detail-list-block">
                <h3>Co może zawierać system zbierania danych?</h3>

                <ul>
                  <li>Dedykowane formularze online dla klientów lub pracowników</li>
                  <li>Baza danych z wyszukiwaniem, filtrami i historią zmian</li>
                  <li>Panel administracyjny do obsługi zgłoszeń i rekordów</li>
                  <li>Walidacja danych i ograniczenie błędów przy wprowadzaniu</li>
                  <li>Automatyczne przypisywanie danych do klientów lub spraw</li>
                  <li>Eksporty, raporty, dashboardy i widoki zarządcze</li>
                  <li>Generowanie dokumentów PDF na podstawie przesłanych danych</li>
                  <li>Powiadomienia mailowe i statusy procesu</li>
                  <li>Integracje z CRM, API, arkuszami lub systemami zewnętrznymi</li>
                  <li>Możliwość dalszej rozbudowy o automatyzacje i AI</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail-cta">
        <div className="service-detail-cta__inner">
          <p className="service-detail-section__kicker">Następny krok</p>

          <h2>Chcesz uporządkować dane, które dziś rozchodzą się po mailach i arkuszach?</h2>

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

export default ServiceSystemyZbieraniaDanychPL;