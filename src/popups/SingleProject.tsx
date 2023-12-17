import { ArrowLeft, ArrowRight, Link, X } from "phosphor-react";
import React, { MouseEventHandler, useState } from "react";
import { PROJECTS } from "../data/projects";
import { PROGRAMMING_LANGUAGES } from "../data/programming-languages";
import { Tooltip } from "../components/Tooltip";
import { openLinkInNewTab } from "../helper";

interface SingleProjectProps {
  showSingleProjectFct: MouseEventHandler<HTMLDivElement>;
}

const SingleProject: React.FC<SingleProjectProps> = ({ showSingleProjectFct }) => {
  const [galleryIndex, setGalleryIndex] = useState(0);

  const lowerGalleryIndex = () => {
    if (galleryIndex > 0) {
      setGalleryIndex(galleryIndex - 1);
      console.log(galleryIndex);
    }
  };

  const higherGalleryIndex = () => {
    if (galleryIndex > 0) {
      setGalleryIndex(galleryIndex - 1);
      console.log(galleryIndex);
    }
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
            <img className="h-20 w-20" src={PROJECTS[1].iconPath} alt={`${PROJECTS[1].title} icon`} />
          </div>
          <div className="flex flex-col text-center sm:text-left gap-1 items-center sm:items-start">
            <span className="font-bold text-2xl">{PROJECTS[1].title}</span>
            <span className="text-zinc-400">{PROJECTS[1].subtitle}</span>
            <div className="border border-zinc-200 rounded-full px-2 py-1 w-fit">
              <span className="text-sm">Web-App</span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-center">Gallery</h3>
          <div className="bg-zinc-100 rounded-xl border border-zinc-300 p-4 mt-4 flex flex-row justify-between">
            <div className="flex items-center justify-center">
              <div className={`px-1 py-2 rounded-md ${galleryIndex > 0 ? "bg-zinc-200 hover:bg-zinc-300" : "bg-zinc-200 border border-zinc-200 cursor-not-allowed"}`} onClick={lowerGalleryIndex}>
                <ArrowLeft size={24} color={`${galleryIndex > 0 ? "#555555" : "#cccccc"}`} />
              </div>
            </div>
            {PROJECTS[3]?.screenshots?.[0] && <img className="h-96 border border-zinc-300 rounded-md" src={PROJECTS[3].screenshots[0]} alt={`${PROJECTS[3].title} icon`} />}
            <div className="flex items-center justify-center">
              <div className="bg-zinc-200 px-1 py-2 rounded-md hover:bg-zinc-300" onClick={higherGalleryIndex}>
                <ArrowRight size={24} color="#555555" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-center">Programming Languages</h3>
          <div className="mt-6 flex flex-row gap-2 justify-center">
            {PROGRAMMING_LANGUAGES.map((language, index) => (
              <Tooltip text={language.name} position="bottom">
                <div key={index}>
                  <div className="w-16 h-16 p-3 rounded-2xl border-zinc-200 border bg-white">{language.iconPath && <img src={language.iconPath} alt={`${language.name} icon`} className="mr-2" />}</div>
                </div>
              </Tooltip>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-bold text-center">About</h3>
          <p className="text-sm text-zinc-400 mt-4">
            BirdID is a mobile application designed for the recognition of 307 distinct bird species through image recognition utilizing Convolutional Neural Networks (CNN). This project was developed
            as a component of my bachelor’s thesis. React Native served as the framework for the application, while the neural network underwent training, validation, and testing processes with an
            extensive dataset comprising almost 300,000 bird images sourced from Flickr. The deployment of the neural network was achieved using Flask.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-center mb-4">Technologies</h3>
          <div className="grid grid-cols sm:grid-cols-2 gap-4">
            {["React.js", "HTML", "CSS", "nginx"].map((technology) => {
              return (
                <div className="bg-zinc-100 p-3 border border-zinc-300 rounded-xl">
                  <span className="text-zinc-600 text-sm font-bold">{technology}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h3 className="font-bold text-center mb-4">Links</h3>
          <div>
            {[{ name: "GitHub Repository", url: "https://github.com/NilsHellwig/BirdID" }].map((link) => {
              return (
                <div
                  className="p-3 border border-zinc-200 rounded-xl flex justify-between hover:bg-zinc-100 cursor-pointer"
                  onClick={() => {
                    openLinkInNewTab(link.url);
                  }}
                >
                  <span className="text-sm text-zinc-600 font-bold">{link.name}</span>
                  <div>
                    <Link size={24} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
