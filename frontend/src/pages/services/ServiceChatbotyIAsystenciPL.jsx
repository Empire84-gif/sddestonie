import { Link } from "react-router-dom";

import heroBg from "../../assets/images/aidivider.png";
import aiServices from "../../assets/images/aiservices.png";

function ServiceChatbotyIAsystenciPL() {
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
          <p className="service-detail-section__kicker">Chatboty i asystenci</p>

          <h2>
            Asystenci, którzy pomagają klientom i zespołowi działać szybciej, ale w ramach konkretnego procesu.
          </h2>

          <p className="service-detail-section__lead">
            Tworzymy chatboty i asystentów, które nie są tylko ozdobnym okienkiem na stronie.
            Projektujemy je jako część większego systemu: połączonego z formularzami,
            CRM, bazą wiedzy, dokumentami, statusami, zgłoszeniami albo procesem obsługi klienta.
          </p>

          <p className="service-detail-section__lead">
            Asystent może odpowiadać na pytania, zbierać dane, kwalifikować zapytania,
            przekazywać informacje do zespołu, pomagać w obsłudze klientów lub wspierać
            pracowników w szybkim odnajdywaniu informacji.
          </p>

          <div className="service-detail-content">
            <div className="service-detail-content__text">
              <h3>Chatbot jako narzędzie procesu, nie tylko rozmowa</h3>

              <p>
                Największy problem wielu chatbotów polega na tym, że działają w oderwaniu
                od reszty firmy. Odpowiadają ogólnie, nie zapisują danych tam, gdzie trzeba,
                nie tworzą zgłoszeń, nie aktualizują CRM i nie pomagają zespołowi w dalszej
                obsłudze klienta.
              </p>

              <p>
                Dobrze zaprojektowany asystent powinien być elementem workflow. Może zebrać
                dane od klienta, zadać właściwe pytania, zapisać odpowiedzi w systemie,
                przypisać sprawę do kategorii, utworzyć zgłoszenie, wysłać potwierdzenie
                i przekazać zespółowi uporządkowane podsumowanie.
              </p>

              <p>
                W zależności od potrzeb firmy asystent może być prostym chatbotem opartym
                o scenariusze, bardziej zaawansowanym modułem AI albo wewnętrznym narzędziem
                dla pracowników, które pomaga korzystać z firmowej wiedzy, dokumentów
                i historii klientów.
              </p>

              <p>
                Dzięki temu chatbot przestaje być dodatkiem marketingowym, a zaczyna być
                praktycznym narzędziem do zbierania informacji, obsługi zapytań, wsparcia
                klienta i automatyzacji pierwszych etapów kontaktu.
              </p>

              <div className="service-detail-list-block">
                <h3>Co może robić chatbot lub asystent?</h3>

                <ul>
                  <li>Odpowiadać na najczęstsze pytania klientów</li>
                  <li>Zbierać dane kontaktowe i szczegóły zapytania</li>
                  <li>Kwalifikować leady i przekazywać je do CRM</li>
                  <li>Tworzyć zgłoszenia, statusy i zadania dla zespołu</li>
                  <li>Wysyłać automatyczne potwierdzenia wiadomości</li>
                  <li>Wspierać klientów w wyborze usługi lub kolejnego kroku</li>
                  <li>Pomagać pracownikom wyszukiwać informacje w bazie wiedzy</li>
                  <li>Streszczać rozmowy, dokumenty lub historię klienta</li>
                  <li>Działać jako wewnętrzny asystent dla zespołu</li>
                  <li>Łączyć stronę, formularze, CRM i komunikację w jeden proces</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail-cta">
        <div className="service-detail-cta__inner">
          <p className="service-detail-section__kicker">Następny krok</p>

          <h2>Chcesz stworzyć asystenta, który realnie wspiera proces firmy?</h2>

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

export default ServiceChatbotyIAsystenciPL;