import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <h1 className="text-3xl font-bold underline">Hallo!</h1>
      <Routes>
        <Route path="portfolio/" element={<Home />} />
        <Route path="portfolio/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
