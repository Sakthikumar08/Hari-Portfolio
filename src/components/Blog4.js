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

 
</div>

        
      
      </div>

      <div className="content-wrapper">
        <div className="div2">
          <div ref={(el) => (sectionRefs.current["What is a Use Case?"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-5 leading-tight">What is a Use Case?</h2>
            <p className="content-p">
            A use case is a detailed description of how a user interacts with a system to achieve a specific goal. In user experience and software development, it helps designers, developers, and stakeholders understand the step-by-step actions a user would take to complete a task within a product or service. A use case provides a structured way to capture the how of user interactions, often including the main flow (the usual path a user would take) as well as any alternative or unexpected paths.

For example, a use case for an e-commerce website might describe how a user browses products, adds an item to the cart, enters payment information, and completes the purchase. This use case would outline each step, the user’s actions, and any system responses.

Use cases help ensure that all possible user interactions are accounted for, allowing teams to design smooth, logical flows within the product. They’re particularly helpful for defining technical requirements and understanding how different components of the system should work together.
            </p>
           
          </div>

       

          <div ref={(el) => (sectionRefs.current["Key Elements of a Use Case"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-5 leading-tight">Key Elements of a Use Case</h2>
            <p className="content-p">
            A use case typically has several key elements that provide a clear and detailed description of the user interaction. Here are the main elements: <br /> <br />

Actor: The actor is the user or system that initiates the interaction. This is often a type of user, like a customer, admin, or guest, who will perform specific actions within the system. <br />
Goal: The goal defines what the actor wants to accomplish. It’s the primary purpose of the interaction, such as completing a purchase, logging in, or submitting a <br />
Preconditions: Preconditions specify what needs to be true or set up before the use case can begin. For instance, if the use case involves checking out on an e-commerce site, the precondition might be that the user has items in their shopping cart.  <br />
Main Flow (or Basic Flow): This is the step-by-step sequence of actions the actor takes to achieve their goal. It includes the system’s responses to each action and outlines the typical (or most straightforward) path from start to finish.  <br />
Alternative Flows: These are variations from the main flow that might occur, such as if the user makes an error or chooses a different option. Alternative flows capture different paths users may take to reach the goal or account for unusual situations. <br />
Postconditions: Postconditions describe the state of the system after the use case is complete. They confirm that the goal has been achieved and outline any resulting changes, like an order confirmation message or a successful login. <br />
Exceptions: Exceptions cover unexpected events that could prevent the use case from completing successfully. These might include errors or edge cases, like a failed payment or invalid login credentials. <br />
            </p>
           
          </div>

     

          <div ref={(el) => (sectionRefs.current["What is a User Story?"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-5 leading-tight">What is a User Story?</h2>
            <p className="content-p">
            A user story is a short, simple description of a feature from the perspective of the end user. It captures what the user wants to accomplish and why, typically in one sentence. User stories are less about specific steps and more about the goals and motivations of the user, making them easy for the whole team to understand.

Product owners play a crucial role in capturing user requirements through user stories, collaborating with developers and stakeholders to ensure the development team understands and prioritizes user needs effectively.

User stories are usually written in the format: “As a [type of user], I want to [do something] so that [I achieve this goal].” For example, a user story for an e-commerce website might be: “As a shopper, I want to see product reviews so that I can make a more informed buying decision.”

These stories are great tools for keeping the team focused on the user’s needs, especially in the early stages of design. They also provide context for developers and designers as they work on creating features. User stories keep the why front and center, ensuring that each feature supports a specific user goal
            </p>
        


          </div>
          <div ref={(el) => (sectionRefs.current["Key Elements of a Use Story"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-5 leading-tight">Key Elements of a Use Story</h2>
            
            <p className="content-p">
            A user story is typically simpler than a use case and focuses on the user’s needs, goals, and motivations. Here are the key elements of a user story: <br /> <br />

User Role: The user role describes the type of user who has a particular need or goal. It could be a specific persona, such as a new user, returning customer, or administrator. Defining the user role keeps the story focused on who will benefit from the feature. <br />
Goal: The goal is what the user wants to achieve by using the feature. This is usually a specific action, like “viewing recent transactions” or “adding items to a wishlist.” The goal captures the purpose behind the interaction. <br />
Benefit (or Motivation): The benefit explains why the user wants to achieve this goal. It answers the question, “How does this help the user?” and clarifies the motivation behind the goal, helping the team understand its value. <br />
Acceptance Criteria: Though optional in the basic story format, acceptance criteria specify what conditions must be met for the story to be considered complete. These are often written as a checklist and may include specifics like “shows error messages for invalid inputs” or “displays search results within 2 seconds.” Acceptance criteria provide measurable requirements for development and testing. The importance of working software is highlighted here, as it defines the conditions under which the software will be accepted or rejected, ensuring the correctness of the User Story. <br />
            </p>
         
          </div>

         

         

        
          
        </div>

        

        <div className="div3">
        <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Table of Contents</h3>

          <h3>
          <ul>
            <li className={activeSection === "What is a Use Case?" ? "active" : ""} onClick={() => scrollToSection("What is a Use Case?")}>Read design blogs</li>
            <li className={activeSection === "Key Elements of a Use Case" ? "active" : ""} onClick={() => scrollToSection("Key Elements of a Use Case")}>Key Elements of a Use Case</li>
            <li className={activeSection === "What is a User Story?" ? "active" : ""} onClick={() => scrollToSection("What is a User Story?")}>What is a User Story?</li>
            <li className={activeSection === "Key Elements of a Use Story" ? "active" : ""} onClick={() => scrollToSection("Key Elements of a Use Story")}>Key Elements of a Use Story</li>
            
            
            
          </ul>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Blog4;
