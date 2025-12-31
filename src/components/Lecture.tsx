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
    <div className="bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl">
      <div className="flex flex-row items-center gap-2 p-2">
        <div className="p-2 rounded-xl">
          <img className="h-12 w-12 rounded-xl border border-zinc-200 dark:border-zinc-700" src={lecture.iconPath} alt={"icon for lecture " + lecture.title} />
        </div>
        <div>
          <p className="font-bold dark:text-white">{lecture.title}</p>
          <p className="text-sm text-zinc-400">{lecture.lecturer}</p>
          <p className="text-sm text-zinc-400">{lecture.term}</p>
        </div>
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={showDetails ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
      >
        <div className="p-4 flex flex-col gap-4">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 p-4 rounded-xl flex flex-col gap-2">
            <span className="font-bold dark:text-white">Description</span>
            <p className="text-zinc-500 dark:text-zinc-400 font-light text-justify">{lecture.description}</p>
            <ul className="list-disc ml-4 text-zinc-500 dark:text-zinc-400 font-light">
              {lecture.competences.map((competence, index) => {
                return <li key={index}>{competence}</li>;
              })}
            </ul>
          </div>
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 p-4 rounded-xl flex flex-col gap-2">
            <span className="font-bold dark:text-white">Course Materials</span>
            <div className="flex flex-col gap-2 mt-2">
              {lecture.materials.map((material, index) => {
                return (
                  <div key={index} className="p-4 bg-zinc-100 dark:bg-zinc-800 rounded-xl flex flex-col gap-2 vsm:flex-row justify-between items-center">
                    <div className="flex flex-col">
                      <span className="font-bold text-zinc-600 dark:text-zinc-300 vsm:text-left text-center">{material.name}</span>
                      <span className="text-zinc-400 text-light vsm:text-left text-center">{material.description}</span>
                    </div>
                    <div
                      onClick={() => {
                        handleDownload(material.documentPath);
                      }}
                      className="flex flex-row gap-1 bg-violet-600 dark:bg-violet-500 bg-opacity-20 dark:bg-opacity-30 p-2 rounded-xl hover:bg-opacity-30 dark:hover:bg-opacity-50 cursor-pointer duration-300"
                    >
                      <DownloadSimple size={24} className="text-violet-700 dark:text-violet-300" weight="bold" />
                      <FilePdf size={26} className="text-violet-700 dark:text-violet-300" weight="bold" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
      <div className="bg-zinc-200 dark:bg-zinc-700 h-[1px] rounded-full"></div>
      <div
        className="flex justify-center p-1 cursor-pointer-b-xl"
        onClick={() => {
          setShowDetails(!showDetails);
        }}
      >
        <div className="hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded w-full flex justify-center p-1 cursor-pointer duration-300">
          <div>{showDetails ? <Minus size={20} className="text-zinc-600 dark:text-zinc-400" /> : <Plus size={20} className="text-zinc-600 dark:text-zinc-400" />}</div>
        </div>
      </div>
    </div>
  );
};

export default Lecture;
