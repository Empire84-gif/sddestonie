import {
  Archive,
  Bell,
  Bot,
  BrainCircuit,
  CalendarCheck,
  ChartNoAxesCombined,
  ClipboardCheck,
  ClipboardList,
  CreditCard,
  Database,
  FileCheck,
  FileText,
  Gauge,
  GitBranch,
  Headphones,
  Inbox,
  Layers3,
  Mail,
  MessageSquareText,
  PanelTop,
  Repeat,
  SearchCheck,
  Send,
  ShieldCheck,
  ShoppingCart,
  Signature,
  TableProperties,
  UserRoundCheck,
  UsersRound,
  Workflow,
} from "lucide-react";

const rowOne = [
  { label: "Formularze online", icon: ClipboardList },
  { label: "Rezerwacje online", icon: CalendarCheck },
  { label: "CRM", icon: Inbox },
  { label: "SaaS", icon: Layers3 },
  { label: "AI Workflows", icon: BrainCircuit },
  { label: "Automatyzacje", icon: Repeat },
  { label: "Dokumenty PDF", icon: FileText },
  { label: "Oferty i umowy", icon: FileCheck },
  { label: "Podpisy i akceptacje", icon: Signature },
  { label: "Integracje API", icon: GitBranch },
  { label: "Płatności online", icon: CreditCard },
  { label: "Workflow zadań", icon: Workflow },
  { label: "Powiadomienia", icon: Bell },
  { label: "Wysyłka maili", icon: Send },
];

const rowTwo = [
  { label: "Raporty", icon: ChartNoAxesCombined },
  { label: "Dashboardy", icon: Gauge },
  { label: "System mailowy", icon: Mail },
  { label: "Bazy danych", icon: Database },
  { label: "Panel admina", icon: PanelTop },
  { label: "Obsługa klientów", icon: Bot },
  { label: "Portal klienta", icon: UserRoundCheck },
  { label: "Baza klientów", icon: UsersRound },
  { label: "Helpdesk", icon: Headphones },
  { label: "Chatboty", icon: MessageSquareText },
  { label: "Archiwum dokumentów", icon: Archive },
  { label: "Tabele i rejestry", icon: TableProperties },
  { label: "Kontrola danych", icon: SearchCheck },
  { label: "Bezpieczne procesy", icon: ShieldCheck },
  { label: "Zamówienia online", icon: ShoppingCart },
  { label: "Listy kontrolne", icon: ClipboardCheck },
];

function MarqueeRow({ items, slow = false }) {
  const duplicated = [...items, ...items, ...items, ...items];

  return (
    <div className="automation-marquee">
      <div className={`automation-track ${slow ? "is-slow" : ""}`}>
        {duplicated.map((item, index) => {
          const Icon = item.icon;

          return (
            <div className="automation-tile" key={`${item.label}-${index}`}>
              <span className="automation-tile__icon">
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

export default function AutomationAreasSection() {
  return (
    <section className="automation-areas-section">
      <div className="automation-areas-inner">
        <div className="automation-areas-heading">
          <span className="section-kicker">Obszary automatyzacji</span>

          <h2>Nasza technologia wkracza tam, gdzie codzienna praca traci tempo.</h2>

          <p>
            Łączymy procesy, dane, dokumenty i komunikację w uporządkowane
            środowiska pracy — tak, aby mniej rzeczy wymagało ręcznej obsługi.
          </p>
        </div>

        <div
          className="automation-marquee-wrap"
          aria-label="Obszary automatyzacji"
        >
          <MarqueeRow items={rowOne} />
          <MarqueeRow items={rowTwo} slow />
        </div>

        <div className="automation-areas-cta">
          <a href="/pl/contact" className="automation-areas-cta__button">
            Opisz nam swój model pracy
          </a>
        </div>
      </div>
    </section>
  );
}