import { Globe2, BrainCircuit, Workflow, Blocks } from "lucide-react";
import IndustryAreasSection from "./IndustryAreasSection";

function EeWhyWorkWithUsSection() {
  const cards = [
    {
      icon: Globe2,
      eyebrow: "European digital foundation",
      title: "Eesti digitaalne taust",
      text: "Euroopalik lähenemine digitaliseerimisele, turvalisusele ja kaasaegsetele veebisüsteemidele.",
    },
    {
      icon: BrainCircuit,
      eyebrow: "AI in real workflows",
      title: "Praktilised AI-lahendused",
      text: "Rakendame tehisintellekti seal, kus see päriselt toetab andmete, dokumentide ja suhtluse töötlemist.",
    },
    {
      icon: Workflow,
      eyebrow: "Less manual work",
      title: "Töö automatiseerimine",
      text: "Korrastame korduvaid ülesandeid, dokumente, vorme ja igapäevaseid tööprotsesse.",
    },
    {
      icon: Blocks,
      eyebrow: "Built around your workflow",
      title: "Protsessiga kohandatud süsteem",
      text: "Loome tööriistu ettevõtte tegeliku töökorralduse ümber, mitte ei sunni ettevõtet süsteemiga kohanema.",
    },
  ];

  return (
    <section className="why-section" id="dlaczego-sde">
      <div className="container why-section__inner">
        <div className="why-section__head">
          <p className="why-section__kicker">Miks SDE</p>

          <h2>Miks tasub meiega töötada?</h2>

          <p>
            Ühendame Euroopa digitaalse tausta, praktilised AI-lahendused ja
            projektipõhise lähenemise, mis keskendub reaalsetele
            äriprotsessidele.
          </p>
        </div>

        <div className="why-section__grid">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <article
                className="why-card"
                key={card.title}
                style={{ "--delay": `${index * 90}ms` }}
              >
                <div className="why-card__icon" aria-hidden="true">
                  <Icon />
                </div>

                <p className="why-card__eyebrow">{card.eyebrow}</p>
                <h3>{card.title}</h3>
                <p className="why-card__text">{card.text}</p>
              </article>
            );
          })}
        </div>
      </div>

      <IndustryAreasSection />
    </section>
  );
}

export default EeWhyWorkWithUsSection;