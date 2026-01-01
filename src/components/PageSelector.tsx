import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowSquareOut, 
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

const iconVariants = {
  hover: { 
    scale: 1.3, 
    rotate: [0, -10, 10, 0], 
    transition: { 
      duration: 0.5, 
      type: "spring", 
      stiffness: 400,
      rotate: { duration: 0.3, ease: "easeInOut" }
    } 
  },
};

const PageSelector: React.FC<{ transparentBackground: boolean }> = ({ transparentBackground }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { path: "/portfolio", label: "Home", icon: House },
    { path: "/portfolio/about", label: "About", icon: User },
    { path: "/portfolio/skills", label: "Skills", icon: Code },
    { path: "/portfolio/projects", label: "Projects", icon: Briefcase },
    { path: "/portfolio/publications", label: "Publications", icon: BookOpen },
    { path: "/portfolio/lectures", label: "Lectures", icon: Chalkboard },
    { path: "/portfolio/blog", label: "Blog", icon: Article, external: true },
  ];

  const isActive = (path: string) => {
    if (path === "/portfolio") {
      return location.pathname === path || location.pathname === "/portfolio/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav 
        className="hidden md:flex items-center gap-1.5 mb-4 overflow-x-auto no-scrollbar" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
      >
        {navigationItems.map((item, index) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          
          return (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link
                to={item.path}
                className={`
                  flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  ${active 
                    ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 shadow-md' 
                    : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100'
                  }
                `}
              >
                <motion.div whileHover={iconVariants.hover}>
                  <Icon size={16} weight={active ? "fill" : "regular"} />
                </motion.div>
                <span>{item.label}</span>
                {item.external && <ArrowSquareOut size={12} weight="bold" className="opacity-60" />}
              </Link>
            </motion.div>
          );
        })}
      </motion.nav>

      {/* Mobile Navigation */}
      <div className="md:hidden mb-4">
        <motion.button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-medium text-sm w-full justify-between"
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center gap-2">
            {navigationItems.find(item => isActive(item.path))?.icon && (
              React.createElement(navigationItems.find(item => isActive(item.path))!.icon, { size: 16, weight: "fill" })
            )}
            <span>{navigationItems.find(item => isActive(item.path))?.label || "Menu"}</span>
          </div>
          {mobileMenuOpen ? <X size={16} weight="bold" /> : <List size={16} weight="bold" />}
        </motion.button>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-2 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 overflow-hidden shadow-lg"
            >
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`
                      flex items-center gap-3 px-4 py-3 transition-colors border-b border-zinc-100 dark:border-zinc-700 last:border-b-0
                      ${active 
                        ? 'bg-zinc-50 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 font-semibold' 
                        : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-700'
                      }
                    `}
                  >
                    <motion.div whileHover={iconVariants.hover}>
                      <Icon size={18} weight={active ? "fill" : "regular"} />
                    </motion.div>
                    <span className="text-sm">{item.label}</span>
                    {item.external && <ArrowSquareOut size={12} weight="bold" className="opacity-60 ml-auto" />}
                  </Link>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default PageSelector;
