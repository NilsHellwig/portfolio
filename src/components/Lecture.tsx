import React, { useState } from "react";
import { motion } from "framer-motion";
import { DownloadSimple, FilePdf, Minus, Plus } from "phosphor-react";
import { lectureFiles } from "../downloadable-files/lectures/lectureFiles";

type LectureProps = {
  lecture: {
    title: string;
    lecturer: string;
    term: string;
    iconPath: string;
    description: string;
    competences: string[];
    materials: { name: string; description: string; documentPath: string }[];
  };
};

const Lecture: React.FC<LectureProps> = ({ lecture }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleDownload = (filePath: string) => {
    try {
      console.log("Downloading file:", filePath);
      // Hole die PDF-URL aus der statischen Import-Map
      const pdfUrl = lectureFiles[filePath];
      
      if (!pdfUrl) {
        console.error("File not found:", filePath);
        alert("Datei nicht gefunden. Bitte versuchen Sie es später erneut.");
        return;
      }
      
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = filePath.split('/').pop() || 'document.pdf'; // Nur der Dateiname
      link.target = '_blank'; // Öffnet in neuem Tab als Fallback
      link.click();
    } catch (error) {
      console.error("Error downloading file:", error);
      alert("Fehler beim Herunterladen der Datei. Bitte versuchen Sie es später erneut.");
    }
  };

  return (
    <motion.div 
      className="relative overflow-hidden border-[0.5px] border-zinc-300 dark:border-zinc-700 rounded-xl bg-white dark:bg-zinc-800 hover:shadow-lg dark:hover:shadow-zinc-900/50 transition-all duration-150 ease-out"
      whileHover={{ y: -4 }}
    >
      <div className="flex flex-row items-center gap-4 p-5">
        <motion.div 
          className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-zinc-50 to-zinc-100/50 dark:from-zinc-800/30 dark:to-zinc-900/20 border-[0.5px] border-zinc-300 dark:border-zinc-700 shadow-sm flex-shrink-0"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <img className="h-10 w-10 rounded-lg" src={lecture.iconPath} alt={"icon for lecture " + lecture.title} />
        </motion.div>
        <div className="flex-1">
          <p className="font-bold text-lg dark:text-white">{lecture.title}</p>
          <div className="flex items-center gap-3 mt-1">
            <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-900 px-2 py-0.5 rounded-full border-[0.5px] border-zinc-300 dark:border-zinc-600">{lecture.lecturer}</span>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">{lecture.term}</span>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={showDetails ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
      >
        <div className="px-5 pb-5 flex flex-col gap-4">
          <div className="bg-zinc-50 dark:bg-zinc-900/50 border-[0.5px] border-zinc-200 dark:border-zinc-700 p-5 rounded-xl flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-1 h-5 bg-zinc-400 dark:bg-zinc-600 rounded-full" />
              <span className="font-bold dark:text-white">Description</span>
            </div>
            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-justify">{lecture.description}</p>
            <div className="mt-2">
              <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 mb-2">Topics Covered:</p>
              <div className="flex flex-wrap gap-2">
                {lecture.competences.map((competence, index) => (
                  <span key={index} className="text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-3 py-1 rounded-full border-[0.5px] border-zinc-300 dark:border-zinc-600">
                    {competence}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-zinc-50 dark:bg-zinc-900/50 border-[0.5px] border-zinc-200 dark:border-zinc-700 p-5 rounded-xl flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-1 h-5 bg-zinc-400 dark:bg-zinc-600 rounded-full" />
              <span className="font-bold dark:text-white">Course Materials</span>
            </div>
            <div className="flex flex-col gap-3 mt-2">
              {lecture.materials.map((material, index) => {
                return (
                  <motion.div 
                    key={index} 
                    className="p-4 bg-white dark:bg-zinc-800 rounded-xl flex flex-col gap-2 vsm:flex-row justify-between items-center border-[0.5px] border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors duration-150"
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex flex-col flex-1">
                      <span className="font-bold text-zinc-700 dark:text-zinc-200 vsm:text-left text-center">{material.name}</span>
                      <span className="text-sm text-zinc-500 dark:text-zinc-400 vsm:text-left text-center">{material.description}</span>
                    </div>
                    <motion.div
                      onClick={() => {
                        handleDownload(material.documentPath);
                      }}
                      className="flex flex-row gap-2 items-center bg-zinc-100 dark:bg-zinc-800 px-3 py-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 cursor-pointer border-[0.5px] border-zinc-300 dark:border-zinc-600 transition-colors duration-150"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <DownloadSimple size={20} className="text-zinc-700 dark:text-zinc-300" weight="bold" />
                      <FilePdf size={22} className="text-zinc-700 dark:text-zinc-300" weight="bold" />
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
      <div className="bg-zinc-200 dark:bg-zinc-700 h-[0.5px]"></div>
      <motion.div
        className="flex justify-center p-3 cursor-pointer"
        onClick={() => {
          setShowDetails(!showDetails);
        }}
        whileHover={{ backgroundColor: "rgba(161, 161, 170, 0.1)" }}
      >
        <motion.div 
          className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 font-medium text-sm"
          animate={{ rotate: showDetails ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {showDetails ? <Minus size={20} weight="bold" /> : <Plus size={20} weight="bold" />}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Lecture;
