import React, { useState } from "react";
import menupng from "../assets/three-lines.png";

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="header  w-full flex flex-col md:flex-row md:space-x-4 justify-end p-3 md:pr-10 relative m-0">
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
      {isMobileMenuOpen && (
        <div className="absolute flex flex-col align-top top-0 left-0 w-[70vw] h-screen bg-white md:hidden m-0 transition duration-300 ease-in-out">
          {/* Mobile menu content */}
          <button
            className="block md:hidden p-3 transition-opacity"
            onClick={toggleMobileMenu}
          >
            <img className="w-10" src={menupng} alt="menuicon" />
          </button>
          <div className="p-5 pl-2">
            <a href="/">Home</a>
          </div>
          <div className="p-5 pl-2">
            <a href="#about">About</a>
          </div>
          <div className="p-5 pl-2">
            <a href="#qualifications">Qualifications</a>
          </div>
          <div className="p-5 pl-2">
            <a href="#skills">Skills</a>
          </div>
          <div className="p-5 pl-2">
            <a href="#projects">Projects</a>
          </div>
          <div className="p-5 pl-2">
            <a href="#publications">Publications</a>
          </div>
          <div className="p-5 pl-2">
            <a href="#certifications">Certifications</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
