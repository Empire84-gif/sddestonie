import {
  Banknote,
  Briefcase,
  BriefcaseBusiness,
  Building,
  Building2,
  Car,
  Dumbbell,
  Factory,
  GraduationCap,
  Hammer,
  HeartHandshake,
  HeartPulse,
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
  Wrench,
} from "lucide-react";

const industryRowOne = [
  { label: "Usługi finansowe", icon: Landmark },
  { label: "E-commerce", icon: ShoppingCart },
  { label: "Nieruchomości", icon: Building2 },
  { label: "Księgowość", icon: Banknote },
  { label: "Edukacja", icon: GraduationCap },
  { label: "Turystyka", icon: Plane },
  { label: "HR i rekrutacja", icon: UsersRound },
  { label: "Zdrowie i beauty", icon: HeartPulse },
  { label: "Transport i logistyka", icon: Truck },
  { label: "Hotele i apartamenty", icon: Hotel },
  { label: "Kancelarie prawne", icon: Scale },
  { label: "Firmy usługowe", icon: BriefcaseBusiness },
  { label: "Handel lokalny", icon: Store },
  { label: "Serwis i technika", icon: Wrench },
];

const industryRowTwo = [
  { label: "Produkcja", icon: Factory },
  { label: "Gastronomia", icon: Utensils },
  { label: "Fitness i sport", icon: Dumbbell },
  { label: "Wynajem mieszkań", icon: Building },
  { label: "Motoryzacja", icon: Car },
  { label: "Budownictwo", icon: Hammer },
  { label: "Magazyny i dostawy", icon: PackageCheck },
  { label: "Doradztwo", icon: Briefcase },
  { label: "Organizacje i fundacje", icon: HeartHandshake },
  { label: "Administracja firmowa", icon: UserCog },
  { label: "Software i IT", icon: Laptop },
  { label: "Biura i coworking", icon: Building2 },
  { label: "Salony i kosmetologia", icon: Scissors },
  { label: "Agencje kreatywne", icon: Paintbrush },
  { label: "Ekologia i energia", icon: Leaf },
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

export default function IndustryAreasSection() {
  return (
    <div className="why-industries">
      <div className="why-industries__heading">
        <p>Sektory, w których działamy</p>
        <h3>Automatyzacja nie zależy od branży, tylko od procesu.</h3>
      </div>

      <div className="industry-marquee-wrap" aria-label="Sektory działania">
        <IndustryMarqueeRow items={industryRowOne} />
        <IndustryMarqueeRow items={industryRowTwo} slow />
      </div>
    </div>
  );
}