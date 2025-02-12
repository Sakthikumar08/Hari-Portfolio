import React, { useEffect, useRef, useState } from "react";
import black from "../assets/blackcir.webp";
import abc1 from "../assets/abc1.webp";
import abc2 from "../assets/abc2.webp";
import abc3 from "../assets/abc3.webp";
import abc4 from "../assets/abc4.webp";
import abc5 from "../assets/abc5.webp";






import "./CreativePage.css";

const Blog1 = () => {
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

     
       
          <img src={black} alt="shareride" className="hero-image" style={{margin:"0 auto",marginBottom:"20px"}}/>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 700 }}>
        The ABC of design: Five principles of graphic design
</h1>
        
       

        <p>
        Design principles underpin everything we create as designers. We seek them out and our eyes crave them–whether we know it or not. They’re embedded in our layouts, sketches, concepts and final pieces. They’re often one of the first things we learn as a designer, so they become an important part of our process almost from day one.
        </p>
        <div className="stats-links">

 
</div>

        
      
      </div>

      <div className="content-wrapper">
        <div className="div2">
          <div ref={(el) => (sectionRefs.current["Allignment"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-5 leading-tight">Allignment</h2>
            <p className="content-p">
            Alignment is one of the most basic and important principles of design. It helps create clear structure, organisation and focus. And most importantly, it brings consistency to your design. A great way to start bringing alignment to your work is through using margins, columns and grids.
Alignment in design affects how users scan, navigate, and perceive information. Whether you consciously notice it or not, alignment will help you take in information more easily and can even improve accessibility for readers with visual impairments  
            </p>
           
          </div>

          <img 
  src={abc1} 
  alt="shareride" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>

          <div ref={(el) => (sectionRefs.current["Repetition"] = el)} className="Repetition">
            <h2 className="border-l-4 border-green-500 pl-5 leading-tight">Repetition</h2>
            <p className="content-p">
            With repetition we reuse similar or identical elements throughout a design such as colour, patterns, typography, textures, shapes and more. It can be used to create a sense of consistency, unity, and emphasis, or we can use repetition to help reinforce an idea and bring together different elements in a design.   
            </p>
           
          </div>

          <img 
  src={abc5} 
  alt="shareride" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>

          <div ref={(el) => (sectionRefs.current["Balance"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-5 leading-tight">Balance</h2>
            <p className="content-p">
            Balance refers to the visual weight of the different elements that make up a design. <br />
            Balance is sometimes used to add structure and stability to a design. There are different types of balance, however. You can create an evenly weighted composition, you can use symmetry and you can also create an off-balance piece of work, which we sometimes call ‘balance through tension’.
            </p>
            <img 
  src={abc2} 
  alt="shareride" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto",marginBottom:"20px" }} 
/>


          </div>
          <div ref={(el) => (sectionRefs.current["Contrast"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-5 leading-tight">Contrast</h2>
            
            <p className="content-p">
            The design principle of contrast is the use of different visual elements to create emphasis, guide the viewer's eye and add variety to a design. We can play around with contrasting colours, typefaces, textures, shapes and more. Contrast adds visual interest and can create a point of focus for your design.
            From an accessibility point, contrast can be make or break when it comes to how readable and legible your work is - generally the higher the contrast, the better. However, some advise that using pure black (000000) on pure white (FFFFFF) creates too high a contrast and can be uncomfortable for our eyes. So, this takes us nicely back to one of our previous principle - like most things in life, its all about balance.
            </p>
            <img 
  src={abc3} 
  alt="shareride" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>
          </div>

          <div ref={(el) => (sectionRefs.current["Hierachy"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-5 leading-tight">Hierachy</h2>
         
            <p className="content-p">
            In graphic design, hierarchy plays a crucial role in organising the elements of your design to communicate what’s most important through positioning, scale, weight and colour.
Hierarchy leads the user on a clear path through the information in your design
            </p>    
            
          </div>

         

          <img 
  src={abc4} 
  alt="shareride" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>
          
        </div>

        

        <div className="div3">
        <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Table of Contents</h3>

          <h3>
          <ul>
            <li className={activeSection === "Allignment" ? "active" : ""} onClick={() => scrollToSection("Allignment")}>Allignment</li>
            <li className={activeSection === "Repetition" ? "active" : ""} onClick={() => scrollToSection("Repetition")}>Repetition</li>
            <li className={activeSection === "Balance" ? "active" : ""} onClick={() => scrollToSection("Balance")}>Balance</li>
            <li className={activeSection === "Contrast" ? "active" : ""} onClick={() => scrollToSection("Contrast")}>Contrast</li>
            <li className={activeSection === "Hierachy" ? "active" : ""} onClick={() => scrollToSection("Hierachy")}>Hierachy</li>
            
            
          </ul>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Blog1;
