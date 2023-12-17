import { X } from "phosphor-react";
import React, { MouseEventHandler } from "react";
import { PROJECTS } from "../data/projects";

interface SingleProjectProps {
  showSingleProjectFct: MouseEventHandler<HTMLDivElement>;
}

const SingleProject: React.FC<SingleProjectProps> = ({ showSingleProjectFct }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 max-w-[800px] w-[100%] xmd:my-auto xmd:h-3/4 my-auto xmd:mx-auto z-50 bg-white xmd:rounded-xl p-6 overflow-scroll">
      <header className="flex justify-end fixed">
        <div className="bg-black rounded-full h-8 w-8 flex justify-center items-center cursor-pointer hover:bg-zinc-700" onClick={showSingleProjectFct}>
          <X size={20} color="#ffffff" />
        </div>
      </header>
      <div className="inner-content">
        <div className="flex sm:flex-row gap-4 my-8 items-center flex-col justify-center sm:justify-normal mt-16">
          <div className="bg-white rounded-[30px] w-28 h-28 border border-zinc-400 flex justify-center items-center">
            <img className="h-20 w-20" src={PROJECTS[1].iconPath} alt={`${PROJECTS[1].title} icon`} />
          </div>
          <div className="flex flex-col text-center sm:text-left gap-1 items-center sm:items-start">
            <span className="font-bold text-2xl">{PROJECTS[1].title}</span>
            <span className="text-zinc-400">{PROJECTS[1].subtitle}</span>
            <div className="border border-zinc-200 rounded-full px-2 py-1 w-fit">
              <span className="text-sm">Web-App</span>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="font-bold text-center">Gallery</h3>
          <div className="bg-zinc-100 rounded-xl border border-zinc-300 p-4 mt-4">
            <div></div>
            {PROJECTS[3]?.screenshots?.[0] && <img className="h-96 border border-zinc-300 rounded-md" src={PROJECTS[3].screenshots[0]} alt={`${PROJECTS[3].title} icon`} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
