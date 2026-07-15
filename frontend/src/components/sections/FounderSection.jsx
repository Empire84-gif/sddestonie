import founderImage from "../../assets/images/founder-image.png";

export default function EnFounderSection() {
  return (
    <section className="founder-section">
      <div className="container founder-section__inner">
        <div className="founder-section__content">
          <p className="founder-section__kicker">O założycielu</p>

          <h2 className="founder-section__title">
            Tworzę praktyczne rozwiązania cyfrowe odpowiadające na realne
            potrzeby firm.
          </h2>

          <div className="founder-section__text">
            <p>
              Nazywam się Karl Sebastian Handke i jestem założycielem Handke
              Holding OÜ. Pod marką SDE projektuję i rozwijam dopasowane
              rozwiązania IT, które pomagają firmom upraszczać codzienną pracę,
              zwiększać efektywność oraz lepiej kontrolować procesy biznesowe.
            </p>

            <p>
              Specjalizuję się w automatyzacji procesów biznesowych, systemach
              CRM, aplikacjach internetowych, narzędziach opartych na sztucznej
              inteligencji oraz integracjach istniejących platform, usług i
              źródeł danych.
            </p>

            <p>
              Do każdego projektu podchodzę zarówno z perspektywy biznesowej,
              jak i technicznej. Przed rozpoczęciem prac analizuję sposób
              działania firmy, identyfikuję obszary, w których tracony jest czas,
              oraz procesy, które można lepiej uporządkować lub zautomatyzować.
            </p>

            <p>
              Od interfejsu użytkownika i zaplecza aplikacji, przez logikę
              systemu, aż po integracje — tworzę przejrzyste i niezawodne
              rozwiązania dostosowane do indywidualnych potrzeb każdej firmy.
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
