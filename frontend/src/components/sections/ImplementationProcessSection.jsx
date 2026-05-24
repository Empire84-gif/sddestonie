import process01 from "../../assets/images/proces01.png";
import process02 from "../../assets/images/proces02.png";
import process03 from "../../assets/images/proces03.png";
import process04 from "../../assets/images/proces04.png";

const processCards = [
  {
    image: process01,
    label: "Rozpoznanie",
    steps: [
      {
        number: "01",
        title: "Poznanie procesu i problemu firmy",
        text: "Analizujemy obecny sposób pracy, powtarzalne czynności, ręczne przepisywanie danych, dokumenty, komunikację oraz miejsca, w których proces traci płynność.",
      },
      {
        number: "02",
        title: "Propozycja kierunku rozwiązania",
        text: "Określamy, jaki typ systemu najlepiej odpowiada problemowi: CRM, panel administracyjny, formularz online, generator dokumentów, integracja API, automatyzacja albo moduł AI.",
      },
    ],
  },
  {
    image: process02,
    label: "Zakres",
    steps: [
      {
        number: "03",
        title: "Ustalenie zakresu pierwszej wersji",
        text: "Wybieramy funkcje najważniejsze na start, definiujemy dane, role użytkowników, dokumenty, statusy oraz podstawowy przepływ pracy w systemie.",
      },
      {
        number: "04",
        title: "Projekt struktury aplikacji",
        text: "Przygotowujemy strukturę widoków, formularzy, bazy danych, modułów, uprawnień i logiki działania, zanim rozpocznie się właściwa budowa systemu.",
      },
    ],
  },
  {
    image: process03,
    label: "Budowa",
    steps: [
      {
        number: "05",
        title: "Budowa systemu od podstaw",
        text: "Tworzymy frontend, backend, bazę danych, panel administracyjny, automatyzacje, generatory PDF, integracje mail/API oraz elementy AI, jeśli są częścią zakresu.",
      },
      {
        number: "06",
        title: "Testy na realnych scenariuszach",
        text: "Sprawdzamy działanie systemu na przykładach z codziennej pracy: klient, formularz, dokument, wiadomość, raport, zadanie, płatność albo inny obsługiwany proces.",
      },
    ],
  },
  {
    image: process04,
    label: "Wdrożenie",
    steps: [
      {
        number: "07",
        title: "Poprawki i uruchomienie",
        text: "Po testach wprowadzamy potrzebne korekty, przygotowujemy środowisko produkcyjne i uruchamiamy system zgodnie z ustalonym zakresem projektu.",
      },
      {
        number: "08",
        title: "Dalsza rozbudowa systemu",
        text: "Po pierwszej wersji system może być rozwijany o kolejne moduły: dashboardy, CRM, maile, raporty, płatności, dokumenty PDF, integracje lub AI assistant.",
      },
    ],
  },
];

function ImplementationProcessSection() {
  return (
    <section className="implementation-process-section">
      <div className="implementation-process-section__inner container">
        <div className="implementation-process-section__head">
          <p>Proces wdrożenia</p>

          <h2>Od problemu w firmie do działającego systemu.</h2>

          <p>
            Zaczynamy od analizy procesu, danych i sposobu pracy firmy.
            <br />
            Dopiero później projektujemy strukturę aplikacji, budujemy pierwszą
            wersję systemu, testujemy ją na realnych scenariuszach i rozwijamy o
            kolejne moduły.
          </p>
        </div>

        <div className="implementation-process-grid">
          {processCards.map((card) => (
            <article className="implementation-process-card" key={card.label}>
              <img src={card.image} alt="" loading="lazy" />

              <div className="implementation-process-card__overlay">
                <span className="implementation-process-card__label">
                  {card.label}
                </span>

                <div className="implementation-process-card__steps">
                  {card.steps.map((step) => (
                    <div
                      className="implementation-process-step"
                      key={step.number}
                    >
                      <span>{step.number}</span>

                      <div>
                        <h3>{step.title}</h3>
                        <p>{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ImplementationProcessSection;