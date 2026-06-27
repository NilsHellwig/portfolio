import React from "react";
import { PUBLICATIONS } from "../data/publications";
import { ArrowSquareOut, FilePdf } from "phosphor-react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const DOMAIN_STYLES: Record<string, { dot: string; text: string; bg: string; hover: string }> = {
  "aclanthology.org": {
    dot: "bg-red-500",
    text: "text-red-600 dark:text-red-400",
    bg: "bg-red-50 dark:bg-red-950/30",
    hover: "hover:bg-red-100 dark:hover:bg-red-900/40",
  },
  "sciencedirect.com": {
    dot: "bg-orange-500",
    text: "text-orange-600 dark:text-orange-400",
    bg: "bg-orange-50 dark:bg-orange-950/30",
    hover: "hover:bg-orange-100 dark:hover:bg-orange-900/40",
  },
  "lrec.elra.info": {
    dot: "bg-violet-500",
    text: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-50 dark:bg-violet-950/30",
    hover: "hover:bg-violet-100 dark:hover:bg-violet-900/40",
  },
  "springer.com": {
    dot: "bg-amber-500",
    text: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-50 dark:bg-amber-950/30",
    hover: "hover:bg-amber-100 dark:hover:bg-amber-900/40",
  },
  "ncbi.nlm.nih.gov": {
    dot: "bg-teal-500",
    text: "text-teal-600 dark:text-teal-400",
    bg: "bg-teal-50 dark:bg-teal-950/30",
    hover: "hover:bg-teal-100 dark:hover:bg-teal-900/40",
  },
};

const fallbackDomain = {
  dot: "bg-zinc-400",
  text: "text-zinc-600 dark:text-zinc-400",
  bg: "",
  hover: "hover:bg-zinc-50 dark:hover:bg-zinc-700/50",
};

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

const Publications: React.FC = () => {
  return (
    <div className="pb-8">
      <h2 className="text-2xl font-bold dark:text-white">Publications</h2>
      <p className="text-zinc-500 dark:text-zinc-400 mt-4 mb-8">
        Research contributions in Natural Language Processing, Computational Linguistics, and
        Sentiment Analysis. For every publication, my collegues and I have made the code and data
        publicly available, which can be found in the respective papers.
      </p>
      <motion.div
        className="grid grid-cols-1 gap-4 mt-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {PUBLICATIONS.map((publication, index) => {
          const domain = DOMAIN_STYLES[publication.tooltipUrl] ?? fallbackDomain;

          return (
            <motion.div
              key={index}
              className="border-[0.5px] border-zinc-300 dark:border-zinc-700 rounded-xl bg-white dark:bg-zinc-800 overflow-hidden"
              variants={itemVariants}
            >
              {/* Card body */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2.5 flex-wrap">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-zinc-100 dark:bg-zinc-900 border-[0.5px] border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300">
                    {publication.conference}
                  </span>
                  {publication.year && (
                    <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 tabular-nums">
                      {publication.year}
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-base text-zinc-900 dark:text-white mb-1.5 leading-snug">
                  {publication.name}
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {publication.authors}
                </p>
              </div>

              {/* Button row */}
              <div className="border-t border-zinc-200 dark:border-zinc-700 flex">
                <a
                  href={publication.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-1 items-center justify-center gap-2 py-3 text-xs font-semibold transition-all duration-150 ${domain.bg} ${domain.hover} ${domain.text}`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${domain.dot}`} />
                  {publication.tooltipUrl}
                  <ArrowSquareOut size={11} weight="bold" className="opacity-60 flex-shrink-0" />
                </a>
                <div className="w-px bg-zinc-200 dark:bg-zinc-700" />
                <a
                  href={publication.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 py-3 text-xs font-semibold text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-700/50 transition-all duration-150"
                >
                  <FilePdf size={14} weight="bold" />
                  PDF
                </a>
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
