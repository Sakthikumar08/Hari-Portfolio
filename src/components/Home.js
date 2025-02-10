import { useState } from "react";
import { motion } from 'framer-motion';
import "./Styles.css";
import profile from "../assets/image.avif";


const Home = () => {
    const articles = [
        {
          title: "2024 Retrospective",
          date: "January 21 2025",
          readTime: "6 min read",
        },
        {
          title: "Unleash Your Dev Blog: Write More with GitHub Issues as Your CMS",
          date: "April 2 2024",
          readTime: "3 min read",
        },
        {
          title: "Code Faster with Vim Shortcuts!",
          date: "July 18 2022",
          readTime: "2 min read",
        },
        {
          title: "Easily Boost Your Productivity With Code Snippets",
          date: "September 22 2021",
          readTime: "3 min read",
        },
    ];
    
    const projects = [
        {
          title: "Bodhi - Ignite learning Ignite success",
          image: require("../assets/bodhi.png"), 
          description:
            "A web app to analyze whether an opinion on a specific topic is positive or negative based on recent tweets using Natural Language Processing.",
          tech: ["Figma", "Framer"],
          link: "/creative"
        },
        {
         title: "project2",
            image: require("../assets/bodhi.png"), 
            description:
              "A web app to analyze whether an opinion on a specific topic is positive or negative based on recent tweets using Natural Language Processing.",
            tech: ["Figma", "Framer"],
            link: "/creative"
          },{
            title: "project3",
               image: require("../assets/bodhi.png"), 
               description:
                 "A web app to analyze whether an opinion on a specific topic is positive or negative based on recent tweets using Natural Language Processing.",
               tech: ["Figma", "Framer"],
               link: "/creative"
             },
          
    ];

    const [tooltip, setTooltip] = useState({ text: "",  x: 0, y: 0,visible: false });

    const handleMouseEnter = (e, text) => {
      const rect = e.target.getBoundingClientRect();
      setTooltip({
        text,
        x: rect.left + window.scrollX +150, // Align tooltip with the hovered element
        y: rect.top + window.scrollY -10 ,
        visible: true,
      });
    };
  
    const handleMouseLeave = () => {
      setTooltip({ ...tooltip, visible: false });
    };
  

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                duration: 0.8, 
                staggerChildren: 0.2 
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div>
            <div className="content">
                {/* Hero Section */}
                <motion.div 
                    className="hero"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >  <img
                className="hero-background"
                src="https://svgsilh.com/svg/26432.svg"
                alt="Background"
            />
                    <motion.h1 className="hero-title" variants={itemVariants}>
                        Hey there! I'm -<br />
                        <span className="highlight">Hari Baskar.</span>
                    </motion.h1>
                    <motion.p className="hero-subtitle" variants={itemVariants}>
                        <span>UX/UI Expert.</span> Thoughtful Design, Flawless <br />
                        Execution.
                    </motion.p>
                    <motion.p className="hero-text" variants={itemVariants}>
                        🚀 Designing intuitive digital experiences with a blend of <br />⚡ creativity and precision, delivering projects that are both <br/> <span>beautiful and functional.</span>
                    </motion.p>
                    <motion.div className="social-links" variants={itemVariants}>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-box">
                            <i className="fa-brands fa-github"></i>
                            <p>Github</p>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-box">
                            <i className="fa-brands fa-linkedin"></i>
                            <p>LinkedIn</p>
                        </a>
                        <a href="mailto:contact@example.com" className="social-box">
                            <i className="fa-solid fa-envelope"></i>
                            <p>Email</p>
                        </a>
                    </motion.div>
                </motion.div>

                {/* About Section */}
                <motion.div 
                    className="about"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="about-title">⚡ About Me</h2>
                    <div className="about-content">
                    <div className="about-text">
      <p>
        Hey! I'm Hari Baskar, a
        <span
          className="tooltip-trigger"
          onMouseEnter={(e) => handleMouseEnter(e, "Designing intuitive digital experiences with a blend of creativity.")}
          onMouseLeave={handleMouseLeave}
        >
          Creative Design Expert
        </span>{" "}
        with a passion for crafting
        <span
          className="tooltip-trigger"
          onMouseEnter={(e) => handleMouseEnter(e, "Placing users at the heart of design to create meaningful.")}
          onMouseLeave={handleMouseLeave}
        >
          user-centric experiences
        </span>. From the beginning of my career, I have been dedicated to
        <span
          className="tooltip-trigger"
          onMouseEnter={(e) => handleMouseEnter(e, "Focusing on intuitive and user-friendly design principles.")}
          onMouseLeave={handleMouseLeave}
        >
          intuitive design
        </span>
        and
        <span
          className="tooltip-trigger"
          onMouseEnter={(e) => handleMouseEnter(e, "Ensuring smooth and efficient digital experiences.")}
          onMouseLeave={handleMouseLeave}
        >
          seamless functionality
        </span>.
      </p>
      <p>
        When I'm not designing, I love exploring the latest in
        <span
          className="tooltip-trigger"
          onMouseEnter={(e) => handleMouseEnter(e, "Keeping up with the evolving trends in UI/UX design.")}
          onMouseLeave={handleMouseLeave}
        >
          UI/UX trends
        </span>
        and discovering new ways to enhance
        <span
          className="tooltip-trigger"
          onMouseEnter={(e) => handleMouseEnter(e, "Improving and optimizing digital interactions for users.")}
          onMouseLeave={handleMouseLeave}
        >
          digital interactions
        </span>. Whether it's refining user journeys or building
        <span
          className="tooltip-trigger"
          onMouseEnter={(e) => handleMouseEnter(e, "Creating visually appealing and interactive interfaces.")}
          onMouseLeave={handleMouseLeave}
        >
          engaging interfaces
        </span>, I am committed to pushing the boundaries of design excellence.
Expertise extends to Frontend-Development enabling me to create both aesthetically pleasing and easily implementable. Currently works as UI/UX Designer at INAT Technologies Private Limited


      </p>
      <p>
        Outside of work, I enjoy playing games, watching an exciting series, or stepping onto the basketball court for a match with friends! 🏀
      </p>
      {tooltip.visible && (
        <div className="tooltip" style={{ left: tooltip.x, top: tooltip.y, maxWidth: "250px", whiteSpace: "normal" }}>
          {tooltip.text}
        </div>
      )}
    </div>
                        <div className="about-image">
                            <img src={profile} alt="Hari Baskar" />
                        </div>
                    </div>
                </motion.div>

                {/* Portfolio Section */}
                <motion.div 
                    className="portfolio-container"
                    initial="hidden"
                    whileInView="visible"
                    variants={containerVariants}
                    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                >
                    <motion.h2 className="portfolio-title" variants={itemVariants}>
                        All Creative<span>Works.</span>
                    </motion.h2>
                    <motion.p className="portfolio-subtitle" variants={itemVariants}>
                        Here are some of my projects that I have worked on.
                    </motion.p>
                    <motion.div 
                        className="portfolio-grid"
                        variants={containerVariants}
                    >
                     {projects.map((project, index) => (
          <motion.div
            key={index}
            className="portfolio-card"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => (window.location.href = project.link)}
          >
            <img src={project.image} alt={project.title} className="portfolio-image" />
            <h3 className="portfolio-card-title">{project.title}</h3>

            <div className="portfolio-tech-stack">
              {project.tech.map((tech, idx) => (
                <span key={idx} className={`portfolio-tech ${tech.toLowerCase()}`}>
                  {tech === "Figma" && <i className="fa-brands fa-figma"></i>}
                  {tech === "Framer" && <i className="fa-brands fa-react"></i>} {/* Using React icon */}
                  {tech}
                </span>
              ))}
            </div>

            <p className="portfolio-description">{project.description}</p>
          </motion.div>
        ))}
                    </motion.div>
                </motion.div>

                {/* Articles Section */}
                <motion.div 
                    className="articles-container"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="articles-header">
                        <h2 className="articles-title">📄 Latest Article.</h2>
                    </div>
                    <div className="articles-grid">
                        {articles.map((article, index) => (
                            <div key={index} className="article-card">
                                <h3 className="article-title">{article.title}</h3>
                                <p className="article-meta">{article.date} • {article.readTime}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Contact Section */}
                <motion.div 
                    className="contact-container"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="contact-title">Keep In Touch.</h2>
                    <p className="contact-description">
                        I'm currently specializing in{" "}
                        <span className="highlight-contact">UI/UX Expert.</span> <br />
                        Feel free to get in touch and talk more about your projects.
                    </p>
                    <div className="contact-buttons">
                        <a href="https://linkedin.in" className="contact-btn">
                            <i className="fab fa-linkedin"></i> LinkedIn
                        </a>
                        <a href="mailto:example@email.com" className="contact-btn">
                            <i className="fas fa-envelope"></i> Email
                        </a>
                        <a href="https://linkedin.in" className="contact-btn">
                            <i className="fas fa-file"></i> Resume
                        </a>
                    </div>
                    <footer className="contact-footer">
                        Designed and Developed by <span className="highlight-contact">Hari Baskar</span>.
                        <br />
                        Built with <span className="highlight-contact">Next.js</span> &{" "}
                        <span className="highlight-contact">Chakra UI</span>. Hosted on{" "}
                        <span className="highlight-contact">Vercel</span>.
                    </footer>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;