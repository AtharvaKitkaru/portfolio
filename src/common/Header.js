import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header flex space-x-4 justify-end p-3 md:pr-10">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
      <div>
        <Link to="/qualifications">Qualification</Link>
      </div>
      <div>
        <Link to="/skills">Skills</Link>
      </div>
      <div>
        <Link to="/projects">Projects</Link>
      </div>
      <div>
        <Link to="/publications">Publications</Link>
      </div>
      <div>
        <Link to="/certifications">Certifications</Link>
      </div>
    </div>
  );
}

export default Header;
