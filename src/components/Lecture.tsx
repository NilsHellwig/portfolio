import React, { useState } from "react";
import { motion } from "framer-motion";
import { DownloadSimple, FilePdf, Minus, Plus } from "phosphor-react";

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
    console.log("../downloadable-files/lectures/web-dev-2023/" + filePath);
    const totalFilePath = require("../downloadable-files/lectures/web-dev-2023/" + filePath);
    console.log(totalFilePath);
    const link = document.createElement("a");
    link.href = totalFilePath;
    link.download = filePath;
    link.click();
  };

  return (
    <div className="bg-zinc-100 border border-zinc-200 rounded-xl">
      <div className="flex flex-row items-center gap-2 p-2">
        <div className="p-2 rounded-xl">
          <img className="h-12 w-12 rounded-xl border border-zinc-200" src={lecture.iconPath} alt={"icon for lecture " + lecture.title} />
        </div>
        <div>
          <p className="font-bold">{lecture.title}</p>
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
          <div className="bg-white border border-zinc-200 p-4 rounded-xl flex flex-col gap-2">
            <span className="font-bold">Description</span>
            <p className="text-zinc-500 font-light text-justify">{lecture.description}</p>
            <ul className="list-disc ml-4 text-zinc-500 font-light">
              {lecture.competences.map((competence, index) => {
                return <li key={index}>{competence}</li>;
              })}
            </ul>
          </div>
          <div className="bg-white border border-zinc-200 p-4 rounded-xl flex flex-col gap-2">
            <span className="font-bold">Course Materials</span>
            <div className="flex flex-col gap-2 mt-2">
              {lecture.materials.map((material, index) => {
                return (
                  <div key={index} className="p-4 bg-zinc-100 rounded-xl flex flex-col gap-2 vsm:flex-row justify-between items-center">
                    <div className="flex flex-col">
                      <span className="font-bold text-zinc-600 vsm:text-left text-center">{material.name}</span>
                      <span className="text-zinc-400 text-light vsm:text-left text-center">{material.description}</span>
                    </div>
                    <div
                      onClick={() => {
                        handleDownload(material.documentPath);
                      }}
                      className="flex flex-row gap-1 bg-violet-700 bg-opacity-5 p-2 rounded-xl hover:bg-opacity-10 cursor-pointer duration-300"
                    >
                      <DownloadSimple size={24} color="#604BD3" />
                      <FilePdf size={26} color="#604BD3" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
      <div className="bg-zinc-200 h-[1px] rounded-full"></div>
      <div
        className="flex justify-center p-1 cursor-pointer-b-xl"
        onClick={() => {
          setShowDetails(!showDetails);
        }}
      >
        <div className="hover:bg-zinc-200 rounded w-full flex justify-center p-1 cursor-pointer duration-300">
          <div>{showDetails ? <Minus size={20} color="#555555" /> : <Plus size={20} color="#555555" />}</div>
        </div>
      </div>
    </div>
  );
};

export default Lecture;
