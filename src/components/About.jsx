import React from "react";

function About() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Sobre mí</h2>
      <p className="mb-4">
        Soy Manuel Jesús, desarrollador full stack con experiencia en React,
        Node.js y CI/CD. Me apasiona construir aplicaciones web eficientes
        y escalables.
      </p>
      <a
        href="/assets/tu-cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Descargar CV
      </a>
    </div>
  );
}

export default About;
