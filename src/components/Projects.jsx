import React from "react";
import proyectos from "../data/projects.json";
import { FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <section id="projects" className="py-24 bg-dark-card">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-3">
            <span className="text-neon glow-text-sm">#</span> Proyectos
          </h2>
          <div className="section-line" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {proyectos.map((proj, idx) => (
            <div
              key={idx}
              className="flex flex-col border border-dark-border rounded-lg p-5 bg-dark hover:border-neon/40 hover:shadow-neon transition-all duration-300"
            >
              <div className="flex items-start gap-3 mb-3">
                <FaGithub className="text-neon/60 mt-0.5 flex-shrink-0" size={16} />
                <h3 className="text-white font-semibold text-sm leading-snug">{proj.nombre}</h3>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed flex-1 mb-4">{proj.descripcion}</p>

              {proj.tecnologias && (
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {proj.tecnologias.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-[10px] font-mono text-neon/80 bg-neon/5 border border-neon/10 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-neon border border-neon/30 rounded px-3 py-1.5 hover:bg-neon/10 transition-colors self-start mt-auto"
                >
                  <FaGithub size={12} />
                  Ver en GitHub
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

