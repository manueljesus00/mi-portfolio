import React from "react";
import habilidades from "../data/skills.json";
function Skills() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Habilidades Técnicas</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(habilidades).map(([categoria, lista], idx) => (
          <div key={idx}>
            <h3 className="text-lg font-medium mb-2">{categoria}</h3>
            <ul className="space-y-1">
              {lista.map((skill, i) => (
                <li
                  key={i}
                  className="inline-block px-2 py-1 bg-gray-100 rounded mr-2 mb-2"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
