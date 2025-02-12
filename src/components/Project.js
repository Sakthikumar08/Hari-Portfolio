import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ProjectPage.css";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Bodhi Tutor App - Ignite learning Ignite success",
    image: require("../assets/bodhi.png"),
    description:
      "The Tutor App connects students and tutors seamlessly with an easy-to-use platform for scheduling and managing sessions. It supports academic subjects, skill-based learning, and test preparation with tailored solutions.",
    tech: ["Figma"],
    link: "/creative",
  },
  {
    title: "IRCTC Platform: Simplifying Railway Travel in India",
    image: require("../assets/irctc.PNG"),
    description:
      "The IRCTC platform is designed as India’s official portal for train ticket booking, catering, and tourism. It offers PNR checks, train schedules, and meal pre-booking for seamless travel..",
    tech: ["Figma"],
    link: "/IRCTC",
  },
  {
    title: "Share Ride App: Smarter, Greener, and Convenient Rides",
    image: require("../assets/shareride.avif"),
    description:
      "The Share Ride App connects travelers heading in the same direction, making commuting cost-effective and eco-friendly. It ensures easy and secure ride-sharing for work, college, or long-distance trips.",
    tech: ["Figma"],
    link: "/shareride",
  },
  {
    title: "Advanced Personal Finance Management Application",
    image: require("../assets/pfma.avif"),
    description:
      "This app simplifies money management by offering budgeting, expense tracking, and financial goal-setting in one place. Its intuitive interface helps users monitor income, categorize spending, and make informed financial decisions.",
    tech: ["Figma"],
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
        <motion.h2
          className="projects-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Projects
        </motion.h2>
        <motion.p
          className="projects-subtitle"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          I love bringing ideas to life through design and creativity. Explore my archive of projects, where I experiment, and refine my craft.
        </motion.p>

        {/* Search Bar with Icon */}
        <motion.div
          className="search-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <input
            type="text"
            className="project-search"
            placeholder="Search projects"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </motion.div>
      </div>

      {/* Apply class if only one project is displayed */}
      
      <motion.div
        className={`projects-grid ${filteredProjects.length === 1 ? "single-result" : ""}`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <Link to={project.link} className="project-card-link">
            <motion.div
              key={index}
              className="project-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <a href={project.link} className="project-link-icon" rel="noopener noreferrer">
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
            </motion.div>
            </Link>
          ))
        ) : (
          <motion.p
            className="no-results"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            No projects found.
          </motion.p>
        )}
      </motion.div>
      

      {/* Footer Section */}
      <motion.footer
        className="projects-footer"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Designed and Developed by <span className="highlight-project">Hari Baskar</span>.
      </motion.footer>
    </div>
  );
};

export default Project;