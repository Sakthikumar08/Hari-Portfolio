import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import $ from 'jquery';  // Import jQuery
import 'jquery.ripples'; // Import the ripples plugin
import React, { useEffect } from "react";
import Navbar from "./components/header/Navbar";
import Home from "./components/Home";
import Project from "./components/Project";
import Blog from "./components/Blog";
import Creative from "./components/Creative";
import About from "./components/About";
import Irctc from "./components/Irctc";
import Shareride from "./components/Shareride";
import Personalfin from "./components/Personalfin";
import Blog1 from "./components/Blog1";
import Blog2 from "./components/Blog2";
import Blog3 from "./components/Blog3";
import Blog4 from "./components/Blog4";

function App() {
  useEffect(() => {
    // Initialize the ripples effect with brighter settings
    $('body').ripples({
      resolution: 512,
      dropRadius: 30, // Increase drop radius for larger ripples
      perturbance: 0.08, // Increase perturbance for more pronounced ripples
      interactive: true, // Allow interaction (e.g., mouse clicks)
      // Customize ripple color (optional)
      // You can use an RGBA color to make the ripples brighter
      // For example, a light blue or white ripple:
      // rippleColor: 'rgba(255, 255, 255, 0.3)',
    });

    // Cleanup function to destroy the ripples effect when the component unmounts
    return () => {
      $('body').ripples('destroy');
    };
  }, []);

  return (
    <>
      <Router>
        <div className="app-container">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/project" element={<Project />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/creative" element={<Creative />} />
              <Route path="/IRCTC" element={<Irctc />} />
              <Route path="/shareride" element={<Shareride />} />
              <Route path="/Personal-fin-app" element={<Personalfin />} />
              <Route path="/blog1" element={<Blog1 />} />
              <Route path="/blog2" element={<Blog2 />} />
              <Route path="/blog3" element={<Blog3 />} />
              <Route path="/blog4" element={<Blog4 />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;