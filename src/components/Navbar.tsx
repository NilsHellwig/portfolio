import React from "react";
import { motion } from "framer-motion";
import { Student, TwitterLogo, At, GithubLogo, LinkedinLogo } from "phosphor-react";
import { Link } from "react-router-dom";
import { openLinkInNewTab } from "../helper";
import { Tooltip } from "./Tooltip";
import ThemeToggle from "./ThemeToggle";

const iconVariants = {
  hover: { scale: 1.2, transition: { duration: 0.3 } },
};

const NavBar: React.FC = () => {
  return (
    <div className="flex flex-row items-center mt-2 mb-4 justify-center flex-col gap-2 xsm:justify-between xsm:flex-row xsm:gap-0">
      <Link to="/portfolio">
        <h1 className="font-bold text-md hover:cursor-pointer hover:text-zinc-500 dark:text-zinc-100 dark:hover:text-zinc-400 duration-300">Nils Hellwig</h1>
      </Link>
      <div className="flex flex-row gap-3 items-center">
        <Tooltip text="Twitter" position="bottom">
          <motion.div
            className="p-1 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg cursor-pointer duration-300"
            onClick={() => openLinkInNewTab("https://twitter.com/nchllwg")}
            whileHover="hover"
            variants={iconVariants}
          >
            <TwitterLogo size={24} className="text-zinc-900 dark:text-zinc-100" weight="regular" />
          </motion.div>
        </Tooltip>

        <Tooltip text="GitHub" position="bottom">
          <motion.div
            className="p-1 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg cursor-pointer duration-300"
            onClick={() => openLinkInNewTab("https://github.com/NilsHellwig")}
            whileHover="hover"
            variants={iconVariants}
          >
            <GithubLogo size={24} className="text-zinc-900 dark:text-zinc-100" weight="regular" />
          </motion.div>
        </Tooltip>
        <Tooltip text="Google Scholar" position="bottom">
          <motion.div
            className="p-1 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg cursor-pointer duration-300"
            onClick={() => openLinkInNewTab("https://scholar.google.com/citations?user=VzUTKcwAAAAJ")}
            whileHover="hover"
            variants={iconVariants}
          >
            <Student size={24} className="text-zinc-900 dark:text-zinc-100" weight="regular" />
          </motion.div>
        </Tooltip>
        <Tooltip text="LinkedIn" position="bottom">
          <motion.div
            className="p-1 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg cursor-pointer duration-300"
            onClick={() => openLinkInNewTab("https://www.linkedin.com/in/nils-h-748711229")}
            whileHover="hover"
            variants={iconVariants}
          >
            <LinkedinLogo size={24} className="text-zinc-900 dark:text-zinc-100" weight="regular" />
          </motion.div>
        </Tooltip>
        <Tooltip text="Mail" position="bottom">
          <motion.div
            className="p-1 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg cursor-pointer duration-300"
            onClick={() => openLinkInNewTab("mailto:Nils-Constantin.Hellwig@stud.uni-regensburg.de")}
            whileHover="hover"
            variants={iconVariants}
          >
            <At size={24} className="text-zinc-900 dark:text-zinc-100" weight="regular" />
          </motion.div>
        </Tooltip>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default NavBar;
