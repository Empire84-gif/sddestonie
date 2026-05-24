import {
  Banknote,
  Blocks,
  BrainCircuit,
  Briefcase,
  BriefcaseBusiness,
  Building,
  Building2,
  Car,
  Dumbbell,
  Factory,
  Globe2,
  GraduationCap,
  Hammer,
  HeartHandshake,
  HeartPulse,
  Home,
  Hotel,
  Landmark,
  Laptop,
  Leaf,
  PackageCheck,
  Paintbrush,
  Plane,
  Scale,
  Scissors,
  ShoppingCart,
  Store,
  Truck,
  UserCog,
  UsersRound,
  Utensils,
  Workflow,
  Wrench,
} from "lucide-react";

const industryRowOne = [
  { label: "Financial services", icon: Landmark },
  { label: "E-commerce", icon: ShoppingCart },
  { label: "Real estate", icon: Building2 },
  { label: "Accounting", icon: Banknote },
  { label: "Education", icon: GraduationCap },
  { label: "Travel and tourism", icon: Plane },
  { label: "HR and recruitment", icon: UsersRound },
  { label: "Health and beauty", icon: HeartPulse },
  { label: "Transport and logistics", icon: Truck },
  { label: "Hotels and apartments", icon: Hotel },
  { label: "Legal services", icon: Scale },
  { label: "Service businesses", icon: BriefcaseBusiness },
  { label: "Local commerce", icon: Store },
  { label: "Technical services", icon: Wrench },
];

const industryRowTwo = [
  { label: "Manufacturing", icon: Factory },
  { label: "Food and hospitality", icon: Utensils },
  { label: "Fitness and sport", icon: Dumbbell },
  { label: "Property rental", icon: Home },
  { label: "Automotive", icon: Car },
  { label: "Construction", icon: Hammer },
  { label: "Warehousing and delivery", icon: PackageCheck },
  { label: "Consulting", icon: Briefcase },
  { label: "Organisations and foundations", icon: HeartHandshake },
  { label: "Business administration", icon: UserCog },
  { label: "Software and IT", icon: Laptop },
  { label: "Offices and coworking", icon: Building },
  { label: "Beauty salons", icon: Scissors },
  { label: "Creative agencies", icon: Paintbrush },
  { label: "Green energy", icon: Leaf },
];

function IndustryMarqueeRow({ items, slow = false }) {
  const duplicated = [...items, ...items, ...items, ...items];

  return (
    <div className="industry-marquee">
      <div className={`industry-track ${slow ? "is-slow" : ""}`}>
        {duplicated.map((item, index) => {
          const Icon = item.icon;

          return (
            <div className="industry-tile" key={`${item.label}-${index}`}>
              <span className="industry-tile__icon">
                <Icon size={19} strokeWidth={1.8} />
              </span>
              <span>{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function EnWhyWorkWithUsSection() {
  const cards = [
    {
      icon: Globe2,
      eyebrow: "European digital foundation",
      title: "Estonian digital background",
      text: "A European approach to digitalisation, security and modern online business systems.",
    },
    {
      icon: BrainCircuit,
      eyebrow: "AI in real workflows",
      title: "Practical AI implementation",
      text: "AI implemented where it can genuinely improve data analysis, documents, communication and daily operations.",
    },
    {
      icon: Workflow,
      eyebrow: "Less manual work",
      title: "Workflow automation",
      text: "We organise repetitive tasks, documents, forms and operational processes into structured systems.",
    },
    {
      icon: Blocks,
      eyebrow: "Built around your workflow",
      title: "A system shaped around your process",
      text: "We create tools around the real way your company works — not the other way around.",
    },
  ];

  return (
    <section className="why-section" id="why-sde">
      <div className="container why-section__inner">
        <div className="why-section__head">
          <p className="why-section__kicker">Why SDE</p>

          <h2>Why work with us?</h2>

          <p>
            We combine a European digital foundation, practical AI
            implementation and a project approach focused on real business
            processes.
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

      <div className="industry-areas">
        <div className="industry-areas__heading">
          <h3>Sectors we work with</h3>
        </div>

        <div
          className="industry-marquee-wrap"
          aria-label="Sectors we work with"
        >
          <IndustryMarqueeRow items={industryRowOne} />
          <IndustryMarqueeRow items={industryRowTwo} slow />
        </div>
      </div>
    </section>
  );
}

export default EnWhyWorkWithUsSection;