import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import BlogIndex from "../components/blog/BlogIndex";
import BlogPost from "../components/blog/BlogPost";
import { ArrowArcRight } from "phosphor-react";

const Blog: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="relative">
      <div className="flex justify-between bg-zinc-200 p-4 fixed top-0 w-screen bg-opacity-80 backdrop-blur-sm z-20 items-center gap-2">
        <div className="flex items-center">
          <p className="text-xl text-black font-bold" style={{ fontFamily: "RedditMono" }}>
            /blog/nilshellwig
          </p>
        </div>
        <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link to="/portfolio" className="p-1 px-2 bg-black rounded-xl font-bold hover:bg-zinc-700 cursor-pointer flex flex-row items-center gap-1 text-white bg-opacity-80 backdrop-blur">
            <span>see portfolio</span>
            <ArrowArcRight />
          </Link>
        </motion.div>
      </div>
      <Routes>
        <Route path="/" element={<BlogIndex />} />
        <Route path="/:projectName" element={<BlogPost />} />
      </Routes>
    </motion.div>
  );
};

export default Blog;
