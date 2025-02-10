import React, { useState } from "react";
import "./ProjectPage.css";

const projects = [
  {
    title: "Bodhi - Ignite learning Ignite success",
    image: require("../assets/bodhi.png"),
    description:
      "A web app to analyze whether an opinion on a specific topic is positive or negative based on recent tweets using Natural Language Processing.",
    tech: ["Figma", "Framer"],
    link: "/creative",
  },
  {
    title: "IRCTC Platform",
    image: require("../assets/irctc.PNG"),
    description:
      "Review of the app to highlight the mismatches and present probable solutions, along with new features.",
    tech: ["Figma", "Framer"],
    link: "/IRCTC",
  },
  {
    title: "Spotlight on Sports",
    image: require("../assets/bodhi.png"),
    description:
      "A sports portal featuring player stats, post-match results, and scorecards for various college sports.",
    tech: ["Figma", "Framer"],
    link: "/sports",
  },
];

const Project = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter projects based on search query
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="projects-container">
      <div className="Project-main">
      <h2 className="projects-title">Projects</h2>
      <p className="projects-subtitle">
        I love building projects and practicing my engineering skills. Here's an archive of things that I've worked on.
      </p>

      {/* Search Bar with Icon */}
      <div className="search-container">
        <input
          type="text"
          className="project-search"
          placeholder="Search projects"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
      </div>
      </div>

      {/* Apply class if only one project is displayed */}
      <div className={`projects-grid ${filteredProjects.length === 1 ? "single-result" : ""}`}>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <a href={project.link} className="project-link-icon" target="_blank" rel="noopener noreferrer">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
              <div className="project-tech-stack">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`project-tech ${tech.toLowerCase()}`} // Dynamic class for styling
                  >
                    {tech === "Figma" && <i className="fa-brands fa-figma"></i>}
                    {tech === "Framer" && <i className="fa-brands fa-react"></i>} {/* Using React icon */}
                    {tech}
                  </span>
                ))}
              </div>
              <p className="project-description">{project.description}</p>
            </div>
          ))
        ) : (
          <p className="no-results">No projects found.</p>
        )}
      </div>

      {/* Footer Section */}
      <footer className="projects-footer">
        Designed and Developed by <span className="highlight-project">Hari Baskar</span>.
        <br />
        Built with <span className="highlight-project">Next.js</span> &{" "}
        <span className="highlight-project">Chakra UI</span>. Hosted on{" "}
        <span className="highlight-project">Vercel</span>.
      </footer>
    </div>
  );
};

export default Project;
