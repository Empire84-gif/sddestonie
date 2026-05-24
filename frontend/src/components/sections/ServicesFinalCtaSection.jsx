import { Link, useParams } from "react-router-dom";

function ServicesFinalCtaSection() {
  const { lang = "pl" } = useParams();

  const contactPath = lang === "pl" ? "/pl#kontakt" : `/${lang}#kontakt`;
  const servicesPath = lang === "pl" ? "/pl/uslugi" : `/${lang}/services`;

  return (
    <section className="services-final-cta-section">
      <div className="services-final-cta-section__inner container">
        <p className="services-final-cta-section__kicker">
          Następny krok
        </p>

        <h2>
          Ile pracy w Twojej firmie nadal wykonuje człowiek,
          choć mógłby robić to system?
        </h2>

       <p className="services-final-cta-section__text">
  Formularze, dokumenty, maile, statusy, raporty, przepisywanie danych,
  ręczne aktualizacje CRM albo pilnowanie procesów w Excelu — to często
  nie jest problem ludzi, tylko brak dobrze zaprojektowanego systemu.
  <br />
  <br />
  Opisz nam, który proces w Twojej firmie zajmuje dziś najwięcej czasu.
  Czekamy na Twoją wiadomość.
</p>

        <div className="services-final-cta-section__actions">
          <Link
            to={contactPath}
            className="services-final-cta-section__button services-final-cta-section__button--primary"
          >
            Opisz proces do automatyzacji
          </Link>

         <Link
  to={`/${lang}/projects`}
  className="services-final-cta-section__button services-final-cta-section__button--secondary"
>
  Realizacje
</Link>
        </div>
      </div>
    </section>
  );
}

export default ServicesFinalCtaSection;