import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ReactMarkdown from "react-markdown";

const BlogPost: React.FC = () => {
  const { projectName } = useParams();
  const [markdownContent, setMarkdownContent] = useState<string>("");

  useEffect(() => {
    const fetchMarkdownContent = async () => {
      if (projectName) {
        try {
          const file = require("../../data/blog-entries/" + projectName + ".md");
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
    <div>
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
};

export default BlogPost;
