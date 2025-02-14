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
            <h2 className="border-l-4 border-green-500 pl-5 leading-tight">Project Overview</h2>
            <p className="content-p">
            Managing personal finances effectively is crucial for financial stability and growth. Many users struggle with tracking their income, expenses, and transactions, leading to overspending and poor financial decisions.
SmartBudget is a personal finance management application designed to help users track their financial transactions, monitor income and expenses, and generate reports for daily, weekly, monthly, and yearly analysis. With real-time insights and automated financial summaries, the app empowers users to budget smarter and save better.

          </p>
           
          </div>

          <div ref={(el) => (sectionRefs.current["Results"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-5 leading-tight">Problem Statement            </h2>
            <p className="content-p">
            Many individuals face difficulties in:
            </p>

            <ul className="content-p">
            <li>•Tracking daily expenses and maintaining financial discipline.</li>
            <li>•Understanding income vs. outcome trends over different time periods.</li>
            <li>•Managing multiple payment methods (bank accounts, credit cards, cash, UPI, etc.).</li>
            <li>•Lack of clear financial reports for better decision-making.</li>
            <li>•Forgetting bill payments and missing due dates.</li>
          </ul>
          <p className="content-p">
            A comprehensive personal finance app that provides clear transaction tracking, 
            automated financial summaries, and detailed reports is essential to help users 
            gain control over their finances.
          </p>
            <img 
  src={pfma} 
  alt="pfma" 
  className="hero-image" 
  style={{ display: "block", margin: "0 auto",marginBottom:"20px" }} 
/>

          </div>
          <div ref={(el) => (sectionRefs.current["Process"] = el)} className="section">
  <h2 className="border-l-4 border-green-500 pl-5 leading-tight">Proposed Solution</h2>

  <ul>
    <li><strong>Transaction Tracking & Categorization:</strong>
      <ul className="list-disc pl-5">
        <li>Auto-sync bank transactions (cards, UPI, cash, digital wallets).</li>
        <li>Manually add transactions with quick input.</li>
        <li>AI-powered categorization (food, rent, travel, bills, shopping, etc.).</li>
      </ul>
    </li>

    <li><strong>Income & Expense Management:</strong>
      <ul className="list-disc pl-5">
        <li>Add multiple income sources (salary, freelance, investments, passive income).</li>
        <li>Track total expenses and compare with monthly budgets.</li>
        <li>Identify unnecessary spending with AI-driven insights.</li>
      </ul>
    </li>

    <li><strong>Financial Summary & Reports:</strong>
      <ul className="list-disc pl-5">
        <li>Daily, Weekly, Monthly, Yearly breakdowns of income & expenses.</li>
        <li>Visual reports (charts & graphs) for easy financial analysis.</li>
        <li>Spending trends & budget optimization suggestions.</li>
      </ul>
    </li>

    <li><strong>Budgeting & Savings Goals:</strong>
      <ul className="list-disc pl-5">
        <li>Set custom budgets for different categories.</li>
        <li>Track savings goals and progress automatically.</li>
        <li>Smart alerts when approaching budget limits.</li>
      </ul>
    </li>

    <li><strong>Impact & Benefits:</strong>
      <ul className="list-disc pl-5">
        <li>Simplifies financial tracking with automated insights.</li>
        <li>Saves time by eliminating manual calculations.</li>
        <li>Reduces overspending with budget alerts.</li>
        <li>Helps users achieve financial goals with smart savings strategies.</li>
      </ul>
    </li>
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
             
SmartBudget empowers users to take control of their finances by automating transaction tracking, income & expense management, and financial reporting. By integrating real-time insights, AI-driven analytics, and intuitive UI, the app makes personal finance effortless and stress-free.
With detailed reports, budget tracking, and proactive alerts, SmartBudget helps users spend wisely, save effectively, and achieve long-term financial stability.
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
          <li className={activeSection === "Problem Statement" ? "active" : ""} onClick={() => scrollToSection("Problem Statement")}>Project Overview          </li>
            <li className={activeSection === "Results" ? "active" : ""} onClick={() => scrollToSection("Results")}>Problem Statement            </li>
            <li className={activeSection === "Process" ? "active" : ""} onClick={() => scrollToSection("Process")}>Proposed Solution            </li>
            <li className={activeSection === "Conclusion" ? "active" : ""} onClick={() => scrollToSection("Conclusion")}>Conclusion</li>
            
          </ul>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Personalfin;
