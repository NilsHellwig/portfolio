import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import der framer-motion-Bibliothek
import imageNilsHi from "../img/start-page/nils-hi.png";
import { ArrowCircleRight } from "phosphor-react";
import "../gradient-style.css";
import "../shadowbutton.css";

const Home: React.FC = () => {
  return (
    <motion.div className="mt-20 flex justify-center flex-col items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <motion.img src={imageNilsHi} alt="Nils saying hi" width="200px" initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} />
      <motion.h2 className="mt-6 text-4xl font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1 }}>
        Hi, I'm Nils Hellwig!
      </motion.h2>
      <motion.h3 className="font-light text-zinc-700 text-xl text-center mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.5 }}>
        I love software development and data science. Welcome to my portfolio!
      </motion.h3>
      <Link to="/portfolio/about">
        <motion.div
          className="flex gap-2 cursor-pointer duration-300 shadow-button-black px-4 py-2 text-white rounded-lg focus:outline-none"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <span className="">
            <motion.span initial={{ y: 0 }} animate={{ y: [-5, 0, -5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              More about me
            </motion.span>
          </span>
          <ArrowCircleRight size={24} weight="regular" />
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default Home;
