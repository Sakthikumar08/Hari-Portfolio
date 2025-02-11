import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Ensure this is linked

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">｛ HARI ｝</div>


      {/* Hamburger Menu */}
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* Navigation Links */}
      <ul className={`nav-items ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" className="nav-item" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/project" className="nav-item" onClick={() => setMenuOpen(false)}>Project</Link></li>
        <li><Link to="/blog" className="nav-item" onClick={() => setMenuOpen(false)}>Blog</Link></li>
        <li><Link to="/about" className="nav-item" onClick={() => setMenuOpen(false)}>About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
