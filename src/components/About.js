import React, { useState, useEffect } from "react";
import "./AboutPage.css";
import ParticlesBackground from "./ParticlesBackground"; // Import the particle component

const About = () => {
  const skills = [
    "UI/UX Design",
    "Mobile App Design",
    "User Research",
    "Interaction & Visual Design",
    "Wireframing",
    "Prototyping",
    "Adobe XD",
    "Sketch",
    "Figma",
    "HTML/CSS"
  ];

  const [showAll, setShowAll] = useState(false);
  const experiences = [
    {
      role: "UX / UI Designer",
      company: "INat Technologies Private Limited",
      duration: "Mar 2023 - Present",
    },
    {
      role: "UX / UI Designer",
      company: "Mphasis",
      duration: "Jan 2022 - Feb 2023",
    },
    {
      role: "User Interface Designer",
      company: "Ellipse Technologies Private Limited",
      duration: "Dec 2019 - Dec 2021",
    },
  ];

  const projects = [
    {
      title: "Tutor App: Empowering Learning, Anytime, Anywhere",
      description:
        "The Tutor App is a comprehensive platform designed to connect students and tutors seamlessly...",
      image: "https://framerusercontent.com/images/TCPeAZObpHshqcExOUJlnxgSM.png",
    },
    {
      title: "Share Ride App: Smarter, Greener, and Convenient Rides",
      description:
        "The Share Ride App is a user-friendly platform designed to connect people traveling...",
      image: "https://framerusercontent.com/images/ppXLZMuMRfFcDkaV7R6EEwYFtw.png",
    },
    {
      title: "IRCTC Platform: Simplifying Railway Travel in India",
      description:
        "The IRCTC (Indian Railway Catering and Tourism Corporation) platform is India's official gateway...",
      image: "https://framerusercontent.com/images/RiTU9qf3PRWgOcVHeGxgRtWvgLY.png",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 4000);
  
    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <div className="skills-container">
      {/* Background Particles */}
      <ParticlesBackground />

      {/* Download Resume Button */}
      <button className="download-btn" onClick={() => window.open("HARI BASKAR.pdf", "_blank")}>
        Download Resume
      </button>

      {/* Projects Section */}
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className={`project-card ${index === activeIndex ? "active" : "hidden"}`}>
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
            <img src={project.image} alt={project.title} className="project-image" />
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <h2 className="skills-title">Skills</h2>
      <div className="skills-list">
        {skills.slice(0, showAll ? skills.length : 10).map((skill, index) => (
          <div key={index} className="skill-tag">{skill}</div>
        ))}
        {!showAll && <button className="skill-tag more-btn" onClick={() => setShowAll(true)}>+ More</button>}
      </div>

      {/* Experience Section */}
      <div className="experience-section">
        <h2 className="section-title">Experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-role">{exp.role}</div>
            <div className="experience-company">{exp.company}</div>
            <div className="experience-duration">{exp.duration}</div>
          </div>
        ))}
      </div>

      {/* Thank You Section */}
      <div className="thank-you-container">
        <div className="thank-you-box">
          <h2>Thank you!</h2>
          <p>
            eMail to <br />
            <a href="mailto:haribaskarhb1994@gmail.com">haribaskarhb1994@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
