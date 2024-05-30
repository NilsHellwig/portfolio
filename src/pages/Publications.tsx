import React from "react";
import { PUBLICATIONS } from "../data/publications";
import { Link } from "phosphor-react";
import { openLinkInNewTab } from "../helper";
import { Tooltip } from "../components/Tooltip";
import { motion } from "framer-motion";

const Publications: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <h2 className="text-2xl font-bold">Publications</h2>
      <motion.div className="text-zinc-500 flex flex-col gap-4 mt-8" initial="hidden" animate="visible" variants={containerVariants}>
        {PUBLICATIONS.map((publication, index) => {
          return (
            <motion.div
              key={index}
              className="bg-zinc-100 border border-zinc-200 rounded-xl p-4 text-sm flex flex-col xsm:flex-row items-center gap-4"
              variants={itemVariants}
              whileHover={{ scale: 1.0 }}
            >
              <div>
                <p className="font-bold text-black">{publication.name}</p>
                <p className="text-zinc-400">{publication.authors}</p>
                <p className="text-zinc-400">{publication.conference}</p>
              </div>
              <Tooltip text={"More on\n " + publication.tooltipUrl} position="left">
                <motion.div className="bg-zinc-200 p-1 rounded-xl hover:bg-zinc-300 cursor-pointer" onClick={() => openLinkInNewTab(publication.url)} whileHover={{ scale: 1.05, rotate: 10 }}>
                  <Link size={36} color="#1a1a1a" />
                </motion.div>
              </Tooltip>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Publications;
