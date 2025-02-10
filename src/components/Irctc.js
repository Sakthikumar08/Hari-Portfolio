import React, { useEffect, useRef, useState } from "react";
import bodhi1 from "../assets/irctc.PNG";
import bodhi2 from "../assets/irctc2.PNG";
import bodhi4 from "../assets/irctc3.PNG";
import irctc4 from "../assets/irctc4.PNG";
import irctc5 from "../assets/irctc5.PNG";
import irctc6 from "../assets/irctc6.PNG";
import bodhi5 from "../assets/irctc7.PNG";
import irctc8 from "../assets/irctc8.PNG";
import irctc9 from "../assets/irctc9.PNG";
import irctc10 from "../assets/irctc10.PNG";
import irctc11 from "../assets/irctc11.PNG";
import irctc12 from "../assets/irctc12.PNG";
import irctc13 from "../assets/irctc13.PNG";
import irctc14 from "../assets/irctc14.PNG";
import irctc15 from "../assets/irctc15.PNG";
import irctc16 from "../assets/irctc16.PNG";
import irctc17 from "../assets/irctc17.PNG";
import irctc18 from "../assets/irctc18.PNG";
import irctc19 from "../assets/irctc19.PNG";
import irctc20 from "../assets/irctc20.PNG";
import irctc21 from "../assets/irctc21.PNG";
import bodhi11 from "../assets/bodhi11.png";
import bodhi12 from "../assets/bodhi12.png";
import bodhi13 from "../assets/bodhi13.png";
import bodhi14 from "../assets/bodhi14.png";
import bodhi15 from "../assets/bodhi15.png";
import bodhi16 from "../assets/bodhi16.png";
import bodhi17 from "../assets/bodhi17.png";
import bodhi18 from "../assets/bodhi18.png";
import bodhi19 from "../assets/bodhi19.png";
import bodhi20 from "../assets/bodhi20.png";
import bodhi21 from "../assets/bodhi21.png";
import bodhi22 from "../assets/bodhi22.png";
import bodhi23 from "../assets/bodhi23.png";
import bodhi24 from "../assets/bodhi24.png";
import bodhi25 from "../assets/bodhi25.png";
import bodhi26 from "../assets/bodhi26.png";
import bodhi27 from "../assets/bodhi27.png";
import bodhi28 from "../assets/bodhi28.png";
import bodhi29 from "../assets/bodhi29.png";
import bodhi30 from "../assets/bodhi30.png";
import bodhi31 from "../assets/bodhi31.png";
import bodhi32 from "../assets/bodhi32.png";
import bodhi33 from "../assets/bodhi33.png";
import bodhi34 from "../assets/bodhi34.png";
import bodhi35 from "../assets/bodhi35.png";
import bodhi36 from "../assets/bodhi36.png";
import bodhi37 from "../assets/bodhi37.png";
import bodhi38 from "../assets/bodhi38.png";
import bodhi39 from "../assets/bodhi39.png";
import bodhi40 from "../assets/bodhi40.png";
import bodhi41 from "../assets/bodhi41.png";
import bodhi42 from "../assets/bodhi42.png"; 
import bodhi43 from "../assets/bodhi43.png";
import bodhi44 from "../assets/bodhi44.png";  
import bodhi45 from "../assets/bodhi45.png";
import bodhi46 from "../assets/bodhi46.png";
import "./CreativePage.css";

const Irctc = () => {
  const [activeSection, setActiveSection] = useState("");
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
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
        <div className="imgdiv">
          <img src={bodhi1} alt="bodhi" className="hero-image" />
          <img src={bodhi2} alt="bodhi" className="hero-image" />
        </div>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 700 }}>
        IRCTC Platform: Simplifying Railway Travel in India
</h1>

        <p>
        The IRCTC (Indian Railway Catering and Tourism Corporation) platform is India’s official gateway for booking train tickets, catering services, and tourism packages.Designed to handle millions of users daily, it provides features like ticket booking, PNR status checks, train schedules, and meal pre-booking, making railway travel more convenient and accessible.
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

          <img 
            src={bodhi4} 
            alt="bodhi" 
            className="hero-image" 
            style={{ display: "block", margin: "0 auto" }} 
          />
          <p style={{ marginTop: '18px' }}>
          Review of the app to highlight the mismatches and present probable solutions, along with new features.
          </p>
      
      </div>

      <div className="content-wrapper">
        <div className="div2">
          <div ref={(el) => (sectionRefs.current["What motivated me to began?"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-2 leading-tight">What motivated me to began?</h2>
            <p className="content-p">
            The motivation for initiating a heuristic evaluation and redesign of the IRCTC websites
stems from recognition of usability challenges and inefficiencies. Identifying
issues such as complex navigation, slow performance, and potential user
experience obstacles understood the need for improvement. The goal is to
enhance the overall user interface, streamline the ticket booking process, and
address existing usability concerns. This proactive approach aims to create a
more user-friendly, efficient, and accessible platform for users engaging
with the IRCTC websites.     
            </p>
            <img 
  src={irctc4} 
  alt="bodhi" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>
          </div>

          <div ref={(el) => (sectionRefs.current["Problem Statement"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-2 leading-tight">Problem Statement</h2>
            <p className="content-p">
            The IRCTC Website currently faces several usability issues that hinder user
experience and satisfaction. Users encounter confusion due to inconsistent
design elements, such as the placements of features and the absence of 
proper categorization. Additionally, the unavailability of an SOS feature 
could be a notable gap in ensuring the well-being and prompt support for 
users. Consideration should be given to incorporating such features to
enhance the overall safety measures of the IRCTC website. 
            </p>
            <img 
  src={irctc5} 
  alt="bodhi" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>

          </div>
          <div ref={(el) => (sectionRefs.current["Design Thinking Process"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-2 leading-tight">Design Thinking Process</h2>
            
            <img 
  src={irctc6} 
  alt="bodhi" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>
          </div>

          <div ref={(el) => (sectionRefs.current["Heuristic Evaluation"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-2 leading-tight">Heuristic Evaluation</h2>
            <h3>Severity Levels</h3>
                <img 
                src={bodhi5} 
                alt="bodhi5" 
                className="hero-image" 
                style={{ display: "block", margin: "0 auto" }} 
                />
            <h3>Principle :</h3>
            <h3>Visibility of system status</h3>
            <p className="content-p">
            “The system should keep the user updated on the status
            of their actions.”
            </p>    
            <img 
  src={irctc8} 
  alt="bodhi6" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>

            <h3>Match between system and real world</h3>
            <p className="content-p">
            “The system should speak the user’s language, using, phrases,
and concepts that are familiar to the user rather than
system-oriented terms.”
            </p>    
            <img 
  src={irctc9} 
  alt="bodhi6" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>

           
            <h3>User control and freedom</h3>
            <p className="content-p">
            “System’s interface design allows users to easily undo or correct their 
actions, navigate the system without feeling constrained or trapped,
and have control over the system’s
behavior”.
            </p>    
            <img 
  src={irctc10} 
  alt="IRCTC" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>


            <h3>Error Prevention</h3>
            <p className="content-p">
            “Designing user interfaces that anticipate and minimize potential errors
such as by adding warning messages or constraints to prevent users
from taking actions that could lead to errors”
            </p>    
            <img 
  src={irctc11} 
  alt="IRCTC" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>


            <h3>Help user recognize, diagnose and recover from errors.</h3>
            <p className="content-p">
            “Error messages should be expressed in plain language (no codes),
precisely indicate the problem, and constructively suggest a solution.
when there is an error you should not panic user, you need to help
them recover by suggesting a 
solution.”
            </p>    
            <img 
  src={irctc12} 
  alt="IRCTC"  
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>


            <h3>Consistency and Standards</h3>
            <p className="content-p">
            “User should not have to wonder whether different words, situations
            or actions mean the same thing. Follow platform conventions.”
            </p>    
            <img 
  src={irctc13} 
  alt="IRCTC" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>


            <h3>Reorganization rather than recall</h3>
            <p className="content-p">
            “Minimize the user’s memory load by making objects, actions and 
options visible the user should not have to remember information
from one part to the dialogue to the another. Instruction's for the
users of the system should be visible or easy retrievable.”
            </p>    
            <img 
  src={irctc14} 
  alt="IRCTC" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>


            <h3>Flexibility and Efficiency of use</h3>
            <p className="content-p">
            “Make your design adaptable to a variety of situations, making it
            easier for both novice and expert users to use.”
            </p>    
            <img 
  src={irctc15} 
  alt="IRCTC" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>


            <h3>Aesthetic and minimalist design</h3>
            <p className="content-p">
            “Dialogues should not contain information which is irrelevant or rarely
needed. Every extra unit of information in a dialogue competes with
the relevant units of information and diminishes their relative
visibility.”  
            </p>    
            <img 
  src={irctc16} 
  alt="IRCTC" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>


            <h3>Help and Documentation</h3>
            <p className="content-p">
            “Help should be easily accessible and include all relevant data that
            the user may require while using the system.”
            </p>    
            <img 
  src={irctc17} 
  alt="IRCTC" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>
          </div>

          <div ref={(el) => (sectionRefs.current["Solution Statement"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-2 leading-tight">Solution Statement</h2>
            <p className="content-p">
            Based on thr heuristic evaluation conducted, the following solutions are proposed to address
            the identified issues and enhance the user experience of the IRCTC web application. 
            </p>  
            <h3>1.Improve Consistency and Standards:</h3>
            <ul>
                <li>Streamline the layout by redesign the visual clutter and removing unnecessary
    elements and choose a limited set of fonts and maintain consistency in their
    usage across the website.</li>
                <li>Consider a minimalist approach, ensuring that advertisements enhance, rather
                than detract from, the overall user experience.
                </li>
                <li>Make the icons in uniform design to improve consistency and reduce user
                confusion. </li>
            </ul>
            <h3>2. Enhance User Experience:</h3>
            <ul>
                <li>Provide error messages that are clear, specific, and describe the issue in simple
    terminology. Avoid generic messages and offer guidance on how to resolve or
    navigate away from the errors.</li>
                <li>Add hover effects for clarity on clickable items and include dropdown symbols
                to enhance discoverability on the IRCTC website.
                </li>
                
            </ul>
            <h3>3.Optiimizing Navigation:</h3>
            <ul>
                <li>Ensure that the icon is clickable and leads user back to the homepage and
                maintain consistency in navigation elements across the website.</li>
            </ul>
            <h3>4.Enhacing Travel Choices:</h3>
            <ul>
                <li>Recommend adding a feature that allows users to book round-trip journeys in a
                single transaction for added convenience.</li>
            </ul>
            <h3>5.Seamless Booking Experience:</h3>
            <ul>
                <li>Suggest including filter to help users easily find and select trains with confirmed
                seat availability, improving the overall booking experience. </li>
            </ul>


          </div>

          <div ref={(el) => (sectionRefs.current["Design Timeline (19-01-2024 to 28-01-2024)"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-2 leading-tight">Design Timeline (19-01-2024 to 28-01-2024)</h2>
       
            <img 
  src={irctc18} 
  alt="irctc" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>

          </div>
          <div ref={(el) => (sectionRefs.current["User Research"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-2 leading-tight">User Research</h2>
            <p className="content-p">
            To understand user needs and preferences, I will conduct user research using guerilla research
and secondary research methods. This will involve gathering real-world feedback from users
and utilizing existing research and data sources. By combining these approaches, I aim to gain
valuable insights that will inform the design and development of the IRCTC web application.  
            </p>  
       
          </div>

          <div ref={(el) => (sectionRefs.current["Target Audience"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-2 leading-tight">Target Audience</h2>
       <ul>
        <li>The target audience for the IRCTC website primely includes:</li>
        <li>
1. Train Travelers: Individuals who intend to book train tickets
check train schedules, and manage their reservations.</li>
<li>2.Tourists: Travelers looking for information on tourist trains,
holiday packages, and travel-related services.</li>
<li>3.Commuters: Daily commuters who use trains for regular
transportation and need to check schedules, availability,
and book tickets.</li>
<li>4.Business Travelers: Individuals travelling for work purposes
who rely on train services for their journeys.</li>
<li>5.Event Attendees: People attending events, conferences, or
gatherings that involve train travel.</li>
<li>6.Tourism Enthusiasts: Individuals interested in exploring and
booking package tours, such as those offered by IRCTC tourism.</li>
<li>7.Online Service Users: Users engaging with the IRCTC website
for various online services like </li>
       </ul>
       <img 
  src={irctc19} 
  alt="irctc" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto", marginBottom: "20px" }} 
/>


          </div>

          <div ref={(el) => (sectionRefs.current["Guerrilla Research"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-2 leading-tight">Guerrilla Research</h2>
            <p className="content-p">
            During my guerrilla research conducted at a Chennai central railway station, I engaged with 12
individuals within a span of 1 hour. Out of those, 5 individuals were active users of the IRCTC
website. Among them 3 were Tourist aged between 25 to 35 years. Additionally, 2 individuals
are Business travelers. I asked them set of 5 questions to gather their insights:  
            </p>  
            <ul>
                <li>1.Can you tell me what you’re trying to do on the website?</li>
                <li>2.What challenge or difficulties are you facing?</li>
                <li>3.Is there anything you find confusing or frustrating?</li>
                <li>4.Are there any specific features or functionalities that you find confusing or unclear within
                the app? </li>
                <li>5.How satisfied are you with the overall user interface and design of the IRCTC website?</li>
            </ul>
       
            
       
            <img 
  src={irctc20} 
  alt="irctc" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>


          </div>

          <div ref={(el) => (sectionRefs.current["Google Playstore Reviews "] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-2 leading-tight">Google Playstore Reviews </h2>

            
       
            <img 
  src={irctc21} 
  alt="irctc" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>




</div>
<div ref={(el) => (sectionRefs.current["Information Architecture"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-2 leading-tight">Information Architecture</h2>
       
            <img 
  src={bodhi22} 
  alt="bodhi22" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>

          
          </div>

          <div ref={(el) => (sectionRefs.current["User Flow"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-2 leading-tight">User Flow</h2>
            <h3>Hire a tutor</h3>
       
            <img 
  src={bodhi23} 
  alt="bodhi23" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>

          
          </div>

          <div ref={(el) => (sectionRefs.current["Task Flow"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-2 leading-tight">Task Flow</h2>
            <h3>To Track Student Progress</h3>
       
            <img 
  src={bodhi24} 
  alt="bodhi24" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>

          
          </div>

          <div ref={(el) => (sectionRefs.current["Low Fidelity WireFrame"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-2 leading-tight">Low Fidelity WireFrame</h2>
          
       
            <img 
  src={bodhi25} 
  alt="bodhi25" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>

          
          </div>

          <div ref={(el) => (sectionRefs.current["Style Guide"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-2 leading-tight">Style Guide</h2>
          
       
            <img 
  src={bodhi26} 
  alt="bodhi26" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>

          
          </div>

          <div ref={(el) => (sectionRefs.current["Medium Fidelity WireFrame"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-2 leading-tight">Medium Fidelity WireFrame</h2>
          
       
            <img 
  src={bodhi27} 
  alt="bodhi27" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>

          
          </div>

          <div ref={(el) => (sectionRefs.current["Usability Testing Result"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-2 leading-tight">Usability Testing Result</h2>
          
       
            <img 
  src={bodhi28} 
  alt="bodhi28" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" , marginBottom: "20px"}} 
/>
<img 
  src={bodhi29} 
  alt="bodhi29" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto", marginBottom: "20px" }} 
/>

          
          </div>

          <div ref={(el) => (sectionRefs.current["Screen Details"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-2 leading-tight">Screen Details</h2>

            <h3>Onboarding Screens</h3>
       
            <img 
  src={bodhi30} 
  alt="bodhi30" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>

<h3>Language Screen</h3>
       
            <img 
  src={bodhi31} 
  alt="bodhi31" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>
<h3>Home Screen</h3>
       
            <img 
  src={bodhi32} 
  alt="bodhi32" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>
<h3>Search Result Screen</h3>
       
            <img 
  src={bodhi33} 
  alt="bodhi33" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>
<h3>Nearby Teacher Screen</h3>
       
            <img 
  src={bodhi34} 
  alt="bodhi34" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>
<h3>Progress Tracker</h3>
       
            <img 
  src={bodhi35} 
  alt="bodhi35" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>
<h3>Payment Tracker Screen</h3>
       
            <img 
  src={bodhi36} 
  alt="bodhi36" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>
<h3>Payment Remainder Screen</h3>
       
            <img 
  src={bodhi37} 
  alt="bodhi37" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>
<h3>Offline Resource Library Screen</h3>
       
            <img 
  src={bodhi38} 
  alt="bodhi38" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>
<h3>Profile Screen</h3>
       
            <img 
  src={bodhi39} 
  alt="bodhi39" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>
<h3>My Teacher List Screen</h3>
       
            <img 
  src={bodhi40} 
  alt="bodhi40" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>

          </div>


          <div ref={(el) => (sectionRefs.current["All Mobile Screen"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-2 leading-tight">All Mobile Screen</h2>
          
       
            <img 
  src={bodhi41} 
  alt="bodhi41" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>

          
          </div>

          <div ref={(el) => (sectionRefs.current["website Screen"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-2 leading-tight leading-tight">website Screen</h2>
          
       <h3>Onboarding Screens</h3>
            <img 
  src={bodhi42} 
  alt="bodhi42" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>

<h3>Home Screen</h3>
            <img 
  src={bodhi43} 
  alt="bodhi43" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>

<h3>Profile Screen</h3>
            <img 
  src={bodhi44} 
  alt="bodhi44" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>

<h3>Payment Screen</h3>
            <img 
  src={bodhi45} 
  alt="bodhi45" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>

          
          </div>

          <img 
  src={bodhi46} 
  alt="bodhi46" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>
          
        </div>

        <div className="div3">
        <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Table of Contents</h3>

          <h3>
          <ul>
            <li onClick={() => scrollToSection("Why I Started This Project")}>Why I Started This Project</li>
            <li onClick={() => scrollToSection("Project Overview")}>Project Overview</li>
            <li onClick={() => scrollToSection("Problem Statement")}>Problem Statement</li>
            <li onClick={() => scrollToSection("Possible Solution")}>Possible Solution</li>
            <li onClick={() => scrollToSection("Design Process")}>Design Process</li>
            <li onClick={() => scrollToSection("Project Timeline")}>Project Timeline</li>
            <li onClick={() => scrollToSection("Responses of Qualitative & Quantitative Analysis")}>Responses of Qualitative & Quantitative Analysis</li>
            <li onClick={() => scrollToSection("User Persona")}>User Persona</li>
            <li onClick={() => scrollToSection("Empathy Map")}>Empathy Map</li>
            <li onClick={() => scrollToSection("Competitive Analysis")}>Competitive Analysis</li>
            <li onClick={() => scrollToSection("User Journey Map")}>User Journey Map</li>
            <li onClick={() => scrollToSection("Information Architecture")}>Information Architecture</li>
            <li onClick={() => scrollToSection("User Flow")}>User Flow</li>
            <li onClick={() => scrollToSection("Task Flow")}>Task Flow</li>
            <li onClick={() => scrollToSection("Low Fidelity WireFrame")}>Low Fidelity WireFrame</li>
            <li onClick={() => scrollToSection("Style Guide")}>Style Guide</li>
            <li onClick={() => scrollToSection("Medium Fidelity WireFrame")}>Medium Fidelity WireFrame</li>
            <li onClick={() => scrollToSection("Usability Testing Result")}>Usability Testing Result</li>
            <li onClick={() => scrollToSection("Screen Details")}>Screen Details</li>
            <li onClick={() => scrollToSection("All Mobile Screen")}>All Mobile Screen</li>
            <li onClick={() => scrollToSection("website Screen")}>website Screen</li>
          </ul>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Irctc;
