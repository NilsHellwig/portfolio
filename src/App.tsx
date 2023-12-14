import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

const App: React.FC = () => {
  return (
    <Router>
      <nav>Hallo!</nav>
      <Routes>
        <Route path="portfolio/" element={<Home />} />
        <Route path="portfolio/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
