import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";

import heroBg from "../assets/images/aidivider.png";
import aiServices from "../assets/images/aiservices.png";
import automatedCrmPreview from "../assets/images/projects-automated-crm.png";
import internalCrmPreview from "../assets/images/projects-internal-crm.png";
import crmWorkflowPreview from "../assets/images/projects-crm-workflow.png";
import alifioPreview from "../assets/images/projects-alifio-booking.png";
import alifioAssistantPreview from "../assets/images/projects-alifio-assistant.png";

const projects = [
  {
    kicker: "Przykład wdrożenia",
    title: "Automatyczny CRM i system obsługi klientów",
    label: "Panel systemu",
    image: automatedCrmPreview,
    intro: [
      "Ten system został zaprojektowany dla polskiego klienta jako w pełni zautomatyzowane środowisko do obsługi klientów, zamówień, komunikacji oraz przetwarzania danych pochodzących z formularzy online i innych źródeł wejściowych.",
      "Platforma łączy funkcje CRM, systemu operacyjnego, automatyzacji workflow, komunikacji mailowej, obsługi płatności oraz generowania dokumentów w jednym centralnym środowisku pracy.",
      "Głównym celem systemu jest maksymalne ograniczenie pracy manualnej oraz automatyczne przejmowanie procesów, które w wielu firmach nadal wykonywane są ręcznie przez pracowników — od przepisywania danych z formularzy, przez tworzenie kart klientów i numerów zamówień, aż po wysyłkę dokumentów, przypomnień i komunikacji e-mail.",
    ],
    beforeImage: [
      {
        title: "Automatyczne przetwarzanie danych",
        text: "System rozpoczyna pracę już na etapie formularza online umieszczonego na stronie klienta. Dane przesyłane przez użytkowników są automatycznie pobierane i przetwarzane według wcześniej ustalonych reguł biznesowych.",
        items: [
          "automatycznie tworzyć lub aktualizować karty klientów",
          "nadawać numery zamówień, zgłoszeń lub rezerwacji",
          "przypisywać statusy oraz etapy workflow",
          "generować zadania operacyjne",
          "uruchamiać procesy automatyzacji",
          "tworzyć dokumenty i potwierdzenia",
          "przypisywać dane do odpowiednich działów lub użytkowników",
        ],
      },
      {
        title: "Rozbudowany system mailowy",
        text: "Jednym z kluczowych elementów rozwiązania jest rozbudowany system komunikacji mailowej zintegrowany bezpośrednio z logiką platformy.",
        items: [
          "potwierdzenia zgłoszeń",
          "wiadomości statusowe",
          "przypomnienia",
          "informacje o płatnościach",
          "dokumenty PDF",
          "faktury",
          "wiadomości marketingowe",
          "komunikację operacyjną",
        ],
      },
    ],
    afterImage: [
      {
        title: "Akcje wykonywane z poziomu wiadomości e-mail",
        text: "Komunikacja nie jest jednostronna. Platforma umożliwia również wykonywanie określonych działań bezpośrednio z poziomu wiadomości e-mail.",
        items: [
          "samodzielne cofanie zgód marketingowych",
          "aktualizowanie wybranych danych",
          "potwierdzanie lub odrzucanie działań",
          "przechodzenie przez kolejne etapy procesu",
          "wykonywanie akcji bez konieczności logowania do osobnego panelu",
        ],
      },
      {
        title: "SMS, płatności i procesy finansowe",
        text: "Platforma może zostać rozszerzona o moduł SMS, obsługę płatności oraz automatyczne generowanie dokumentów finansowych.",
        items: [
          "przypomnienia SMS",
          "powiadomienia statusowe",
          "kody lub potwierdzenia",
          "automatyczne komunikaty związane z procesem klienta",
          "faktury",
          "potwierdzenia",
          "rozliczenia",
          "raporty finansowe",
        ],
      },
      {
        title: "Dokumenty, integracje i skalowalność",
        text: "Dużą zaletą rozwiązania jest możliwość automatycznego generowania dokumentów na podstawie danych znajdujących się już w systemie. Platforma może zostać dostosowana do indywidualnego procesu działania firmy oraz rozbudowana o dodatkowe funkcje, integracje i automatyzacje.",
        items: [
          "CRM",
          "ERP",
          "systemy płatności",
          "narzędzia mailingowe",
          "zewnętrzne API",
          "dashboardy",
          "platformy raportowe",
          "narzędzia AI wspierające analizę danych lub komunikację",
        ],
      },
      {
        title: "Eksport danych",
        text: "Istotnym elementem systemu jest również możliwość eksportowania danych do formatów wymaganych przez klienta lub proces operacyjny firmy.",
        items: [
          "CSV",
          "Excel",
          "PDF",
          "JSON",
          "raporty niestandardowe",
          "dedykowane pliki importowe dla innych systemów",
        ],
      },
    ],
    result:
      "Największą wartością rozwiązania jest pełna automatyzacja procesów, ograniczenie błędów wynikających z ręcznej pracy oraz stworzenie jednego uporządkowanego środowiska, które integruje formularze, komunikację, dokumenty, płatności i dane klientów w jednym systemie. Firma zyskuje większą kontrolę nad procesami, szybszą obsługę klientów oraz możliwość skalowania działalności bez proporcjonalnego zwiększania liczby ręcznych działań wykonywanych przez zespół.",
  },
  {
  kicker: "Wewnętrzny system firmowy",
  title: "Dashboard firmowy i wewnętrzny system CRM",
  label: "Wewnętrzny dashboard CRM",
  image: internalCrmPreview,
  intro: [
    "Ten system został zaprojektowany jako wewnętrzne centrum zarządzania firmą, łączące funkcje CRM, panelu operacyjnego, systemu dokumentów, poczty, zadań, projektów oraz raportowania w jednym środowisku.",
    "Jego celem jest uporządkowanie codziennej pracy firmy i ograniczenie konieczności korzystania z wielu oddzielnych narzędzi jednocześnie.",
    "Platforma umożliwia zarządzanie klientami, historią kontaktu, dokumentami, ofertami, fakturami, płatnościami, zadaniami oraz projektami z poziomu jednego panelu.",
  ],
  beforeImage: [
    {
      title: "Centrum operacyjne firmy",
      text: "Wszystkie najważniejsze dane operacyjne znajdują się w jednym miejscu, dzięki czemu zespół może szybciej odnajdywać informacje, kontrolować statusy i prowadzić bieżącą obsługę klientów.",
      items: [
        "baza klientów i kontaktów",
        "moduł dokumentów",
        "generator ofert i faktur",
        "rejestr płatności",
        "moduł projektów",
        "moduł zadań",
      ],
    },
    {
      title: "Dokumenty i komunikacja",
      text: "System porządkuje dokumenty oraz komunikację z klientami bezpośrednio w panelu firmowym, bez konieczności pracy na wielu rozproszonych narzędziach.",
      items: [
        "oferty, faktury, umowy i raporty",
        "automatyczne używanie danych klienta w dokumentach",
        "wewnętrzny system mailowy",
        "przypisywanie wiadomości do klientów lub projektów",
        "statusy, archiwizacja i historia kontaktu",
      ],
    },
  ],
  afterImage: [
    {
      title: "Dashboard i raportowanie",
      text: "Dashboard pozwala monitorować podstawowe informacje o firmie oraz bieżące działania operacyjne.",
      items: [
        "liczba klientów",
        "liczba dokumentów",
        "statusy płatności",
        "aktywne projekty",
        "zadania zespołu",
        "widoki analityczne dopasowane do firmy",
      ],
    },
    {
      title: "Logowanie i ustawienia",
      text: "System może obsługiwać konta użytkowników, panel ustawień oraz kontrolę dostępu do wybranych modułów.",
      items: [
        "logowanie użytkowników",
        "panel ustawień",
        "role i uprawnienia",
        "kontrola dostępu do danych",
        "konfiguracja modułów firmowych",
      ],
    },
    {
      title: "Rozbudowa systemu",
      text: "Platforma może być rozwijana etapami — od prostego CRM i dokumentów, przez mail center i płatności, aż po automatyzacje oraz moduły AI.",
      items: [
        "automatyzacje workflow",
        "generowanie PDF",
        "integracje API",
        "moduły AI do analizy danych",
        "wsparcie obsługi klienta",
        "organizacja pracy zespołu",
      ],
    },
  ],
  result:
    "Największą wartością rozwiązania jest centralizacja danych i procesów. Zamiast prowadzić klientów w jednym miejscu, dokumenty w drugim, płatności w arkuszu, a komunikację w skrzynce mailowej, firma otrzymuje jedno spójne środowisko, które porządkuje codzienną pracę i daje większą kontrolę nad operacjami.",
},
{
  kicker: "Dedykowany CRM",
  title: "Dedykowany CRM i system zarządzania workflow",
  label: "Dashboard CRM i workflow",
  image: crmWorkflowPreview,
  intro: [
    "Ten system został zaprojektowany jako dedykowane środowisko CRM do zarządzania relacjami z klientami, procesami sprzedażowymi, komunikacją oraz codzienną organizacją pracy firmy.",
    "Jego celem nie jest jedynie przechowywanie danych klientów, ale uporządkowanie całego workflow operacyjnego w jednym centralnym systemie.",
    "Platforma łączy funkcje klasycznego CRM, panelu operacyjnego, systemu dokumentów oraz narzędzia do automatyzacji procesów biznesowych.",
  ],
  beforeImage: [
    {
      title: "Dla firm, które chcą uporządkować pracę",
      text: "System został przygotowany z myślą o firmach, które tracą czas na ręczne działania, pracują w wielu osobnych narzędziach i potrzebują własnego środowiska dopasowanego do procesu firmy.",
      items: [
        "ograniczenie ręcznego przepisywania danych",
        "zastąpienie arkuszy Excel i rozproszonych narzędzi",
        "uporządkowanie komunikacji i statusów",
        "automatyzacja codziennych działań",
        "własne środowisko pracy dopasowane do firmy",
      ],
    },
    {
      title: "Obsługa procesu od leadu do realizacji",
      text: "CRM umożliwia obsługę pełnego procesu od pierwszego kontaktu z klientem aż po realizację projektu lub sprzedaży.",
      items: [
        "zbieranie danych z formularzy online",
        "obsługa wiadomości e-mail",
        "automatyczne tworzenie rekordów klientów",
        "przypisywanie statusów",
        "generowanie zadań",
        "organizacja pipeline pracy zespołu",
      ],
    },
  ],
  afterImage: [
    {
      title: "Moduły systemu",
      text: "Wbudowane moduły pozwalają firmie prowadzić klientów, projekty, dokumenty, zadania oraz komunikację w jednym miejscu.",
      items: [
        "zarządzanie leadami i klientami",
        "pipeline sprzedażowy",
        "projekty i zadania",
        "komunikacja mailowa",
        "dokumenty PDF",
        "oferty, raporty i umowy",
        "statusy oraz etapy realizacji",
        "zadania przypisywane do użytkowników",
      ],
    },
    {
      title: "Logowanie, użytkownicy i uprawnienia",
      text: "System posiada moduł użytkowników i logowania, dzięki któremu każdy członek zespołu może pracować we własnym środowisku z odpowiednim poziomem dostępu.",
      items: [
        "konta pracowników",
        "role użytkowników",
        "uprawnienia do modułów",
        "ograniczanie widoczności klientów",
        "kontrola dostępu do projektów",
        "bezpieczna praca zespołu",
      ],
    },
    {
      title: "Możliwość dalszej rozbudowy",
      text: "Platforma może rozwijać się razem z firmą i zostać rozszerzona o dodatkowe integracje, automatyzacje oraz moduły AI.",
      items: [
        "integracje API",
        "płatności online",
        "dashboardy i analityka",
        "moduły AI wspierające obsługę klienta",
        "automatyczne generowanie odpowiedzi",
        "klasyfikacja leadów",
        "workflow automation",
        "system ticketowy lub helpdesk",
      ],
    },
  ],
  result:
    "Największą wartością dla firmy jest ograniczenie chaosu operacyjnego oraz centralizacja danych i procesów w jednym miejscu. Zamiast przełączać się pomiędzy mailami, dokumentami, arkuszami i komunikatorami, zespół pracuje w jednym uporządkowanym środowisku dostosowanym do realnego modelu działania firmy. To dedykowany system budowany wokół konkretnego procesu biznesowego, który może rozwijać się razem z firmą i jej potrzebami.",
},
{
  kicker: "SaaS booking system",
  title: "Platforma rezerwacji online Alifio",
  label: "Dashboard systemu rezerwacji",
  image: alifioPreview,
  intro: [
    "Alifio został zaprojektowany jako nowoczesny system rezerwacji online typu SaaS przeznaczony przede wszystkim dla rynku polskiego oraz firm usługowych działających w modelu umawiania terminów.",
    "Platforma została stworzona z myślą o salonach, gabinetach, punktach usługowych oraz firmach, które potrzebują uporządkowanego i w pełni automatycznego środowiska do obsługi rezerwacji, klientów, personelu oraz komunikacji.",
    "System działa jako dedykowana instalacja dla każdego klienta, dzięki czemu może zostać dostosowany do konkretnego modelu pracy firmy, jej procesu obsługi oraz identyfikacji wizualnej.",
  ],
  beforeImage: [
    {
      title: "Rezerwacja online na stronie klienta",
      text: "Alifio integruje się bezpośrednio ze stroną internetową klienta za pomocą przycisku lub modułu rezerwacji online. Użytkownik końcowy może samodzielnie wybrać usługę, termin oraz pracownika.",
      items: [
        "przycisk lub moduł rezerwacji na stronie klienta",
        "samodzielny wybór usługi",
        "wybór terminu i pracownika",
        "proces bez ręcznej obsługi przez personel",
        "dedykowana instalacja dla każdego klienta",
      ],
    },
    {
      title: "Automatyczne zarządzanie kalendarzem",
      text: "Jednym z kluczowych elementów platformy jest inteligentne zarządzanie kalendarzem i dostępnością. System automatycznie układa terminarz na podstawie konfiguracji punktu usługowego.",
      items: [
        "grafiki pracowników",
        "dostępność personelu",
        "długość usług",
        "przerwy",
        "dni wolne",
        "ograniczenia czasowe",
        "konfiguracja biznesowa punktu usługowego",
      ],
    },
  ],
  afterImage: [
    {
      title: "Komunikacja mailowa i SMS",
      text: "Platforma posiada rozbudowany system komunikacji mailowej i może zostać rozszerzona o moduł powiadomień SMS.",
      items: [
        "potwierdzenia rezerwacji",
        "przypomnienia o wizytach",
        "zmiany statusów",
        "komunikacja organizacyjna",
        "wiadomości marketingowe",
        "wysyłka dokumentów i informacji operacyjnych",
        "powiadomienia SMS o terminach i zmianach wizyt",
      ],
    },
    {
      title: "Zgody, dane i automatyzacja",
      text: "Alifio wspiera automatyzację danych oraz zgodności marketingowych. Platforma może samodzielnie aktualizować statusy zgód użytkowników na podstawie działań wykonywanych z poziomu wiadomości e-mail.",
      items: [
        "automatyczna aktualizacja zgód marketingowych",
        "synchronizacja danych bez ręcznej obsługi",
        "zarządzanie danymi klientów",
        "automatyczne karty pracowników",
        "organizacja harmonogramów",
      ],
    },
    {
      title: "Konta pracowników i uprawnienia",
      text: "Rozwiązanie posiada rozbudowany system użytkowników i uprawnień. Każdy pracownik może posiadać własne konto z indywidualnym zakresem dostępu.",
      items: [
        "ograniczanie widoczności danych",
        "przypisywanie pracowników do konkretnych usług",
        "zarządzanie harmonogramami",
        "definiowanie ról i uprawnień",
        "kontrola dostępu do modułów administracyjnych",
      ],
    },
    {
      title: "Chatbot i personalizacja wizualna",
      text: "Istotnym elementem systemu jest wbudowany chatbot wspierający proces umawiania wizyt oraz możliwość dostosowania wyglądu platformy do identyfikacji klienta.",
      items: [
        "chatbot wspierający rezerwację terminu",
        "odpowiedzi na podstawowe pytania",
        "kierowanie klienta do odpowiednich terminów lub usług",
        "globalna zmiana koloru akcentu",
        "personalizacja wyglądu pod markę klienta",
      ],
    },
  ],
  result:
    "Największą wartością rozwiązania jest pełna automatyzacja procesu rezerwacji oraz centralizacja wszystkich najważniejszych elementów działania firmy usługowej w jednym środowisku. Zamiast ręcznie zarządzać kalendarzem, wiadomościami, przypomnieniami i dostępnością personelu, firma otrzymuje system, który sam organizuje proces obsługi klienta, ogranicza ilość pracy manualnej oraz pozwala skalować działalność bez proporcjonalnego zwiększania obciążenia zespołu.",
},
{
  kicker: "Booking assistant",
  title: "Asystent rezerwacji Alifio",
  label: "Interfejs asystenta",
  image: alifioAssistantPreview,
  variant: "portrait",
  intro: [
    "Ten projekt pokazuje automatycznego asystenta rezerwacji wbudowanego w system Alifio. Asystent został zaprojektowany jako część procesu umawiania wizyt, a nie jako zwykły chatbot marketingowy.",
    "Jego zadaniem jest prowadzenie użytkownika przez rezerwację, pomoc w wyborze usługi, znalezienie dostępnego terminu oraz ograniczenie liczby powtarzalnych pytań kierowanych do obsługi.",
    "Dzięki temu punkt usługowy może obsługiwać więcej zapytań automatycznie, a klient otrzymuje prostszy i bardziej intuicyjny sposób przejścia przez proces rezerwacji.",
  ],
  beforeImage: [
    {
      title: "Asystent jako część procesu rezerwacji",
      text: "Asystent działa wewnątrz systemu rezerwacji i prowadzi użytkownika krok po kroku przez najważniejsze decyzje.",
      items: [
        "pomoc w wyborze usługi",
        "prowadzenie przez dostępne terminy",
        "kierowanie do odpowiedniego pracownika",
        "odpowiedzi na podstawowe pytania",
        "zmniejszenie liczby ręcznych wiadomości do obsługi",
      ],
    },
    {
      title: "Wsparcie dla klienta końcowego",
      text: "Użytkownik nie musi samodzielnie analizować całego systemu ani szukać informacji w wielu miejscach. Asystent pomaga mu przejść przez proces szybciej i wygodniej.",
      items: [
        "prostszy wybór terminu",
        "mniej porzuconych rezerwacji",
        "czytelna komunikacja krok po kroku",
        "bardziej intuicyjny proces dla klienta",
        "automatyczne prowadzenie do kolejnego etapu",
      ],
    },
  ],
  afterImage: [
    {
      title: "Korzyść dla firmy usługowej",
      text: "Asystent odciąża zespół z powtarzalnych pytań i pomaga utrzymać płynność obsługi rezerwacji.",
      items: [
        "mniej ręcznego odpisywania",
        "szybsza obsługa klientów",
        "większa dostępność poza godzinami pracy",
        "lepsza organizacja procesu rezerwacji",
        "możliwość dalszej rozbudowy o automatyzacje",
      ],
    },
    {
      title: "Integracja z systemem Alifio",
      text: "Asystent może być połączony z usługami, pracownikami, kalendarzem, dostępnością oraz komunikacją mailową lub SMS.",
      items: [
        "integracja z kalendarzem",
        "dostępność pracowników",
        "lista usług",
        "powiadomienia e-mail",
        "możliwość rozszerzenia o SMS",
        "wspólne dane z systemem rezerwacji",
      ],
    },
  ],
  result:
    "Największą wartością rozwiązania jest połączenie rezerwacji online z inteligentnym prowadzeniem użytkownika przez proces. Firma otrzymuje nie tylko kalendarz, ale także asystenta, który pomaga klientom szybciej znaleźć odpowiedni termin, ogranicza liczbę ręcznych wiadomości i zwiększa automatyzację obsługi.",
}
];

  function ProjectsPage() {
  useEffect(() => {
    document.body.classList.add("projects-page-active");

    return () => {
      document.body.classList.remove("projects-page-active");
    };
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  const activeProject = projects[activeIndex];

  const goPrev = () => {
    setDirection("prev");
    setActiveIndex((current) =>
      current === 0 ? projects.length - 1 : current - 1
    );
  };

  const goNext = () => {
    setDirection("next");
    setActiveIndex((current) =>
      current === projects.length - 1 ? 0 : current + 1
    );
  };

  return (
    <main>
      <section className="services-hero projects-hero">
        <img
          className="services-hero__bg"
          src={heroBg}
          alt=""
          aria-hidden="true"
        />

        <div className="services-hero__inner container">
          <div className="services-hero__content">
            <h1>Realizacje</h1>
          </div>

          <div className="services-hero__visual" aria-hidden="true">
            <img src={aiServices} alt="" />
          </div>
        </div>
      </section>

      <section className="projects-showcase-section">
        <div className="projects-showcase-section__inner">
          <div className="projects-showcase-section__nav">
            <button type="button" onClick={goPrev}>
              <ArrowLeft size={17} />
              Prev
            </button>

            <span>
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(projects.length).padStart(2, "0")}
            </span>

            <button type="button" onClick={goNext}>
              Next
              <ArrowRight size={17} />
            </button>
          </div>

          <article
            key={activeProject.title}
            className={`projects-showcase-section__slide is-${direction}`}
          >
            <div className="projects-showcase-section__top">
              <p className="projects-showcase-section__kicker">
                {activeProject.kicker}
              </p>

              <h2>{activeProject.title}</h2>

              <div className="projects-showcase-section__lead">
                {activeProject.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="projects-showcase-section__blocks">
                {activeProject.beforeImage.map((block) => (
                  <div className="projects-showcase-section__block" key={block.title}>
                    <h3>{block.title}</h3>
                    <p>{block.text}</p>

                    <ul>
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="projects-showcase-section__continue">
                <span>Ciąg dalszy opisu pod zdjęciem</span>
                <ArrowDown size={18} />
              </div>
            </div>

              <div
  className={`projects-showcase-section__preview ${
    activeProject.variant === "portrait" ? "is-portrait" : ""
  }`}
>
              <h3>{activeProject.label}</h3>

              <div className="projects-showcase-section__image">
                <img src={activeProject.image} alt={activeProject.label} />
              </div>
            </div>

            <div className="projects-showcase-section__after">
              <div className="projects-showcase-section__blocks">
                {activeProject.afterImage.map((block) => (
                  <div className="projects-showcase-section__block" key={block.title}>
                    <h3>{block.title}</h3>
                    <p>{block.text}</p>

                    <ul>
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="projects-showcase-section__result">
                <h3>Efekt wdrożenia</h3>
                <p>{activeProject.result}</p>
              </div>

              <div className="projects-showcase-section__cta">
                <p>Chcesz podobny system dla swojej firmy?</p>

                <Link to="/pl" state={{ scrollTo: "kontakt" }}>
                  Porozmawiajmy o projekcie
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default ProjectsPage;