import React from "react";
import { motion } from "framer-motion";
import { LECTURES } from "../data/lectures";
import Lecture from "../components/Lecture";

const Lectures: React.FC = () => {
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
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h2 className="text-3xl font-bold dark:text-white mb-2">Lectures</h2>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm">University courses and teaching materials</p>
      </motion.div>

      {/* Lectures List */}
      <motion.div className="flex flex-col gap-4 mt-8" initial="hidden" animate="visible" variants={containerVariants}>
        {LECTURES.map((lecture, index) => {
          return (
            <motion.div key={index} variants={itemVariants}>
              <Lecture lecture={lecture} />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Lectures;
