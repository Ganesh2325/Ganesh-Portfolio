"use client";
import { useState } from "react";
import Icon from "./Icon";
import type { Skill } from "@/data/profile";

const groupIcon: Record<string, string> = {
  Languages: "code", Frontend: "layout", Backend: "server", Databases: "database", "Artificial Intelligence": "brain",
  "Cloud & DevOps": "cloud", "Tools & Platforms": "workflow", "Soft Skills": "users",
};

function SkillIcon({ icon }: { icon: string }) {
  if (icon.startsWith("dv:")) return <i className={`${icon.slice(3)} text-lg leading-none`} aria-hidden="true" />;
  return <Icon name={icon} className="h-[18px] w-[18px] text-accent" />;
}

export default function Skills({ skills }: { skills: Record<string, Skill[]> }) {
  const [all, setAll] = useState(false);
  const groups = Object.entries(skills);
  const visible = all ? groups : groups.slice(0, 4);
  return (
    <>
      <div id="skills-grid" data-stagger className="grid border-l border-t border-line md:grid-cols-2">
        {visible.map(([group, items]) => (
          <div key={group} className="border-b border-r border-line p-6 transition-colors duration-300 hover:bg-bg-alt sm:p-8">
            <h3 className="label mb-6 flex items-center gap-3 text-fg"><Icon name={groupIcon[group] ?? "code"} className="h-4 w-4 text-accent" />{group}</h3>
            <ul className="flex flex-wrap gap-3">
              {items.map((s) => (
                <li key={s.name} className="ease-site flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-sm text-fg hover:-translate-y-0.5 hover:border-accent">
                  <SkillIcon icon={s.icon} />{s.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <button type="button" onClick={() => setAll((v) => !v)} aria-expanded={all} aria-controls="skills-grid"
          data-magnetic className="label transition-colors duration-300 inline-flex items-center gap-2 rounded-full border border-fg px-8 py-3 text-fg hover:bg-fg hover:text-bg">
          {all ? "See Less" : "More Skills"} <Icon name={all ? "chevronUp" : "chevronDown"} className="h-4 w-4" />
        </button>
      </div>
    </>
  );
}
