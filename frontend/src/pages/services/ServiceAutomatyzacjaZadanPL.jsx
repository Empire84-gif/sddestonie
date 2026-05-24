import heroBg from "../../assets/images/aidivider.png";
import aiServices from "../../assets/images/aiservices.png";
import { Link } from "react-router-dom";

function ServiceAutomatyzacjaZadanPL() {
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
    <p className="service-detail-section__kicker">Automatyzacja procesów</p>

    <h2>
      Systemy, które przejmują powtarzalną pracę i porządkują codzienny workflow firmy.
    </h2>

    <p className="service-detail-section__lead">
      W wielu firmach ogromna część czasu nadal znika na ręcznym przepisywaniu danych,
      pilnowaniu statusów, wysyłaniu wiadomości, tworzeniu dokumentów, aktualizowaniu
      arkuszy oraz przekazywaniu informacji między pracownikami i narzędziami.
      Z czasem proces zaczyna istnieć bardziej „w głowach ludzi” niż w uporządkowanym
      systemie.
    </p>

    <p className="service-detail-section__lead">
      Automatyzacja procesów nie polega wyłącznie na dodaniu AI albo pojedynczego
      formularza. Chodzi o zbudowanie środowiska pracy, w którym dane przepływają
      automatycznie między etapami firmy: od formularza klienta, przez CRM, dokumenty,
      komunikację, statusy, zadania, aż po raporty i dashboardy zarządcze.
    </p>

    <div className="service-detail-content">
      <div className="service-detail-content__text">
        <h3>Co można zautomatyzować?</h3>

        <p>
          Zakres automatyzacji zależy od modelu działania firmy. W praktyce bardzo
          często automatyzujemy obieg dokumentów, formularze online, obsługę leadów,
          przypisywanie klientów, generowanie ofert i umów PDF, wysyłkę wiadomości,
          przypomnienia, raportowanie, statusy projektów, procesy sprzedażowe,
          onboarding klientów, obieg zgłoszeń oraz przepływ informacji między
          systemami.
        </p>

        <p>
          Wiele firm korzysta jednocześnie z Excela, maila, komunikatorów,
          dokumentów PDF i kilku różnych aplikacji SaaS, które nie komunikują się
          ze sobą. Efektem są duplikaty danych, chaos organizacyjny i duża ilość
          ręcznej pracy. Dedykowany system pozwala połączyć te elementy w jeden,
          uporządkowany workflow.
        </p>

        <p>
          Automatyzacja może obejmować zarówno proste procesy administracyjne,
          jak i bardziej zaawansowane środowiska: CRM, systemy SaaS, dashboardy,
          analitykę danych, generatory dokumentów, obieg zgłoszeń, systemy mailowe,
          integracje API, monitoring danych albo moduły wspierane przez AI.
        </p>
      </div>

      <div className="service-detail-list-block">
  <h3>Najczęściej automatyzowane obszary pracy</h3>

  <ul>
    <li>Automatyczne generowanie ofert, umów i dokumentów PDF</li>
    <li>Obsługa formularzy online i leadów sprzedażowych</li>
    <li>CRM dopasowany do rzeczywistego procesu firmy</li>
    <li>Statusy projektów, zadania i przepływ pracy zespołu</li>
    <li>Dashboardy, raporty zarządcze i analiza danych</li>
    <li>Integracje API między używanymi narzędziami</li>
    <li>Automatyczne wiadomości, przypomnienia i powiadomienia</li>
    <li>Obieg dokumentów, zgłoszeń i informacji w firmie</li>
    <li>AI wspierające analizę danych, dokumentów i komunikacji</li>
  </ul>
</div>
    </div>

    
  </div>
</section>

      <section className="service-detail-cta">
  <div className="service-detail-cta__inner">
    <p className="service-detail-section__kicker">Następny krok</p>

    <h2>Chcesz sprawdzić, co dokładnie można zautomatyzować w Twojej firmie?</h2>

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

export default ServiceAutomatyzacjaZadanPL;