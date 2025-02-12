import React, { useEffect, useRef, useState } from "react";
import bodhi1 from "../assets/bodhi.png";
import bodhi2 from "../assets/bodhi2.PNG";
import bodhi3 from "../assets/bodhiOverview.png";
import bodhi4 from "../assets/bodhi4.PNG";
import bodhi5 from "../assets/bodhi5.png";
import bodhi6 from "../assets/bodhi6.png";
import bodhi7 from "../assets/bodhi7.png";
import bodhi8 from "../assets/bodhi8.png";
import bodhi9 from "../assets/bodhi9.png";
import bodhi10 from "../assets/bodhi10.png";
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

const CreativePage = () => {
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
          <img src={bodhi1} alt="bodhi" className="hero-image" />
          <img src={bodhi2} alt="bodhi" className="hero-image" />
        </div>
        <h1 className="head" style={{marginBottom: '1rem', fontWeight: 700 }}>
  Bodhi - Ignite Learning, Ignite Success
</h1>

        <p className="head-p">
          Bodhi is a tutor-finding app designed to bridge the educational gap for rural students while providing tutors with flexible teaching opportunities and income generation.
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
          <p className="head-p" style={{ marginTop: '18px' }}>
            Unleash your full learning potential with Bodhi, where the pursuit of knowledge meets effortless discovery. Say goodbye to the search struggle and hello to tailored, top-notch tutoring, right at your fingertips. Welcome to a smarter way to excel academically.
          </p>
      
      </div>

      <div className="content-wrapper">
        <div className="div2">
          <div ref={(el) => (sectionRefs.current["Why I Started This Project"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-5 leading-tight">Why I Started This Project</h2>
            <p className="content-p">
            I embarked on the journey of creating tutor finding app driven by a profound concern for the educational challenges
that many rural students encounter. Witnessing their determination to excel academically despite the scarcity of
proper guidance deeply inspired me. This endeavor is rooted in the belief that every student, regardless of their
geographic location, deserves access to high-quality educational support, personalized learning, flexible 
scheduling. By developing this platform, I aim to bridge the educational divide, empowering rural students with the
resources they need to thrive in their academic journey. For tutors It creates wide range of teaching opportunity
Income generation, flexible scheduling. Overall, the dual approach can create a symbiotic relationship where tutor
benefits from a broader pool of students, and students gain access to diverse selection of qualified educators, 
enriching the overall learning experience on my platform. In summary, a dual approach tutor finding app creates a
win-win scenario.
            </p>
            
          </div>

          <div ref={(el) => (sectionRefs.current["Project Overview"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-5 leading-tight">Project Overview</h2>
            <div className="desktop" style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "20px" }}>
            <p style={{ flex: 1, fontSize: "16px", lineHeight: "1.6", textAlign: "justify" }} className="content-p">
            Finding tutor is a very common problem in our country. Students are
struggling to get tutor who can accommodate the student’s schedule
and finding a tutor with expertise in a specific subject or topic, 
especially rural areas, can be challenging. Also handling payments
securely and reliably can be a concern for both students and tutors.
Along with this we have found out many problems related to tuition
and tried to solve them through an app called “Bodhi” . With this app, 
anyone can find good tutors and get quality education in their nearby
location and find solutions to many tuition related problems. we have
tried to present the complete case study of the User Experience and 
User Interface design of the app here. 
            </p>
            <img 
  src={bodhi3} 
  alt="bodhi" 
  className="hero-image-1" 
  style={{ width: "200px", height: "200px", objectFit: "cover", borderRadius: "10px" }}
/>
</div>
<div className="mobile" style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "20px" }}>
            <p style={{ flex: 1, fontSize: "14px", lineHeight: "140%", textAlign: "justify" }} className="content-p">
            Finding tutor is a very common problem in our country. Students are
struggling to get tutor who can accommodate the student’s schedule

            </p>
            <img 
  src={bodhi3} 
  alt="bodhi" 
  className="hero-image-1" 
  style={{  objectFit: "cover", borderRadius: "10px" }}
/>

</div>
<p className="content-p" style={{}}>finding a tutor with expertise in a specific subject or topic, 
especially rural areas, can be challenging. Also handling payments
securely and reliably can be a concern for both students and tutors.
Along with this we have found out many problems related to tuition
and tried to solve them through an app called “Bodhi” . With this app, 
anyone can find good tutors and get quality education in their nearby
location and find solutions to many tuition related problems. we have
tried to present the complete case study of the User Experience and 
User Interface design of the app here. </p>

          </div>

          <div ref={(el) => (sectionRefs.current["Problem Statement"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-5 leading-tight">Problem Statement</h2>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between", gap: "20px", flexWrap: "wrap" }}>
  {/* First List (Only 3 Items) */}
  <ul className="responsive-list" style={{ flex: 1, fontSize: "16px", lineHeight: "1.6", textAlign: "justify", padding: 0, margin: 0, listStyleType: "none" }}>
    <li className="list-item">Limited Tutor Options: Without a tutor finding app, rural students may have fewer options when it comes to selecting a tutor with expertise in specific subjects or topics.</li>
    <li className="list-item">Travel Constraints: Travelling to urban areas for tutoring sessions can be time-consuming and expensive.</li>
    <li className="list-item">Lack of Reviews and Ratings: Without an app, students may lack access to reviews and ratings from previous students, making it challenging to assess a tutor’s quality.</li>
  </ul>

  {/* Image */}
  <img 
    src={bodhi5} 
    alt="bodhi5" 
    className="hero-image-1" 
    style={{ width: "200px", height: "200px", objectFit: "cover", borderRadius: "10px" }}
  />
</div>

{/* Remaining List (Other Items) */}
<ul className="full-list" style={{ padding: 0, margin: "10px 0 0 0", listStyleType: "none" }}>
  <li className="hidden-mobile">Travel Constraints: Travelling to urban areas for tutoring sessions can be time-consuming and expensive.</li>
  <li className="hidden-mobile">Lack of Reviews and Ratings: Without an app, students may lack access to reviews and ratings from previous students, making it challenging to assess a tutor’s quality.</li>
  <li>Payment Disputes: Billing issues or disputes over fees can create tension between students and tutors, affecting the overall experience.</li>
  <li>Subject Availability: In some cases, students may struggle to find tutors for niche areas in subjects or specialized areas of study.</li>
  <li>Geographical Isolation: Rural communities are often spread out, making it difficult for students to find tutors who are within a reasonable distance for in-person sessions.</li>
  <li>Language Barriers: Rural areas may have diverse linguistic backgrounds, which can create language barriers when accessing online tutoring platforms.</li>
  <li>Difficulty in Homework Assistance: Rural students may struggle with homework and assignments, as there may not be readily available resources or tutors to help them.</li>
  <li>Educational Inequality: The lack of access to educational resources, including tutor finding apps, can contribute to educational inequality between rural and urban students.</li>
  <li>Progress Tracker: Students' progress is not known during tuition.</li>
</ul>

          </div>

          <div ref={(el) => (sectionRefs.current["Possible Solution"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-5 leading-tight">Possible Solution</h2>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "20px" }}>
            <ul style={{ flex: 1, fontSize: "16px", lineHeight: "1.6", textAlign: "justify" }}>
      <li className="list-item" >
        Creating a convenient digital platform for finding tuition.
      </li>
      <li  className="list-item">
        Integrating a progress tracker into my app which facilitates better communication between students and tutors, and provides a structured approach to tracking educational progress.
      </li>
      <li className="list-item" >
        Offer support for local languages and dialects within the app to make it accessible to students who may not be proficient in the national language.
      </li>
      
      </ul>
      <img 
  src={bodhi6} 
  alt="bodhi6" 
  className="hero-image-1" 
  style={{ width: "200px", height: "200px", objectFit: "cover", borderRadius: "10px" }}
/></div>
      <ul>
      <li className="hidden-mobile">
        Integrating a progress tracker into my app which facilitates better communication between students and tutors, and provides a structured approach to tracking educational progress.
      </li>
      <li className="hidden-mobile" >
        Offer support for local languages and dialects within the app to make it accessible to students who may not be proficient in the national language.
      </li>
      <li >
        Develop offline resource libraries within the app, including educational materials, practice tests, and study guides, that rural students can access without an internet connection.
      </li>
      <li >
        Integrating a payment tracker into my app which facilitates sending notifications for upcoming payments, making it convenient for users to manage their financial commitments.
      </li>
      <li >
        To get an instant solution to any problem by talking to the teacher through message, voice, or video call.
      </li>
      <li >
        Implement an offline mode in the app, allowing students to download educational resources, practice tests, and study guides and access them offline in remote areas.
      </li>
      <li >
        Optimize the app to function efficiently on low-bandwidth connections, ensuring that rural students can use it even with limited internet speeds.
      </li>
      <li >
        To find nearby teachers easily.
      </li>
      <li >
        To get to know about the teaching style of the tutor by providing a demo class to students.
      </li>
    </ul>


          </div>

          <div ref={(el) => (sectionRefs.current["Design Process"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-5 leading-tight">Design Process</h2>
       
            <img 
  src={bodhi7} 
  alt="bodhi" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>

          </div>
          <div ref={(el) => (sectionRefs.current["Project Timeline"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-5 leading-tight">Project Timeline</h2>
       
            <img 
  src={bodhi8} 
  alt="bodhi8" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>

          </div>

          <div ref={(el) => (sectionRefs.current["Responses of Qualitative & Quantitative Analysis"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-5 leading-tight">Responses of Qualitative & Quantitative Analysis</h2></div>
       <div ref={(el) => (subsectionRefs.current["01 Teacher1"] = el)}>
       <h3>01 Teacher</h3>
       <img 
  src={bodhi9} 
  alt="bodhi9" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto", marginBottom: "20px" }} 
/>
<img 
  src={bodhi10} 
  alt="bodhi10" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto", marginBottom: "20px" }} 
/>
<img 
  src={bodhi11} 
  alt="bodhi11" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto", marginBottom: "20px" }} 
/>
</div>

<div ref={(el) => (subsectionRefs.current["02 Student1"] = el)}>
<h3>02 Student</h3>
       <img 
  src={bodhi12} 
  alt="bodhi12" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto", marginBottom: "20px" }} 
/>
<img 
  src={bodhi13} 
  alt="bodhi13" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto", marginBottom: "20px" }} 
/>
<img 
  src={bodhi14} 
  alt="bodhi14" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto", marginBottom: "20px" }} 
/>

</div>
          

          <div ref={(el) => (sectionRefs.current["User Persona"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-5 leading-tight">User Persona</h2></div>
            <div ref={(el) => (subsectionRefs.current["01 Teacher2"] = el)}>
            <h3>01 Teacher</h3>
       
            <img 
  src={bodhi15} 
  alt="bodhi15" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>
</div>
<div ref={(el) => (subsectionRefs.current["02 Student2"] = el)}>
<h3 >02 Student</h3>
       
            <img 
  src={bodhi16} 
  alt="bodhi16" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto",marginBottom:"1.5rem" }} 
/>
</div>
         

          <div ref={(el) => (sectionRefs.current["Empathy Map"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-5 leading-tight">Empathy Map</h2></div>
          <div  ref={(el) => (subsectionRefs.current["01 Teacher3"] = el)}>
            <h3>01 Teacher</h3>
       
            <img 
  src={bodhi17} 
  alt="bodhi17" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>
</div>
<div ref={(el) => (subsectionRefs.current["02 Student3"] = el)}>
<h3>02 Student</h3>
       
            <img 
  src={bodhi18} 
  alt="bodhi18" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto",marginBottom:"1.5rem" }} 
/>

</div>
          <div ref={(el) => (sectionRefs.current["Competitive Analysis"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-5 leading-tight">Competitive Analysis</h2>
       
            <img 
  src={bodhi19} 
  alt="bodhi19" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>

          </div>

          <div ref={(el) => (sectionRefs.current["User Journey Map"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-5 leading-tight">User Journey Map</h2>

            <h3>Priya's Board Exam Preparation</h3>
      <p style={{ letterSpacing: "0.05em",lineHeight:"150%",color:"rgb(215, 214, 214)"}}><strong  style={{color:"white"}}>Name:</strong> Priya</p>
      <p style={{letterSpacing: "0.05em",lineHeight:"150%",color:"rgb(215, 214, 214)"}} ><strong style={{color:"white"}}>Age:</strong> 16</p>
      <p style={{letterSpacing: "0.05em",lineHeight:"150%",color:"rgb(215, 214, 214)"}} ><strong style={{color:"white"}}>Background:</strong> Priya lives in a remote village in Tamilnadu and is currently preparing for her 12th-grade board exams.</p>
      <p style={{letterSpacing: "0.05em",lineHeight:"150%",color:"rgb(215, 214, 214)",marginBottom:"15px"}} ><strong style={{color:"white"}}>Scenario:</strong> Priya’s Board Exam Preparation</p>
       
            <img 
  src={bodhi20} 
  alt="bodhi20" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>

<h3>Subathra's Board Exam Preparation Struggles</h3>
      <p style={{letterSpacing: "0.05em",lineHeight:"150%",color:"rgb(215, 214, 214)"}} ><strong style={{color:"white"}}>Name:</strong> Subathra</p>
      <p style={{letterSpacing: "0.05em",lineHeight:"150%",color:"rgb(215, 214, 214)"}} ><strong style={{color:"white"}}>Age:</strong> 16</p>
      <p style={{letterSpacing: "0.05em",lineHeight:"150%",color:"rgb(215, 214, 214)"}} ><strong style={{color:"white"}}>Background:</strong> Subathra lives in a remote village in Tamilnadu and is currently preparing for her 12th-grade board exams.</p>
      <p style={{letterSpacing: "0.05em",lineHeight:"150%",color:"rgb(215, 214, 214)",marginBottom:"15px"}} ><strong style={{color:"white"}}>Scenario:</strong> Subathra’s Board Exam Preparation Struggles</p>

      <img 
  src={bodhi21} 
  alt="bodhi21" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>


</div>
<div ref={(el) => (sectionRefs.current["Information Architecture"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-5 leading-tight">Information Architecture</h2>
       
            <img 
  src={bodhi22} 
  alt="bodhi22" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>

          
          </div>

          <div ref={(el) => (sectionRefs.current["User Flow"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-5 leading-tight">User Flow</h2>
            <h3>Hire a tutor</h3>
       
            <img 
  src={bodhi23} 
  alt="bodhi23" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>

          
          </div>

          <div ref={(el) => (sectionRefs.current["Task Flow"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-5 leading-tight">Task Flow</h2>
            <h3>To Track Student Progress</h3>
       
            <img 
  src={bodhi24} 
  alt="bodhi24" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>

          
          </div>

          <div ref={(el) => (sectionRefs.current["Low Fidelity WireFrame"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-5 leading-tight">Low Fidelity WireFrame</h2>
          
       
            <img 
  src={bodhi25} 
  alt="bodhi25" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>

          
          </div>

          <div ref={(el) => (sectionRefs.current["Style Guide"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-5 leading-tight">Style Guide</h2>
          
       
            <img 
  src={bodhi26} 
  alt="bodhi26" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>

          
          </div>

          <div ref={(el) => (sectionRefs.current["Medium Fidelity WireFrame"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-5 leading-tight">Medium Fidelity WireFrame</h2>
          
       
            <img 
  src={bodhi27} 
  alt="bodhi27" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>

          
          </div>

          <div ref={(el) => (sectionRefs.current["Usability Testing Result"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-5 leading-tight">Usability Testing Result</h2>
          
       
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
            <h2 className="border-l-4 border-green-500 pl-5 leading-tight">Screen Details</h2></div>
            <div ref={(el) => (subsectionRefs.current["Onboarding Screens"] = el)}>
            <h3>Onboarding Screens</h3>
       
            <img 
  src={bodhi30} 
  alt="bodhi30" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>
</div>
<div ref={(el) => (subsectionRefs.current["Language Screen"] = el)}>
<h3>Language Screen</h3>
       
            <img 
  src={bodhi31} 
  alt="bodhi31" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>
</div>
<div ref={(el) => (subsectionRefs.current["Home Screen"] = el)}>
<h3>Home Screen</h3>
       
            <img 
  src={bodhi32} 
  alt="bodhi32" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>
</div>
<div ref={(el) => (subsectionRefs.current["Search Result Screen"] = el)}>
<h3>Search Result Screen</h3>
       
            <img 
  src={bodhi33} 
  alt="bodhi33" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>
</div>
<div ref={(el) => (subsectionRefs.current["Nearby Teacher Screen"] = el)}>
<h3>Nearby Teacher Screen</h3>
       
            <img 
  src={bodhi34} 
  alt="bodhi34" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>
</div>
<div ref={(el) => (subsectionRefs.current["Progress Tracker"] = el)}>
<h3>Progress Tracker</h3>
       
            <img 
  src={bodhi35} 
  alt="bodhi35" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>
</div>
<div ref={(el) => (subsectionRefs.current["Payment Tracker Screen"] = el)}>
<h3>Payment Tracker Screen</h3>
       
            <img 
  src={bodhi36} 
  alt="bodhi36" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>
</div>
<div ref={(el) => (subsectionRefs.current["Payment Remainder Screen"] = el)}>
<h3>Payment Remainder Screen</h3>
       
            <img 
  src={bodhi37} 
  alt="bodhi37" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>
</div>
<div ref={(el) => (subsectionRefs.current["Offline Resource Library Screen"] = el)}>
<h3>Offline Resource Library Screen</h3>
       
            <img 
  src={bodhi38} 
  alt="bodhi38" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/></div>
<div ref={(el) => (subsectionRefs.current["Profile Screen"] = el)}>
<h3>Profile Screen</h3>
       
            <img 
  src={bodhi39} 
  alt="bodhi39" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>
</div>
<div ref={(el) => (subsectionRefs.current["My Teacher List Screen"] = el)}>
<h3>My Teacher List Screen</h3>
       
            <img 
  src={bodhi40} 
  alt="bodhi40" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>

</div>


          <div ref={(el) => (sectionRefs.current["All Mobile Screen"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-5 leading-tight">All Mobile Screen</h2>
          
       
            <img 
  src={bodhi41} 
  alt="bodhi41" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>

          
          </div>

          <div ref={(el) => (sectionRefs.current["website Screen"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-5 leading-tight leading-tight" >website Screen</h2>
            </div>
  <div ref={(el) => (subsectionRefs.current["Onboarding Screens1"] = el)}>
       <h3>Onboarding Screens</h3>
            <img 
  src={bodhi42} 
  alt="bodhi42" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>
</div>
<div ref={(el) => (subsectionRefs.current["Home Screen1"] = el)}>
<h3>Home Screen</h3>
            <img 
  src={bodhi43} 
  alt="bodhi43" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>
</div>
<div ref={(el) => (subsectionRefs.current["Profile Screen1"] = el)}>
<h3>Profile Screen</h3>
            <img 
  src={bodhi44} 
  alt="bodhi44" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto" }} 
/>
</div>
<div ref={(el) => (subsectionRefs.current["Payment Screen1"] = el)}>
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
  style={{ display: "block", margin: "0 auto",marginTop:"2rem" }} 
/>
          
        </div>

        <div className="div3">
        <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Table of Contents</h3>

          <h3>
          <ul>
  <li className={activeSection === "Why I Started This Project" ? "active" : ""} onClick={() => scrollToSection("Why I Started This Project")}>Why I Started This Project</li>
  <li className={activeSection === "Project Overview" ? "active" : ""} onClick={() => scrollToSection("Project Overview")}>Project Overview</li>
  <li className={activeSection === "Problem Statement" ? "active" : ""} onClick={() => scrollToSection("Problem Statement")}>Problem Statement</li>
  <li className={activeSection === "Possible Solution" ? "active" : ""} onClick={() => scrollToSection("Possible Solution")}>Possible Solution</li>
  <li className={activeSection === "Design Process" ? "active" : ""} onClick={() => scrollToSection("Design Process")}>Design Process</li>
  <li className={activeSection === "Project Timeline" ? "active" : ""} onClick={() => scrollToSection("Project Timeline")}>Project Timeline</li>
  <li className={activeSection === "Responses of Qualitative & Quantitative Analysis" ? "active" : ""} onClick={() => scrollToSection("Responses of Qualitative & Quantitative Analysis")}>Responses of Qualitative & Quantitative Analysis
  </li>
  <ul>
                <li style={{paddingLeft:"12px"}} className={activeSubsection === "01 Teacher1" ? "subactive" : ""} onClick={() => scrollToSubsection("01 Teacher")}>
                   01 Teacher
                </li>
                <li style={{paddingLeft:"12px"}} className={activeSubsection === "02 Student1" ? "subactive" : ""} onClick={() => scrollToSubsection("02 Student")}>
                   02 Student
                </li>
              </ul>
  <li className={activeSection === "User Persona" ? "active" : ""} onClick={() => scrollToSection("User Persona")}>User Persona</li>
  <ul>
                <li style={{paddingLeft:"12px"}} className={activeSubsection === "01 Teacher2" ? "subactive" : ""} onClick={() => scrollToSubsection("01 Teacher")}>
                   01 Teacher
                </li>
                <li style={{paddingLeft:"12px"}} className={activeSubsection === "02 Student2" ? "subactive" : ""} onClick={() => scrollToSubsection("02 Student")}>
                   02 Student
                </li>
              </ul>
  <li className={activeSection === "Empathy Map" ? "active" : ""} onClick={() => scrollToSection("Empathy Map")}>Empathy Map</li>
  <ul>
                <li style={{paddingLeft:"12px"}} className={activeSubsection === "01 Teacher3" ? "subactive" : ""} onClick={() => scrollToSubsection("01 Teacher")}>
                   01 Teacher
                </li>
                <li style={{paddingLeft:"12px"}} className={activeSubsection === "02 Student3" ? "subactive" : ""} onClick={() => scrollToSubsection("02 Student")}>
                   02 Student
                </li>
              </ul>
  <li className={activeSection === "Competitive Analysis" ? "active" : ""} onClick={() => scrollToSection("Competitive Analysis")}>Competitive Analysis</li>
  <li className={activeSection === "User Journey Map" ? "active" : ""} onClick={() => scrollToSection("User Journey Map")}>User Journey Map</li>
  <li className={activeSection === "Information Architecture" ? "active" : ""} onClick={() => scrollToSection("Information Architecture")}>Information Architecture</li>
  <li className={activeSection === "User Flow" ? "active" : ""} onClick={() => scrollToSection("User Flow")}>User Flow</li>
  <li className={activeSection === "Task Flow" ? "active" : ""} onClick={() => scrollToSection("Task Flow")}>Task Flow</li>
  <li className={activeSection === "Low Fidelity WireFrame" ? "active" : ""} onClick={() => scrollToSection("Low Fidelity WireFrame")}>Low Fidelity WireFrame</li>
  <li className={activeSection === "Style Guide" ? "active" : ""} onClick={() => scrollToSection("Style Guide")}>Style Guide</li>
  <li className={activeSection === "Medium Fidelity WireFrame" ? "active" : ""} onClick={() => scrollToSection("Medium Fidelity WireFrame")}>Medium Fidelity WireFrame</li>
  <li className={activeSection === "Usability Testing Result" ? "active" : ""} onClick={() => scrollToSection("Usability Testing Result")}>Usability Testing Result</li>
  <li className={activeSection === "Screen Details" ? "active" : ""} onClick={() => scrollToSection("Screen Details")}>Screen Details</li>
  <ul>
            <li style={{paddingLeft:"12px"}} className={activeSubsection === "Onboarding Screens" ? "subactive" : ""} onClick={() => scrollToSubsection("Onboarding Screens")}>
              Onboarding Screens
            </li>
            <li style={{paddingLeft:"12px"}} className={activeSubsection === "Language Screen" ? "subactive" : ""} onClick={() => scrollToSubsection("Language Screen")}>
              Language Screen
            </li>
            <li style={{paddingLeft:"12px"}} className={activeSubsection === "Home Screen" ? "subactive" : ""} onClick={() => scrollToSubsection("Home Screen")}>
              Home Screen
            </li>
            <li style={{paddingLeft:"12px"}} className={activeSubsection === "Search Result Screen" ? "subactive" : ""} onClick={() => scrollToSubsection("Search Result Screen")}>
              Search Result Screen
            </li>
            <li style={{paddingLeft:"12px"}} className={activeSubsection === "Nearby Teacher Screen" ? "subactive" : ""} onClick={() => scrollToSubsection("Nearby Teacher Screen")}>
              Nearby Teacher Screen
            </li>
            <li style={{paddingLeft:"12px"}} className={activeSubsection === "Progress Tracker" ? "subactive" : ""} onClick={() => scrollToSubsection("Progress Tracker")}>
              Progress Tracker
            </li>
            <li style={{paddingLeft:"12px"}} className={activeSubsection === "Payment Tracker Screen" ? "subactive" : ""} onClick={() => scrollToSubsection("Payment Tracker Screen")}>
              Payment Tracker Screen
            </li>
            <li style={{paddingLeft:"12px"}} className={activeSubsection === "Payment Remainder Screen" ? "subactive" : ""} onClick={() => scrollToSubsection("Payment Remainder Screen")}>
              Payment Remainder Screen
            </li>
            <li style={{paddingLeft:"12px"}} className={activeSubsection === "Offline Resource Library Screen" ? "subactive" : ""} onClick={() => scrollToSubsection("Offline Resource Library Screen")}>
              Offline Resource Library Screen
            </li>
            <li style={{paddingLeft:"12px"}} className={activeSubsection === "Profile Screen" ? "subactive" : ""} onClick={() => scrollToSubsection("Profile Screen")}>
              Profile Screen
            </li>
            <li style={{paddingLeft:"12px"}} className={activeSubsection === "My Teacher List Screen" ? "subactive" : ""} onClick={() => scrollToSubsection("My Teacher List Screen")}>
              My Teacher List Screen
            </li>
            </ul>
  <li className={activeSection === "All Mobile Screen" ? "active" : ""} onClick={() => scrollToSection("All Mobile Screen")}>All Mobile Screen</li>
  <li className={activeSection === "website Screen" ? "active" : ""} onClick={() => scrollToSection("website Screen")}>Website Screen</li>
  <ul>
            <li style={{paddingLeft:"12px"}} className={activeSubsection === "Onboarding Screens1" ? "subactive" : ""} onClick={() => scrollToSubsection("Onboarding Screens")}>
              Onboarding Screens
            </li>
            <li style={{paddingLeft:"12px"}} className={activeSubsection === "Home Screen1" ? "subactive" : ""} onClick={() => scrollToSubsection("Home Screen")}>
              Home Screen
            </li>
            <li style={{paddingLeft:"12px"}} className={activeSubsection === "Profile Screen1" ? "subactive" : ""} onClick={() => scrollToSubsection("Profile Screen")}>
              Profile Screen
            </li>
            <li style={{paddingLeft:"12px"}} className={activeSubsection === "Payment Screen1" ? "subactive" : ""} onClick={() => scrollToSubsection("Payment Screen")}>
              Payment Screen
            </li>
          </ul>
</ul>

          </h3>
        </div>
      </div>
    </div>
  );
};

export default CreativePage;
