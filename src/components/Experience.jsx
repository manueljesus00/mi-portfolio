import React from "react";
import experiencias from "../data/experiencias.json";

function Experience() {
  return (
    <section id="experience" className="py-24 bg-dark">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-3">
            <span className="text-neon glow-text-sm">#</span> Experiencia
          </h2>
          <div className="section-line" />
        </div>

        <div className="space-y-6">
          {experiencias.map((exp, idx) => (
            <div
              key={idx}
              className="border border-dark-border rounded-lg p-6 bg-dark-card hover:border-neon/30 hover:shadow-neon transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-white mb-4">{exp.empresa}</h3>

              {/* Roles timeline */}
              {exp.roles && (
                <div className="space-y-3 mb-5">
                  {exp.roles.map((role, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div
                        className={`w-2 h-2 rounded-full flex-shrink-0 ${
                          i === 0 ? "bg-neon shadow-neon" : "bg-slate-600"
                        }`}
                      />
                      <span className="text-white text-sm font-medium">{role.puesto}</span>
                      <span className="text-slate-500 text-xs font-mono">
                        {role.inicio} &mdash; {role.fin}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.descripcion}</p>

              {exp.tecnologias && (
                <div className="flex flex-wrap gap-2">
                  {exp.tecnologias.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 text-xs font-mono text-neon bg-neon/5 border border-neon/15 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

