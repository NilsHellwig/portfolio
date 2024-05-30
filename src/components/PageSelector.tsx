import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const PageSelector: React.FC = () => {
  const location = useLocation();

  const getTextColor = (path: string) => {
    return location.pathname === path ? "text-zinc-600" : "text-zinc-300 hover:text-zinc-400 cursor-pointer duration-300";
  };

  return (
    <motion.div className="flex font-bold gap-3 text-sm mb-4 overflow-scroll no-scrollbar" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.2 }}>
      <motion.span className={getTextColor("/portfolio")} whileHover={{ color: "#555555" }} transition={{ duration: 0.1 }}>
        <Link to="/portfolio">Home</Link>
      </motion.span>
      <motion.span className={getTextColor("/portfolio/about")} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.05 }}>
        <Link to="/portfolio/about">About</Link>
      </motion.span>
      <motion.span className={getTextColor("/portfolio/skills")} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.1 }}>
        <Link to="/portfolio/skills">Skills</Link>
      </motion.span>
      <motion.span className={getTextColor("/portfolio/projects")} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.15 }}>
        <Link to="/portfolio/projects">Projects</Link>
      </motion.span>
      <motion.span className={getTextColor("/portfolio/blog")} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.2 }}>
        <Link to="/portfolio/blog">Blog</Link>
      </motion.span>
      <motion.span className={getTextColor("/portfolio/publications")} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.25 }}>
        <Link to="/portfolio/publications">Publications</Link>
      </motion.span>
      <motion.span className={getTextColor("/portfolio/lectures")} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.3 }}>
        <Link to="/portfolio/lectures">Lectures</Link>
      </motion.span>
    </motion.div>
  );
};

export default PageSelector;
