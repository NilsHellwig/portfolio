import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import BlogIndex from "../components/blog/BlogIndex";
import BlogPost from "../components/blog/BlogPost";
import { AddressBook } from "phosphor-react";
import ThemeToggle from "../components/ThemeToggle";

const Blog: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      transition={{ duration: 0.5 }} 
      className="relative min-h-screen bg-white dark:bg-zinc-900"
    >
      <div className="flex justify-between fixed top-0 w-screen z-20 items-center gap-2 px-6 py-4 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-700">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.1 }}
          className="flex items-center"
        >
          <Link 
            to="/portfolio/blog" 
            className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors" 
            style={{ fontFamily: "Inter" }}
          >
            Nils Hellwig
          </Link>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3"
        >
          <Link 
            to="/portfolio" 
            className="px-4 py-2 rounded-lg font-medium text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex items-center gap-2"
          >
            <AddressBook size={18} />
            <span>Portfolio</span>
          </Link>
          <ThemeToggle />
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
