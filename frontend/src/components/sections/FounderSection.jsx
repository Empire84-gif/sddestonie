import founderImage from "../../assets/images/founder-image.png";

export default function FounderSection() {
  return (
    <section className="founder-section">
      <div className="container founder-section__inner">
        <div className="founder-section__content">
          <p className="founder-section__kicker">Kilka słów ode mnie</p>

          <h2 className="founder-section__title">
  Technologia zaczyna się od zrozumienia człowieka i procesu.
</h2>

<div className="founder-section__text">
  <p>
  Nazywam się Karl Sebastian Handke i jestem założycielem Handke Holding OÜ —
  estońskiej spółki, w ramach której rozwijam dwa kierunki działalności:
  Solutions Digitales d’Estonie jako markę technologiczną specjalizującą się
  w rozwiązaniach IT oraz Hansa Careers jako markę wspierającą firmy
  w obszarze pośrednictwa pracy na terenie EU/EEA.
</p>

  <p>
    W SDE łączę perspektywę przedsiębiorcy i programisty. Specjalizuję się
    w automatyzacji procesów, projektowaniu systemów CRM, aplikacji SaaS oraz
    wdrażaniu rozwiązań AI tam, gdzie realnie mogą usprawnić pracę firmy.
  </p>

 <p>
  Pracuję głównie w Pythonie, React oraz Next.js, rozwijając zaplecze o Flask,
  Node.js, bazy danych SQL/PostgreSQL, integracje API oraz rozwiązania oparte
  o OpenAI API. Technologia jest jednak tylko narzędziem — kluczowe jest
  zrozumienie, gdzie firma traci czas, gdzie powstaje chaos i które procesy
  można uporządkować, uprościć lub zautomatyzować.
</p>

  <p>
    Preferuję budowanie rozwiązań od podstaw — od interfejsu i doświadczenia
    użytkownika, przez backend, logikę systemu, integracje, aż po przepływ danych.
    Dzięki temu każdy projekt może być dopasowany do sposobu pracy konkretnej
    firmy, a nie odwrotnie.
  </p>

 <p>
  Stale rozwijam swoje kompetencje programistyczne; obecnie poszerzam wiedzę
  w zakresie C++, aby projektować jeszcze bardziej zaawansowane technologicznie
  rozwiązania — wydajne, stabilne i gotowe na większą skalę. Jeśli Twoja firma
  chce pracować szybciej, mądrzej i z większą kontrolą — zapraszam do współpracy.
</p>
</div>
        </div>

        <div className="founder-section__image" aria-hidden="true">
          <img src={founderImage} alt="" />
        </div>
      </div>
    </section>
  );
}