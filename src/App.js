import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./components/header/Navbar";
import Home from "./components/Home";
import Project from "./components/Project";
import Blog from "./components/Blog";
import Creative from "./components/Creative";
import About from "./components/About";
function App() {
  return (
    <>
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/creative" element={<Creative />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
    </>
  );
}

export default App;
