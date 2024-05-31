import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ReactMarkdown from "react-markdown";
import { BLOGS } from "../../data/blogs";
import "./blogStyle.css";
import { ArrowLeft, Share } from "phosphor-react";

interface BlogType {
  id: string;
  url: string;
  category: string;
  author: string;
  term: string;
  iconPath: string;
  title: string;
  bgColor: string;
  textColor: string;
}

const BlogPost: React.FC = () => {
  const { projectName } = useParams();
  const [markdownContent, setMarkdownContent] = useState<string>("");
  const [blog, setBlog] = useState<BlogType | null>(null);

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

  return (
    <div className="bg-zinc-50 p-16">
      <div className="flex justify-between max-w-[800px] w-[100%] mx-auto mb-4">
        <div className="bg-zinc-200 hover:bg-zinc-300 p-2 rounded-lg cursor-pointer flex items-center gap-2">
          <ArrowLeft size={20} />
          <span className="font-bold">All Blogs</span>
        </div>
        <div className="bg-zinc-200 hover:bg-zinc-300 p-2 rounded-lg cursor-pointer flex items-center gap-2">
          <Share size={20} />
          <span className="font-bold">Share</span>
        </div>
      </div>
      <div style={{ backgroundColor: blog?.textColor || "black", color: blog?.textColor || "white" }} className="max-w-[800px] w-[100%] mx-auto pr-4 pt-4 rounded-xl">
        <div style={{ backgroundColor: blog?.bgColor }} className="p-8 pt-4 rounded-tr-xl rounded-bl-xl">
          <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
