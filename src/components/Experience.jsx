import React from "react";
import experiencias from "../data/experiencias.json";

function Experience() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Experiencia Profesional</h2>
      <div className="space-y-6">
        {experiencias.map((exp, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-medium">
              {exp.puesto} @ {exp.empresa}
            </h3>
            <span className="text-sm text-gray-500">{exp.periodo}</span>
            <p className="mt-2">{exp.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
