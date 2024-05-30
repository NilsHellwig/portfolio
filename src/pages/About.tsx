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
          I’m a 23 year old developer living in Regensburg, Germany. During my studies of media informatics at the University of Regensburg, I got especially interested in the development of web and
          mobile applications.
        </motion.p>
        <motion.p variants={itemVariants}>
          As a software developer, I am passionate about both frontend and backend development. I find the process of creating intuitive and visually appealing user interfaces to be just as exciting
          as developing efficient and robust solutions on the backend.
        </motion.p>
        <motion.p variants={itemVariants}>
          Additionally, I am deeply fascinated by the field of artificial intelligence. In particular, my interests lie in the areas of image processing and natural language processing. Having worked
          with convolutional neural networks (CNNs), generative adversarial networks (GANs), and diffusion models.
        </motion.p>
        <motion.p variants={itemVariants}>
          In the domain of Natural Language Processing, I have a comprehensive understanding and hands-on experience with transformer-based language models, utilizing them for tasks such as
          classification, token classification, and phrase generation. Additionally, my contributions include publications in conferences related to Sentiment Analysis.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default About;
