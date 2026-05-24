import { Link } from "react-router-dom";

import heroBg from "../../assets/images/aidivider.png";
import aiServices from "../../assets/images/aiservices.png";

function ServiceAplikacjeSaasPL() {
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
          <p className="service-detail-section__kicker">Aplikacje SaaS</p>

          <h2>Dedykowane aplikacje webowe i platformy SaaS tworzone wokół realnego procesu.</h2>

          <p className="service-detail-section__lead">
            Budujemy aplikacje webowe i systemy SaaS dla firm, które potrzebują własnego
            narzędzia do obsługi klientów, procesów, dokumentów, danych, płatności,
            raportów albo pracy zespołu.
          </p>

          <p className="service-detail-section__lead">
            Taki system może działać jako wewnętrzna platforma operacyjna, panel klienta,
            CRM, system rezerwacji, generator dokumentów, narzędzie do obsługi zgłoszeń
            albo produkt SaaS oferowany dalej klientom firmy.
          </p>

          <div className="service-detail-content">
            <div className="service-detail-content__text">
              <h3>Dlaczego dedykowana aplikacja SaaS daje większą kontrolę?</h3>

              <p>
                Gotowe narzędzia często rozwiązują tylko fragment problemu. Firma używa
                jednego systemu do klientów, drugiego do dokumentów, trzeciego do maili,
                kolejnego do raportów, a reszta procesu nadal odbywa się w Excelu,
                wiadomościach i ręcznych notatkach.
              </p>

              <p>
                Dedykowana aplikacja SaaS pozwala połączyć te elementy w jedno środowisko.
                Można zaprojektować dokładnie takie moduły, widoki, role użytkowników,
                statusy, automatyzacje i raporty, jakich potrzebuje konkretny model
                działania firmy.
              </p>

              <p>
                System może być prostym MVP uruchomionym etapami albo rozbudowaną
                platformą z kontami użytkowników, panelem administratora, płatnościami,
                dokumentami PDF, integracjami API, dashboardami i modułami AI.
              </p>

              <p>
                Firma otrzymuje własny program dostępny przez przeglądarkę — dopasowany
                wizualnie i funkcjonalnie do swojej marki, zespołu oraz procesów. Bez
                zbędnych funkcji, bez przypadkowej logiki i bez uzależnienia od ograniczeń
                masowego systemu.
              </p>

              <div className="service-detail-list-block">
                <h3>Co może zawierać dedykowana platforma SaaS?</h3>

                <ul>
                  <li>Panel administratora i konta użytkowników</li>
                  <li>CRM, baza klientów, firm, zgłoszeń lub projektów</li>
                  <li>Formularze online zapisujące dane bezpośrednio do systemu</li>
                  <li>Automatyczne generowanie dokumentów, ofert i PDF</li>
                  <li>Dashboardy, raporty, statystyki i widoki zarządcze</li>
                  <li>Role użytkowników, uprawnienia i logowanie</li>
                  <li>Integracje API z zewnętrznymi systemami</li>
                  <li>Powiadomienia mailowe, statusy i workflow</li>
                  <li>Moduły płatności, rezerwacji lub obsługi klienta</li>
                  <li>Możliwość dalszej rozbudowy o AI i automatyzacje</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail-cta">
        <div className="service-detail-cta__inner">
          <p className="service-detail-section__kicker">Następny krok</p>

          <h2>Masz pomysł na własny system albo aplikację SaaS?</h2>

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

export default ServiceAplikacjeSaasPL;