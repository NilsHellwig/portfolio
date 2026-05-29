import React from "react";
import { motion } from "framer-motion";
import { Student, TwitterLogo, At, GithubLogo, LinkedinLogo, GlobeHemisphereWest } from "phosphor-react";
import { Link } from "react-router-dom";
import { openLinkInNewTab } from "../helper";
import { Tooltip } from "./Tooltip";
import ThemeToggle from "./ThemeToggle";

const iconVariants = {
  hover: { 
    scale: 1.3, 
    rotate: [0, -10, 10, -5, 5, 0], 
    transition: { 
      duration: 0.6, 
      type: "spring", 
      stiffness: 300,
      rotate: { duration: 0.4, ease: "easeInOut" }
    } 
  },
};

const textVariants = {
  hover: { 
    scale: 1.05, 
    textShadow: "0px 0px 8px rgba(0,0,0,0.3)", 
    transition: { duration: 0.3 } 
  },
};

const NavBar: React.FC = () => {
  return (
    <div className="flex flex-row items-center mt-2 mb-4 justify-center flex-col gap-2 xsm:justify-between xsm:flex-row xsm:gap-0">
      <Link to="/portfolio">
        <motion.h1 
          className="font-bold text-md hover:cursor-pointer hover:text-zinc-500 dark:text-zinc-100 dark:hover:text-zinc-400 duration-300"
          whileHover={textVariants.hover}
        >
          Nils Hellwig
        </motion.h1>
      </Link>
      <div className="flex flex-row gap-1 xsm:gap-3 items-center">
        <Tooltip text="Twitter" position="bottom" asChild>
          <motion.div
            className="p-1 px-1.5 hover:bg-white/40 dark:hover:bg-white/10 hover:backdrop-blur-md rounded-lg cursor-pointer duration-300 hover:scale-110 hover:shadow-lg border border-transparent hover:border-white/20 dark:hover:border-white/10"
            onClick={() => openLinkInNewTab("https://twitter.com/nchllwg")}
            whileHover={iconVariants.hover}
          >
            <TwitterLogo size={24} className="text-zinc-900 dark:text-zinc-100" weight="regular" />
          </motion.div>
        </Tooltip>

        <Tooltip text="GitHub" position="bottom" asChild>
          <motion.div
            className="p-1 px-1.5 hover:bg-white/40 dark:hover:bg-white/10 hover:backdrop-blur-md rounded-lg cursor-pointer duration-300 hover:scale-110 hover:shadow-lg border border-transparent hover:border-white/20 dark:hover:border-white/10"
            onClick={() => openLinkInNewTab("https://github.com/NilsHellwig")}
            whileHover={iconVariants.hover}
          >
            <GithubLogo size={24} className="text-zinc-900 dark:text-zinc-100" weight="regular" />
          </motion.div>
        </Tooltip>
        <Tooltip text="Google Scholar" position="bottom" asChild>
          <motion.div
            className="p-1 px-1.5 hover:bg-white/40 dark:hover:bg-white/10 hover:backdrop-blur-md rounded-lg cursor-pointer duration-300 hover:scale-110 hover:shadow-lg border border-transparent hover:border-white/20 dark:hover:border-white/10"
            onClick={() => openLinkInNewTab("https://scholar.google.com/citations?user=VzUTKcwAAAAJ")}
            whileHover={iconVariants.hover}
          >
            <Student size={24} className="text-zinc-900 dark:text-zinc-100" weight="regular" />
          </motion.div>
        </Tooltip>
        <Tooltip text="LinkedIn" position="bottom" asChild>
          <motion.div
            className="p-1 px-1.5 hover:bg-white/40 dark:hover:bg-white/10 hover:backdrop-blur-md rounded-lg cursor-pointer duration-300 hover:scale-110 hover:shadow-lg border border-transparent hover:border-white/20 dark:hover:border-white/10"
            onClick={() => openLinkInNewTab("https://www.linkedin.com/in/nils-h-748711229")}
            whileHover={iconVariants.hover}
          >
            <LinkedinLogo size={24} className="text-zinc-900 dark:text-zinc-100" weight="regular" />
          </motion.div>
        </Tooltip>
        <Tooltip text="Mail" position="bottom" asChild>
          <motion.div
            className="p-1 px-1.5 hover:bg-white/40 dark:hover:bg-white/10 hover:backdrop-blur-md rounded-lg cursor-pointer duration-300 hover:scale-110 hover:shadow-lg border border-transparent hover:border-white/20 dark:hover:border-white/10"
            onClick={() => openLinkInNewTab("mailto:Nils-Constantin.Hellwig@stud.uni-regensburg.de")}
            whileHover={iconVariants.hover}
          >
            <At size={24} className="text-zinc-900 dark:text-zinc-100" weight="regular" />
          </motion.div>
        </Tooltip>
        <Tooltip text="ORCID" position="bottom" asChild>
          <motion.div
            className="p-1 px-1.5 hover:bg-white/40 dark:hover:bg-white/10 hover:backdrop-blur-md rounded-lg cursor-pointer duration-300 hover:scale-110 hover:shadow-lg border border-transparent hover:border-white/20 dark:hover:border-white/10"
            onClick={() => openLinkInNewTab("https://orcid.org/0009-0000-7305-8797")}
            whileHover={iconVariants.hover}
          >
            <GlobeHemisphereWest size={24} className="text-zinc-900 dark:text-zinc-100" weight="regular" />
          </motion.div>
        </Tooltip>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default NavBar;
