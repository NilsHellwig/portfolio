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
          I am a {new Date().getFullYear() - 2000 - (new Date().getMonth() > 5 || (new Date().getMonth() === 5 && new Date().getDate() >= 6) ? 0 : 1)}-year-old PhD candidate and software engineer based in Regensburg, Germany. I am currently pursuing my doctoral degree at the Faculty of Informatics and Data Science at the University of Regensburg, where I specialize in Natural Language Processing and Computational Linguistics.
        </motion.p>
        <motion.p variants={itemVariants}>
          My research focuses on advancing LLM-based approaches to tackle aspect-based sentiment analysis in low-resource scenarios. I have published multiple papers in conferences and journals, exploring topics such as synthetic training data generation, structured language generation with guided decoding, and the application of LLMs for complex NLP tasks.
        </motion.p>
        <motion.p variants={itemVariants}>
          Beyond my academic work in NLP, I am passionate about full-stack software engineering. I enjoy building scalable, user-friendly solutions that bridge the gap between cutting-edge research and practical applications.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default About;
