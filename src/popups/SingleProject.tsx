import { ArrowLeft, ArrowRight, Link, X } from "phosphor-react";
import React, { MouseEventHandler, useState } from "react";
import { PROJECTS } from "../data/projects";
import { PROGRAMMING_LANGUAGES, ProgrammingLanguage } from "../data/programming-languages";
import { Tooltip } from "../components/Tooltip";
import { openLinkInNewTab } from "../helper";

interface SingleProjectProps {
  showSingleProjectFct: MouseEventHandler<HTMLDivElement>;
  projectId: string;
}

const SingleProject: React.FC<SingleProjectProps> = ({ showSingleProjectFct, projectId }) => {
  const [galleryIndex, setGalleryIndex] = useState(0);

  const getProjectById = (projectId: string) => {
    return PROJECTS.find((project) => project.id === projectId);
  };

  const project = getProjectById(projectId);

  const lowerGalleryIndex = () => {
    if (galleryIndex > 0) {
      setGalleryIndex(galleryIndex - 1);
    }
  };

  const higherGalleryIndex = () => {
    if (project && project.galleryImages && galleryIndex < project?.galleryImages?.length - 1) {
      setGalleryIndex(galleryIndex + 1);
    }
  };

  const getLanguageData = (languageName: string): ProgrammingLanguage | undefined => {
    return PROGRAMMING_LANGUAGES.find((language) => language.name === languageName);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 max-w-[800px] w-[100%] xmd:my-auto xmd:h-3/4 my-auto xmd:mx-auto z-50 bg-white xmd:rounded-xl p-6 pb-12 overflow-scroll scroll-smooth no-scrollbar">
      <header className="flex justify-end fixed">
        <div className="bg-black opacity-75 rounded-full h-8 w-8 flex justify-center items-center cursor-pointer hover:bg-zinc-700" onClick={showSingleProjectFct}>
          <X size={20} color="#ffffff" />
        </div>
      </header>
      <div className="inner-content flex flex-col gap-6">
        <div className="flex sm:flex-row gap-4 my-8 items-center flex-col justify-center sm:justify-normal mt-16">
          <div className="bg-white rounded-[30px] w-28 h-28 border border-zinc-400 flex justify-center items-center">
            <img className="h-20 w-20" src={project?.iconPath} alt={`${project?.title} icon`} />
          </div>
          <div className="flex flex-col text-center sm:text-left gap-1 items-center sm:items-start">
            <span className="font-bold text-2xl">{project?.title}</span>
            <span className="text-zinc-400">{project?.subtitle}</span>
            <div className="border border-zinc-200 rounded-full px-2 py-1 w-fit">
              <span className="text-sm">{project?.type}</span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-center">Gallery</h3>
          <div className="bg-zinc-100 rounded-xl border border-zinc-300 p-4 mt-4">
            <div className="flex flex-row justify-between gap-4">
              <div className="flex items-center justify-center">
                <div className={`px-1 py-2 rounded-md ${galleryIndex === 0 ? "bg-zinc-200 cursor-not-allowed" : "bg-zinc-200 hover:bg-zinc-300 cursor-pointer"}`} onClick={lowerGalleryIndex}>
                  <ArrowLeft size={24} color={`${galleryIndex === 0 ? "#cccccc" : "#555555"}`} />
                </div>
              </div>
              {project?.galleryImages?.[galleryIndex] && (
                <img
                  className=" w-2/4 vsm:w-3/4 border border-zinc-300 rounded-md cursor-pointer"
                  src={require("../img/screenshots-projects/" + project?.galleryImages[galleryIndex])}
                  alt={`${project?.title} icon`}
                  onClick={higherGalleryIndex}
                />
              )}
              <div className="flex items-center justify-center">
                <div
                  className={`px-1 py-2 rounded-md ${galleryIndex + 1 === project?.galleryImages?.length ? "bg-zinc-200 cursor-not-allowed" : "bg-zinc-200 hover:bg-zinc-300 cursor-pointer"}`}
                  onClick={higherGalleryIndex}
                >
                  <ArrowRight size={24} color={`${galleryIndex + 1 === project?.galleryImages?.length ? "#cccccc" : "#555555"}`} />
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <div className="bg-zinc-700 rounded-full text-white text-[10px] py-1 px-3 font-bold">
                {galleryIndex + 1}/{project?.galleryImages?.length}
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-center">Programming Languages</h3>
          <div className="mt-6 flex flex-row gap-2 justify-center">
            {project?.programmingLanguages?.map((language, index) => (
              <Tooltip key={index} text={language} position="bottom">
                <div key={index}>
                  <div className="w-16 h-16 p-3 rounded-2xl border-zinc-200 border bg-white">
                    {getLanguageData(language)?.iconPath && <img src={getLanguageData(language)?.iconPath} alt={`${getLanguageData(language)?.name} icon`} className="mr-2" />}
                  </div>
                </div>
              </Tooltip>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-bold text-center">About</h3>
          <p className="text-sm text-zinc-400 mt-4 text-justify">{project?.description}</p>
        </div>
        <div>
          <h3 className="font-bold text-center mb-4">Technologies</h3>
          <div className="grid grid-cols sm:grid-cols-2 gap-4">
            {project?.technologies?.map((technology, index) => {
              return (
                <div key={index} className="bg-zinc-100 p-3 border border-zinc-300 rounded-xl">
                  <span className="text-zinc-600 text-sm font-bold">{technology}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h3 className="font-bold text-center mb-4">Links</h3>
          <div className="flex flex-col gap-4">
            {project?.links?.map((link, index) => {
              return (
                <Tooltip text={link.url} key={index}>
                  <div
                    className="p-3 border border-zinc-200 rounded-xl flex justify-between hover:bg-zinc-100 cursor-pointer items-center"
                    onClick={() => {
                      openLinkInNewTab(link.url);
                    }}
                  >
                    <span className="text-sm text-zinc-600 font-bold">{link.name}</span>
                    <div>
                      <Link size={24} />
                    </div>
                  </div>
                </Tooltip>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
