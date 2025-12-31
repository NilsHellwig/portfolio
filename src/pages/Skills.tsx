import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code, Desktop, Laptop, Package } from "phosphor-react";
import { PROGRAMMING_LANGUAGES } from "../data/programming-languages";
import { IDES } from "../data/ides";
import { OPERATING_SYSTEMS } from "../data/operating-systems";
import { TECHNOLOGIES } from "../data/technologies";
import Footer from "../components/Footer";

const Skills: React.FC = () => {
  const [languages] = useState(PROGRAMMING_LANGUAGES);
  const [operatingSystems] = useState(OPERATING_SYSTEMS);
  const [ides] = useState(IDES);
  const [technologies] = useState(TECHNOLOGIES);

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
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="pb-8">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h2 className="text-3xl font-bold dark:text-white mb-2">Software Engineering</h2>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm">Technologies, tools and languages I work with</p>
      </motion.div>

      <motion.section className="mt-8" initial="hidden" animate="visible" variants={containerVariants}>
        <motion.div variants={itemVariants} className="flex items-center gap-2 mb-4">
          <Code size={24} className="text-zinc-700 dark:text-zinc-300" weight="bold" />
          <h3 className="font-bold text-xl dark:text-white">Programming Languages</h3>
        </motion.div>
        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {languages.map((language, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="border-[0.5px] border-zinc-300 dark:border-zinc-700 rounded-xl p-5 bg-white dark:bg-zinc-800 hover:shadow-md dark:hover:shadow-zinc-900/50 transition-all duration-150"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 p-3 rounded-xl border-[0.5px] border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 flex-shrink-0">
                  {language.iconPath && <img src={language.iconPath} alt={`${language.name} icon`} />}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-bold text-zinc-900 dark:text-white block">{language.name}</span>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-1 leading-relaxed">{language.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section className="mt-8" initial="hidden" animate="visible" variants={containerVariants}>
        <motion.div variants={itemVariants} className="flex items-center gap-2 mb-4">
          <Desktop size={24} className="text-zinc-700 dark:text-zinc-300" weight="bold" />
          <h3 className="font-bold text-xl dark:text-white">Editors / IDEs</h3>
        </motion.div>
        <div className="grid grid-cols-2 vsm:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
          {ides.map((ide, index) => (
            <motion.div 
              key={index} 
              className="border-[0.5px] border-zinc-300 dark:border-zinc-700 rounded-xl flex items-center justify-center p-4 flex-col gap-3 bg-white dark:bg-zinc-800 hover:shadow-md dark:hover:shadow-zinc-900/50 transition-all duration-150" 
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-900 p-2.5 border-[0.5px] border-zinc-300 dark:border-zinc-700">
                {ide.iconPath && <img src={ide.iconPath} alt={`${ide.name} icon`} className="dark:invert" />}
              </div>
              <span className="font-medium text-xs text-zinc-700 dark:text-zinc-300 text-center">{ide.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section className="mt-8" initial="hidden" animate="visible" variants={containerVariants}>
        <motion.div variants={itemVariants} className="flex items-center gap-2 mb-4">
          <Laptop size={24} className="text-zinc-700 dark:text-zinc-300" weight="bold" />
          <h3 className="font-bold text-xl dark:text-white">Operating Systems</h3>
        </motion.div>
        <div className="grid grid-cols-2 vsm:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
          {operatingSystems.map((os, index) => (
            <motion.div 
              key={index} 
              className="border-[0.5px] border-zinc-300 dark:border-zinc-700 rounded-xl flex items-center justify-center p-4 flex-col gap-3 bg-white dark:bg-zinc-800 hover:shadow-md dark:hover:shadow-zinc-900/50 transition-all duration-150" 
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-900 p-2.5 border-[0.5px] border-zinc-300 dark:border-zinc-700">
                {os.iconPath && <img src={os.iconPath} alt={`${os.name} icon`} className="dark:invert" />}
              </div>
              <span className="font-medium text-xs text-zinc-700 dark:text-zinc-300 text-center">{os.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {technologies.map((category, idx_cat) => {
        return (
          <motion.section key={idx_cat} className="mt-8" initial="hidden" animate="visible" variants={containerVariants}>
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-4">
              <Package size={24} className="text-zinc-700 dark:text-zinc-300" weight="bold" />
              <h3 className="font-bold text-xl dark:text-white">{category.name}</h3>
            </motion.div>
            <div className="grid grid-cols-1 vsm:grid-cols-2 md:grid-cols-3 gap-3">
              {category.technologies.map((name, index) => (
                <motion.div 
                  key={index} 
                  className="group relative overflow-hidden border-[0.5px] border-zinc-300 dark:border-zinc-700 p-4 rounded-xl text-sm font-semibold text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-md dark:hover:shadow-zinc-900/50 transition-all duration-150 cursor-default" 
                  variants={itemVariants}
                  whileHover={{ y: -2 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-zinc-50/50 to-transparent dark:from-zinc-700/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                  <div className="relative flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600 group-hover:bg-zinc-700 dark:group-hover:bg-zinc-300 transition-colors duration-150" />
                    <span>{name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        );
      })}
      <Footer />
    </div>
  );
};

export default Skills;
