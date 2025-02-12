import React, { useEffect, useRef, useState } from "react";
import bodhi1 from "../assets/irctc.PNG";
import bodhi2 from "../assets/irctc2.PNG";
import bodhi4 from "../assets/irctc3.PNG";
import irctc4 from "../assets/irctc43.PNG";
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
import irctc22 from "../assets/irctc22.PNG";
import irctc23 from "../assets/irctc23.PNG";
import irctc24 from "../assets/irctc24.PNG";
import irctc25 from "../assets/irctc25.PNG";
import irctc26 from "../assets/irctc26.PNG";
import irctc27 from "../assets/irctc27.PNG";
import irctc28 from "../assets/irctc28.PNG";
import irctc29 from "../assets/irctc29.PNG";
import irctc30 from "../assets/irctc30.PNG";
import irctc31 from "../assets/irctc31.PNG";
import irctc32 from "../assets/irctc32.PNG";
import irctc33 from "../assets/irctc33.PNG";
import irctc34 from "../assets/irctc34.PNG";
import irctc35 from "../assets/irctc35.PNG";
import irctc36 from "../assets/irctc36.PNG";
import irctc37 from "../assets/irctc37.PNG";
import irctc38 from "../assets/irctc38.PNG";
import irctc39 from "../assets/irctc39.PNG";
import irctc40 from "../assets/irctc40.PNG";
import irctc41 from "../assets/irctc41.PNG";
import irctc42 from "../assets/irctc42.PNG";

import "./CreativePage.css";

const Irctc = () => {
  const [activeSection, setActiveSection] = useState("");
    const [activeSubsection, setActiveSubsection] = useState(null);
    const sectionRefs = useRef({});
    const subsectionRefs = useRef({});
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY + 200;
        
        let currentSubsection = null;
        let foundSection = false;
  
        Object.keys(sectionRefs.current).forEach((id) => {
          const element = sectionRefs.current[id];
          if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
            setActiveSection(id);
            foundSection = true;
          }
        });
  
        Object.keys(subsectionRefs.current).forEach((id) => {
          const element = subsectionRefs.current[id];
          if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
            currentSubsection = id;
          }
        });
  
        if (currentSubsection) {
          setActiveSubsection(currentSubsection);
        } else if (!foundSection) {
          setActiveSubsection(null);
        }
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
  
    const scrollToSubsection = (subsectionId) => {
      setActiveSubsection(subsectionId);
      const element = subsectionRefs.current[subsectionId];
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };
  return (
    <div className="creative-page">
      <div className="div1">
        <div className="imdiv">
          <img src={bodhi1} alt="bodhi" className="hero-image"  />
          <img src={bodhi2} alt="bodhi" className="hero-image" />
        </div>
        <h1 className="head"  style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 700 }}>
        IRCTC Platform: Simplifying Railway Travel in India
</h1>

        <p className="head-p">
        The IRCTC (Indian Railway Catering and Tourism Corporation) platform is India’s official gateway for booking train tickets, catering services, and tourism packages.Designed to handle millions of users daily, it provides features like ticket booking, PNR status checks, train schedules, and meal pre-booking, making railway travel more convenient and accessible.
        </p>
        <div className="stats-links">

  <a href="https://www.figma.com/design/tS5JS0RMG5PMeg81lnN31P/IRCTC--Heuristic-Evaluation-(Copy)?m=auto&t=WIqlQqq8ZlO3Vbt7-6" target="_blank" rel="noopener noreferrer">
    <i className="fa-brands fa-figma"></i> Figma -
  </a>
  <a href="https://www.behance.net/gallery/191340447/IRCTC-Heuristic-Evaluation-and-Re-Design" target="_blank" rel="noopener noreferrer">
    <i className="fa-brands fa-behance"></i> Behance
  </a>
</div>

          <img 
            src={bodhi4} 
            alt="bodhi" 
            className="hero-image" 
            style={{ display: "block", margin: "0 auto" }} 
          />
          <p className="head-p" style={{ marginTop: '18px' }}>
          Review of the app to highlight the mismatches and present probable solutions, along with new features.
          </p>
      
      </div>

      <div className="content-wrapper">
        <div className="div2">
          <div ref={(el) => (sectionRefs.current["What motivated me to began?"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-2 leading-tight">What motivated me to began?</h2>
            

<div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between", gap: "20px", flexWrap: "wrap" }}>
  {/* First List (Only 3 Items) */}
  <ul className="responsive-list" style={{ flex: 1, fontSize: "16px", lineHeight: "1.6", textAlign: "justify", padding: 0, margin: 0, listStyleType: "none" }}>
    <li className="list-item">The motivation for initiating a heuristic evaluation and redesign of the IRCTC websites
    stems from recognition of usability challenges and inefficiencies.</li>
    <li className="list-item">Identifying
issues such as complex navigation, slow performance, and potential user
experience obstacles understood the need for improvement. The goal is to
enhance the overall user interface, streamline the ticket booking process, and
address existing usability concerns. This proactive approach aims to create a
more user-friendly, efficient, and accessible platform for users engaging
with the IRCTC websites.  </li>

  </ul>

  {/* Image */}
  <img 
    src={irctc4} 
    alt="bodhi5" 
    className="hero-image-1" 
    style={{ width: "200px", height: "200px", objectFit: "cover", borderRadius: "10px" }}
  />
</div>

{/* Remaining List (Other Items) */}
<ul className="full-list" style={{ padding: 0, margin: "10px 0 0 0", listStyleType: "none" }}>
  <li className="hidden-mobile">Identifying
issues such as complex navigation, slow performance, and potential user
experience obstacles understood the need for improvement. The goal is to
enhance the overall user interface, streamline the ticket booking process, and
address existing usability concerns. This proactive approach aims to create a
more user-friendly, efficient, and accessible platform for users engaging
with the IRCTC websites. </li>

</ul>
          </div>

          <div ref={(el) => (sectionRefs.current["Problem Statement"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-2 leading-tight">Problem Statement</h2>
          
<div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between", gap: "20px", flexWrap: "wrap" }}>
  {/* First List (Only 3 Items) */}
  <ul className="responsive-list" style={{ flex: 1, fontSize: "16px", lineHeight: "1.6", textAlign: "justify", padding: 0, margin: 0, listStyleType: "none" }}>
    <li className="list-item"> The IRCTC Website currently faces several usability issues that hinder user
    experience and satisfaction.</li>
    <li className="list-item">Users encounter confusion due to inconsistent
design elements, such as the placements of features and the absence of 
proper categorization. Additionally, the unavailability of an SOS feature 
could be a notable gap in ensuring the well-being and prompt support for 
users. Consideration should be given to incorporating such features to
enhance the overall safety measures of the IRCTC website.  </li>

  </ul>

  {/* Image */}
  <img 
    src={irctc5} 
    alt="bodhi5" 
    className="hero-image-1" 
    style={{ width: "200px", height: "200px", objectFit: "cover", borderRadius: "10px" }}
  />
</div>

{/* Remaining List (Other Items) */}
<ul className="full-list" style={{ padding: 0, margin: "10px 0 0 0", listStyleType: "none" }}>
  <li className="hidden-mobile">Users encounter confusion due to inconsistent
design elements, such as the placements of features and the absence of 
proper categorization. Additionally, the unavailability of an SOS feature 
could be a notable gap in ensuring the well-being and prompt support for 
users. Consideration should be given to incorporating such features to
enhance the overall safety measures of the IRCTC website. </li>

</ul>
            

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
                /></div>
                <div ref={(el) => (subsectionRefs.current["Visibility of system status"] = el)}>
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
</div>
<div ref={(el) => (subsectionRefs.current["Match between system and real world"] = el)}>
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
</div>
<div ref={(el) => (subsectionRefs.current["User control and freedom"] = el)}>
  
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
</div>
<div ref={(el) => (subsectionRefs.current["Error Prevention"] = el)}>


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
</div>
<div ref={(el) => (subsectionRefs.current["Help user recognize"] = el)}>


            <h3>Help user recognize, diagnose and recover from errors</h3>
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
</div>
<div ref={(el) => (subsectionRefs.current["Consistency and Standards"] = el)}>

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
</div>
<div ref={(el) => (subsectionRefs.current["Reorganization rather than recall"] = el)}>

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
</div>
<div ref={(el) => (subsectionRefs.current["Flexibility and Efficiency of use"] = el)}>


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
</div>
<div ref={(el) => (subsectionRefs.current["Aesthetic and minimalist design"] = el)}>


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
</div>

<div ref={(el) => (subsectionRefs.current["Help and Documentation"] = el)}>
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

          <div ref={(el) => (sectionRefs.current["Google Playstore Reviews"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-2 leading-tight">Google Playstore Reviews </h2>

            
       
            <img 
  src={irctc21} 
  alt="irctc" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>




</div>
<div ref={(el) => (sectionRefs.current["Result"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-2 leading-tight">Result</h2>
            <p className="content-p">
            During the guerrilla research conducted with 5 IRCTC users, It was found that 2 of them
expressed the need for a round-trip option within the website, as they had faced issues
in that aspect. Additionally, they also expressed the expectation for having a filter for
confirmed seats availability. Furthermore, secondary research conducted on Google
Playstore revealed that many users faced challenges related to difficulty in finding
features, website crashes during transaction and website showing irrelevant Ad’s. These
insights highlight the areas of improvement required to enhance the user experience 
of the IRCTC website.
            </p>  
    
          </div>

          <div ref={(el) => (sectionRefs.current["User Persona"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-2 leading-tight">User Persona</h2>

            <img 
  src={irctc22} 
  alt="irctc" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto",marginBottom:"20px" }} 
/>
<p className="content-p">
“I want a hassle-free experience when booking my train tickets. A simple way
      to plan round trips and ensure confirmed seat availability would make
                                  my travel planning much smoother ”
            </p> 
            <img 
  src={irctc23} 
  alt="irctc" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto",marginBottom:"20px" }} 
/>
<p className="content-p">
“In the world of travel, clarity is the compass, efficiency is the engine, and
        every click should count - catering to users like Vijay is not just
                                 a goal, it’s our journey’s purpose  ”
            </p>  
          </div>

          

          <div ref={(el) => (sectionRefs.current["Empathy mapping"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-2 leading-tight">Empathy mapping</h2>
          
       
            <img 
  src={irctc24} 
  alt="irctc" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" , marginBottom: "20px"}} 
/>
          </div>
          <div ref={(el) => (sectionRefs.current["Information Architecture"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-2 leading-tight">Information Architecture</h2>
          
       
            <img 
  src={irctc25} 
  alt="irctc" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" , marginBottom: "20px"}} 
/>
          </div>
          <div ref={(el) => (sectionRefs.current["Color Used"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-2 leading-tight">Color Used</h2>
          
       
            <img 
  src={irctc26} 
  alt="irctc" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" , marginBottom: "20px"}} 
/>
          </div>
          <div ref={(el) => (sectionRefs.current["Typography"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-2 leading-tight">Typography</h2>
          
       
            <img 
  src={irctc27} 
  alt="irctc" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" , marginBottom: "20px"}} 
/>
          </div>
          <div ref={(el) => (sectionRefs.current["Iconography"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-2 leading-tight">Iconography</h2>
          
       
            <img 
  src={irctc28} 
  alt="irctc" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" , marginBottom: "20px"}} 
/>
          </div>
          <div ref={(el) => (sectionRefs.current["Low Fidelity Wireframes"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-2 leading-tight">Low Fidelity Wireframes</h2>
          
       
            <img 
  src={irctc29} 
  alt="irctc" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" , marginBottom: "20px"}} 
/>
          
          <img 
  src={irctc30} 
  alt="irctc" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" , marginBottom: "20px"}} 
/>
          </div>
         
          <div ref={(el) => (sectionRefs.current["Hi-Fidelity Design With Major Correction"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-2 leading-tight">Hi-Fidelity Design With Major Correction</h2>
           <p className="content-p">
           I have done a major correction in this web application based on Heuristic Evaluation
           and User Research
            </p>  
      
          </div>
          <div ref={(el) => (sectionRefs.current["Home Screen"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-2 leading-tight">Home Screen </h2>
           <p className="content-p">
           The redesigned IRCTC homepage now offers enhanced user convenience with added features. Experience
seamless travel planning with the newly integrated round trip feature. The revamped menu categorization
ensures easy navigation, while the SOS button provides quick assistance in emergencies. Enjoy a user
-friendly interface with these exclusive additions, setting the redesigned homepage apart from the current
website.   
            </p> 
            <img 
  src={irctc31} 
  alt="irctc" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" , marginBottom: "20px"}} 
/>
          
          <img 
  src={irctc32} 
  alt="irctc" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" , marginBottom: "20px"}} 
/> 
<img 
  src={irctc33} 
  alt="irctc" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" , marginBottom: "20px"}} 
/> 
      
          </div>
          <div ref={(el) => (sectionRefs.current["SOS Emergency Screen"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-2 leading-tight">SOS Emergency Screen </h2>
           <p className="content-p">
           Our innovative SOS feature goes beyond conventional emergency assistance, allowing you to share your
location, crucial medical information and contact relevant authorities like TTR/RPF. with this 
comprehensive safety net, your journey is not just convenient but also secure. interface with these exclusive additions, setting the redesigned homepage apart from the current
website.   
            </p> 
            <img 
  src={irctc34} 
  alt="irctc" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" , marginBottom: "20px"}} 
/>
  
          </div>
          <div ref={(el) => (sectionRefs.current["Train Selection Screen"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-2 leading-tight">Train Selection Screen </h2>
           <p className="content-p">
           Experience a revamped train selection screen on the IRCTC website application that puts you in control.
Navigate effortlessly with thr simplified and clean design, eliminating visual clutter. The new features 
include a confirmed seat toggle button for swift booking decisions nad an edit fare alert button for
personalized fare notifications. Enjoy a streamlined and user-centric interface for a seamless train 
selection process.  
            </p> 
            <img 
  src={irctc35} 
  alt="irctc" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" , marginBottom: "20px"}} 
/>
<p className="content-p">
My innovative redesign includes a unique feature that lets you preview the coach you wish to book,
providing a visual understanding before making your reservation. Enjoy a user-friendly interface that 
enhances your booking experience, putting you in control of your train journey from the start.
            </p> 
            <img 
  src={irctc36} 
  alt="irctc" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" , marginBottom: "20px"}} 
/>
  
          </div>
          <div ref={(el) => (sectionRefs.current["Fare Alert Screen"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-2 leading-tight">Fare Alert Screen </h2>
           <p className="content-p">
           Featuring the new edit fare alert feature. Tailor your fare notification with ease, ensuring a personalized
travel experience. Stay in control of your journey costs and receive alerts that match your preferences.
Embrace a seamless and customizable booking process that puts you at the forefront of your travel
planning.
            </p> 
            <img 
  src={irctc37} 
  alt="irctc" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" , marginBottom: "20px"}} 
/>
  
          </div>
          <div ref={(el) => (sectionRefs.current["Ticket Review Screen"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-2 leading-tight">Ticket Review Screen</h2>
           <p className="content-p">
           The redesigned ticket review screen features a status bar to validate the visibility of system status
Plus, enjoy our exclusive value add pack offering options like refund on cancellation, instant refund,
date change, and round-the-clock customer service. Elevate your travel experience with a user
-friendly interface and enhanced services tailored to user needs.
            </p> 
            <img 
  src={irctc38} 
  alt="irctc" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" , marginBottom: "20px"}} 
/>
  
          </div>
          <div ref={(el) => (sectionRefs.current["Traveler Details Screen"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-2 leading-tight">Traveler Details Screen</h2>
           <p className="content-p">
           Experience seamless travel planning with the redesigned traveler details screen on the IRCTC website.
Effortlessly input passenger information, customize preferences, and breeze through the booking
process with a user-friendly interface. Enjoy a simplified and efficient way to manage your travel details
making your journey with us even more convenient.
            </p> 
            <img 
  src={irctc39} 
  alt="irctc" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" , marginBottom: "20px"}} 
/>
  
          </div>
          <div ref={(el) => (sectionRefs.current["Payment Screen"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-2 leading-tight">Payment Screen</h2>
           <p className="content-p">
           My redesign introduces a seamless and secure payment experience. Excitingly, I’ve added the Pay later
feature, allowing you the flexibility to complete your transaction with ease. Enjoy a stress-free booking
process, combining convenience and choice on our user friendly platform.
            </p> 
            <img 
  src={irctc40} 
  alt="irctc" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" , marginBottom: "20px"}} 
/>
  
<img 
  src={irctc41} 
  alt="bodhi46" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>
          </div>

          <img 
  src={irctc42} 
  alt="bodhi46" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>
          
        </div>

        <div className="div3">
        <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Table of Contents</h3>

          <h3>
          <ul>
            <li className={activeSection === "What motivated me to began?" ? "active" : ""} onClick={() => scrollToSection("What motivated me to began?")}>What motivated me to began?</li>
            <li className={activeSection === "Problem Statement" ? "active" : ""} onClick={() => scrollToSection("Problem Statement")}>Problem Statement</li>
            <li className={activeSection === "Design Thinking Process" ? "active" : ""} onClick={() => scrollToSection("Design Thinking Process")}>Design Thinking Process</li>
            <li className={activeSection === "Heuristic Evaluation" ? "active" : ""} onClick={() => scrollToSection("Heuristic Evaluation")}>Heuristic Evaluation</li>
            <ul>
          
            <li style={{paddingLeft:"12px"}} className={activeSubsection === "Visibility of system status" ? "subactive" : ""} onClick={() => scrollToSubsection("Visibility of system status")}>
              Visibility of system status
            </li>
            <li style={{paddingLeft:"12px"}} className={activeSubsection === "Match between system and real world" ? "subactive" : ""} onClick={() => scrollToSubsection("Match between system and real world")}>
            Match between system and real world
            </li>
            <li style={{paddingLeft:"12px"}} className={activeSubsection === "User control and freedom" ? "subactive" : ""} onClick={() => scrollToSubsection("User control and freedom")}>
              User control and freedom
            </li>
            <li style={{paddingLeft:"12px"}} className={activeSubsection === "Error Prevention" ? "subactive" : ""} onClick={() => scrollToSubsection("Error Prevention")}>
              Error Prevention
            </li>
            <li style={{paddingLeft:"12px"}} className={activeSubsection === "Help user recognize" ? "subactive" : ""} onClick={() => scrollToSubsection("Help user recognize")}>
              Help user recognize
            </li>
            <li style={{paddingLeft:"12px"}} className={activeSubsection === "Consistency and Standards" ? "subactive" : ""} onClick={() => scrollToSubsection("Consistency and Standards")}>
              Consistency and Standards
            </li>
            <li style={{paddingLeft:"12px"}} className={activeSubsection === "Reorganization rather than recall" ? "subactive" : ""} onClick={() => scrollToSubsection("Reorganization rather than recall")}>
              Reorganization rather than recall
            </li>
            <li style={{paddingLeft:"12px"}} className={activeSubsection === "Flexibility and Efficiency of use" ? "subactive" : ""} onClick={() => scrollToSubsection("Flexibility and Efficiency of use")}>
              Flexibility and Efficiency of use
            </li>
            <li style={{paddingLeft:"12px"}} className={activeSubsection === "Aesthetic and minimalist design" ? "subactive" : ""} onClick={() => scrollToSubsection("Aesthetic and minimalist design")}>
              Aesthetic and minimalist design
            </li>
            <li style={{paddingLeft:"12px"}} className={activeSubsection === "Help and Documentation" ? "subactive" : ""} onClick={() => scrollToSubsection("Help and Documentation")}>
              Help and Documentation
            </li>
            </ul>
            <li className={activeSection === "Solution Statement" ? "active" : ""} onClick={() => scrollToSection("Solution Statement")}>Solution Statement</li>
            <li className={activeSection === "Design Timeline (19-01-2024 to 28-01-2024)" ? "active" : ""} onClick={() => scrollToSection("Design Timeline (19-01-2024 to 28-01-2024)")}>Design Timeline (19-01-2024 to 28-01-2024)</li>
            <li className={activeSection === "User Research" ? "active" : ""} onClick={() => scrollToSection("User Research")}>User Research</li>
            <li className={activeSection === "Target Audience" ? "active" : ""} onClick={() => scrollToSection("Target Audience")}>Target Audience</li>
            <li className={activeSection === "Guerrilla Research" ? "active" : ""} onClick={() => scrollToSection("Guerrilla Research")}>Guerrilla Research</li>
            <li className={activeSection === "Google Playstore Reviews" ? "active" : ""} onClick={() => scrollToSection("Google Playstore Reviews")}>Google Playstore Reviews</li>
            <li className={activeSection === "Result" ? "active" : ""} onClick={() => scrollToSection("Result")}>Result</li>
            <li className={activeSection === "User Persona" ? "active" : ""} onClick={() => scrollToSection("User Persona")}>User Persona</li>
            <li className={activeSection === "Empathy mapping" ? "active" : ""} onClick={() => scrollToSection("Empathy mapping")}>Empathy mapping</li>
            <li className={activeSection === "Information Architecture" ? "active" : ""} onClick={() => scrollToSection("Information Architecture")}>Information Architecture</li>
            <li className={activeSection === "Color Used" ? "active" : ""} onClick={() => scrollToSection("Color Used")}>Color Used</li>
            <li className={activeSection === "Typography" ? "active" : ""} onClick={() => scrollToSection("Typography")}>Typography</li>
            <li className={activeSection === "Iconography" ? "active" : ""} onClick={() => scrollToSection("Iconography")}>Iconography</li>
            <li className={activeSection === "Low Fidelity Wireframes" ? "active" : ""} onClick={() => scrollToSection("Low Fidelity Wireframes")}>Low Fidelity Wireframes</li>
            <li className={activeSection === "Hi-Fidelity Design With Major Correction" ? "active" : ""} onClick={() => scrollToSection("Hi-Fidelity Design With Major Correction")}>Hi-Fidelity Design With Major Correction</li>
            <li className={activeSection === "SOS Emergency Screen" ? "active" : ""} onClick={() => scrollToSection("SOS Emergency Screen")}>SOS Emergency Screen</li>
            <li className={activeSection === "Train Selection Screen" ? "active" : ""} onClick={() => scrollToSection("Train Selection Screen")}>Train Selection Screen</li>
            <li className={activeSection === "Fare Alert Screen" ? "active" : ""} onClick={() => scrollToSection("Fare Alert Screen")}>Fare Alert Screen</li>
            <li className={activeSection === "Ticket Review Screen" ? "active" : ""} onClick={() => scrollToSection("Ticket Review Screen")}>Ticket Review Screen</li>
            <li className={activeSection === "Traveler Details Screen" ? "active" : ""} onClick={() => scrollToSection("Traveler Details Screen")}>Traveler Details Screen</li>
            <li className={activeSection === "Payment Screen" ? "active" : ""} onClick={() => scrollToSection("Payment Screen")}>Payment Screen</li>

          </ul>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Irctc;
