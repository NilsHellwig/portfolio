// Skills.tsx
import React, { useState } from "react";
import { programmingLanguages } from "../data/programming-languages";

const Skills: React.FC = () => {
  const [languages] = useState(programmingLanguages);

  return (
    <div className="">
      <h2 className="text-2xl font-bold mt-16">Skills</h2>
      <h3 className="font-bold text-md mt-6">Programming Languages</h3>
      <div className="mt-6 grid vsm:grid-cols-2 gap-6">
        {languages.map((language, index) => (
          <div key={index}>
            <div className="w-16 h-16 p-3 rounded-2xl border-zinc-200 border bg-white">{language.iconPath && <img src={language.iconPath} alt={`${language.name} icon`} className="mr-2" />}</div>
            <div className="mt-4 text-justify">
              <span className="font-bold">{language.name}. </span>
              <span className="">{language.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
