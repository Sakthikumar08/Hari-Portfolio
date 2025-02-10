import React, { useEffect, useRef, useState } from "react";


import sharethnk from "../assets/bodhi46.png";
import shareride from "../assets/shareride.PNG"
import share from "../assets/shareride.avif";
import share1 from "../assets/shareride1.avif";
import share2 from "../assets/shareride2.avif";
import share3 from "../assets/shareride3.avif";



import "./CreativePage.css";

const Shareride = () => {
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
       
          <img src={shareride} alt="shareride" className="hero-image" style={{margin:"0 auto",marginBottom:"20px"}}/>
          
        
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 700 }}>
        Share Ride App: Smarter, Greener, and Convenient Rides
</h1>

        <p>
        The Share Ride App is a user-friendly platform designed to connect people traveling in the same direction, making commuting more affordable and eco-friendly. Whether you're heading to work, college, or a long-distance destination, this app helps you share rides easily and securely.
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
            The e-commerce site had a high bounce rate and low conversion rates due to poor navigation and a cluttered interface. Users found it difficult to find products, and the checkout process was cumbersome. Our challenge was to streamline the user journey, improve product discoverability, and simplify the checkout process to enhance user experience and increase sales.   
            </p>
           
          </div>

          <div ref={(el) => (sectionRefs.current["Possible Solutions"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-5 leading-tight">Possible Solutions</h2>
            <p className="content-p">
            The redesigned e-commerce site saw a 40% increase in conversion rates and a 50% reduction in bounce rates. The new intuitive navigation and clean interface improved product discoverability, leading to a 35% increase in average order value. Customer feedback was overwhelmingly positive, with satisfaction ratings rising from 3.8 to 4.7 stars.
            </p>
            <img 
  src={share1} 
  alt="shareride" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto",marginBottom:"20px" }} 
/>
<img 
  src={share2} 
  alt="shareride" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
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
  src={share3} 
  alt="shareride" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>
          </div>

          <div ref={(el) => (sectionRefs.current["Conclusion"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-5 leading-tight">Conclusion</h2>
         
            <p className="content-p">
            Revamping the e-commerce website proved to be a game-changer in enhancing user experience and driving sales. By simplifying the navigation and checkout process, we created a more enjoyable shopping experience that significantly boosted conversion rates and customer satisfaction. This project highlights the critical role of UX design in the success of e-commerce platforms.
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
            <li className={activeSection === "Problem Statement" ? "active" : ""} onClick={() => scrollToSection("Problem Statement")}>Problem Statement</li>
            <li className={activeSection === "Possible Solutions" ? "active" : ""} onClick={() => scrollToSection("Possible Solutions")}>Possible Solutions</li>
            <li className={activeSection === "Process" ? "active" : ""} onClick={() => scrollToSection("Process")}>Process</li>
            <li className={activeSection === "Conclusion" ? "active" : ""} onClick={() => scrollToSection("Conclusion")}>Conclusion</li>
            
          </ul>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Shareride;
