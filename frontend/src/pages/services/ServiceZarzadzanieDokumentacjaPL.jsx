import { Link } from "react-router-dom";

import heroBg from "../../assets/images/aidivider.png";
import aiServices from "../../assets/images/aiservices.png";

function ServiceZarzadzanieDokumentacjaPL() {
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
          <p className="service-detail-section__kicker">Zarządzanie dokumentacją</p>

          <h2>
            Systemy, które porządkują dokumenty, statusy, wersje i obieg informacji w firmie.
          </h2>

          <p className="service-detail-section__lead">
            Tworzymy dedykowane rozwiązania do zarządzania dokumentacją firmową:
            umowami, ofertami, raportami, formularzami, załącznikami, protokołami,
            dokumentami klientów oraz wewnętrznymi plikami procesowymi.
          </p>

          <p className="service-detail-section__lead">
            Celem jest uporządkowanie pracy z dokumentami tak, aby zespół wiedział,
            gdzie znajduje się właściwa wersja pliku, jaki jest status sprawy,
            kto odpowiada za kolejny krok i które dokumenty wymagają działania.
          </p>

          <div className="service-detail-content">
            <div className="service-detail-content__text">
              <h3>Dlaczego foldery i maile przestają wystarczać?</h3>

              <p>
                W wielu firmach dokumenty są rozproszone między skrzynkami mailowymi,
                folderami na komputerach, dyskami współdzielonymi, załącznikami PDF,
                arkuszami i wiadomościami od pracowników. Z czasem trudno ustalić,
                która wersja jest aktualna, kto ją zatwierdził i co powinno wydarzyć się dalej.
              </p>

              <p>
                Dedykowany system dokumentacji pozwala zebrać pliki, dane, statusy,
                historię zmian i powiązane działania w jednym miejscu. Dokument może być
                przypisany do klienta, projektu, zgłoszenia, pracownika, terminu albo
                konkretnego etapu procesu.
              </p>

              <p>
                System może obsługiwać wyszukiwanie, filtrowanie, wersjonowanie,
                statusy akceptacji, załączniki, komentarze, przypomnienia, automatyczne
                generowanie PDF oraz historię działań. Dzięki temu dokumenty przestają
                być chaotycznymi plikami, a stają się częścią uporządkowanego workflow.
              </p>

              <p>
                Takie rozwiązanie może działać jako osobny panel dokumentów albo część
                większego CRM, systemu SaaS lub platformy operacyjnej firmy. Można je
                połączyć z formularzami, bazą klientów, komunikacją mailową, dashboardami
                oraz automatyzacjami.
              </p>

              <div className="service-detail-list-block">
                <h3>Co może zawierać system zarządzania dokumentacją?</h3>

                <ul>
                  <li>Centralna baza dokumentów, plików i załączników</li>
                  <li>Dokumenty przypisane do klientów, projektów lub spraw</li>
                  <li>Statusy dokumentów, akceptacje i etapy obiegu</li>
                  <li>Historia zmian, wersje plików i log aktywności</li>
                  <li>Wyszukiwanie, filtrowanie i tagowanie dokumentów</li>
                  <li>Automatyczne generowanie PDF według wzorów firmy</li>
                  <li>Przypomnienia, terminy i powiadomienia mailowe</li>
                  <li>Role użytkowników i kontrola dostępu do dokumentów</li>
                  <li>Integracja z CRM, formularzami, mailem i dashboardami</li>
                  <li>Możliwość rozbudowy o analizę dokumentów z pomocą AI</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail-cta">
        <div className="service-detail-cta__inner">
          <p className="service-detail-section__kicker">Następny krok</p>

          <h2>Chcesz uporządkować dokumenty i obieg informacji w firmie?</h2>

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

export default ServiceZarzadzanieDokumentacjaPL;