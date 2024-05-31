import React from "react";
import { Route, Routes } from "react-router-dom";
import BlogIndex from "../components/blog/BlogIndex";
import BlogPost from "../components/blog/BlogPost";

const Blog: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<BlogIndex />} />
        <Route path="/:projectName" element={<BlogPost />} />
      </Routes>
    </div>
  );
};

export default Blog;
