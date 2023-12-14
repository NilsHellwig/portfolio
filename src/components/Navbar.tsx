import React from "react";
import { Student, TwitterLogo, At, GithubLogo, LinkedinLogo } from "phosphor-react";

const NavBar: React.FC = () => {
  const openLinkInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="flex flex-row items-center mt-6 mb-8 justify-center flex-col gap-2 md:justify-between md:flex-row md:gap-0">
      <h1 className="font-bold text-md hover:cursor-pointer">Nils Hellwig</h1>
      <div className="flex flex-row gap-3">
        <div className="p-1 hover:bg-gray-200 rounded-lg cursor-pointer" onClick={() => openLinkInNewTab("https://twitter.com/nchllwg")}>
          <TwitterLogo size={24} color="#1a1a1a" weight="regular" />
        </div>
        <div className="p-1 hover:bg-gray-200 rounded-lg cursor-pointer" onClick={() => openLinkInNewTab("https://https://github.com/NilsHellwig")}>
          <GithubLogo size={24} color="#1a1a1a" weight="regular" />
        </div>
        <div className="p-1 hover:bg-gray-200 rounded-lg cursor-pointer" onClick={() => openLinkInNewTab("https://scholar.google.com/citations?user=VzUTKcwAAAAJ")}>
          <Student size={24} color="#1a1a1a" weight="regular" />
        </div>
        <div className="p-1 hover:bg-gray-200 rounded-lg cursor-pointer" onClick={() => openLinkInNewTab("https://www.linkedin.com/in/nils-h-748711229")}>
          <LinkedinLogo size={24} color="#1a1a1a" weight="regular" />
        </div>
        <div className="p-1 hover:bg-gray-200 rounded-lg cursor-pointer" onClick={() => openLinkInNewTab("mailto:Nils-Constantin.Hellwig@stud.uni-regensburg.de")}>
          <At size={24} color="#1a1a1a" weight="regular" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
