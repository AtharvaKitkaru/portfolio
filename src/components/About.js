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
        <div className="font-bold text-3xl bg-red-500 text-black w-fit p-2 m-auto">
          Why Hire Me?
        </div>
        <div>Some content</div>
      </div>
    </div>
  );
}

export default About;
