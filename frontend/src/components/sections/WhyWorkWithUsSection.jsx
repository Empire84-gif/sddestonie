import { Globe2, BrainCircuit, Workflow, Blocks } from "lucide-react";
import IndustryAreasSection from "./IndustryAreasSection";

function WhyWorkWithUsSection() {
  const cards = [
    {
      icon: Globe2,
      eyebrow: "European digital foundation",
      title: "Estońskie zaplecze cyfrowe",
      text: "Europejskie podejście do cyfryzacji, bezpieczeństwa i nowoczesnych systemów online.",
    },
    {
      icon: BrainCircuit,
      eyebrow: "AI in real workflows",
      title: "Praktyczne wdrożenia AI",
      text: "AI wdrażane tam, gdzie realnie usprawnia analizę danych, dokumentów i komunikację.",
    },
    {
      icon: Workflow,
      eyebrow: "Less manual work",
      title: "Automatyzacja pracy",
      text: "Porządkujemy powtarzalne zadania, dokumenty, formularze i procesy operacyjne.",
    },
    {
      icon: Blocks,
      eyebrow: "Built around your workflow",
      title: "System dopasowany do procesu",
      text: "Tworzymy narzędzia wokół realnego sposobu działania firmy, nie odwrotnie.",
    },
  ];

  return (
    <section className="why-section" id="dlaczego-sde">
      <div className="container why-section__inner">
        <div className="why-section__head">
          <p className="why-section__kicker">Dlaczego SDE</p>

          <h2>Dlaczego warto z nami pracować?</h2>

          <p>
            Łączymy europejskie zaplecze cyfrowe, praktyczne wdrożenia AI i
            podejście projektowe skoncentrowane na realnych procesach
            biznesowych.
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

export default WhyWorkWithUsSection;