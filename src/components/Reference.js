import React from "react";
import "./Reference.css";
import profile from "../assets/image.avif";

const Reference = () => {
  return (
    <div className="reference-section">
      <div className="reference-content">
        <h2 className="reference-heading">⚡ Introduction</h2>
        <p className="reference-intro">
          Hey! I'm <strong>Abdul Rahman</strong>, I've been close to a computer since an early age, and been passionate about it ever since.
        </p>
        <p className="reference-history">
          I really liked to build stuff using{" "}
          <span className="highlight-no-code" data-tooltip="Tools that allow you to build apps without coding">
            no-code tools
          </span>{" "}
          back in 2010, and from there, I explored how to code myself. Fast-forward to today, I do
          programming in various languages and technologies, and had the privilege to work in a{" "}
          <span className="highlight-recruitment">Recruitment Company</span> and a{" "}
          <span className="highlight-saas">SaaS Company</span>. I'm interested in building awesome
          things with code and automating tasks, currently focused on{" "}
          <span className="highlight-web">Web & Mobile Development</span>,{" "}
          <span className="highlight-open-source">Open Source</span>, and{" "}
          <span className="highlight-competitive">Competitive Programming</span>.
        </p>
        <p className="reference-hobbies">
          When I'm not coding, I play games with my friends, watch some shows on Netflix, or if the
          weather's good, play basketball! 🏀
        </p>
      </div>
      <div className="reference-profile">
        <img src={profile} alt="Abdul Rahman" className="profile-picture" />
      </div>
    </div>
  );
};

export default Reference;
