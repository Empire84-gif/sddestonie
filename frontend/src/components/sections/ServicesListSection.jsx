import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import photo01 from "../../assets/images/photo01.png";
import photo02 from "../../assets/images/photo02.png";
import photo03 from "../../assets/images/photo03.png";
import photo04 from "../../assets/images/photo04.png";
import photo05 from "../../assets/images/photo05.png";
import photo06 from "../../assets/images/photo06.png";
import photo07 from "../../assets/images/photo07.png";
import photo08 from "../../assets/images/photo08.png";
import photo09 from "../../assets/images/photo09.png";
import photo10 from "../../assets/images/photo10.png";
import photo11 from "../../assets/images/photo11.png";
import photo12 from "../../assets/images/photo12.png";
import photo13 from "../../assets/images/photo13.png";
import photo14 from "../../assets/images/photo14.png";

const services = [
  ["01", "bi-arrow-repeat", "Automatyzacja", "Automatyzacja zadań i procesów", "Automatyzujemy powtarzalne czynności, które zabierają czas zespołowi: przepisywanie danych, wysyłkę wiadomości, tworzenie dokumentów, przypomnienia, statusy, obsługę formularzy i przepływ informacji.", "automatyzacja-zadan", photo01],
  ["02", "bi-stars", "AI Workflow", "Systemy z integracją AI", "Wdrażamy AI jako część realnego workflow firmy: analiza dokumentów, podsumowania zgłoszeń, wykrywanie brakujących danych, klasyfikacja zapytań oraz przygotowywanie szkiców odpowiedzi do zatwierdzenia.", "systemy-ai", photo02],
  ["03", "bi-people", "CRM", "Dedykowane systemy CRM", "Tworzymy systemy CRM dopasowane do firmy: baza klientów, historia kontaktów, notatki, zadania, statusy, dokumenty, follow-upy, płatności, projekty i panele administracyjne.", "systemy-crm", photo03],
  ["04", "bi-window-stack", "SaaS", "Aplikacje webowe i platformy SaaS", "Budujemy aplikacje działające w przeglądarce: panele klienta, panele admina, systemy zgłoszeń, narzędzia operacyjne, portale z logowaniem, dashboardy i pełne produkty SaaS.", "aplikacje-saas", photo04],
  ["05", "bi-file-earmark-plus", "PDF / Dokumenty", "Generatory dokumentów", "Tworzymy narzędzia generujące umowy, oferty, faktury, raporty, CV, formularze PDF i dokumenty firmowe na podstawie danych z formularza, CRM lub bazy danych.", "generatory-dokumentow", photo05],
  ["06", "bi-layout-text-window", "Formularze", "Systemy zbierania danych", "Projektujemy formularze online, formularze krokowe i systemy zgłoszeniowe, które zbierają dane, walidują informacje, zapisują rekordy w bazie i uruchamiają automatyczne działania.", "systemy-zbierania-danych", photo06],
  ["07", "bi-envelope-check", "Komunikacja", "Komunikacja i obsługa klientów", "Usprawniamy kontakt z klientami: automatyczne wiadomości, routing zapytań, szablony odpowiedzi, integracje z pocztą, formularzami, CRM oraz powiadomieniami dla zespołu.", "komunikacja-z-klientami", photo07],
  ["08", "bi-person-lines-fill", "AI Assistant", "AI Lead Assistant", "Tworzymy asystentów, którzy pomagają zamieniać wiadomości i formularze w uporządkowane leady, zadania, notatki, priorytety i propozycje kolejnego kroku dla pracownika.", "ai-lead-assistant", photo08],
  ["09", "bi-chat-dots", "Chatboty", "Chatboty i asystenci regułowi", "Budujemy przewidywalne chatboty i asystentów bez AI, oparte na scenariuszach, wyborach, przyciskach i formularzach konwersacyjnych, które prowadzą klienta krok po kroku.", "chatboty-i-asystenci", photo09],
  ["10", "bi-database", "Dane", "Bazy danych i migracje", "Projektujemy struktury baz danych, przenosimy dane z Excela i CSV, porządkujemy rekordy, ograniczamy duplikaty oraz przygotowujemy fundament pod dalszą automatyzację firmy.", "bazy-danych", photo10],
  ["11", "bi-bar-chart-line", "Dashboardy", "Raporty i dashboardy", "Tworzymy panele statystyk, raporty operacyjne i widoki zarządcze, które pokazują najważniejsze dane bez ręcznego składania informacji z wielu plików i wiadomości.", "raporty-i-dashboardy", photo11],
  ["12", "bi-search", "Monitoring", "Web scraping i monitoring danych", "Automatycznie zbieramy i monitorujemy dane z internetu: ceny, oferty, zmiany dostępności, informacje rynkowe, listy produktów i inne dane potrzebne do decyzji biznesowych.", "web-scraping-monitoring", photo12],
  ["13", "bi-folder2-open", "Dokumentacja", "Zarządzanie dokumentacją", "Budujemy systemy do przechowywania, wyszukiwania, kategoryzowania i kontroli dokumentów firmowych, z uprawnieniami użytkowników, historią zmian oraz powiązaniem z klientami lub projektami.", "zarzadzanie-dokumentacja", photo13],
  ["14", "bi-lightbulb", "Digitalizacja", "Doradztwo i digitalizacja procesów", "Pomagamy przeanalizować sposób pracy firmy, wskazać procesy do automatyzacji i zaplanować wdrożenie narzędzi cyfrowych etapami — od prostego MVP po rozbudowany system.", "doradztwo-digitalizacja", photo14],
];

function ServicesListSection() {
  const { lang = "pl" } = useParams();
  const basePath = lang === "pl" ? "/pl/uslugi" : `/${lang}/services`;

  useEffect(() => {
    document.body.classList.add("animations-ready");

    const rows = document.querySelectorAll(".service-row");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.style.setProperty("--reveal-delay", `${index * 60}ms`);
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    rows.forEach((row) => observer.observe(row));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="services-section">
      <div className="container">
        <div className="services-intro">
          <p className="section-kicker">Zakres usług</p>
          <h2>
  Nasze usługi są skierowane do firm, które chcą wdrożyć AI w codzienny workflow
  albo usprawnić działania, które dziś zajmują zbyt dużo czasu.
</h2>

<p>
  Nie korzystamy z gotowych szablonów. Każdy projekt tworzymy od podstaw — od
  tzw. pustej kartki — dopasowując system do sposobu pracy Twojej firmy, jej
  danych, dokumentów i procesów. Otrzymujesz dedykowane rozwiązanie premium,
  zbudowane pod konkretne potrzeby organizacji, które wraz z rozwojem firmy może
  być rozbudowywane o kolejne moduły, integracje, automatyzacje i funkcje AI.
</p>

        </div>

        <div className="services-list">
          {services.map(([number, icon, label, title, text, slug, photo], index) => (
            <article
              className={`service-row ${index % 2 === 0 ? "from-left" : "from-right"}`}
              key={number}
            >
              <div className="service-number">{number}</div>

              <div className="service-content">
                <p className="service-label">
                  <i className={`bi ${icon}`} aria-hidden="true" />
                  {label}
                  <span className="service-mobile-number">{number}</span>
                </p>

                <h2 className="service-title">{title}</h2>
                <p className="service-text">{text}</p>
              </div>

              <Link to={`${basePath}/${slug}`} className="service-action">
                Dowiedz się więcej
                <i className="bi bi-arrow-right" aria-hidden="true" />
              </Link>

              <div className="service-photo" aria-hidden="true">
                <img src={photo} alt="" loading="lazy" />
              </div>
            </article>
          ))}
        </div>
        
       <div className="services-bottom-action">
  <Link
    to={`/${lang}`}
    state={{ scrollTo: "kontakt" }}
    className="services-bottom-action__button"
  >
    Napisz do nas
  </Link>

  <Link
    to={`/${lang}`}
    state={{ scrollTo: "problems" }}
    className="services-bottom-action__button services-bottom-action__button--light"
  >
    Przykłady wdrożeń
  </Link>
</div>
      </div>
    </section>
  );
}

export default ServicesListSection;