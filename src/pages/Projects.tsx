import React, { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "../data/projects";
import { useParams } from "react-router";
import SingleProject from "../popups/SingleProject";
import { GithubLogo, Funnel } from "@phosphor-icons/react";
import Footer from "../components/Footer";

interface ProjectsProps {
  showOverlay: boolean;
  setShowOverlay: React.Dispatch<React.SetStateAction<boolean>>;
}

const Projects: React.FC<ProjectsProps> = ({ showOverlay, setShowOverlay }) => {
  const [projectId, setProjectId] = useState("");
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const { projectName } = useParams();
  console.log(projectName);

  // Extract unique types sorted by project count
  const categories = useMemo(() => {
    const uniqueTypes = Array.from(new Set(PROJECTS.map(p => p.type)));
    const sortedTypes = uniqueTypes.sort((a, b) => {
      const countA = PROJECTS.filter(p => p.type === a).length;
      const countB = PROJECTS.filter(p => p.type === b).length;
      return countB - countA; // Sort descending by count
    });
    return ["All", ...sortedTypes];
  }, []);

  // Get project count per type
  const getCategoryCount = (category: string) => {
    if (category === "All") return PROJECTS.length;
    return PROJECTS.filter(p => p.type === category).length;
  };

  // Filter projects
  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return PROJECTS;
    return PROJECTS.filter(p => p.type === activeFilter);
  }, [activeFilter]);

  function showSingleProjectFct() {
    // Toggle body overflow
    document.body.style.overflow = document.body.style.overflow === "hidden" ? "scroll" : "hidden";
    if (showOverlay) {
      window.history.replaceState(null, "Nils Hellwig - Portfolio", "/portfolio/projects");
    }
    setShowOverlay(!showOverlay);
  }

  useEffect(() => {
    if (projectName !== undefined) {
      setProjectId(projectName);
      showSingleProjectFct();
    }
    // eslint-disable-next-line
  }, []);

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
      <h2 className="text-2xl font-bold dark:text-white">Projects</h2>
      <div className="mt-4">
        <a
          href="https://github.com/NilsHellwig"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-700 dark:hover:bg-zinc-600 text-white rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
        >
          <GithubLogo size={20} weight="fill" />
          <span className="font-medium text-sm">github/NilsHellwig</span>
        </a>
      </div>

      <div className="mt-8 space-y-4">
        <div className="border-[0.5px] border-zinc-300 dark:border-zinc-700 rounded-xl p-6 bg-zinc-50 dark:bg-zinc-800">
          <h3 className="font-bold text-md mb-4 dark:text-white">GitHub Activity</h3>
          <div className="flex flex-col gap-4">
            <img 
              src="https://ghchart.rshah.org/16a34a/NilsHellwig" 
              alt="GitHub Contribution Chart"
              className="w-full dark:invert dark:hue-rotate-180"
            />
          </div>
        </div>
      </div>

      <section className="pt-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h3 className="font-bold text-md dark:text-white">Selected Projects</h3>
          <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
            <Funnel size={16} weight="fill" />
            <span>{filteredProjects.length} {filteredProjects.length === 1 ? 'Projekt' : 'Projekte'}</span>
          </div>
        </div>

        {/* Filter Pills */}
        <motion.div 
          className="flex flex-wrap gap-2 mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                border-[0.5px] flex items-center gap-2
                ${activeFilter === category 
                  ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 border-zinc-900 dark:border-zinc-100 shadow-md' 
                  : 'bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-sm'
                }
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span>{category}</span>
              <span className={`
                text-xs px-2 py-0.5 rounded-full
                ${activeFilter === category 
                  ? 'bg-white/20 dark:bg-zinc-900/20' 
                  : 'bg-zinc-100 dark:bg-zinc-700'
                }
              `}>
                {getCategoryCount(category)}
              </span>
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 vsm:grid-cols-2 sm:grid-cols-2 gap-6"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
          >
            {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="border-[0.5px] border-zinc-300 dark:border-zinc-700 rounded-xl flex p-5 flex-col gap-4 bg-white dark:bg-zinc-800 cursor-pointer hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-md dark:hover:shadow-zinc-900/50 transition-all duration-150 ease-out"
              onClick={() => {
                setProjectId(project.id!);
                showSingleProjectFct();
              }}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.005 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="flex justify-end">
                <div className="flex bg-zinc-100 dark:bg-zinc-900 rounded-full border-[0.5px] border-zinc-300 dark:border-zinc-600 items-center px-2.5 py-1">
                  <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300">{project.type}</span>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-xl bg-zinc-100 dark:bg-zinc-900 shadow-sm border-[0.5px] border-zinc-200 dark:border-zinc-700 p-3">
                  {project.iconPath && (
                    <img src={project.iconPath} alt={`${project.title} icon`} className="mr-2" />
                  )}
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-regular text-sm font-bold dark:text-white">{project.title}</span>
                <span className="text-xs text-zinc-400 dark:text-zinc-500 p-0 m-0">{project.subtitle}</span>
              </div>
            </motion.div>
          ))}
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          {showOverlay ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <SingleProject showSingleProjectFct={showSingleProjectFct} projectId={projectId} />
            </motion.div>
          ) : null}
        </AnimatePresence>

        <Footer />
      </section>
    </div>
  );
};

export default Projects;
