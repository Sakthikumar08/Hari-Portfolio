import React, { useEffect, useRef, useState } from "react";
import use from "../assets/use.jpg";


import "./CreativePage.css";

const Blog4 = () => {
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

     
       
          <img src={use} alt="shareride" className="hero-image" style={{margin:"0 auto",marginBottom:"20px"}}/>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 700 }}>
          Use Case vs User Story: Key Differences in UX Explained
</h1>
        
       

        <p>
        In UX design, the terms use case and user story often come up, especially when planning features and understanding user needs. But what exactly do they mean, and why are they both important?

While they might sound similar, use cases and user stories have unique roles in creating a great user experience. Both help designers and developers focus on the user, but they do it in slightly different way.
        </p>
        <div className="stats-links">
  <span>1406 views -</span>
 
</div>

        
      
      </div>

      <div className="content-wrapper">
        <div className="div2">
          <div ref={(el) => (sectionRefs.current["Read design blogs"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-5 leading-tight">Read design blogs</h2>
            <p className="content-p">
            Alignment is one of the most basic and important principles of design. It helps create clear structure, organisation and focus. And most importantly, it brings consistency to your design. A great way to start bringing alignment to your work is through using margins, columns and grids.
Alignment in design affects how users scan, navigate, and perceive information. Whether you consciously notice it or not, alignment will help you take in information more easily and can even improve accessibility for readers with visual impairments  
            </p>
           
          </div>

       

          <div ref={(el) => (sectionRefs.current["Get a mentor"] = el)} className="Repetition">
            <h2 className="border-l-4 border-green-500 pl-5 leading-tight">Get a mentor</h2>
            <p className="content-p">
            With repetition we reuse similar or identical elements throughout a design such as colour, patterns, typography, textures, shapes and more. It can be used to create a sense of consistency, unity, and emphasis, or we can use repetition to help reinforce an idea and bring together different elements in a design.   
            </p>
           
          </div>

     

          <div ref={(el) => (sectionRefs.current["Learn design theory"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-5 leading-tight">Learn design theory</h2>
            <p className="content-p">
            Balance refers to the visual weight of the different elements that make up a design. <br />
            Balance is sometimes used to add structure and stability to a design. There are different types of balance, however. You can create an evenly weighted composition, you can use symmetry and you can also create an off-balance piece of work, which we sometimes call ‘balance through tension’.
            </p>
        


          </div>
          <div ref={(el) => (sectionRefs.current["Contrast"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-5 leading-tight">Contrast</h2>
            
            <p className="content-p">
            The design principle of contrast is the use of different visual elements to create emphasis, guide the viewer's eye and add variety to a design. We can play around with contrasting colours, typefaces, textures, shapes and more. Contrast adds visual interest and can create a point of focus for your design.
            From an accessibility point, contrast can be make or break when it comes to how readable and legible your work is - generally the higher the contrast, the better. However, some advise that using pure black (000000) on pure white (FFFFFF) creates too high a contrast and can be uncomfortable for our eyes. So, this takes us nicely back to one of our previous principle - like most things in life, its all about balance.
            </p>
         
          </div>

         

         

        
          
        </div>

        

        <div className="div3">
        <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Table of Contents</h3>

          <h3>
          <ul>
            <li className={activeSection === "Read design blogs" ? "active" : ""} onClick={() => scrollToSection("Read design blogs")}>Read design blogs</li>
            <li className={activeSection === "Get a mentor" ? "active" : ""} onClick={() => scrollToSection("Get a mentor")}>Get a mentor</li>
            <li className={activeSection === "Learn design theory" ? "active" : ""} onClick={() => scrollToSection("Learn design theory")}>Learn design theory</li>
            <li className={activeSection === "Contrast" ? "active" : ""} onClick={() => scrollToSection("Contrast")}>Contrast</li>
            
            
            
          </ul>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Blog4;
