import React from "react";
import Reveal from "../common/Reveal";

function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col-reverse md:flex-row justify-center align-middle">
      <div className="flex-1 m-auto text-center md:text-start max-h-screen flex-column justify-start">
        <div className="text-4xl  m-auto md:text-5xl text-wrap font-bold text-slate-800 dark:text-white px-3 py-1  md:pt-0">
          <Reveal>
            Hey, I'm{" "}
            <span className="text-[#c3a342] dark:text-[#ffbf00]">Atharva.</span>
          </Reveal>
        </div>

        <div className="mt-4 px-3 m-auto font-poppins">
          <Reveal>
            Versatile professional with experience in Frontend and Backend
            Development, System administration, DevOps and Machine learning.
          </Reveal>
        </div>
      </div>
      <div
        className="flex-1 m-auto bg-no-repeat bg-fill bg-cover w-full h-1/3 md:h-screen flex justify-center align-middle"
        style={{ backgroundImage: "url('/blob.png')" }}
      >
        <img className="m-auto w-2/3 h-2/3" src="atharva.png" alt="Atharva" />
      </div>
    </div>
  );
}

export default Home;
