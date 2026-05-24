import { Link } from "react-router-dom";

import heroBg from "../../assets/images/aidivider.png";
import aiServices from "../../assets/images/aiservices.png";

function ServiceDoradztwoDigitalizacjaPL() {
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
          <p className="service-detail-section__kicker">Doradztwo i digitalizacja</p>

          <h2>
            Pomagamy przełożyć codzienny chaos operacyjny na konkretny plan systemu.
          </h2>

          <p className="service-detail-section__lead">
            Doradztwo i digitalizacja procesów to etap, w którym analizujemy, jak firma
            pracuje dzisiaj: gdzie dane są przepisywane ręcznie, które zadania się
            powtarzają, gdzie powstają błędy i które obszary można uporządkować
            technologią.
          </p>

          <p className="service-detail-section__lead">
            To dobre rozwiązanie dla firm, które wiedzą, że tracą czas na ręcznej pracy,
            ale nie mają jeszcze gotowego pomysłu na CRM, SaaS, automatyzację, formularz,
            dashboard albo system AI.
          </p>

          <div className="service-detail-content">
            <div className="service-detail-content__text">
              <h3>Od rozmowy o problemie do mapy konkretnego rozwiązania</h3>

              <p>
                Często największym problemem nie jest brak narzędzi, tylko brak jasnego
                obrazu procesu. Firma korzysta z maili, arkuszy, plików, komunikatorów
                i kilku aplikacji, ale nikt nie widzi całego przepływu pracy od początku
                do końca.
              </p>

              <p>
                W ramach digitalizacji pomagamy rozpoznać, które działania warto
                zautomatyzować, które dane powinny trafiać do jednej bazy, jakie dokumenty
                można generować automatycznie i gdzie system może zastąpić powtarzalną
                pracę człowieka.
              </p>

              <p>
                Efektem nie jest ogólna prezentacja, tylko praktyczny kierunek wdrożenia:
                co należy zbudować jako pierwsze, jakie moduły mają sens, jak ograniczyć
                ryzyko, od czego zacząć MVP i jak rozwijać system etapami.
              </p>

              <p>
                Dzięki temu firma nie inwestuje w przypadkowe narzędzia, tylko dostaje
                plan rozwiązania dopasowany do własnego procesu, zespołu, danych i celów
                biznesowych.
              </p>

              <div className="service-detail-list-block">
                <h3>Co obejmuje doradztwo i analiza procesu?</h3>

                <ul>
                  <li>Rozpoznanie obecnego sposobu pracy firmy</li>
                  <li>Identyfikację ręcznych, powtarzalnych zadań</li>
                  <li>Mapowanie przepływu danych, dokumentów i komunikacji</li>
                  <li>Wskazanie obszarów do automatyzacji lub uproszczenia</li>
                  <li>Dobór właściwego typu systemu: CRM, SaaS, panel, formularz lub AI</li>
                  <li>Plan MVP i etapowego wdrożenia rozwiązania</li>
                  <li>Analizę narzędzi, z których firma korzysta obecnie</li>
                  <li>Rekomendacje dotyczące integracji API i bazy danych</li>
                  <li>Ustalenie priorytetów, modułów i kolejności prac</li>
                  <li>Przygotowanie kierunku dla dedykowanego systemu firmowego</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail-cta">
        <div className="service-detail-cta__inner">
          <p className="service-detail-section__kicker">Następny krok</p>

          <h2>Nie wiesz jeszcze, jaki system będzie najlepszy dla Twojej firmy?</h2>

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

export default ServiceDoradztwoDigitalizacjaPL;