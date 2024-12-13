import React, { useState } from "react";

interface TiltEffectProps {
  children: React.ReactNode;
  className?: string;
}

const TiltEffect: React.FC<TiltEffectProps> = ({ children, className }) => {
  const [tiltStyle, setTiltStyle] = useState({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 20;
    const rotateY = ((x - centerX) / centerX) * -20;

    const shadowX = ((x - centerX) / (centerX / 2)) * -10;
    const shadowY = ((y - centerY) / (centerY / 2)) * 10;

    const isDarkMode = document.documentElement.classList.contains("dark");

    setTiltStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      boxShadow: `${shadowX}px ${shadowY}px 30px ${
        isDarkMode ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.5)"
      }`,
      background: `radial-gradient(circle at ${x}px ${y}px, ${
        isDarkMode ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.6)"
      }, ${
        isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.2)"
      })`,
    });
  };

  const handleMouseLeave = () => {
    const isDarkMode = document.documentElement.classList.contains("dark");

    setTiltStyle({
      transform: "rotateX(0deg) rotateY(0deg)",
      boxShadow: `0px 0px 15px ${
        isDarkMode ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)"
      }`,
      background: "transparent",
    });
  };

  return (
    <div
      className={`overflow-hidden shadow-xl rounded-inherit duration-300 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "500px", ...tiltStyle, transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
};

export default TiltEffect;
