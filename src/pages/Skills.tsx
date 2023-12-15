// Skills.tsx
import React, { useState } from "react";
import { PROGRAMMING_LANGUAGES } from "../data/programming-languages";
import { IDES } from "../data/ides";
import { OPERATING_SYSTEMS } from "../data/operating-systems";

const Skills: React.FC = () => {
  const [languages] = useState(PROGRAMMING_LANGUAGES);
  const [operatingSystems] = useState(OPERATING_SYSTEMS);
  const [ides] = useState(IDES);

  return (
    <div>
      <h2 className="text-2xl font-bold">Skills</h2>
      <section className="pt-8">
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
      </section>
      <section className="pt-8">
        <h3 className="font-bold text-md mt-6">Editors / IDEs</h3>
        <div className="mt-6 grid grid-cols-2 vsm:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
          {ides.map((ide, index) => (
            <div key={index} className="border border-zinc-150 rounded-xl flex items-center justify-center p-2 flex-col gap-2">
              <div className="w-14 h-14 rounded-full bg-zinc-200 p-4">{ide.iconPath && <img src={ide.iconPath} alt={`${ide.name} icon`} className="mr-2" />}</div>
              <span className="font-regular text-sm">{ide.name}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="pt-8">
        <h3 className="font-bold text-md mt-6">Operating Systems</h3>
        <div className="mt-6 grid grid-cols-2 vsm:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
          {operatingSystems.map((os, index) => (
            <div key={index} className="border border-zinc-150 rounded-xl flex items-center justify-center p-2 flex-col gap-2">
              <div className="w-14 h-14 rounded-full bg-zinc-200 p-4">{os.iconPath && <img src={os.iconPath} alt={`${os.name} icon`} className="mr-2" />}</div>
              <span className="font-regular text-sm text-center">{os.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
