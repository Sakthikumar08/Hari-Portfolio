import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./AboutPage.css";
import IconsSection from "./IconsSection";
import ReferenceComponent from "./ReferenceComponent";
import pfma from "../assets/pfma.avif";

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
    "HTML/CSS",
    "Workshops",
    "Leadership",
    "Mentoring",
    "Design Sprint",
    "No-Code",
    "Usability Testing",
    "User Testing",
    "Front-End Development",
  ];

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

  const handleDownload = () => {
    window.open("https://drive.google.com/file/d/1-k1eAakCr_6EJTQHYoLJEfgyXiur8GcN/view?usp=drive_link", "_blank");
  };

  const icons = [
    { src: "https://framerusercontent.com/images/CtawTrUQ7exjArnxRI2z0j5lipQ.png", alt: "Html" },
    { src: "https://framerusercontent.com/images/0ttqcWxFoLG4q71tGnY1jF6D3I.png", alt: "Adobe XD" },
    { src: "https://framerusercontent.com/images/8lvtN5VohbrIXBQfcwrGaZPFIXs.png", alt: "Adobe Illustrator" },
    { src: "https://framerusercontent.com/images/3udJkAAp1ehyY43IRAVyxValE9I.png", alt: "Adobe Photoshop" },
    { src: "https://framerusercontent.com/images/4S3jy7RUc36K4vCFKUPh2LY9qK0.png", alt: "Figma" },
    { src: "https://framerusercontent.com/images/l3L1wNlg26qsR2gchTV8sBvyOt4.png", alt: "CSS" },
  ];

  const projectFrames = [
    {
      title: "Tutor App: Empowering Learning, Anytime, Anywhere",
      description:
        "The Tutor App is a comprehensive platform designed to connect students and tutors seamlessly. It offers a user-friendly interface for scheduling, attending, and managing tutoring sessions. Whether it's academic subjects, skill-based learning, or test preparation.",
      image: "https://framerusercontent.com/images/TCPeAZObpHshqcExOUJlnxgSM.png",
      link: "/creative",
    },
    {
      title: "Share Ride App: Smarter, Greener, and Convenient Rides",
      description:
        "The Share Ride App is a user-friendly platform designed to connect people traveling in the same direction, making commuting more affordable and eco-friendly. Whether you're heading to work, college, or a long-distance journey, this app makes ride-sharing seamless.",
      image: "https://framerusercontent.com/images/ppXLZMuMRfFcDkaV7R6EEwYFtw.png",
      link: "/shareride",
    },
    {
      title: "IRCTC Platform: Simplifying Railway Travel in India",
      description:
        "The IRCTC (Indian Railway Catering and Tourism Corporation) platform is India's official gateway for booking train tickets, catering services, and tourism packages. Designed to handle millions of users daily, it provides a seamless railway booking experience.",
      image: "https://framerusercontent.com/images/RiTU9qf3PRWgOcVHeGxgRtWvgLY.png",
      link: "/IRCTC",
    },
    {
      title: "Personal Finance Management Application",
      description:
        "This app simplifies money management by offering budgeting, expense tracking, and financial goal-setting in one place. Its intuitive interface helps users monitor income, categorize spending, and make informed financial decisions.",
      image: pfma,
      link: "/Personal-fin-app",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projectFrames.length);
    }, 4000); // Change project every 4 seconds

    return () => clearInterval(interval);
  }, [projectFrames.length]);

  const handleProjectClick = (url) => {
    window.open(url, "_blank"); // Open the link in a new tab
  };

  return (
    <div className="skills-container">
      <ReferenceComponent />
      <IconsSection />

      {/* Skills Section */}
      <motion.h2
        className="skills-title"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Skills
      </motion.h2>
      <motion.div
        className="skills-list"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-tag"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>

      {/* Experience Section */}
      <motion.div
        className="experience-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <h2 className="experience-title">Experience</h2>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="experience-item"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="experience-role">{exp.role}</div>
            <div className="experience-company">{exp.company}</div>
            <div className="experience-duration">{exp.duration}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Projects Section */}
      <motion.h2
        className="frame-title"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        Projects
      </motion.h2>
      <motion.div
        className="frame-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <motion.div
          className="frame-card"
          onClick={() => handleProjectClick(projectFrames[currentIndex].link)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="frame-content">
            <h1>{projectFrames[currentIndex].title}</h1>
            <p>{projectFrames[currentIndex].description}</p>
          </div>
          <img
            src={projectFrames[currentIndex].image}
            alt={projectFrames[currentIndex].title}
            className="frame-image"
          />
        </motion.div>
      </motion.div>

      {/* Thank You Section */}
      <motion.div
        className="thank-you-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="thank-you-box">
          <h2>Thank you!</h2>
          <p>
            eMail to <br />
            <a href="mailto:haribaskarhb1994@gmail.com">haribaskarhb1994@gmail.com</a>
          </p>
        </div>
      </motion.div>

      {/* Footer Section */}
      <motion.footer
        className="footer-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <button className="download-btn" onClick={handleDownload}>
          Download Resume
        </button>
      </motion.footer>
    </div>
  );
};

export default About;