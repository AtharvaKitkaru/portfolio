import React from "react";
import blobpng from "../assets/blob-2.png";
import atharva2 from "../assets/atharva-2.png";

function About() {
  return (
    <div
      id="about"
      data-aos="fade-up"
      className="w-full min-h-screen bg-slate-100 dark:bg-[rgb(32,39,55)] flex flex-col md:flex-row justify-center align-middle p-0 m-0"
    >
      <div
        className="flex-1 m-auto bg-no-repeat bg-fill bg-cover  w-full h-1/2 md:h-screen flex justify-center align-middle"
        style={{ backgroundImage: `url(${blobpng})` }}
      >
        <img className="m-auto h-1/3" src={atharva2} alt="Atharva" />
      </div>
      <div className="flex-1 m-auto text-center ">
        <div className="page-heading dark:bg-red-500">Why Hire Me?</div>
        <div className="font-sofia">Some content</div>
      </div>
    </div>
  );
}

export default About;
