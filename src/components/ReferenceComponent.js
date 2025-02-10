import React from "react";
import "./ReferenceComponent.css"; // External CSS
import profile from "../assets/image.avif";

const ReferenceComponent = () => {
  return (
    <div className="unique-container">
      <div className="unique-content">
        <h2 className="unique-heading">
          ⚡ <span className="unique-title">About Me</span>
        </h2>
        <p className="unique-text">
          Hey! I'm Hari Baskar, a
          <span className="unique-tooltip unique-design-expert" data-tooltip="Designing intuitive digital experiences with a blend of creativity.">
            {" "}Creative Design Expert{" "}
          </span>
          with a passion for crafting
          <span className="unique-tooltip unique-user-experience" data-tooltip="Focusing on user needs to create effective designs.">
            {" "}user-centric experiences{" "}
          </span>.
          From the beginning of my career, I have been dedicated to
          <span className="unique-tooltip unique-intuitive-design" data-tooltip="Creating seamless and easy-to-use digital products.">
            {" "}intuitive design{" "}
          </span>
          and
          <span className="unique-tooltip unique-seamless-functionality" data-tooltip="Ensuring smooth functionality across platforms.">
            {" "}seamless functionality{" "}
          </span>.
        </p>

        <p className="unique-text">
          When I'm not designing, I love exploring the latest in
          <span className="unique-tooltip unique-uiux-trends" data-tooltip="Staying updated with modern UI/UX trends.">
            {" "}UI/UX trends{" "}
          </span>
          and discovering new ways to enhance
          <span className="unique-tooltip unique-digital-interactions" data-tooltip="Enhancing digital experiences through interaction.">
            {" "}digital interactions{" "}
          </span>.
          Whether it's refining user journeys or building
          <span className="unique-tooltip unique-engaging-interfaces" data-tooltip="Crafting visually appealing and functional interfaces.">
            {" "}engaging interfaces{" "}
          </span>,
          I am committed to pushing the boundaries of design excellence.
        </p>

        <p className="unique-text">
          Outside of work, I enjoy playing games, watching an exciting series, or stepping onto the basketball court for a match with friends! 🏀
        </p>
      </div>

      <div className="unique-image-container">
        <img src={profile} alt="Hari Baskar" className="unique-profile-image" />
      </div>
    </div>
  );
};

export default ReferenceComponent;
