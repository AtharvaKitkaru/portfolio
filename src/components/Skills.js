import React from "react";
import reactlogo from "../assets/logos/react.png";
import nodelogo from '../assets/logos/nodejs.png';

function Skills() {
  return (
    <div id="skills" className="page">
      <div className="page-heading bg-indigo-500">Skills</div>
      <div className="grid grid-cols-3 gap-4 justify-center p-4">
        <div className="flex justify-center align-middle w-20 h-20 bg-slate-100 rounded-full">
          <img src={reactlogo} alt="Logo" className="w-10 h-10 mx-2" />
          <img src={nodelogo} alt="Logo" className="w-10 h-10 mx-2" />
          
        </div>
      </div>
    </div>
  );
}

export default Skills;
