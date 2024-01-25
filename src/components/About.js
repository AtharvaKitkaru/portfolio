import React from "react";

function About() {
  return (
    <div
      id="about"
      className="h-screen flex justify-center align-middle w-full"
    >
      <div
        className="flex-1 m-auto bg-no-repeat bg-fill bg-center h-full flex justify-center align-middle"
        style={{ backgroundImage: "url('/blob-2.png')" }}
      >
        <img className="m-auto" src="atharva-2.png" alt="Atharva" />
      </div>
      <div className="flex-1 m-auto text-center ">
        <div className="page-heading bg-red-500">Why Hire Me?</div>
        <div className="font-sofia">Some content</div>
      </div>
    </div>
  );
}

export default About;
