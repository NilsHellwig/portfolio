import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Lectures from "./pages/Lectures";
import Projects from "./pages/Projects";
import Publications from "./pages/Publications";
import Skills from "./pages/Skills";

// Components
import NavBar from "./components/Navbar";
import PageSelector from "./components/PageSelector";

const App: React.FC = () => {
  return (
    <div className="page-outer" style={{ fontFamily: "Manrope" }}>
      <Router>
        <div className="fixed w-screen bg-zinc-50 bg-opacity-90 backdrop-blur-sm pt-2">
          <header className="max-w-[800px] w-[100%] mx-auto px-4 mt-0">
            <NavBar />
            <PageSelector />
          </header>
        </div>
        <div className="page-inner max-w-[800px] w-[100%] mx-auto p-4 py-40">
          <Routes>
            <Route path="portfolio/" element={<Home />} />
            <Route path="portfolio/about" element={<About />} />
            <Route path="portfolio/blog" element={<Blog />} />
            <Route path="portfolio/lectures" element={<Lectures />} />
            <Route path="portfolio/projects" element={<Projects />} />
            <Route path="portfolio/publications" element={<Publications />} />
            <Route path="portfolio/skills" element={<Skills />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
