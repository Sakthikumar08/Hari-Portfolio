import React, { useEffect, useRef, useState } from "react";
import ess from "../assets/ess.webp";


import "./CreativePage.css";

const Blog2 = () => {
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

     
       
          <img src={ess} alt="shareride" className="hero-image" style={{margin:"0 auto",marginBottom:"20px"}}/>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 700 }}>
          48 essential free resources for graphic designers
</h1>
        
       

        <p>
        We’ve all been feeling the squeeze over the past few years, but at Shillington we don’t want this to stop anyone getting the best graphic design tools and resources that the world has to offer.
        </p>
        <div className="stats-links">

 
</div>

        
      
      </div>

      <div className="content-wrapper">
        <div className="div2">
          <div ref={(el) => (sectionRefs.current["Free stock images"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-5 leading-tight">Free stock images</h2>
            <h3>Pexels</h3>
            <p className="content-p">
            As far as free stock photo sites go, we think Pexels is one of the best. With a community of photographers and videographers generously donating their work for everyone to download and use, royalty-free, it's also the first to respond to current affairs, providing the images we might need to illustrate our timely projects. 
            </p>
           
            <h3>Nappy</h3>
            <p className="content-p">
            As creators, it's our duty to ensure our work is diverse and inclusive, representing the whole of society. Nappy is a relative newcomer to the free stock photo sites out there, bringing "beautiful, high-res photos of black and brown people, for free"
            </p>

            <h3>StockSnap</h3>
            <p className="content-p">
            Known for its high-quality offering of free stock imagery, StockSnap has a whole host of different categories you can browse through, so you'll never struggle to find what you need. No credit is required but always welcome
            </p>

            <h3>Unsplash</h3>
            <p className="content-p">
            Unsplash is a stock photo site powered by a friendly community of photographers, all uploading free stock pics for you to download and use. A must for any discerning designer.
            </p>


          </div>

          

          <div ref={(el) => (sectionRefs.current["Free illustrations"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-5 leading-tight">Free illustrations</h2>
            <h3>Mega Creator</h3>
            <p className="content-p">
            Want a photo for your site that no one else has? Photo Creator from Icons8 allows you to combine different stock photos to create your own unique image. Combine objects, people, backgrounds and even images of your own using a browser-based drag-and-drop interface that's very quick and easy to use. We especially love the way you can add filters to your search 
            </p>

            <h3>Humaaans</h3>
            <p className="content-p">
            In Humaaans, Pablo Stanley has created something quite special: modular, vector illustrations of humans that you can mix, match, rotate and position to create your own designs. Whatever you make is free for both commercial and personal use.
            </p>

            <h3>UnDraw</h3>
            <p className="content-p">
            Describing itself as "open-source illustration for any idea you can imagine and create", unDraw is a constantly updated design project by Katerina Limpitsouni featuring beautiful SVG images that you can use completely free and without attribution. We particularly love the ability to quickly add your own hex code to tailor the illustrations to your own projects.
            </p>

            <h3>Open Peeps</h3>
            <p className="content-p">
            Need something a little more hand-drawn? Open Peeps is the illustration library for you. Created by Pablo Stanley, the open-source flat SVG and PNG assets are available for Sketch, Figma, Studio and XD. You can even make a donation if you're able to support Pablo. A little goes a long way.
            </p>
           
          </div>

          <div ref={(el) => (sectionRefs.current["Free icons"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-5 leading-tight">Free icons</h2>
            <h3>The Noun Project</h3>
            <p className="content-p">
            Co-founded by Sofya Polyakov, Edward Boatman and Scott Thomas, The Noun Project brings together over two million curated icons, created by a global community and available for use by designers for free.
            </p>
          
            <h3>Ionicons</h3>
            <p className="content-p">
            Ionicons are premium icons for use by designers in web, iOS, Android and desktop apps. Built by the Ionic Framework team, they're all free and open source.
            </p>

            <h3>Simple Icons</h3>
            <p className="content-p">
            Started by Dan Leech, Simple Icons makes free SVG icons for popular brands available to download for free
            </p>

            <h3>Icons8</h3>
            <p className="content-p">
            This fabulous resource courtesy of icons8.com gives you a whole library of free icons in PNG and SVG. They're on the ball, too, as they've just released a "coronavirus related searches" section for those of you requiring something very current.
            </p>

          </div>
          <div ref={(el) => (sectionRefs.current["Free fonts"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-5 leading-tight">Free fonts</h2>
            <h3>Google Fonts</h3>
            <p className="content-p">
            An intuitive and robust directory of open source web fonts for designers to use how they wish. All created to the high standards you'd expect from a web giant like Google
            </p>

            <h3>Velvetyne</h3>
            <p className="content-p">
            Velvetyne is a French type foundry founded in 2010 by designer Frank Adebiaye—and they’ve been designing and distributing free open source typefaces ever since. Now a team of 10 type designers, Velvetyne have a typeface to sort every mood and every project.
            </p>

            <h3>Fontfabric</h3>
            <p className="content-p">
            Fontfabric is a digital type foundry that creates retail fonts and custom typography for various brands. Rather generously, they also provide a selection of free fonts for anyone to download and use. We love Nexa and Intro, but there are lots more to browse and sample on its nicely designed website.
            </p>

            <h3>Use & Modify</h3>
            <p className="content-p">
            A personal selection of "classy, punk, professional, incomplete, and weird typefaces", Use & Modify provides open-source fonts that are free to use and...you guessed it, modify.
            </p>
         
          </div>

          <div ref={(el) => (sectionRefs.current["Free stock videos"] = el)} className="section">
            <h2 className="border-l-4 border-green-500 pl-5 leading-tight">Free stock videos</h2>
            <h3>Coverr</h3>
            <p className="content-p">
            Coverr is a source of beautifully shot stock videos that are free to download for commercial and non-commercial use, no attribution required
            </p>    

            <h3>Mixkit</h3>
            <p className="content-p">
            Brought to you by Envato, Mixkit is a curated gallery of high-quality videos and animation, made by some of the world's most talented creators, with all content licensed for free.
            </p> 

            <h3>Life of Vids</h3>
            <p className="content-p">
            Life of Vids offers free videos for web designers, filmmakers, advertisers, agencies, or anyone else who can make use of them. You can create infinite loops with most of them, and they're all available to download for both personal and commercial use.
            </p> 

            
            
          </div>

    

         

        
          
        </div>

        

        <div className="div3">
        <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Table of Contents</h3>

          <h3>
          <ul>
            <li className={activeSection === "Free stock images" ? "active" : ""} onClick={() => scrollToSection("Free stock images")}>Free stock images</li>
            <li className={activeSection === "Free illustrations" ? "active" : ""} onClick={() => scrollToSection("Free illustrations")}>Free illustrations</li>
            <li className={activeSection === "Free icons" ? "active" : ""} onClick={() => scrollToSection("Balance")}>Free icons</li>
            <li className={activeSection === "Free fonts" ? "active" : ""} onClick={() => scrollToSection("Free fonts")}>Free fonts</li>
            <li className={activeSection === "Free stock videos" ? "active" : ""} onClick={() => scrollToSection("Free stock videos")}>Free stock videos</li>
           
            
          </ul>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Blog2;
