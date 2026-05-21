import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const stack = [".NET", "C#", "TypeScript", "Angular", "React"];

function About() {
  return (
    <section id="about" className="min-h-screen flex items-center hero-bg grid-pattern">
      <div className="max-w-5xl mx-auto px-6 py-32">
        <p className="text-neon font-mono text-sm mb-5 glow-text-sm tracking-widest">
          &gt; Hola, soy
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-3">
          Manuel Jesús
          <br />
          <span className="text-neon glow-text">Flores Montaño</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 mb-6 font-light">
          Full-Stack Developer{" "}
          <span className="text-neon font-medium">@ Avanade</span>
        </p>
        <p className="text-slate-400 max-w-lg leading-relaxed mb-8 text-base">
          Ingeniero Informático apasionado por el desarrollo de software, enfocado en
          crear soluciones eficientes y escalables. Especializado en Microsoft stack y
          tecnologías cloud.
        </p>

        {/* Stack pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-mono text-neon border border-neon/20 rounded-full bg-neon/5 tracking-wide"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 mb-10">
          <a
            href="#projects"
            className="px-6 py-2.5 bg-neon text-dark font-semibold text-sm rounded hover:shadow-neon-lg transition-all duration-300"
          >
            Ver proyectos
          </a>
          <a
            href="#contact"
            className="px-6 py-2.5 border border-neon/40 text-neon text-sm rounded hover:bg-neon/10 hover:border-neon transition-all duration-300"
          >
            Contactar
          </a>
        </div>

        {/* Social icons */}
        <div className="flex gap-5">
          <a
            href="https://github.com/manueljesus00"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-neon transition-colors duration-200"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/manueljesus00/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-neon transition-colors duration-200"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
