import React, { useEffect, useRef, useState } from "react";


import sharethnk from "../assets/bodhi46.png";
import pfma from "../assets/pfma.avif"

import pfma1 from "../assets/pfma1.avif";
import pfma2 from "../assets/pfma2.avif";
import pfma3 from "../assets/pfma3.avif";
import pfma6 from "../assets/pfma6.jpg";



import "./CreativePage.css";

const Personalfin = () => {
  const [activeSection, setActiveSection] = useState("");
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      Object.keys(sectionRefs.current).forEach((id) => {
        const element = sectionRefs.current[id];
        if (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = sectionRefs.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="creative-page">
      <div className="div1">
       
          <img src={pfma} alt="pfma" className="hero-image" style={{margin:"0 auto",marginBottom:"20px"}}/>
          
        
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 700 }}>
        Personal Finance Management Application: Take Control of Your Finances
</h1>

        <p>
        This app is designed to simplify managing your money by providing an all-in-one solution for budgeting, tracking expenses, and achieving financial goals. With an intuitive interface, it empowers users to monitor their income, categorize spending, and make informed financial decisions.
        </p>
        <div className="stats-links">
  <span>1406 views -</span>
  <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">
    <i className="fa-brands fa-figma"></i> Figma -
  </a>
  <a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer">
    <i className="fa-brands fa-behance"></i> Behance
  </a>
</div>

        
      
      </div>

      <div className="content-wrapper">
        <div className="div2">
          <div ref={(el) => (sectionRefs.current["Problem Statement"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-5 leading-tight">Problem Statement</h2>
            <p className="content-p">
            The existing intranet was outdated and difficult to navigate, leading to low engagement and underutilization. Employees struggled to find relevant information, and the lack of interactive features hindered collaboration. The challenge was to create a more intuitive interface, improve content organization, and incorporate interactive elements to foster better communication and engagement.
            </p>
           
          </div>

          <div ref={(el) => (sectionRefs.current["Results"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-5 leading-tight">Results</h2>
            <p className="content-p">
            Following the redesign, employee engagement with the intranet increased by 45%, and the time spent on the platform rose by 30%. The new interface and improved content organization made it easier for employees to find information and collaborate. Feedback from employees was highly positive, with satisfaction ratings increasing from 3.5 to 4.6 stars.
            </p>
            <img 
  src={pfma} 
  alt="pfma" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto",marginBottom:"20px" }} 
/>

          </div>
          <div ref={(el) => (sectionRefs.current["Process"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-5 leading-tight">Process</h2>
            
            <ul>
                <li>Research & Analysis: We conducted user interviews, surveys, and analyzed in-app analytics to understand the pain points and user needs. We also studied competitor apps and industry trends to gather insights</li>
                <li>Information Architecture: Based on the research findings, we restructured the app's navigation and content, prioritizing features and information according to user needs.</li>
                <li>Wireframing & Prototyping: We designed low-fidelity wireframes to visualize the new layout and navigation, iteratively refining them based on user feedback. Afterward, we built a high-fidelity, interactive prototype to test the design. </li>
                <li>Usability Testing: We conducted usability tests with a diverse group of users to validate the design and identify areas for improvement. Based on the feedback, we made necessary adjustments to the design.</li>
                <li>Visual Design & Style Guide: We developed a cohesive visual language, including color schemes, typography, and iconography, ensuring consistency throughout the app. We also created a style guide to maintain design consistency in future updates.</li>
                
            </ul>
            <img 
  src={pfma6} 
  alt="pfma" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>
          </div>

          <div ref={(el) => (sectionRefs.current["Conclusion"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-5 leading-tight">Conclusion</h2>
         
            <p className="content-p">
            Optimizing the corporate intranet significantly improved usability and employee engagement. By creating a more intuitive and interactive platform, we enhanced internal communication and collaboration, leading to a more connected and productive workforce. This project highlights the importance of user-centered design in improving organizational tools and employee satisfaction.
            </p>    
            
          </div>

         

          <img 
  src={sharethnk} 
  alt="shareride" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>
          
        </div>

        <div className="div3">
        <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Table of Contents</h3>

          <h3>
          <ul>
            <li className={activeSection === "Challenge" ? "active" : ""} onClick={() => scrollToSection("Challenge")}>Challenge</li>
            <li className={activeSection === "Results" ? "active" : ""} onClick={() => scrollToSection("Results")}>Results</li>
            <li className={activeSection === "Process" ? "active" : ""} onClick={() => scrollToSection("Process")}>Process</li>
            <li className={activeSection === "Conclusion" ? "active" : ""} onClick={() => scrollToSection("Conclusion")}>Conclusion</li>
            
          </ul>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Personalfin;
