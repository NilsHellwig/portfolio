import React, { useState } from "react";
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

// blog implementieren
// darkmode?
// texte durchlesen

const App: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div className="page-outer" style={{ fontFamily: "Inter" }}>
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
            <Route path="portfolio/projects/:projectName?" element={<Projects showOverlay={showOverlay} setShowOverlay={setShowOverlay} />} />
            <Route path="portfolio/publications" element={<Publications />} />
            <Route path="portfolio/skills" element={<Skills />} />
          </Routes>
        </div>
      </Router>
      {showOverlay && (
        <div
          className="bg-gray-200 fixed flex w-screen h-screen top-0 bg-opacity-70 backdrop-blur-sm z-20"
          onClick={() => {
            setShowOverlay(false);
            if (document.body.style.overflow !== "hidden") {
              document.body.style.overflow = "hidden";
            } else {
              document.body.style.overflow = "scroll";
            }
          }}
        ></div>
      )}
    </div>
  );
};

export default App;
