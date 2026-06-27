import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { BLOGS, convertMonth } from "../../data/blogs";
import { ArrowLeft, Share, Copy, Check } from "phosphor-react";
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
  const [copiedCode, setCopiedCode] = useState<{ [key: string]: boolean }>({});

  // Code Block Component with Copy Button
  const CodeBlock = ({ language, children }: { language: string; children: string }) => {
    const codeString = String(children).replace(/\n$/, "");
    const codeId = `${language}-${codeString.substring(0, 20)}`;

    const handleCopy = async () => {
      await navigator.clipboard.writeText(codeString);
      setCopiedCode({ ...copiedCode, [codeId]: true });
      setTimeout(() => {
        setCopiedCode({ ...copiedCode, [codeId]: false });
      }, 2000);
    };

    return (
      <div className="relative group my-6">
        <div className="absolute right-3 top-3 z-10">
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-3 py-1.5 bg-zinc-700/80 hover:bg-zinc-600/80 text-zinc-100 rounded-lg text-xs font-medium transition-all backdrop-blur-sm border border-zinc-600/50 shadow-lg hover:shadow-xl"
          >
            {copiedCode[codeId] ? (
              <>
                <Check size={14} weight="bold" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy size={14} weight="bold" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
        <SyntaxHighlighter
          style={oneDark}
          language={language}
          PreTag="div"
          className="rounded-2xl text-sm shadow-xl border border-zinc-800"
          showLineNumbers={true}
          customStyle={{
            margin: 0,
            padding: "1.5rem",
            borderRadius: "1rem",
          }}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    );
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      {/* Navigation bar above hero */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="flex items-center gap-3 mt-10 mb-4"
      >
        <Link
          to="/portfolio/blog"
          className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-800 border-[0.5px] border-zinc-300 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors shadow-sm"
        >
          <ArrowLeft
            size={16}
            weight="bold"
            className="group-hover:-translate-x-0.5 transition-transform"
          />
          All blog posts
        </Link>
        <button
          onClick={handleShare}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-800 border-[0.5px] border-zinc-300 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors shadow-sm"
        >
          <Share size={16} weight="bold" />
          {copiedToClipboard ? "Copied!" : "Share"}
        </button>
      </motion.div>

      {/* Hero Card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="rounded-2xl overflow-hidden border-[0.5px] border-zinc-300 dark:border-zinc-700 shadow-sm mb-8"
      >
        <div
          className="relative px-8 pt-8 pb-10 overflow-hidden"
          style={{ backgroundColor: blog?.bgColor }}
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full translate-x-1/3 -translate-y-1/3 bg-white opacity-[0.06]" />
          <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full -translate-x-1/3 translate-y-1/3 bg-white opacity-[0.06]" />

          {/* Category + date + author */}
          <div className="flex flex-wrap items-center gap-3 mb-6 relative z-10">
            <span
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-sm"
              style={{ color: blog?.textColor }}
            >
              {blog?.category}
            </span>
            <span className="text-sm opacity-60" style={{ color: blog?.textColor }}>
              {blog?.term &&
                convertMonth[parseInt(blog.term.split("/")[1])] +
                  " " +
                  blog.term.split("/")[0] +
                  ", " +
                  blog.term.split("/")[2]}
            </span>
            <span className="opacity-30" style={{ color: blog?.textColor }}>
              •
            </span>
            <span className="text-sm opacity-60" style={{ color: blog?.textColor }}>
              By {blog?.author}
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight relative z-10"
            style={{ color: blog?.textColor }}
          >
            {blog?.title}
          </h1>
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="pt-2 pb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="prose prose-lg prose-zinc max-w-none"
        >
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="text-4xl font-semibold text-zinc-900 dark:text-zinc-100 mt-12 mb-6">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-100 mt-10 mb-4">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mt-8 mb-3">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed my-6 text-justify">
                  {children}
                </p>
              ),
              code({ node, inline, className, children, ...props }: any) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <CodeBlock language={match[1]}>{String(children)}</CodeBlock>
                ) : (
                  <code
                    className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded text-sm font-mono text-zinc-800 dark:text-zinc-200"
                    {...props}
                  >
                    {children}
                  </code>
                );
              },
              a: ({ href, children }) => (
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={href}
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
                >
                  {children}
                </a>
              ),
              ul: ({ children }) => (
                <ul className="my-6 space-y-3 list-disc list-inside">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="my-6 space-y-3 list-decimal list-inside">{children}</ol>
              ),
              li: ({ children }) => (
                <li className="text-lg text-zinc-700 dark:text-zinc-300">{children}</li>
              ),
              img: ({ src, alt }) => (
                <div className="my-8">
                  <img src={src} alt={alt} className="w-full rounded-xl shadow-md" />
                </div>
              ),
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
