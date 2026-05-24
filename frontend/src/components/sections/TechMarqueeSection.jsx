import {
  SiPython,
  SiFlask,
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiSqlite,
  SiOpenai,
} from "react-icons/si";

import {
  Database,
  FileText,
  Workflow,
  PlugZap,
  PanelsTopLeft,
  ShieldCheck,
} from "lucide-react";

const technologies = [
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Flask", icon: SiFlask, color: "#07162F" },
  { name: "React", icon: SiReact, color: "#149ECA" },
  { name: "JavaScript", icon: SiJavascript, color: "#D8A800" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "SQL", icon: Database, color: "#2563EB" },
  { name: "SQLite", icon: SiSqlite, color: "#003B57" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "REST API", icon: PlugZap, color: "#0EA5E9" },
  { name: "OpenAI API", icon: SiOpenai, color: "#10A37F" },
  { name: "Automation", icon: Workflow, color: "#F59E0B" },
  { name: "PDF Generation", icon: FileText, color: "#EF4444" },
  { name: "CRM Systems", icon: PanelsTopLeft, color: "#6366F1" },
  { name: "Secure Workflows", icon: ShieldCheck, color: "#16A34A" },
];

function TechItem({ technology }) {
  const Icon = technology.icon;

  return (
    <div className="tech-marquee__item">
      <Icon style={{ color: technology.color }} aria-hidden="true" />
      <span>{technology.name}</span>
    </div>
  );
}

function TechMarqueeSection() {
  return (
    <section className="tech-marquee-section" aria-label="Technologie SDE">
      <div className="tech-marquee-section__inner">
        <div className="tech-marquee-section__label">
          <span>Technology stack</span>
        </div>

        <div className="tech-marquee">
          <div className="tech-marquee__track">
            <div className="tech-marquee__group">
              {technologies.map((technology) => (
                <TechItem key={technology.name} technology={technology} />
              ))}
            </div>

            <div className="tech-marquee__group" aria-hidden="true">
              {technologies.map((technology) => (
                <TechItem
                  key={`${technology.name}-duplicate`}
                  technology={technology}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechMarqueeSection;