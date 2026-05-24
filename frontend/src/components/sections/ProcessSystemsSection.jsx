import {
  AlertTriangle,
  Wrench,
} from "lucide-react";

import problem01 from "../../assets/images/problem-01.png";
import problem02 from "../../assets/images/problem-02.png";
import problem03 from "../../assets/images/problem-03.png";
import problem04 from "../../assets/images/problem-04.png";
import problem05 from "../../assets/images/problem-05.png";
import problem06 from "../../assets/images/problem-06.png";
import problem07 from "../../assets/images/problem-07.png";
import problem08 from "../../assets/images/problem-08.png";

const cases = [
  {
    number: "01",
    title: "Ręczne przepisywanie danych",
    image: problem01,
    alt: "Automatyzacja przepisywania danych",
    problem:
      "Firma zbiera dane z formularzy, wiadomości e-mail i arkuszy Excel. Pracownicy muszą ręcznie przepisywać te same informacje do dokumentów, rejestrów i wewnętrznych zestawień.",
    solution:
      "Wdrażamy formularze online połączone z centralną bazą danych, automatycznym obiegiem informacji oraz generowaniem dokumentów PDF.",
    result:
      "Dane wpisywane są raz, trafiają od razu do systemu, a zespół ogranicza ręczne kopiowanie i liczbę błędów.",
  },
  {
    number: "02",
    title: "Chaos w obsłudze klientów",
    image: problem02,
    alt: "System CRM i obsługa klientów",
    problem:
      "Informacje o klientach są rozproszone pomiędzy skrzynką e-mail, notatkami, arkuszami, wiadomościami pracowników i lokalnymi plikami.",
    solution:
      "Projektujemy CRM dopasowany do procesu firmy: baza klientów, statusy, historia kontaktu, notatki, zadania, dokumenty i dashboard.",
    result:
      "Zespół ma jedno miejsce do obsługi klientów, follow-upów, spraw bieżących i historii współpracy.",
    reverse: true,
  },
  {
    number: "03",
    title: "Powtarzalne pytania od klientów",
    image: problem03,
    alt: "Automatyczny asystent i chatbot",
    problem:
      "Klienci często zadają te same pytania albo wysyłają niepełne zapytania, przez co zespół musi dopytywać o podstawowe informacje.",
    solution:
      "Tworzymy asystentów, formularze krok po kroku albo chatboty scenariuszowe, które prowadzą użytkownika i zbierają kompletne dane.",
    result:
      "Firma otrzymuje lepiej przygotowane zapytania, a obsługa klienta jest szybsza i bardziej uporządkowana.",
  },
  {
    number: "04",
    title: "Wolne przygotowywanie ofert",
    image: problem04,
    alt: "Generator ofert i dokumentów PDF",
    problem:
      "Przygotowanie oferty wymaga kopiowania danych klienta, opisów usług, cen, zakresu prac i warunków współpracy.",
    solution:
      "Wdrażamy generator ofert z modułami usług, numeracją, danymi klienta, podsumowaniem wartości i eksportem do PDF.",
    result:
      "Profesjonalna oferta może powstać w kilka minut, bez ręcznego składania dokumentu od zera.",
    reverse: true,
  },
  {
    number: "05",
    title: "Brak kontroli nad dokumentami",
    image: problem05,
    alt: "Rejestr dokumentów i zarządzanie dokumentacją",
    problem:
      "Dokumenty są przechowywane w różnych folderach, wiadomościach e-mail, komputerach pracowników albo ręcznych rejestrach.",
    solution:
      "Budujemy rejestr dokumentów z kategoriami, klientami, datami, numeracją, statusem i możliwością generowania plików z systemu.",
    result:
      "Dokumentacja jest uporządkowana, łatwa do znalezienia i powiązana z klientami oraz procesami firmy.",
  },
  {
    number: "06",
    title: "Zbyt dużo wiadomości do analizy",
    image: problem06,
    alt: "AI do analizy wiadomości i zgłoszeń",
    problem:
      "Firma otrzymuje wiele wiadomości i zgłoszeń, ale trudno szybko ocenić, które są pilne i kto powinien się nimi zająć.",
    solution:
      "Wdrażamy moduł AI, który analizuje treść wiadomości, rozpoznaje temat, priorytet i typ sprawy.",
    result:
      "Zespół szybciej rozumie zgłoszenia, lepiej ustala priorytety i sprawniej reaguje.",
    reverse: true,
  },
  {
    number: "07",
    title: "Trudność w analizie dokumentów i zgłoszeń",
    image: problem07,
    alt: "AI analiza dokumentów i zgłoszeń w CRM",
    problem:
      "Pracownicy muszą ręcznie sprawdzać kompletność formularzy, dokumentów, zgłoszeń i załączników.",
    solution:
      "Integrujemy AI z CRM, aby system wskazywał braki, tworzył podsumowania i sugerował kolejne kroki.",
    result:
      "Weryfikacja zgłoszeń jest szybsza, mniej zależy od ręcznej analizy, a workflow staje się bardziej przewidywalny.",
  },
  {
    number: "08",
    title: "Zbyt dużo czasu na odpowiedzi e-mail",
    image: problem08,
    alt: "AI email assistant i automatyzacja odpowiedzi",
    problem:
      "Zespół odpowiada na dziesiątki podobnych wiadomości i za każdym razem musi sprawdzać historię klienta.",
    solution:
      "Łączymy CRM z AI assistantem, który analizuje wiadomość, kontekst klienta i przygotowuje szkic odpowiedzi.",
    result:
      "Komunikacja jest szybsza, bardziej spójna i mniej obciąża zespół w codziennej pracy.",
    reverse: true,
  },
];

export default function ProblemsSection() {
  return (
    <section id="problems" className="problems-section">
      <div className="container">
        <div className="problems-head">
          <p className="section-kicker">Przykłady wdrożeń</p>

          <h2>
            Problemy, które zamieniamy
            <br />
            w działające systemy
          </h2>

          <p>
            Każde wdrożenie zaczynamy od konkretnego problemu w firmie:
            ręcznej pracy, chaosu w danych, powtarzalnych wiadomości,
            dokumentów albo procesów, które można uporządkować technologią,
            automatyzacją lub AI.
          </p>
        </div>

        <div className="problem-cases">
          {cases.map((item) => (
            <article
              className={`problem-case ${item.reverse ? "reverse" : ""}`}
              key={item.number}
            >
              <div className="problem-case-text">
                <span className="problem-case-kicker">
                  Problem {item.number}
                </span>

                <h3>{item.title}</h3>

                <div className="problem-case-grid">
                  <div className="problem-block">
                    <span>
                      <AlertTriangle size={13} strokeWidth={1.8} />
                      Sytuacja przed wdrożeniem
                    </span>
                    <p>{item.problem}</p>
                  </div>

                  <div className="problem-block">
                    <span>
                      <Wrench size={13} strokeWidth={1.8} />
                      Co wdrażamy
                    </span>
                    <p>{item.solution}</p>
                  </div>
                </div>

                <div className="problem-result">
                  <strong>Efekt dla firmy</strong>
                  <p>{item.result}</p>
                </div>
              </div>

              <div className="problem-case-media">
                <img src={item.image} alt={item.alt} loading="lazy" />
                <span>{item.number}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}