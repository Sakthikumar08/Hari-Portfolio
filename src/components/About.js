import React, { useState } from "react";

import "./AboutPage.css";


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

  ;
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
    window.open("/resume.pdf", "_blank");
  };
  
  const icons = [
    
    { src: "https://framerusercontent.com/images/CtawTrUQ7exjArnxRI2z0j5lipQ.png", alt: "Html" },
    { src: "https://framerusercontent.com/images/0ttqcWxFoLG4q71tGnY1jF6D3I.png", alt: "Adobe XD" },
    { src: "https://framerusercontent.com/images/8lvtN5VohbrIXBQfcwrGaZPFIXs.png", alt: "Adobe Illustrator" },
    { src: "https://framerusercontent.com/images/3udJkAAp1ehyY43IRAVyxValE9I.png", alt: "Adobe Photoshop" },
    { src: "https://framerusercontent.com/images/4S3jy7RUc36K4vCFKUPh2LY9qK0.png", alt: "Figma" },
    { src: "https://framerusercontent.com/images/l3L1wNlg26qsR2gchTV8sBvyOt4.png", alt: "CSS" },
  ];
  const frames = [
    {
      title: "Tutor App: Empowering Learning, Anytime, Anywhere",
      description:
        "The Tutor App is a comprehensive platform designed to connect students and tutors seamlessly. It offers a user-friendly interface for scheduling, attending, and managing tutoring sessions. Whether it's academic subjects, skill-based learning, or test preparation, the app provides tailored solutions to meet diverse learning needs.",
      image: "https://framerusercontent.com/images/TCPeAZObpHshqcExOUJlnxgSM.png",
    },
    {
      title: "Share Ride App: Smarter, Greener, and Convenient Rides",
      description:
        "The Share Ride App is a user-friendly platform designed to connect people traveling in the same direction, making commuting more affordable and eco-friendly. Whether you're heading to work, college, or a long-distance journey, this app makes ride-sharing seamless.",
      image: "https://framerusercontent.com/images/ppXLZMuMRfFcDkaV7R6EEwYFtw.png",
    },
    {
      title: "IRCTC Platform: Simplifying Railway Travel in India",
      description:
        "The IRCTC (Indian Railway Catering and Tourism Corporation) platform is India's official gateway for booking train tickets, catering services, and tourism packages. Designed to handle millions of users daily, it provides a seamless railway booking experience.",
      image: "https://framerusercontent.com/images/RiTU9qf3PRWgOcVHeGxgRtWvgLY.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % frames.length);
    }, 4000); // Change frame every 4 seconds

    return () => clearInterval(interval);
  }, [frames.length]);

  return (
    <div className="skills-container">
    




      {/* Skills Section */}
      <h2 className="skills-title">Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-tag">{skill}</div>
        ))}
       
      </div>

      {/* Experience Section */}
      <div className="experience-section">
        <h2 className="experience-title">Experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-role">{exp.role}</div>
            <div className="experience-company">{exp.company}</div>
            <div className="experience-duration">{exp.duration}</div>
          </div>
        ))}
      </div>
   <div className="frames-container">
      {frames.map((frame, index) => (
        <div
          key={index}
          className={`frame-card ${index === activeIndex ? "active" : "hidden"}`}
        >
          <div className="frame-content">
            <h2>{frame.title}</h2>
            <p>{frame.description}</p>
          </div>
          <img src={frame.image} alt={frame.title} className="frame-image" />
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
      <footer className="footer-container">
  <button className="download-btn" onClick={handleDownload}>
    Download Resume
  </button>
</footer>
    </div>
  );
};

export default About;
