import { Link } from "react-router-dom";

function EeServicesFinalCtaSection() {
  return (
    <section className="services-final-cta-section">
      <div className="services-final-cta-section__inner container">
        <p className="services-final-cta-section__kicker">
          Järgmine samm
        </p>

        <h2>
          Kui palju tööd teeb teie ettevõttes endiselt inimene,
          kuigi seda võiks teha süsteem?
        </h2>

        <p className="services-final-cta-section__text">
          Vormid, dokumendid, e-kirjad, staatused, aruanded, andmete käsitsi
          ümberkirjutamine, CRM-i uuendamine või protsesside jälgimine Excelis —
          sageli ei ole see inimeste probleem, vaid hästi kavandatud süsteemi
          puudumine.
          <br />
          <br />
          Kirjeldage meile, milline protsess võtab teie ettevõttes praegu kõige
          rohkem aega. Ootame teie sõnumit.
        </p>

        <div className="services-final-cta-section__actions">
          <Link
            to="/ee/kirjelda-projekti"
            className="services-final-cta-section__button services-final-cta-section__button--primary"
          >
            Kirjelda automatiseeritavat protsessi
          </Link>

          <Link
            to="/ee/projektid"
            className="services-final-cta-section__button services-final-cta-section__button--secondary"
          >
            Projektinäited
          </Link>
        </div>
      </div>
    </section>
  );
}

export default EeServicesFinalCtaSection;