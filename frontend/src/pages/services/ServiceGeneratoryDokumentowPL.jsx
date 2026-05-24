import { Link } from "react-router-dom";

import heroBg from "../../assets/images/aidivider.png";
import aiServices from "../../assets/images/aiservices.png";

function ServiceGeneratoryDokumentowPL() {
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
          <p className="service-detail-section__kicker">Generatory dokumentów</p>

          <h2>
            Systemy, które pomagają przygotowywać dokumenty szybciej, spójniej i bez ręcznego przepisywania danych.
          </h2>

          <p className="service-detail-section__lead">
            Tworzymy dedykowane aplikacje i moduły do obsługi dokumentów firmowych:
            umów, formularzy, ofert, raportów, protokołów, kart zgłoszeń,
            dokumentacji administracyjnej oraz innych plików, których przygotowanie
            każdego dnia zabiera zespołowi dużą ilość czasu.
          </p>

          <p className="service-detail-section__lead">
            Nie chodzi o proste generatory do tworzenia dokumentów „od zera”.
            Chodzi o systemy, które prowadzą pracownika przez konkretny proces,
            pobierają dane automatycznie, ograniczają liczbę błędów i pozwalają
            przygotować gotowy dokument znacznie szybciej niż przy ręcznej pracy.
          </p>

          <div className="service-detail-content">
            <div className="service-detail-content__text">
              <h3>Jak działa taki system?</h3>

              <p>
                W wielu firmach przygotowanie jednego dokumentu wymaga przepisywania
                tych samych danych między mailem, Excelem, CRM, PDF i formularzami.
                Pracownik musi ręcznie kopiować informacje klienta, sprawdzać poprawność,
                pilnować wersji dokumentów i pamiętać o wszystkich wymaganych polach.
              </p>

              <p>
                Dedykowany system upraszcza ten proces. Użytkownik uzupełnia dane
                w uporządkowanym formularzu albo wybiera klienta z bazy, a system
                sam przygotowuje odpowiedni dokument według ustalonego wzoru.
                Dane mogą być pobierane automatycznie z CRM, formularzy online,
                wcześniejszych zgłoszeń albo innych modułów systemu.
              </p>

              <p>
                Dzięki temu firma ogranicza ilość ręcznej pracy, zmniejsza ryzyko błędów
                oraz przyspiesza przygotowanie dokumentów, które wcześniej zajmowały
                kilkanaście lub kilkadziesiąt minut. W praktyce takie rozwiązania bardzo
                często oszczędzają zespołowi dziesiątki godzin miesięcznie.
              </p>

              <p>
                Tego typu system może działać jako osobna aplikacja albo część większego
                CRM lub platformy SaaS. Może również obsługiwać podpisy, statusy,
                workflow akceptacji, automatyczne wysyłki mailowe, archiwizację,
                dashboardy i integracje z innymi narzędziami firmy.
              </p>

              <div className="service-detail-list-block">
                <h3>Przykładowe zastosowania generatorów dokumentów</h3>

                <ul>
                  <li>Automatyczne przygotowywanie umów dla klientów</li>
                  <li>Generowanie ofert handlowych i wycen</li>
                  <li>Tworzenie raportów, podsumowań i dokumentacji</li>
                  <li>Formularze prowadzące pracownika krok po kroku</li>
                  <li>Uzupełnianie dokumentów danymi z CRM lub formularzy</li>
                  <li>Automatyczne generowanie PDF i numeracji dokumentów</li>
                  <li>Statusy dokumentów i workflow akceptacji</li>
                  <li>Archiwizacja dokumentacji i historia zmian</li>
                  <li>Integracja z mailami, bazą klientów i API</li>
                  <li>Systemy obsługi zgłoszeń i dokumentów administracyjnych</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail-cta">
        <div className="service-detail-cta__inner">
          <p className="service-detail-section__kicker">Następny krok</p>

          <h2>
            Chcesz ograniczyć czas tracony na ręczne przygotowywanie dokumentów?
          </h2>

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

export default ServiceGeneratoryDokumentowPL;