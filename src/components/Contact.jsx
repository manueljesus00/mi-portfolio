import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-center">Contacto</h2>

      <ul className="space-y-4 text-center">
        <li>
          <a
            href="https://www.linkedin.com/in/manueljesus00/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-blue-700 hover:text-blue-900 transition"
          >
            <FaLinkedin size={24} />
            <span>LinkedIn</span>
          </a>
        </li>

        <li>
          <a
            href="https://github.com/manueljesus00"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-gray-800 hover:text-black transition"
          >
            <FaGithub size={24} />
            <span>GitHub</span>
          </a>
        </li>

        <li>
          <a
            href="mailto:me@mjflomon.es"
            className="inline-flex items-center space-x-2 text-red-600 hover:text-red-800 transition"
          >
            <FaEnvelope size={24} />
            <span>Correo Electrónico</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
