import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header flex space-x-4 justify-end p-3 md:pr-10">
      <div>
        <a href="/">Home</a>
      </div>
      <div>
        <a href="#about">About</a>
      </div>
      <div>
        <a href="#qualifications">Qualification</a>
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
  );
}

export default Header;
