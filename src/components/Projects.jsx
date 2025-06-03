import React from "react";
import proyectos from "../data/projects.json"

function Projects() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Proyectos Personales</h2>
      <div className="space-y-6">
        {proyectos.map((proj, idx) => (
          <div key={idx} className="border-b pb-4">
            <h3 className="text-xl font-medium">{proj.nombre}</h3>
            <p className="mt-2 mb-2">{proj.descripcion}</p>
            {proj.tecnologias && (
              <div className="mb-2">
                <strong>Tecnologías empleadas:</strong>
                <ul className="list-disc pl-5">
                  {proj.tecnologias.map((tech, i) => (
                    <li key={i} className="inline-block px-2 py-1 bg-gray-100 rounded mr-2 mb-2">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {proj.link && (
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Ver en GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
