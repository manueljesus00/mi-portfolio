import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const contacts = [
  {
    icon: FaEnvelope,
    label: "me@mjflomon.com",
    href: "mailto:me@mjflomon.com",
  },
  {
    icon: FaLinkedin,
    label: "in/manueljesus00",
    href: "https://www.linkedin.com/in/manueljesus00/",
  },
  {
    icon: FaGithub,
    label: "manueljesus00",
    href: "https://github.com/manueljesus00",
  },
];

function Contact() {
  return (
    <section id="contact" className="py-24 bg-dark">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-3">
            <span className="text-neon glow-text-sm">#</span> Contacto
          </h2>
          <div className="section-line" />
        </div>

        <div className="max-w-sm">
          <p className="text-slate-400 text-sm mb-8">
            ¿Tienes una propuesta o quieres ponerte en contacto? Escríbeme.
          </p>
          <div className="space-y-5">
            {contacts.map(({ icon: Icon, label, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <Icon
                  size={18}
                  className="text-neon/70 group-hover:text-neon transition-colors duration-200"
                />
                <span className="text-slate-400 text-sm group-hover:text-neon transition-colors duration-200 font-mono">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
