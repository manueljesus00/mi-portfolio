import React from "react";

function About() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
      <img
        src="/foto.jpg"
        alt="Foto de Manuel Jesús"
        className="w-32 h-32 rounded-full mb-4 object-cover"
      />
      <h2 className="text-2xl font-semibold mb-4">Sobre mí</h2>
      <p className="text-lg font-medium mb-2">Manuel Jesús Flores Montaño</p>
      <p className="text-sm text-gray-500 mb-4">Nº de colegiado: 20231117-A</p>
      <p className="mb-4">
        ¡Hola! Soy un apasionado del desarrollo web y la programación, con un enfoque especial en crear aplicaciones intuitivas y eficientes. Me encanta aprender nuevas tecnologías y enfrentarme a retos que me permitan crecer profesionalmente.
        <br />
      </p>
      <a
        href="/cv.pdf"
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