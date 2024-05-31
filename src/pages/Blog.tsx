import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import BlogIndex from "../components/blog/BlogIndex";
import BlogPost from "../components/blog/BlogPost";
import { AddressBook } from "phosphor-react";
import { Tooltip } from "../components/Tooltip";

const Blog: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="relative">
      <div className="flex justify-between bg-zinc-200 p-2 fixed top-0 w-screen bg-opacity-80 backdrop-blur-sm z-20 items-center gap-2">
        <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} className="flex items-center">
          <Link to="/portfolio/blog" className="text-xl text-black font-bold hover:bg-zinc-300 p-2 rounded-md" style={{ fontFamily: "RedditMono" }}>
            /blog/nilshellwig
          </Link>
        </motion.div>
        <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Tooltip text="Portfolio" position="left">
            <Link to="/portfolio" className="p-1 px-2 bg-black rounded-xl font-bold hover:bg-zinc-700 cursor-pointer flex flex-row items-center gap-1 text-white bg-opacity-80 backdrop-blur">
              <AddressBook />
            </Link>
          </Tooltip>
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
