import React from "react";
import { Link, useLocation } from "react-router-dom";

const PageSelector: React.FC = () => {
  const location = useLocation();

  const getTextColor = (path: string) => {
    // Wenn der Pfad dem aktuellen Standort entspricht, gib eine dunklere Farbe zurück, sonst die Standardfarbe
    return location.pathname === path ? "text-zinc-600" : "text-zinc-300 hover:text-zinc-400 cursor-pointer duration-300";
  };

  return (
    <div className="flex flex-wrap font-bold gap-3 text-sm mb-4 md:flex-row">
      <span className={getTextColor("/portfolio")}>
        <Link to="/portfolio">Home</Link>
      </span>
      <span className={getTextColor("/portfolio/about")}>
        <Link to="/portfolio/about">About</Link>
      </span>
      <span className={getTextColor("/portfolio/skills")}>
        <Link to="/portfolio/skills">Skills</Link>
      </span>
      <span className={getTextColor("/portfolio/projects")}>
        <Link to="/portfolio/projects">Projects</Link>
      </span>
      <span className={getTextColor("/portfolio/blog")}>
        <Link to="/portfolio/blog">Blog</Link>
      </span>
      <span className={getTextColor("/portfolio/publications")}>
        <Link to="/portfolio/publications">Publications</Link>
      </span>
      <span className={getTextColor("/portfolio/lectures")}>
        <Link to="/portfolio/lectures">Lectures</Link>
      </span>
    </div>
  );
};

export default PageSelector;
