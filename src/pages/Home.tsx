import React from "react";
import { Link } from "react-router-dom";
import imageNilsHi from "../img/start-page/nils-hi.png";
import { ArrowCircleRight } from "phosphor-react";

const Home: React.FC = () => {
  return (
    <div className="mt-20 flex justify-center flex-col items-center">
      <img src={imageNilsHi} alt="Nils saying hi" width="200px" />
      <h2 className="mt-6 text-4xl font-bold">Hi, I'm Nils Hellwig!</h2>
      <h3 className="font-light text-gray-500 text-xl">Software Development. Data Science.</h3>
      <Link to="/portfolio/about">
        <div className="bg-black px-4 py-2 rounded-xl flex gap-2 mt-6 cursor-pointer hover:bg-gray-700">
          <span className="text-white">About me</span>
          <ArrowCircleRight size={24} color="#ffffff" weight="thin" />
        </div>
      </Link>
    </div>
  );
};

export default Home;
