import React from "react";
import { PUBLICATIONS } from "../data/publications";
import { Link } from "phosphor-react";
import { openLinkInNewTab } from "../helper";
import { Tooltip } from "../components/Tooltip";

const Publications: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">Publications</h2>
      <div className="text-zinc-500 flex flex-col gap-4 mt-8">
        {PUBLICATIONS.map((publication, index) => {
          return (
            <div key={index} className="bg-zinc-100 border border-zinc-200 rounded-xl p-4 text-sm flex flex-col xsm:flex-row items-center gap-4">
              <div>
                <p className="font-bold text-black">{publication.name}</p>
                <p className="text-zinc-400">{publication.authors}</p>
                <p className="text-zinc-400">{publication.conference}</p>
              </div>
              <Tooltip text={"More on\n " + publication.tooltipUrl} position="left">
                <div className="bg-zinc-200 p-1 rounded-xl hover:bg-zinc-300 cursor-pointer" onClick={() => openLinkInNewTab(publication.url)}>
                  <Link size={36} color="#1a1a1a" />
                </div>
              </Tooltip>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Publications;
