import React, { useState, useEffect } from "react";
import menupng from "../assets/three-lines.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faMoon } from "@fortawesome/free-solid-svg-icons";
import { easeIn, easeInOut, easeOut, motion, useScroll } from "framer-motion";

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    // Update the class on the html tag
    document.documentElement.classList.toggle("dark", isDarkMode);

    // Store the dark mode preference in localStorage
    localStorage.setItem("darkMode", isDarkMode.toString());
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <motion.div className="header w-full flex flex-row md:space-x-4 justify-between md:p-3 md:pr-10 relative m-0 z-40 ">
        {/* Toggle button for mobile */}

        <motion.div className="p-1">
          <button
            className="md:hidden w-10 transition-opacity"
            onClick={toggleMobileMenu}
          >
            <img className="w-10 p-0 " src={menupng} alt="menuicon" />
          </button>
        </motion.div>

        {/* Header links for desktop */}
        <div className={`hidden md:flex space-x-4 w-screen md:w-auto}`}>
          {/* Other menu items */}
          {/* Add onClick handlers to close the mobile menu */}
          <div>
            <a href="/">Home</a>
          </div>
          <div>
            <a href="#about">About</a>
          </div>
          <div>
            <a href="#qualifications">Qualifications</a>
          </div>
          <div>
            <a href="#skills">Skills</a>
          </div>
          <div>
            <a href="#projects">Projects</a>
          </div>
          <div>
            <a href="#publications">Publications</a>
          </div>
          <div>
            <a href="#certifications">Certifications</a>
          </div>
        </div>

        {/* Mobile menu */}

        {/* Dark mode toggle */}
        <div className="flex items-center justify-center p-1">
          <button onClick={toggleDarkMode} className="w-10">
            {isDarkMode ? (
              <FontAwesomeIcon
                icon={faLightbulb}
                className="cursor-pointer outline-none w-10 h-5"
                style={{
                  "--fa-primary-color": "#1e1f1f",
                  "--fa-secondary-color": "#d0c00b",
                }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faMoon}
                className="cursor-pointer outline-none w-10 h-5"
                style={{
                  "--fa-primary-color": "#1e1f1f",
                  "--fa-secondary-color": "#d0c00b",
                }}
              />
            )}
          </button>
        </div>
      </motion.div>
      <motion.div
        className="flex flex-col space-y-5 space-x-3 z-50 font-medium"
        variants={{
          open: { width: "100vw", height: "100vh", fontSize: "1.2rem" },
          closed: { width: 0, height: 0, fontSize: 0 },
        }}
        initial="closed"
        animate={isMobileMenuOpen ? "open" : "closed"}
        exit={{
          width: 0,
          height: 0,
          fontSize: 0,
          transition: {
            type: "spring",
            ease: easeOut,
            duration: 0.2,
          },
        }}
        transition={{ type: "spring", ease: easeInOut, duration: 1 }}
      >
        {/* Other menu items */}
        {/* Add onClick handlers to close the mobile menu */}
        <div onClick={closeMobileMenu} className="px-3">
          <a href="/">Home</a>
        </div>
        <div onClick={closeMobileMenu}>
          <a href="#about">About</a>
        </div>
        <div onClick={closeMobileMenu}>
          <a href="#qualifications">Qualifications</a>
        </div>
        <div onClick={closeMobileMenu}>
          <a href="#skills">Skills</a>
        </div>
        <div onClick={closeMobileMenu}>
          <a href="#projects">Projects</a>
        </div>
        <div onClick={closeMobileMenu}>
          <a href="#publications">Publications</a>
        </div>
        <div onClick={closeMobileMenu}>
          <a href="#certifications">Certifications</a>
        </div>
      </motion.div>
    </div>
  );
}

export default Header;
