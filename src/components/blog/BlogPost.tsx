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
        setTimeout(() => setCopiedToClipboard(false), 3000); // Reset copiedToClipboard after 3 seconds
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }} className="bg-zinc-50 p-4 mt-16">
      <div className="flex flex-row justify-between max-w-[800px] w-[100%] mx-auto my-6">
        <div className="flex flex-col">
          <span className="font-bold text-2xl">
            #{blog?.id} {blog?.title}
          </span>
          <span className="text-zinc-400 text-light">{blog?.term && convertMonth[parseInt(blog.term.split("/")[1])] + " " + blog.term.split("/")[0] + ", " + blog.term.split("/")[2]}</span>
          <span className="text-blue-500">Article by {blog?.author}</span>
        </div>
      </div>
      <div className="flex flex-row justify-between max-w-[800px] w-[100%] mx-auto mb-4">
        <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link to="/portfolio/blog" className="bg-zinc-200 hover:bg-zinc-300 p-2 rounded-lg cursor-pointer flex items-center gap-2">
            <ArrowLeft size={20} />
            <span className="font-bold">All Blogs</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={"bg-zinc-200 hover:bg-zinc-300 p-2 rounded-lg cursor-pointer flex items-center gap-2 "}
          onClick={handleShare}
        >
          <Share size={20} />
          <span className={`font-bold `}>{copiedToClipboard ? "Link Copied!" : "Share"}</span>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="max-w-[800px] w-[100%] mx-auto pr-3 pt-3 rounded-xl bg-zinc-200">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8 }}
          style={{ backgroundColor: blog?.bgColor, color: blog?.textColor || "white" }}
          className="p-8 pt-4 rounded-tr-xl rounded-bl-xl"
        >
          <ReactMarkdown
            components={{
              h1: ({ children }) => <h1 style={{ fontSize: "2rem", fontFamily: "Inter", fontWeight: "bolder", marginTop: "1rem" }}>{children}</h1>,
              h2: ({ children }) => <h2 style={{ fontSize: "1.5rem", fontFamily: "Inter", fontWeight: "bolder", marginTop: "1rem" }}>{children}</h2>,
              h3: ({ children }) => <h3 style={{ fontSize: "1rem", fontFamily: "Inter", fontWeight: "bolder", marginTop: "1rem" }}>{children}</h3>,
              p: ({ children }) => <p style={{ marginTop: "1rem" }}>{children}</p>,
              pre: ({ children }) => <pre style={{ padding: "1rem", backgroundColor: "rgba(255, 255, 255, 0.2)", borderRadius: "1rem", marginTop: "1rem" }}>{children}</pre>,
              a: ({ href, children }) => (
                <a target="_blank" rel="noreferrer" href={href} style={{ padding: "0.3rem", backgroundColor: "rgba(255, 255, 255, 0.2)", borderRadius: "1rem" }}>
                  {children}
                </a>
              ),
            }}
          >
            {markdownContent}
          </ReactMarkdown>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default BlogPost;
