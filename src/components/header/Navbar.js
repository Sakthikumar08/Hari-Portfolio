import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Ensure the CSS file is properly linked

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar1">
      {/* Logo */}
      <div className="logo1">｛ HARI ｝</div>

      {/* Hamburger / Close Button */}
      <button className="hamburger1" onClick={toggleMenu}>
        {menuOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
      </button>

      {/* Navigation Menu */}
      <ul className={`nav-items1 ${menuOpen ? "activenav1" : ""}`}>
        {/* Close Button inside Navbar */}
        <li className="close-btn1">
          <button onClick={toggleMenu}><i className="fa-solid fa-xmark"></i></button>
        </li>
        <li><Link to="/" className="nav-item1" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/project" className="nav-item1" onClick={toggleMenu}>Project</Link></li>
        <li><Link to="/blog" className="nav-item1" onClick={toggleMenu}>Blog</Link></li>
        <li><Link to="/about" className="nav-item1" onClick={toggleMenu}>About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
