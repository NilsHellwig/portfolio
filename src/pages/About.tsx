import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Code, MapPin, Calendar, Sparkle } from "phosphor-react";
import Footer from "../components/Footer";

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
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const currentAge = new Date().getFullYear() - 2000 - (new Date().getMonth() > 5 || (new Date().getMonth() === 5 && new Date().getDate() >= 6) ? 0 : 1);

  const highlights = [
    { icon: GraduationCap, label: "PhD Candidate", value: "University of Regensburg" },
    { icon: Code, label: "Role", value: "AI Researcher" },
    { icon: MapPin, label: "Location", value: "Regensburg, Germany" },
  ];

  const expertise = [
    { area: "Natural Language Processing", topics: ["Aspect-Based Sentiment Analysis", "LLM Fine-tuning & Evaluation", "Guided Decoding Techniques"] },
    { area: "Software Engineering", topics: ["Full-Stack Development", "React & TypeScript", "Python & Machine Learning"] },
    { area: "Research", topics: ["Low-Resource NLP", "Synthetic Data Generation", "Structured Text Generation"] },
  ];

  const timeline = [
    { year: "2024", title: "PhD Candidate", description: "Chair of Media Informatics, Faculty of Informatics and Data Science (FIDS) at University of Regensburg" },
    { year: "2022-2024", title: "Master of Science (1.0)", description: "Media Computer Science at University of Regensburg. Thesis: Data Augmentation with LLMs for ABSA" },
    { year: "2022-now", title: "Software Developer", description: "Part-time at Chair of Educational Data Science, University of Regensburg" },
    { year: "2023", title: "Lecturer", description: "Introduction to modern full-stack web development with JavaScript, Node.js and React.js" },
    { year: "2018-2022", title: "Bachelor's Degree (1.5)", description: "Media Computer Science, Information Science at University of Regensburg" },
  ];

  return (
    <div className="pb-8">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h2 className="text-3xl font-bold dark:text-white mb-2">About Me</h2>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm">PhD Candidate, Software Engineer & NLP Researcher</p>
      </motion.div>

      {/* Quick Info Cards */}
      <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8" initial="hidden" animate="visible" variants={containerVariants}>
        {highlights.map((item, index) => {
          const gradients = [
            "from-blue-50 to-blue-100/50 dark:from-blue-950/30 dark:to-blue-900/20",
            "from-violet-50 to-violet-100/50 dark:from-violet-950/30 dark:to-violet-900/20",
            "from-emerald-50 to-emerald-100/50 dark:from-emerald-950/30 dark:to-emerald-900/20"
          ];
          const iconColors = [
            "text-blue-600 dark:text-blue-400",
            "text-violet-600 dark:text-violet-400",
            "text-emerald-600 dark:text-emerald-400"
          ];
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative overflow-hidden border-[0.5px] border-zinc-300 dark:border-zinc-700 rounded-xl p-5 bg-gradient-to-br ${gradients[index]}`}
            >
              <div className="relative flex items-center gap-3">
                <motion.div 
                  className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/80 dark:bg-zinc-900/80 border-[0.5px] border-zinc-300 dark:border-zinc-600 backdrop-blur-sm shadow-sm"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon size={24} className={iconColors[index]} weight="bold" />
                </motion.div>
                <div className="flex-1">
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 font-semibold uppercase tracking-wide">{item.label}</p>
                  <p className="text-sm font-bold text-zinc-900 dark:text-white mt-0.5">{item.value}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Introduction */}
      <motion.div className="mt-8" initial="hidden" animate="visible" variants={containerVariants}>
        <motion.div variants={itemVariants} className="border-[0.5px] border-zinc-300 dark:border-zinc-700 rounded-xl p-6 bg-white dark:bg-zinc-800">
          <div className="flex items-center gap-2 mb-4">
            <Sparkle size={20} className="text-zinc-700 dark:text-zinc-300" weight="fill" />
            <h3 className="text-lg font-bold dark:text-white">Introduction</h3>
          </div>
          <div className="text-zinc-600 dark:text-zinc-300 flex flex-col gap-4 leading-relaxed">
            <p>
              I'm a {currentAge}-year-old PhD candidate and software engineer based in Regensburg, Germany. Currently, I'm pursuing my doctoral degree at the Faculty of Informatics and Data Science at
              the University of Regensburg, specializing in Natural Language Processing and Computational Linguistics.
            </p>
            <p>
              My research focuses on advancing LLM-based approaches to tackle aspect-based sentiment analysis in low-resource scenarios. I've published multiple papers in conferences and journals,
              exploring topics such as synthetic training data generation, structured language generation with guided decoding, and the application of LLMs for complex NLP tasks.
            </p>
            <p>
              Beyond my academic work, I'm passionate about full-stack software engineering. I enjoy building scalable, user-friendly solutions that bridge the gap between cutting-edge research and
              practical applications.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Expertise Areas */}
      <motion.div className="mt-8" initial="hidden" animate="visible" variants={containerVariants}>
        <motion.div variants={itemVariants}>
          <h3 className="text-xl font-bold dark:text-white mb-4">Areas of Expertise</h3>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="border-[0.5px] border-zinc-300 dark:border-zinc-700 rounded-xl p-5 bg-white dark:bg-zinc-800"
            >
              <h4 className="font-bold text-zinc-900 dark:text-white mb-3">{item.area}</h4>
              <ul className="space-y-2">
                {item.topics.map((topic, idx) => (
                  <li key={idx} className="text-sm text-zinc-600 dark:text-zinc-400 flex items-start gap-2">
                    <span className="text-zinc-400 dark:text-zinc-600 mt-1">•</span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Timeline */}
      <motion.div className="mt-8" initial="hidden" animate="visible" variants={containerVariants}>
        <motion.div variants={itemVariants}>
          <h3 className="text-xl font-bold dark:text-white mb-4">Journey</h3>
        </motion.div>
        <div className="space-y-3">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="border-[0.5px] border-zinc-300 dark:border-zinc-700 rounded-xl p-5 bg-white dark:bg-zinc-800"
            >
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-zinc-100 dark:bg-zinc-900 border-[0.5px] border-zinc-300 dark:border-zinc-600 flex-shrink-0">
                  <Calendar size={20} className="text-zinc-700 dark:text-zinc-300" weight="bold" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-zinc-500 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-900 px-2 py-0.5 rounded-full border-[0.5px] border-zinc-300 dark:border-zinc-600">
                      {item.year}
                    </span>
                  </div>
                  <h4 className="font-bold text-zinc-900 dark:text-white mb-1">{item.title}</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default About;
