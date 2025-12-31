import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowSquareOut } from "phosphor-react";

const PageSelector: React.FC<{ transparentBackground: boolean }> = ({ transparentBackground }) => {
  const location = useLocation();

  const getTextColor = (path: string) => {
    if (location.pathname === "/portfolio" || location.pathname === "/portfolio/") {
      return location.pathname === path ? "text-black dark:text-white cursor-pointer duration-300 hover:text-zinc-600 dark:hover:text-zinc-400" : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-400 dark:hover:text-zinc-300 cursor-pointer duration-300";
    }
    return location.pathname === path ? "text-black dark:text-white text-bold cursor-pointer duration-300" : "text-zinc-400 dark:text-zinc-500 hover:text-zinc-300 dark:hover:text-zinc-400 cursor-pointer duration-300";
  };

  return (
    <motion.div className="flex font-bold gap-3 text-sm mb-4 overflow-scroll no-scrollbar" initial={{ opacity: 0, x: 0 }} animate={{ opacity: 1, x: 0 }}>
      <motion.span className={getTextColor("/portfolio")} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.0 }}>
        <Link to="/portfolio">home</Link>
      </motion.span>
      <motion.span className={getTextColor("/portfolio/about")} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.05 }}>
        <Link to="/portfolio/about">about</Link>
      </motion.span>
      <motion.span className={getTextColor("/portfolio/skills")} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.1 }}>
        <Link to="/portfolio/skills">dev</Link>
      </motion.span>
      <motion.span className={getTextColor("/portfolio/projects")} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.15 }}>
        <Link to="/portfolio/projects">dev.projects</Link>
      </motion.span>
      <motion.span className={getTextColor("/portfolio/publications")} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.2 }}>
        <Link to="/portfolio/publications">publications</Link>
      </motion.span>
      <motion.span className={getTextColor("/portfolio/lectures")} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.25 }}>
        <Link to="/portfolio/lectures">lectures</Link>
      </motion.span>
      <motion.span className={`${getTextColor("/portfolio/blog")} relative`} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.3 }}>
        <Link to="/portfolio/blog" className="flex items-center gap-1">
          <span>blog</span>
          <ArrowSquareOut size={14} weight="bold" className="opacity-60" />
        </Link>
      </motion.span>
    </motion.div>
  );
};

export default PageSelector;
