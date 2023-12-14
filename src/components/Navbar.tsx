import React from "react";
import { Student, TwitterLogo, At, GithubLogo, LinkedinLogo, Sun } from "phosphor-react";

const NavBar: React.FC = () => {
  return (
    <div className="flex flex-row items-center mt-6 mb-8 justify-center flex-col gap-2 md:justify-between md:flex-row md:gap-0">
      <h1 className="font-bold text-xl">Nils Hellwig</h1>
      <div className="flex flex-row gap-3">
        <div className="p-1 hover:bg-gray-200 rounded-lg cursor-pointer">
          <TwitterLogo size={24} color="#1a1a1a" weight="regular" />
        </div>
        <div className="p-1 hover:bg-gray-200 rounded-lg cursor-pointer">
          <GithubLogo size={24} color="#1a1a1a" weight="regular" />
        </div>
        <div className="p-1 hover:bg-gray-200 rounded-lg cursor-pointer">
          <Student size={24} color="#1a1a1a" weight="regular" />
        </div>
        <div className="p-1 hover:bg-gray-200 rounded-lg cursor-pointer">
          <LinkedinLogo size={24} color="#1a1a1a" weight="regular" />
        </div>
        <div className="p-1 hover:bg-gray-200 rounded-lg cursor-pointer">
          <At size={24} color="#1a1a1a" weight="regular" />
        </div>
        <div className="p-1 hover:bg-gray-200 rounded-lg cursor-pointer">
          <Sun size={24} color="#1a1a1a" weight="regular" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
