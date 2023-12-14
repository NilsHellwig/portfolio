import React from "react";

const PageSelector: React.FC = () => {
  return (
    <div className="flex flex-row font-bold gap-3 text-sm mb-4">
      <span className="">
        <a href="/portfolio/">Home</a>
      </span>
      <span className="text-gray-300 hover:text-gray-400 cursor-pointer">
        <a href="/portfolio/about">About</a>
      </span>
      <span className="text-gray-300 hover:text-gray-400 cursor-pointer">
        <a href="/portfolio/skills">Skills</a>
      </span>
      <span className="text-gray-300 hover:text-gray-400 cursor-pointer">
        <a href="/portfolio/projects">Projects</a>
      </span>
      <span className="text-gray-300 hover:text-gray-400 cursor-pointer">
        <a href="/portfolio/blog">Blog</a>
      </span>
      <span className="text-gray-300 hover:text-gray-400 cursor-pointer">
        <a href="/portfolio/publications">Publications</a>
      </span>
      <span className="text-gray-300 hover:text-gray-400 cursor-pointer">
        <a href="/portfolio/lectures">Lectures</a>
      </span>
    </div>
  );
};

export default PageSelector;
