import React, { useState, useEffect } from "react";
import menupng from "../assets/three-lines.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faMoon } from "@fortawesome/free-solid-svg-icons";

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
    <div className="header w-full h-[8vh] flex flex-row md:space-x-4 justify-between p-3 md:pr-10 relative m-0  z-30">
      {/* Toggle button for mobile */}
      {!isMobileMenuOpen && (
        <button
          className="md:hidden w-10 transition-opacity p-0"
          onClick={toggleMobileMenu}
        >
          <img className="w-10 p-0" src={menupng} alt="menuicon" />
        </button>
      )}

      {/* Header links for desktop */}
      <div className={`hidden md:flex space-x-4 w-screen md:w-auto}`}>
        {/* Other menu items */}
        {/* Add onClick handlers to close the mobile menu */}
        <div onClick={closeMobileMenu}>
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
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="absolute flex flex-col align-top top-0 left-0 w-[70vw] h-screen bg-white md:hidden m-0">
          {/* Mobile menu content */}
          {/* Other menu items */}
          {/* Add onClick handlers to close the mobile menu */}
          <div className="p-5 pl-2" onClick={closeMobileMenu}>
            <a href="/">Home</a>
          </div>
          <div className="p-5 pl-2" onClick={closeMobileMenu}>
            <a href="#about">About</a>
          </div>
          <div className="p-5 pl-2" onClick={closeMobileMenu}>
            <a href="#qualifications">Qualifications</a>
          </div>
          <div className="p-5 pl-2" onClick={closeMobileMenu}>
            <a href="#skills">Skills</a>
          </div>
          <div className="p-5 pl-2" onClick={closeMobileMenu}>
            <a href="#projects">Projects</a>
          </div>
          <div className="p-5 pl-2" onClick={closeMobileMenu}>
            <a href="#publications">Publications</a>
          </div>
          <div className="p-5 pl-2" onClick={closeMobileMenu}>
            <a href="#certifications">Certifications</a>
          </div>
        </div>
      )}

      {/* Dark mode toggle */}
      <button onClick={toggleDarkMode} className="w-10">
        {isDarkMode ? (
          <FontAwesomeIcon
            icon={faLightbulb}
            className="cursor-pointer outline-none"
            style={{
              "--fa-primary-color": "#1e1f1f",
              "--fa-secondary-color": "#d0c00b",
            }}
          />
        ) : (
          <FontAwesomeIcon
            icon={faMoon}
            className="cursor-pointer outline-none"
            style={{
              "--fa-primary-color": "#1e1f1f",
              "--fa-secondary-color": "#d0c00b",
            }}
          />
        )}
      </button>
    </div>
  );
}

export default Header;
