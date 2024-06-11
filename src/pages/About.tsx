import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
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
      <h2 className="text-2xl font-bold">About</h2>
      <motion.div className="text-zinc-500 flex flex-col gap-4 mt-8 font-light" initial="hidden" animate="visible" variants={containerVariants}>
        <motion.p variants={itemVariants}>
          I am a 24-year-old developer based in Regensburg, Germany. During my studies in media informatics at the University of Regensburg, I specialized in developing web and mobile applications.
        </motion.p>
        <motion.p variants={itemVariants}>
          As a software developer, I am passionate about both frontend and backend development. I find creating intuitive and visually appealing user interfaces just as exciting as developing
          efficient and robust backend solutions.
        </motion.p>
        <motion.p variants={itemVariants}>
          Additionally, I have gained substantial expertise in the field of natural language processing. I have extensive knowledge and hands-on experience with transformer-based language models,
          utilizing them for tasks such as classification (BERT models), token classification, and phrase generation (e.g., T5 or LLMs). My work also includes contributions to
          conferences related to Sentiment Analysis.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default About;
