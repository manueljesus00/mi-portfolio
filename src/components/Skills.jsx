import React from "react";
import habilidades from "../data/skills.json";

function Skills() {
  return (
    <section id="skills" className="py-24 bg-dark-card">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-3">
            <span className="text-neon glow-text-sm">#</span> Habilidades
          </h2>
          <div className="section-line" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(habilidades).map(([categoria, lista], idx) => (
            <div key={idx}>
              <h3 className="text-neon/80 text-xs font-mono uppercase tracking-widest mb-3">
                {categoria}
              </h3>
              <div className="flex flex-wrap gap-2">
                {lista.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-xs text-slate-300 border border-dark-border rounded bg-dark hover:border-neon/30 hover:text-neon transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

