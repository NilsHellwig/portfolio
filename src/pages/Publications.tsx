import React from "react";
import { PUBLICATIONS } from "../data/publications";
import { Link } from "phosphor-react";
import { openLinkInNewTab } from "../helper";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

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
    <div className="pb-8">
      <h2 className="text-2xl font-bold dark:text-white">Publications</h2>
      <p className="text-zinc-500 dark:text-zinc-400 mt-4 mb-8">
        Research contributions in Natural Language Processing, Computational Linguistics, and Sentiment Analysis
      </p>
      <motion.div className="grid grid-cols-1 gap-4 mt-8" initial="hidden" animate="visible" variants={containerVariants}>
        {PUBLICATIONS.map((publication, index) => {
          return (
            <motion.div
              key={index}
              onClick={() => openLinkInNewTab(publication.url)}
              className="border-[0.5px] border-zinc-300 dark:border-zinc-700 rounded-xl flex p-5 flex-col gap-3 bg-white dark:bg-zinc-800 cursor-pointer hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-md dark:hover:shadow-zinc-900/50 transition-all duration-150 ease-out"
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.005 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-zinc-100 dark:bg-zinc-900 border-[0.5px] border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300">
                      {publication.conference}
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-zinc-900 dark:text-white mb-1">
                    {publication.name}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {publication.authors}
                  </p>
                </div>
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-900 border-[0.5px] border-zinc-300 dark:border-zinc-600 flex-shrink-0 shadow-sm">
                  <Link size={20} className="text-zinc-700 dark:text-zinc-300" weight="bold" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      <Footer />
    </div>
  );
};

export default Publications;
