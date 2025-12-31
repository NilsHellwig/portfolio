import React, { useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import BlogIndex from "../components/blog/BlogIndex";
import BlogPost from "../components/blog/BlogPost";
import { 
  ArrowLeft, 
  House, 
  User, 
  Code, 
  Briefcase, 
  BookOpen, 
  Chalkboard,
  Article,
  List,
  X
} from "phosphor-react";
import ThemeToggle from "../components/ThemeToggle";

const Blog: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isBlogPost = location.pathname !== "/portfolio/blog" && location.pathname !== "/portfolio/blog/";

  const navigationItems = [
    { path: "/portfolio", label: "Home", icon: House },
    { path: "/portfolio/about", label: "About", icon: User },
    { path: "/portfolio/skills", label: "Skills", icon: Code },
    { path: "/portfolio/projects", label: "Projects", icon: Briefcase },
    { path: "/portfolio/publications", label: "Publications", icon: BookOpen },
    { path: "/portfolio/lectures", label: "Lectures", icon: Chalkboard },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      transition={{ duration: 0.5 }} 
      className="relative min-h-screen bg-white dark:bg-zinc-900"
    >
      {/* Header */}
      <div className="fixed top-0 w-screen z-20 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-700">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center gap-4">
            {/* Left Side: Logo & Navigation */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.1 }}
              className="flex items-center gap-4"
            >
              <Link 
                to="/portfolio/blog" 
                className="flex items-center gap-3 group"
                style={{ fontFamily: "Inter" }}
              >
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors">
                      Nils Hellwig
                    </span>
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-sm"
                    >
                      <Article size={12} weight="fill" />
                      <span className="text-xs font-bold">Blog</span>
                    </motion.div>
                  </div>
                </div>
              </Link>

              {/* Desktop Navigation - Left Side */}
              <div className="hidden md:flex items-center gap-2">
                <Link 
                  to="/portfolio"
                  className="px-3 py-2 rounded-lg font-medium text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex items-center gap-2"
                >
                  <House size={16} weight="bold" />
                  <span>Portfolio</span>
                </Link>
              </div>
            </motion.div>

            {/* Right Side: Theme Toggle */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.2 }}
              className="hidden md:flex items-center gap-2"
            >
              <ThemeToggle />
            </motion.div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
                whileTap={{ scale: 0.95 }}
              >
                {mobileMenuOpen ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 overflow-hidden shadow-lg"
              >
                {isBlogPost && (
                  <Link
                    to="/portfolio/blog"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-700 border-b border-zinc-100 dark:border-zinc-700"
                  >
                    <ArrowLeft size={18} weight="bold" />
                    <span className="text-sm">Back to Blog</span>
                  </Link>
                )}
                <Link
                  to="/portfolio"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-700 border-b border-zinc-100 dark:border-zinc-700"
                >
                  <House size={18} weight="bold" />
                  <span className="text-sm">Portfolio Home</span>
                </Link>
                <div className="px-4 py-2 bg-zinc-50 dark:bg-zinc-900">
                  <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-500 mb-2">Quick Navigation</p>
                </div>
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-700 border-b border-zinc-100 dark:border-zinc-700 last:border-b-0"
                    >
                      <Icon size={18} weight="regular" />
                      <span className="text-sm">{item.label}</span>
                    </Link>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<BlogIndex />} />
        <Route path="/:projectName" element={<BlogPost />} />
      </Routes>
    </motion.div>
  );
};

export default Blog;
