import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { BLOGS, convertMonth } from "../../data/blogs";
import { ArrowLeft, Share } from "phosphor-react";
import { motion } from "framer-motion";

interface BlogType {
  id: string;
  url: string;
  category: string;
  author: string;
  term: string;
  title: string;
  bgColor: string;
  textColor: string;
}

const BlogPost: React.FC = () => {
  const { projectName } = useParams();
  const [markdownContent, setMarkdownContent] = useState<string>("");
  const [blog, setBlog] = useState<BlogType | null>(null);
  const [copiedToClipboard, setCopiedToClipboard] = useState<boolean>(false);

  // Generate color scheme based on date
  const getColorScheme = (term: string | undefined) => {
    if (!term) return { primary: "#3b82f6", secondary: "#8b5cf6", accent: "#ec4899" };
    const [, month, year] = term.split("/").map(Number);
    const seed = month + year;
    const schemes = [
      { primary: "#3b82f6", secondary: "#8b5cf6", accent: "#ec4899" }, // Blue-Purple-Pink
      { primary: "#06b6d4", secondary: "#0891b2", accent: "#14b8a6" }, // Cyan-Teal
      { primary: "#8b5cf6", secondary: "#a855f7", accent: "#c084fc" }, // Purple
      { primary: "#f59e0b", secondary: "#f97316", accent: "#fb923c" }, // Orange
      { primary: "#10b981", secondary: "#059669", accent: "#34d399" }, // Green
      { primary: "#ec4899", secondary: "#db2777", accent: "#f472b6" }, // Pink
      { primary: "#6366f1", secondary: "#4f46e5", accent: "#818cf8" }, // Indigo
      { primary: "#14b8a6", secondary: "#0d9488", accent: "#2dd4bf" }, // Teal
      { primary: "#f97316", secondary: "#ea580c", accent: "#fb923c" }, // Deep Orange
      { primary: "#a855f7", secondary: "#9333ea", accent: "#c084fc" }, // Violet
    ];
    return schemes[seed % schemes.length];
  };

  useEffect(() => {
    const foundBlog = BLOGS.find((el) => el.url === projectName);
    setBlog(foundBlog || null);

    const fetchMarkdownContent = async () => {
      if (projectName) {
        try {
          const file = require(`../../data/blog-entries/${projectName}.md`);
          const response = await fetch(file);
          const text = await response.text();
          setMarkdownContent(text);
        } catch (error) {
          console.error("Error loading markdown file:", error);
        }
      }
    };

    fetchMarkdownContent();
  }, [projectName]);

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: blog?.title,
          text: blog?.title,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setCopiedToClipboard(true);
        setTimeout(() => setCopiedToClipboard(false), 3000);
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  const colors = getColorScheme(blog?.term);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      transition={{ duration: 0.5 }} 
      className="min-h-screen bg-white"
    >
      {/* Hero Header with Dynamic Gradient Blobs */}
      <div className="relative w-full min-h-[400px] overflow-hidden bg-white pb-8">
        {/* Soft background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-50/50 via-zinc-50/30 to-white" />
        
        {/* Animated Gradient Blobs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
          style={{ background: `radial-gradient(circle, ${colors.primary} 0%, transparent 70%)` }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] rounded-full blur-3xl opacity-15"
          style={{ background: `radial-gradient(circle, ${colors.secondary} 0%, transparent 70%)` }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-[-20%] left-[30%] w-[400px] h-[400px] rounded-full blur-3xl opacity-15"
          style={{ background: `radial-gradient(circle, ${colors.accent} 0%, transparent 70%)` }}
        />
        
        {/* Soft bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white" />
        
        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-0">
          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-10 mt-24"
          >
            <Link 
              to="/portfolio/blog" 
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              <ArrowLeft size={18} weight="bold" className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-semibold">All posts</span>
            </Link>
            
            <button
              onClick={handleShare}
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Share size={18} weight="bold" />
              <span className="font-semibold">{copiedToClipboard ? "Copied!" : "Share"}</span>
            </button>
          </motion.div>
          
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 text-sm text-zinc-600 mb-4">
              <span>{blog?.term && convertMonth[parseInt(blog.term.split("/")[1])] + " " + blog.term.split("/")[0] + ", " + blog.term.split("/")[2]}</span>
              <span>•</span>
              <span>By {blog?.author}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 leading-tight">
              {blog?.title}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-6 pt-8 pb-16">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.4 }} 
          className="prose prose-lg prose-zinc max-w-none"
        >
          <ReactMarkdown
            components={{
              h1: ({ children }) => <h1 className="text-4xl font-semibold text-zinc-900 mt-12 mb-6">{children}</h1>,
              h2: ({ children }) => <h2 className="text-3xl font-semibold text-zinc-900 mt-10 mb-4">{children}</h2>,
              h3: ({ children }) => <h3 className="text-2xl font-semibold text-zinc-900 mt-8 mb-3">{children}</h3>,
              p: ({ children }) => <p className="text-lg text-zinc-700 leading-relaxed my-6">{children}</p>,
              pre: ({ children }) => <pre className="p-6 bg-zinc-100 rounded-lg my-6 overflow-x-auto">{children}</pre>,
              code: ({ children }) => <code className="px-2 py-1 bg-zinc-100 rounded text-sm font-mono">{children}</code>,
              a: ({ href, children }) => (
                <a target="_blank" rel="noreferrer" href={href} className="text-blue-600 hover:text-blue-800 underline">
                  {children}
                </a>
              ),
              ul: ({ children }) => <ul className="my-6 space-y-3">{children}</ul>,
              ol: ({ children }) => <ol className="my-6 space-y-3 list-decimal list-inside">{children}</ol>,
              li: ({ children }) => <li className="text-lg text-zinc-700">{children}</li>,
            }}
          >
            {markdownContent}
          </ReactMarkdown>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BlogPost;
