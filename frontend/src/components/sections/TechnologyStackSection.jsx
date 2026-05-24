import {
  SiPython,
  SiFlask,
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiSqlite,
  SiOpenai,
  SiVite,
  SiTypescript,
  SiDocker,
  SiGithub,
  SiCloudflare,
  SiNginx,
  SiRender,
} from "react-icons/si";

import {
  Database,
  FileText,
  Workflow,
  PlugZap,
  PanelsTopLeft,
  ShieldCheck,
  Mail,
  FormInput,
  Server,
  Cloud,
  Lock,
  RefreshCcw,
  Link2,
  Webhook,
  KeyRound,
  FolderKanban,
  ChartNoAxesCombined,
  FileCog,
  Bot,
  HardDrive,
  MonitorCheck,
  Boxes,
  FileArchive,
  TableProperties,
  Settings2,
  Send,
  GitBranch,
} from "lucide-react";

const groups = [
  {
    icon: Server,
    title: "Backend & logika systemu",
    text: "Aplikacje pisane od podstaw: własna logika, endpointy, role użytkowników, autoryzacja i integracje.",
    items: [
      { name: "Python", icon: SiPython, color: "#3776ab" },
      { name: "Flask", icon: SiFlask, color: "#ffffff" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5fa04e" },
      { name: "REST API", icon: Link2, color: "#2f8cff" },
      { name: "Webhooks", icon: Webhook, color: "#f472b6" },
      { name: "Auth & Roles", icon: KeyRound, color: "#f59e0b" },
      { name: "Business Logic", icon: Settings2, color: "#65b4ff" },
      { name: "Custom Modules", icon: Boxes, color: "#8b5cf6" },
    ],
  },
  {
    icon: PanelsTopLeft,
    title: "Frontend & panele użytkownika",
    text: "Dedykowane interfejsy, dashboardy, formularze, CRM-y i panele administracyjne projektowane pod realny workflow.",
    items: [
      { name: "React", icon: SiReact, color: "#61dafb" },
      { name: "Vite", icon: SiVite, color: "#a855f7" },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
      { name: "Admin Panels", icon: PanelsTopLeft, color: "#65b4ff" },
      { name: "Forms UI", icon: FormInput, color: "#2f8cff" },
      { name: "Dashboards", icon: ChartNoAxesCombined, color: "#22c55e" },
      { name: "Client Portal", icon: FolderKanban, color: "#f97316" },
    ],
  },
  {
    icon: Database,
    title: "Dane, pliki & dokumenty",
    text: "Struktury danych, dokumenty PDF, raporty, archiwa plików i uporządkowane środowiska pracy.",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#6aa6ff" },
      { name: "SQLite", icon: SiSqlite, color: "#4db6e8" },
      { name: "Databases", icon: Database, color: "#65b4ff" },
      { name: "PDF Generation", icon: FileText, color: "#ef4444" },
      { name: "Documents", icon: FileCog, color: "#f97316" },
      { name: "Reports", icon: ChartNoAxesCombined, color: "#22c55e" },
      { name: "Tables", icon: TableProperties, color: "#8b5cf6" },
      { name: "File Storage", icon: FileArchive, color: "#06b6d4" },
    ],
  },
  {
    icon: Workflow,
    title: "Automatyzacje & AI workflow",
    text: "AI nie jako gadżet, tylko moduł systemu: analiza danych, asystenci, automatyczne decyzje i obsługa procesów.",
    items: [
      { name: "OpenAI API", icon: SiOpenai, color: "#10a37f" },
      { name: "AI Assistants", icon: Bot, color: "#65b4ff" },
      { name: "AI Workflows", icon: Workflow, color: "#8b5cf6" },
      { name: "Automation", icon: PlugZap, color: "#2f8cff" },
      { name: "Data Analysis", icon: ChartNoAxesCombined, color: "#22c55e" },
      { name: "Document AI", icon: FileText, color: "#ef4444" },
      { name: "CRM Systems", icon: ShieldCheck, color: "#22c55e" },
      { name: "Data Sync", icon: RefreshCcw, color: "#06b6d4" },
    ],
  },
  {
    icon: Cloud,
    title: "Deployment & infrastruktura",
    text: "Uruchamianie aplikacji produkcyjnych, repozytoria, serwery, reverse proxy, domeny, SSL i środowiska cloud.",
    items: [
      { name: "Render", icon: SiRender, color: "#46e3b7" },
      { name: "Docker", icon: SiDocker, color: "#2496ed" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "Cloudflare", icon: SiCloudflare, color: "#f38020" },
      { name: "Nginx", icon: SiNginx, color: "#009639" },
      { name: "VPS / Cloud", icon: Cloud, color: "#60a5fa" },
      { name: "Persistent Disk", icon: HardDrive, color: "#f59e0b" },
      { name: "Deployment", icon: Send, color: "#2f8cff" },
    ],
  },
  {
    icon: ShieldCheck,
    title: "Bezpieczeństwo & utrzymanie",
    text: "System ma działać stabilnie po wdrożeniu: zabezpieczenia, dostęp, backupy, monitoring i dalszy rozwój.",
    items: [
      { name: "Security", icon: Lock, color: "#ef4444" },
      { name: "SSL / HTTPS", icon: ShieldCheck, color: "#22c55e" },
      { name: "Backups", icon: HardDrive, color: "#f59e0b" },
      { name: "Monitoring", icon: MonitorCheck, color: "#65b4ff" },
      { name: "User Roles", icon: KeyRound, color: "#8b5cf6" },
      { name: "Maintenance", icon: Settings2, color: "#2f8cff" },
      { name: "Version Control", icon: GitBranch, color: "#65b4ff" },
      { name: "System Updates", icon: RefreshCcw, color: "#06b6d4" },
    ],
  },
  {
    icon: Mail,
    title: "Komunikacja & formularze",
    text: "Formularze online, system mailowy, przypisywanie wiadomości, automatyczne powiadomienia i obsługa klientów.",
    items: [
      { name: "Email Systems", icon: Mail, color: "#ffffff" },
      { name: "Online Forms", icon: FormInput, color: "#2f8cff" },
      { name: "Notifications", icon: Send, color: "#65b4ff" },
      { name: "Client Messages", icon: Mail, color: "#f472b6" },
      { name: "Lead Capture", icon: FolderKanban, color: "#22c55e" },
      { name: "Mail Workflow", icon: Workflow, color: "#a855f7" },
      { name: "API Integrations", icon: Link2, color: "#06b6d4" },
      { name: "Webhooks", icon: Webhook, color: "#f97316" },
    ],
  },
  {
    icon: FileCog,
    title: "Generatory & narzędzia firmowe",
    text: "Systemy, które zastępują ręczne pliki: oferty, faktury, umowy, raporty, CRM, zadania i operacyjne dashboardy.",
    items: [
      { name: "Invoice Generator", icon: FileText, color: "#ef4444" },
      { name: "Offer Generator", icon: FileCog, color: "#f97316" },
      { name: "CRM Tools", icon: ShieldCheck, color: "#22c55e" },
      { name: "Task Modules", icon: FolderKanban, color: "#65b4ff" },
      { name: "Stats Panels", icon: ChartNoAxesCombined, color: "#8b5cf6" },
      { name: "Admin Tools", icon: PanelsTopLeft, color: "#2f8cff" },
      { name: "Data Tables", icon: TableProperties, color: "#06b6d4" },
      { name: "Workflow Tools", icon: Workflow, color: "#f472b6" },
    ],
  },
];

function TechnologyStackSection() {
  return (
    <section className="technology-stack-section">
      <div className="technology-stack-section__inner container">
        <div className="technology-stack-section__head">
          <p>Technologie</p>

          <h2>
            Technologie, z których budujemy{" "}
            <span>nowoczesne systemy.</span>
          </h2>

          <p>
            Nie używamy gotowych szablonów ani przypadkowych narzędzi.
            Budujemy systemy od podstaw — dobierając technologie do procesu,
            danych, dokumentów, integracji i sposobu pracy konkretnej firmy.
          </p>
        </div>

        <div className="technology-stack-grid">
          {groups.map((group, index) => {
            const GroupIcon = group.icon;

            return (
              <article
                className="technology-stack-group"
                key={group.title}
                style={{ "--delay": `${index * 90}ms` }}
              >
                <div className="technology-stack-group__intro">
                  <div className="technology-stack-group__icon">
                    <GroupIcon aria-hidden="true" />
                  </div>

                  <div>
                    <h3>{group.title}</h3>
                    <p>{group.text}</p>
                  </div>
                </div>

                <div className="technology-stack-items">
                  {group.items.map((item) => {
                    const ItemIcon = item.icon;

                    return (
                      <div
                        className="technology-stack-item"
                        key={item.name}
                        style={{ "--tech-color": item.color }}
                      >
                        <ItemIcon aria-hidden="true" />
                        <span>{item.name}</span>
                      </div>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TechnologyStackSection;