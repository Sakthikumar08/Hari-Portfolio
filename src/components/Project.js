import React, { useState } from "react";
import "./ProjectPage.css";

const projects = [
  {
    title: "Bodhi Tutor App - Ignite learning Ignite success",
    image: require("../assets/bodhi.png"),
    description:
      "The Tutor App connects students and tutors seamlessly with an easy-to-use platform for scheduling and managing sessions. It supports academic subjects, skill-based learning, and test preparation with tailored solutions.",
    tech: ["Figma", "Framer"],
    link: "/creative",
  },
  {
    title: "IRCTC Platform: Simplifying Railway Travel in India",
    image: require("../assets/irctc.PNG"),
    description:
      "The IRCTC platform is designed as India’s official portal for train ticket booking, catering, and tourism. It offers PNR checks, train schedules, and meal pre-booking for seamless travel..",
    tech: ["Figma", "Framer"],
    link: "/IRCTC",
  },
  {
    title: "Share Ride App: Smarter, Greener, and Convenient Rides",
    image: require("../assets/shareride.avif"),
    description:
      "The Share Ride App connects travelers heading in the same direction, making commuting cost-effective and eco-friendly. It ensures easy and secure ride-sharing for work, college, or long-distance trips.",
    tech: ["Figma", "Framer"],
    link: "/shareride",
  },
  {
    title: "Advanced Personal Finance Management Application",
    image: require("../assets/pfma.avif"),
    description:
      "This app simplifies money management by offering budgeting, expense tracking, and financial goal-setting in one place. Its intuitive interface helps users monitor income, categorize spending, and make informed financial decisions.",
    tech: ["Figma", "Framer"],
    link: "/personal-fin-app",
  }
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
