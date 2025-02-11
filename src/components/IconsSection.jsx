import React, { useEffect } from "react";

const IconsSection = () => {
  const icons = [
    { src: "https://framerusercontent.com/images/CtawTrUQ7exjArnxRI2z0j5lipQ.png", alt: "Html" },
    { src: "https://framerusercontent.com/images/0ttqcWxFoLG4q71tGnY1jF6D3I.png", alt: "Adobe XD" },
    { src: "https://framerusercontent.com/images/8lvtN5VohbrIXBQfcwrGaZPFIXs.png", alt: "Adobe Illustrator" },
    { src: "https://framerusercontent.com/images/3udJkAAp1ehyY43IRAVyxValE9I.png", alt: "Adobe Photoshop" },
    { src: "https://framerusercontent.com/images/4S3jy7RUc36K4vCFKUPh2LY9qK0.png", alt: "Figma" },
    { src: "https://framerusercontent.com/images/l3L1wNlg26qsR2gchTV8sBvyOt4.png", alt: "CSS" },
    { src: "https://framerusercontent.com/images/CtawTrUQ7exjArnxRI2z0j5lipQ.png", alt: "Html" },
    { src: "https://framerusercontent.com/images/0ttqcWxFoLG4q71tGnY1jF6D3I.png", alt: "Adobe XD" },
    { src: "https://framerusercontent.com/images/8lvtN5VohbrIXBQfcwrGaZPFIXs.png", alt: "Adobe Illustrator" },
    { src: "https://framerusercontent.com/images/3udJkAAp1ehyY43IRAVyxValE9I.png", alt: "Adobe Photoshop" },
    { src: "https://framerusercontent.com/images/4S3jy7RUc36K4vCFKUPh2LY9qK0.png", alt: "Figma" },
    { src: "https://framerusercontent.com/images/l3L1wNlg26qsR2gchTV8sBvyOt4.png", alt: "CSS" },
    { src: "https://framerusercontent.com/images/CtawTrUQ7exjArnxRI2z0j5lipQ.png", alt: "Html" },
    { src: "https://framerusercontent.com/images/0ttqcWxFoLG4q71tGnY1jF6D3I.png", alt: "Adobe XD" },
    { src: "https://framerusercontent.com/images/8lvtN5VohbrIXBQfcwrGaZPFIXs.png", alt: "Adobe Illustrator" },
    { src: "https://framerusercontent.com/images/3udJkAAp1ehyY43IRAVyxValE9I.png", alt: "Adobe Photoshop" },
    { src: "https://framerusercontent.com/images/4S3jy7RUc36K4vCFKUPh2LY9qK0.png", alt: "Figma" },
    { src: "https://framerusercontent.com/images/l3L1wNlg26qsR2gchTV8sBvyOt4.png", alt: "CSS" },
    { src: "https://framerusercontent.com/images/CtawTrUQ7exjArnxRI2z0j5lipQ.png", alt: "Html" },
    { src: "https://framerusercontent.com/images/0ttqcWxFoLG4q71tGnY1jF6D3I.png", alt: "Adobe XD" },
    { src: "https://framerusercontent.com/images/8lvtN5VohbrIXBQfcwrGaZPFIXs.png", alt: "Adobe Illustrator" },
    { src: "https://framerusercontent.com/images/3udJkAAp1ehyY43IRAVyxValE9I.png", alt: "Adobe Photoshop" },
    { src: "https://framerusercontent.com/images/4S3jy7RUc36K4vCFKUPh2LY9qK0.png", alt: "Figma" },
    { src: "https://framerusercontent.com/images/l3L1wNlg26qsR2gchTV8sBvyOt4.png", alt: "CSS" },
    { src: "https://framerusercontent.com/images/CtawTrUQ7exjArnxRI2z0j5lipQ.png", alt: "Html" },
    { src: "https://framerusercontent.com/images/0ttqcWxFoLG4q71tGnY1jF6D3I.png", alt: "Adobe XD" },
    { src: "https://framerusercontent.com/images/8lvtN5VohbrIXBQfcwrGaZPFIXs.png", alt: "Adobe Illustrator" },
    { src: "https://framerusercontent.com/images/3udJkAAp1ehyY43IRAVyxValE9I.png", alt: "Adobe Photoshop" },
    { src: "https://framerusercontent.com/images/4S3jy7RUc36K4vCFKUPh2LY9qK0.png", alt: "Figma" },
    { src: "https://framerusercontent.com/images/l3L1wNlg26qsR2gchTV8sBvyOt4.png", alt: "CSS" },
    { src: "https://framerusercontent.com/images/CtawTrUQ7exjArnxRI2z0j5lipQ.png", alt: "Html" },
    { src: "https://framerusercontent.com/images/0ttqcWxFoLG4q71tGnY1jF6D3I.png", alt: "Adobe XD" },
    { src: "https://framerusercontent.com/images/8lvtN5VohbrIXBQfcwrGaZPFIXs.png", alt: "Adobe Illustrator" },
    { src: "https://framerusercontent.com/images/3udJkAAp1ehyY43IRAVyxValE9I.png", alt: "Adobe Photoshop" },
    { src: "https://framerusercontent.com/images/4S3jy7RUc36K4vCFKUPh2LY9qK0.png", alt: "Figma" },
    { src: "https://framerusercontent.com/images/l3L1wNlg26qsR2gchTV8sBvyOt4.png", alt: "CSS" },
    { src: "https://framerusercontent.com/images/CtawTrUQ7exjArnxRI2z0j5lipQ.png", alt: "Html" },
    { src: "https://framerusercontent.com/images/0ttqcWxFoLG4q71tGnY1jF6D3I.png", alt: "Adobe XD" },
    { src: "https://framerusercontent.com/images/8lvtN5VohbrIXBQfcwrGaZPFIXs.png", alt: "Adobe Illustrator" },
    { src: "https://framerusercontent.com/images/3udJkAAp1ehyY43IRAVyxValE9I.png", alt: "Adobe Photoshop" },
    { src: "https://framerusercontent.com/images/4S3jy7RUc36K4vCFKUPh2LY9qK0.png", alt: "Figma" },
    { src: "https://framerusercontent.com/images/l3L1wNlg26qsR2gchTV8sBvyOt4.png", alt: "CSS" },
    { src: "https://framerusercontent.com/images/CtawTrUQ7exjArnxRI2z0j5lipQ.png", alt: "Html" },
    { src: "https://framerusercontent.com/images/0ttqcWxFoLG4q71tGnY1jF6D3I.png", alt: "Adobe XD" },
    { src: "https://framerusercontent.com/images/8lvtN5VohbrIXBQfcwrGaZPFIXs.png", alt: "Adobe Illustrator" },
    { src: "https://framerusercontent.com/images/3udJkAAp1ehyY43IRAVyxValE9I.png", alt: "Adobe Photoshop" },
    { src: "https://framerusercontent.com/images/4S3jy7RUc36K4vCFKUPh2LY9qK0.png", alt: "Figma" },
    { src: "https://framerusercontent.com/images/l3L1wNlg26qsR2gchTV8sBvyOt4.png", alt: "CSS" },
    { src: "https://framerusercontent.com/images/CtawTrUQ7exjArnxRI2z0j5lipQ.png", alt: "Html" },
    { src: "https://framerusercontent.com/images/0ttqcWxFoLG4q71tGnY1jF6D3I.png", alt: "Adobe XD" },
    { src: "https://framerusercontent.com/images/8lvtN5VohbrIXBQfcwrGaZPFIXs.png", alt: "Adobe Illustrator" },
    { src: "https://framerusercontent.com/images/3udJkAAp1ehyY43IRAVyxValE9I.png", alt: "Adobe Photoshop" },
    { src: "https://framerusercontent.com/images/4S3jy7RUc36K4vCFKUPh2LY9qK0.png", alt: "Figma" },
    { src: "https://framerusercontent.com/images/l3L1wNlg26qsR2gchTV8sBvyOt4.png", alt: "CSS" },
    { src: "https://framerusercontent.com/images/CtawTrUQ7exjArnxRI2z0j5lipQ.png", alt: "Html" },
    { src: "https://framerusercontent.com/images/0ttqcWxFoLG4q71tGnY1jF6D3I.png", alt: "Adobe XD" },
    { src: "https://framerusercontent.com/images/8lvtN5VohbrIXBQfcwrGaZPFIXs.png", alt: "Adobe Illustrator" },
    { src: "https://framerusercontent.com/images/3udJkAAp1ehyY43IRAVyxValE9I.png", alt: "Adobe Photoshop" },
    { src: "https://framerusercontent.com/images/4S3jy7RUc36K4vCFKUPh2LY9qK0.png", alt: "Figma" },
    { src: "https://framerusercontent.com/images/l3L1wNlg26qsR2gchTV8sBvyOt4.png", alt: "CSS" },
    { src: "https://framerusercontent.com/images/CtawTrUQ7exjArnxRI2z0j5lipQ.png", alt: "Html" },
    { src: "https://framerusercontent.com/images/0ttqcWxFoLG4q71tGnY1jF6D3I.png", alt: "Adobe XD" },
    { src: "https://framerusercontent.com/images/8lvtN5VohbrIXBQfcwrGaZPFIXs.png", alt: "Adobe Illustrator" },
    { src: "https://framerusercontent.com/images/3udJkAAp1ehyY43IRAVyxValE9I.png", alt: "Adobe Photoshop" },
    { src: "https://framerusercontent.com/images/4S3jy7RUc36K4vCFKUPh2LY9qK0.png", alt: "Figma" },
    { src: "https://framerusercontent.com/images/l3L1wNlg26qsR2gchTV8sBvyOt4.png", alt: "CSS" },
    { src: "https://framerusercontent.com/images/CtawTrUQ7exjArnxRI2z0j5lipQ.png", alt: "Html" },
    { src: "https://framerusercontent.com/images/0ttqcWxFoLG4q71tGnY1jF6D3I.png", alt: "Adobe XD" },
    { src: "https://framerusercontent.com/images/8lvtN5VohbrIXBQfcwrGaZPFIXs.png", alt: "Adobe Illustrator" },
    { src: "https://framerusercontent.com/images/3udJkAAp1ehyY43IRAVyxValE9I.png", alt: "Adobe Photoshop" },
    { src: "https://framerusercontent.com/images/4S3jy7RUc36K4vCFKUPh2LY9qK0.png", alt: "Figma" },
    { src: "https://framerusercontent.com/images/l3L1wNlg26qsR2gchTV8sBvyOt4.png", alt: "CSS" },
    { src: "https://framerusercontent.com/images/CtawTrUQ7exjArnxRI2z0j5lipQ.png", alt: "Html" },
    { src: "https://framerusercontent.com/images/0ttqcWxFoLG4q71tGnY1jF6D3I.png", alt: "Adobe XD" },
    { src: "https://framerusercontent.com/images/8lvtN5VohbrIXBQfcwrGaZPFIXs.png", alt: "Adobe Illustrator" },
    { src: "https://framerusercontent.com/images/3udJkAAp1ehyY43IRAVyxValE9I.png", alt: "Adobe Photoshop" },
    { src: "https://framerusercontent.com/images/4S3jy7RUc36K4vCFKUPh2LY9qK0.png", alt: "Figma" },
    { src: "https://framerusercontent.com/images/l3L1wNlg26qsR2gchTV8sBvyOt4.png", alt: "CSS" },
    { src: "https://framerusercontent.com/images/CtawTrUQ7exjArnxRI2z0j5lipQ.png", alt: "Html" },
    { src: "https://framerusercontent.com/images/0ttqcWxFoLG4q71tGnY1jF6D3I.png", alt: "Adobe XD" },
    { src: "https://framerusercontent.com/images/8lvtN5VohbrIXBQfcwrGaZPFIXs.png", alt: "Adobe Illustrator" },
    { src: "https://framerusercontent.com/images/3udJkAAp1ehyY43IRAVyxValE9I.png", alt: "Adobe Photoshop" },
    { src: "https://framerusercontent.com/images/4S3jy7RUc36K4vCFKUPh2LY9qK0.png", alt: "Figma" },
    { src: "https://framerusercontent.com/images/l3L1wNlg26qsR2gchTV8sBvyOt4.png", alt: "CSS" },
    { src: "https://framerusercontent.com/images/CtawTrUQ7exjArnxRI2z0j5lipQ.png", alt: "Html" },
    { src: "https://framerusercontent.com/images/0ttqcWxFoLG4q71tGnY1jF6D3I.png", alt: "Adobe XD" },
    { src: "https://framerusercontent.com/images/8lvtN5VohbrIXBQfcwrGaZPFIXs.png", alt: "Adobe Illustrator" },
    { src: "https://framerusercontent.com/images/3udJkAAp1ehyY43IRAVyxValE9I.png", alt: "Adobe Photoshop" },
    { src: "https://framerusercontent.com/images/4S3jy7RUc36K4vCFKUPh2LY9qK0.png", alt: "Figma" },
    { src: "https://framerusercontent.com/images/l3L1wNlg26qsR2gchTV8sBvyOt4.png", alt: "CSS" },
    { src: "https://framerusercontent.com/images/CtawTrUQ7exjArnxRI2z0j5lipQ.png", alt: "Html" },
    { src: "https://framerusercontent.com/images/0ttqcWxFoLG4q71tGnY1jF6D3I.png", alt: "Adobe XD" },
    { src: "https://framerusercontent.com/images/8lvtN5VohbrIXBQfcwrGaZPFIXs.png", alt: "Adobe Illustrator" },
    { src: "https://framerusercontent.com/images/3udJkAAp1ehyY43IRAVyxValE9I.png", alt: "Adobe Photoshop" },
    { src: "https://framerusercontent.com/images/4S3jy7RUc36K4vCFKUPh2LY9qK0.png", alt: "Figma" },
    { src: "https://framerusercontent.com/images/l3L1wNlg26qsR2gchTV8sBvyOt4.png", alt: "CSS" },
    { src: "https://framerusercontent.com/images/CtawTrUQ7exjArnxRI2z0j5lipQ.png", alt: "Html" },
    { src: "https://framerusercontent.com/images/0ttqcWxFoLG4q71tGnY1jF6D3I.png", alt: "Adobe XD" },
    { src: "https://framerusercontent.com/images/8lvtN5VohbrIXBQfcwrGaZPFIXs.png", alt: "Adobe Illustrator" },
    { src: "https://framerusercontent.com/images/3udJkAAp1ehyY43IRAVyxValE9I.png", alt: "Adobe Photoshop" },
    { src: "https://framerusercontent.com/images/4S3jy7RUc36K4vCFKUPh2LY9qK0.png", alt: "Figma" },
    { src: "https://framerusercontent.com/images/l3L1wNlg26qsR2gchTV8sBvyOt4.png", alt: "CSS" },
    { src: "https://framerusercontent.com/images/CtawTrUQ7exjArnxRI2z0j5lipQ.png", alt: "Html" },
    { src: "https://framerusercontent.com/images/0ttqcWxFoLG4q71tGnY1jF6D3I.png", alt: "Adobe XD" },
    { src: "https://framerusercontent.com/images/8lvtN5VohbrIXBQfcwrGaZPFIXs.png", alt: "Adobe Illustrator" },
    { src: "https://framerusercontent.com/images/3udJkAAp1ehyY43IRAVyxValE9I.png", alt: "Adobe Photoshop" },
    { src: "https://framerusercontent.com/images/4S3jy7RUc36K4vCFKUPh2LY9qK0.png", alt: "Figma" },
    { src: "https://framerusercontent.com/images/l3L1wNlg26qsR2gchTV8sBvyOt4.png", alt: "CSS" },
    { src: "https://framerusercontent.com/images/CtawTrUQ7exjArnxRI2z0j5lipQ.png", alt: "Html" },
    { src: "https://framerusercontent.com/images/0ttqcWxFoLG4q71tGnY1jF6D3I.png", alt: "Adobe XD" },
    { src: "https://framerusercontent.com/images/8lvtN5VohbrIXBQfcwrGaZPFIXs.png", alt: "Adobe Illustrator" },
    { src: "https://framerusercontent.com/images/3udJkAAp1ehyY43IRAVyxValE9I.png", alt: "Adobe Photoshop" },
    { src: "https://framerusercontent.com/images/4S3jy7RUc36K4vCFKUPh2LY9qK0.png", alt: "Figma" },
    { src: "https://framerusercontent.com/images/l3L1wNlg26qsR2gchTV8sBvyOt4.png", alt: "CSS" },
  ];

  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
      @keyframes scrollIcons {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `;
    document.head.appendChild(styleSheet);
  }, []);

  return (
    <div style={{ 
      width: "100%",
      overflow: "hidden",
      padding: "20px 0",
      position: "relative",
    }}>
      <div
        style={{
          display: "flex",
          gap: "20px",
          width: "200%", // Double the content for seamless looping
          animation: "scrollIcons 20s linear infinite",
        }}
      >
        {[...icons, ...icons].map((icon, index) => (
          <img
            key={index}
            src={icon.src}
            alt={icon.alt}
            style={{ 
              width: "50px",
              height: "50px",
              objectFit: "contain",
              flexShrink: 0 // Prevent icons from shrinking
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default IconsSection;