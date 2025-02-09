import { NavLink } from "react-router-dom";
import "../Styles.css";


const Navbar = () => {
  return (
    <nav className="navbar">
    {/* Logo on the left */}
    <div className="logo">HARI</div>

    {/* Navigation items on the right */}
    <div className="nav-items">
      <NavLink to="/" className="nav-item">Home</NavLink>
      <NavLink to="/about" className="nav-item">Project</NavLink>
      <NavLink to="/blog" className="nav-item">Blog</NavLink>

    </div>
  </nav>
  );
};

export default Navbar;
