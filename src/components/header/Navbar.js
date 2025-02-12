import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Ensure the CSS file is properly linked

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when clicking a link
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">｛ HARI ｝</div>

      {/* Hamburger Menu Button */}
      <button className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
        ☰
      </button>

      {/* Navigation Links */}
      <ul className={`nav-items ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" className="nav-item" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/project" className="nav-item" onClick={closeMenu}>Project</Link></li>
        <li><Link to="/blog" className="nav-item" onClick={closeMenu}>Blog</Link></li>
        <li><Link to="/about" className="nav-item" onClick={closeMenu}>About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
