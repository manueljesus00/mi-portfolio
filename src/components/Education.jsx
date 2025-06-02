// src/components/Education.jsx

import React from "react";
import education from "../data/education.json"; // Asegúrate de que la ruta sea correcta

function Education() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      {/* Título de la sección */}
      <h2 className="text-2xl font-semibold mb-6">Estudios</h2>

      {/* Recorremos cada elemento de tu JSON */}
      <div className="space-y-10">
        {education.map((edu, idx) => (
          <div key={idx} className="space-y-4">
            {/* 1. Grado, institución y periodo */}
            <div>
              <h3 className="text-xl font-medium">{edu.grado}</h3>
                {edu.trabajo && (
                    <p className="text-sm text-gray-600 italic">
                    TFM/TFG/TFE: {edu.trabajo}
                    </p>
                )}
              <span className="text-sm text-gray-500">
                {edu.institucion} &mdash; {edu.periodo}
              </span>
            </div>

            {/* 2. Si existe el array `calificaciones`, lo mostramos en una tabla */}
            {Array.isArray(edu.calificaciones) && edu.calificaciones.length > 0 && (
              <div className="pl-4">
                <h4 className="text-lg font-semibold mb-2">
                  Calificaciones destacadas
                </h4>

                <div className="overflow-x-auto">
                  <table className="min-w-full table-auto border-collapse text-left">
                    <thead>
                      <tr>
                        <th className="px-2 py-2 border-b">Asignatura</th>
                        <th className="px-2 py-2 border-b">Calificación</th>
                      </tr>
                    </thead>
                    <tbody>
                      {edu.calificaciones.map((curso, i) => (
                        <tr
                          key={i}
                          className="bg-blue-50 font-semibold"
                        >
                          <td className="px-2 py-2 border-b">
                            {curso.asignatura}
                          </td>
                          <td className="px-2 py-2 border-b">
                            {curso.calificacion}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
