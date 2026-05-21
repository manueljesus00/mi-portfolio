import React from "react";
import education from "../data/education.json";

function Education() {
  return (
    <section id="education" className="py-24 bg-dark">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-3">
            <span className="text-neon glow-text-sm">#</span> Educación
          </h2>
          <div className="section-line" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="border border-dark-border rounded-lg p-6 bg-dark-card hover:border-neon/30 hover:shadow-neon transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="text-white font-semibold text-base leading-snug">
                  {edu.grado}
                </h3>
                {edu.nota && (
                  <span className="flex-shrink-0 px-2 py-0.5 text-xs text-neon border border-neon/30 rounded-full bg-neon/5">
                    {edu.nota}
                  </span>
                )}
              </div>
              <p className="text-slate-500 text-xs mb-2">{edu.institucion}</p>
              <p className="text-neon/70 font-mono text-xs">{edu.periodo}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
