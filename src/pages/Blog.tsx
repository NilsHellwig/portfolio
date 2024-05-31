import React from "react";
import { Route, Routes } from "react-router-dom";
import { useParams } from "react-router";

const Blog: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<BlogIndex />} />
      <Route path="/:projectName?" element={<BlogPost />} />
    </Routes>
  );
};

const BlogIndex: React.FC = () => {
  return (
    <div>
      <p className="text-white">Blog Index</p>
      <ul>
        <li>
          <a href="/portfolio/blog/1">Post 1</a>
        </li>
        <li>
          <a href="/portfolio/blog/2">Post 2</a>
        </li>
      </ul>
    </div>
  );
};

const BlogPost: React.FC = () => {
  const { projectName } = useParams();

  return (
    <div>
      <p className="text-white">Blog Post {projectName}</p>
    </div>
  );
};

export default Blog;
