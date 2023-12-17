import React from "react";
import { Student, TwitterLogo, At, GithubLogo, LinkedinLogo } from "phosphor-react";
import { Link } from "react-router-dom";
import { openLinkInNewTab } from "../helper";

const NavBar: React.FC = () => {

  return (
    <div className="flex flex-row items-center mt-2 mb-4 justify-center flex-col gap-2 xsm:justify-between xsm:flex-row xsm:gap-0">
      <Link to="/portfolio">
        <h1 className="font-bold text-md hover:cursor-pointer hover:text-zinc-500 duration-300">Nils Hellwig</h1>
      </Link>
      <div className="flex flex-row gap-3">
        <div className="p-1 hover:bg-zinc-200 rounded-lg cursor-pointer duration-300" onClick={() => openLinkInNewTab("https://twitter.com/nchllwg")}>
          <TwitterLogo size={24} color="#1a1a1a" weight="regular" />
        </div>
        <div className="p-1 hover:bg-zinc-200 rounded-lg cursor-pointer duration-300" onClick={() => openLinkInNewTab("https://https://github.com/NilsHellwig")}>
          <GithubLogo size={24} color="#1a1a1a" weight="regular" />
        </div>
        <div className="p-1 hover:bg-zinc-200 rounded-lg cursor-pointer duration-300" onClick={() => openLinkInNewTab("https://scholar.google.com/citations?user=VzUTKcwAAAAJ")}>
          <Student size={24} color="#1a1a1a" weight="regular" />
        </div>
        <div className="p-1 hover:bg-zinc-200 rounded-lg cursor-pointer duration-300" onClick={() => openLinkInNewTab("https://www.linkedin.com/in/nils-h-748711229")}>
          <LinkedinLogo size={24} color="#1a1a1a" weight="regular" />
        </div>
        <div className="p-1 hover:bg-zinc-200 rounded-lg cursor-pointer duration-300" onClick={() => openLinkInNewTab("mailto:Nils-Constantin.Hellwig@stud.uni-regensburg.de")}>
          <At size={24} color="#1a1a1a" weight="regular" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
