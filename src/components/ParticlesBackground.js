import React, { useEffect } from "react";
import "./ParticlesBackground.css";

const ParticlesBackground = () => {
  useEffect(() => {
    const container = document.querySelector(".particle-container");

    for (let i = 0; i < 50; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");

      // Random position
      particle.style.top = `${Math.random() * 100}vh`;
      particle.style.left = `${Math.random() * 100}vw`;

      // Random animation duration
      particle.style.animationDuration = `${Math.random() * 5 + 3}s`;

      container.appendChild(particle);
    }
  }, []);

  return <div className="particle-container"></div>;
};

export default ParticlesBackground;
