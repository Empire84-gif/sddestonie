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
  { label: "Online forms", icon: ClipboardList },
  { label: "Online booking", icon: CalendarCheck },
  { label: "CRM", icon: Inbox },
  { label: "SaaS", icon: Layers3 },
  { label: "AI workflows", icon: BrainCircuit },
  { label: "Automation", icon: Repeat },
  { label: "PDF documents", icon: FileText },
  { label: "Offers and contracts", icon: FileCheck },
  { label: "Signatures and approvals", icon: Signature },
  { label: "API integrations", icon: GitBranch },
  { label: "Online payments", icon: CreditCard },
  { label: "Task workflows", icon: Workflow },
  { label: "Notifications", icon: Bell },
  { label: "Email sending", icon: Send },
];

const rowTwo = [
  { label: "Reports", icon: ChartNoAxesCombined },
  { label: "Dashboards", icon: Gauge },
  { label: "Email system", icon: Mail },
  { label: "Databases", icon: Database },
  { label: "Admin panel", icon: PanelTop },
  { label: "Customer support", icon: Bot },
  { label: "Client portal", icon: UserRoundCheck },
  { label: "Client database", icon: UsersRound },
  { label: "Helpdesk", icon: Headphones },
  { label: "Chatbots", icon: MessageSquareText },
  { label: "Document archive", icon: Archive },
  { label: "Tables and registers", icon: TableProperties },
  { label: "Data control", icon: SearchCheck },
  { label: "Secure workflows", icon: ShieldCheck },
  { label: "Online orders", icon: ShoppingCart },
  { label: "Checklists", icon: ClipboardCheck },
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

export default function EnAutomationAreasSection() {
  return (
    <section className="automation-areas-section">
      <div className="automation-areas-inner">
        <div className="automation-areas-heading">
          <span className="section-kicker">Automation areas</span>

          <h2>Technology where companies lose time.</h2>

          <p>
            We connect processes, data, documents and communication into
            organised working environments — so fewer things require manual
            handling and more work can move through a structured system.
          </p>
        </div>

        <div className="automation-marquee-wrap" aria-label="Automation areas">
          <MarqueeRow items={rowOne} />
          <MarqueeRow items={rowTwo} slow />
        </div>

        <div className="automation-areas-cta">
          <Link
            to="/describe-project"
            className="automation-areas-cta__button"
          >
            Describe your workflow
          </Link>
        </div>
      </div>
    </section>
  );
}