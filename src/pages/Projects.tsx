import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "../data/projects";
import { useParams } from "react-router";
import SingleProject from "../popups/SingleProject";
import { GithubLogo } from "@phosphor-icons/react";

interface ProjectsProps {
  showOverlay: boolean;
  setShowOverlay: React.Dispatch<React.SetStateAction<boolean>>;
}

const Projects: React.FC<ProjectsProps> = ({ showOverlay, setShowOverlay }) => {
  const [projectId, setProjectId] = useState("");
  const { projectName } = useParams();
  console.log(projectName);

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
      <h2 className="text-2xl font-bold">Projects</h2>
      <div className="mt-4">
        <a
          href="https://github.com/NilsHellwig"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
        >
          <GithubLogo size={20} weight="fill" />
          <span className="font-medium text-sm">github/NilsHellwig</span>
        </a>
      </div>

      <div className="mt-8 space-y-4">
        <div className="border-[0.5px] border-zinc-300 rounded-xl p-6 bg-zinc-50">
          <h3 className="font-bold text-md mb-4">GitHub Activity</h3>
          <div className="flex flex-col gap-4">
            <img 
              src="https://ghchart.rshah.org/16a34a/NilsHellwig" 
              alt="GitHub Contribution Chart"
              className="w-full"
            />
          </div>
        </div>
      </div>

      <section className="pt-8">
        <h3 className="font-bold text-md mt-6">Selected Software Engineering Projects</h3>
        <motion.div
          className="mt-6 grid grid-cols-1 vsm:grid-cols-2 sm:grid-cols-2 gap-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              className="border-[0.5px] border-zinc-300 rounded-xl flex p-4 flex-col gap-4 bg-zinc-100 cursor-pointer hover:bg-hover-gray"
              onClick={() => {
                setProjectId(project.id!);
                showSingleProjectFct();
              }}
              variants={itemVariants}
            >
              <div className="flex justify-end">
                <div className="flex bg-white rounded-full border-[0.5px] border-zinc-300 items-center px-2 py-1">
                  <span className="text-xs font-bold">{project.type}</span>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-xl bg-white shadow-sm p-3">
                  {project.iconPath && (
                    <img src={project.iconPath} alt={`${project.title} icon`} className="mr-2" />
                  )}
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-regular text-sm font-bold">{project.title}</span>
                <span className="text-xs text-zinc-400 p-0 m-0">{project.subtitle}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

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
      </section>
    </div>
  );
};

export default Projects;
