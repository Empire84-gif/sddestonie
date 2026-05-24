import { Link } from "react-router-dom";

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
  { label: "Veebivormid", icon: ClipboardList },
  { label: "Veebibroneeringud", icon: CalendarCheck },
  { label: "CRM", icon: Inbox },
  { label: "SaaS", icon: Layers3 },
  { label: "AI töövood", icon: BrainCircuit },
  { label: "Automatiseerimised", icon: Repeat },
  { label: "PDF-dokumendid", icon: FileText },
  { label: "Pakkumised ja lepingud", icon: FileCheck },
  { label: "Allkirjad ja kinnitused", icon: Signature },
  { label: "API-integratsioonid", icon: GitBranch },
  { label: "Veebimaksed", icon: CreditCard },
  { label: "Ülesannete töövood", icon: Workflow },
  { label: "Teavitused", icon: Bell },
  { label: "E-kirjade saatmine", icon: Send },
];

const rowTwo = [
  { label: "Raportid", icon: ChartNoAxesCombined },
  { label: "Juhtpaneelid", icon: Gauge },
  { label: "E-posti süsteem", icon: Mail },
  { label: "Andmebaasid", icon: Database },
  { label: "Adminipaneel", icon: PanelTop },
  { label: "Klienditeenindus", icon: Bot },
  { label: "Kliendiportaal", icon: UserRoundCheck },
  { label: "Kliendibaas", icon: UsersRound },
  { label: "Helpdesk", icon: Headphones },
  { label: "Vestlusrobotid", icon: MessageSquareText },
  { label: "Dokumendiarhiiv", icon: Archive },
  { label: "Tabelid ja registrid", icon: TableProperties },
  { label: "Andmekontroll", icon: SearchCheck },
  { label: "Turvalised protsessid", icon: ShieldCheck },
  { label: "Veebitellimused", icon: ShoppingCart },
  { label: "Kontrollnimekirjad", icon: ClipboardCheck },
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

export default function EeAutomationAreasSection() {
  return (
    <section className="automation-areas-section">
      <div className="automation-areas-inner">
        <div className="automation-areas-heading">
          <span className="section-kicker">Automatiseerimise valdkonnad</span>

          <h2>
            Meie tehnoloogia jõuab sinna, kus igapäevane töö hakkab tempot
            kaotama.
          </h2>

          <p>
            Ühendame protsessid, andmed, dokumendid ja suhtluse korrastatud
            töökeskkondadeks — nii, et vähem tegevusi vajaks käsitsi haldamist.
          </p>
        </div>

        <div
          className="automation-marquee-wrap"
          aria-label="Automatiseerimise valdkonnad"
        >
          <MarqueeRow items={rowOne} />
          <MarqueeRow items={rowTwo} slow />
        </div>

        <div className="automation-areas-cta">
          <Link
            to="/ee/kirjelda-projekti"
            className="automation-areas-cta__button"
          >
            Kirjeldage meile oma tööprotsessi
          </Link>
        </div>
      </div>
    </section>
  );
}