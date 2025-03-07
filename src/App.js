import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import "./App.css";

const App = () => {
  const [activePage, setActivePage] = useState("Home");

  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
        <div className="logo">
        <img src="tr.png" alt="Logo" />
      </div>
          <ul className="nav-links">
            <li><Link to="/" onClick={() => setActivePage("Home")} className={activePage === "Home" ? "active" : ""}>Home</Link></li>
            <li><Link to="/about" onClick={() => setActivePage("About")} className={activePage === "About" ? "active" : ""}>About</Link></li>
            <li><Link to="/skills" onClick={() => setActivePage("Skills")} className={activePage === "Skills" ? "active" : ""}>Skills</Link></li>
            <li><Link to="/services" onClick={() => setActivePage("Services")} className={activePage === "Services" ? "active" : ""}>Services</Link></li>
            <li><Link to="/portfolio" onClick={() => setActivePage("Portfolio")} className={activePage === "Portfolio" ? "active" : ""}>Portfolio</Link></li>
            <li><Link to="/contact" onClick={() => setActivePage("Contact")} className={activePage === "Contact" ? "active" : ""}>Contact</Link></li>
          </ul>
        </nav>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.div>
      </div>
    </Router>
  );
};

export default App;
