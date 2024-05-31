import React, { ReactNode, useState } from "react";
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
    <div>
      <Router>
        <Routes>
          <Route
            path="portfolio/"
            element={
              <StandardUI transparentBackground={true}>
                <Home />
              </StandardUI>
            }
          />
          <Route
            path="portfolio/about"
            element={
              <StandardUI transparentBackground={false}>
                <About />
              </StandardUI>
            }
          />
          <Route
            path="portfolio/blog/*"
            element={
              <BlogUI>
                <Blog />
              </BlogUI>
            }
          />
          <Route
            path="portfolio/lectures"
            element={
              <StandardUI transparentBackground={false}>
                <Lectures />
              </StandardUI>
            }
          />
          <Route
            path="portfolio/projects/:projectName?"
            element={
              <StandardUI transparentBackground={false}>
                <Projects showOverlay={showOverlay} setShowOverlay={setShowOverlay} />
              </StandardUI>
            }
          />
          <Route
            path="portfolio/publications"
            element={
              <StandardUI transparentBackground={false}>
                <Publications />
              </StandardUI>
            }
          />
          <Route
            path="portfolio/skills"
            element={
              <StandardUI transparentBackground={false}>
                <Skills />
              </StandardUI>
            }
          />
        </Routes>
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

const StandardUI: React.FC<{ children: ReactNode; transparentBackground: boolean }> = ({ children, transparentBackground }) => {
  return (
    <div className="page-outer" style={{ fontFamily: "Inter" }}>
      <div>
        <div className={`fixed w-screen ${!transparentBackground ? "bg-zinc-50" : ""} bg-opacity-90 backdrop-blur-sm pt-2 z-20`}>
          <header className="max-w-[800px] w-[100%] mx-auto px-4 mt-0">
            <NavBar />
            <PageSelector />
          </header>
        </div>
        <div className="page-inner max-w-[800px] w-[100%] mx-auto p-4 py-40">{children}</div>
      </div>
    </div>
  );
};

const BlogUI: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="">{children}</div>;
};

export default App;
