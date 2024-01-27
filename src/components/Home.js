import React from "react";

function Home() {
  return (
    <div className="m-0 p-0  page flex flex-col-reverse md:flex-row">
      <div className="flex-1 m-auto text-center max-h-screen flex-column justify-center align-middle">
        <div className="text-3xl md:text-4xl text-wrap font-bold uppercase m-auto text-slate-800 dark:text-white pt-5 md:pt-0">
          I am{" "}
          <span className="text-[#c3a342] dark:text-[#ffbf00]">
            Atharva Kitkaru.
          </span>
        </div>
        <div className="mt-4 w-4/5 m-auto font-sofia">
          Versatile professional with experience in Frontend and Backend
          Development, System administration, DevOps and Machine learning.
        </div>
      </div>

      <div
        className="flex-1 m-auto bg-no-repeat bg-fill bg-cover w-full h-1/2 md:h-screen flex justify-center align-middle"
        style={{ backgroundImage: "url('/blob.png')" }}
      >
        <img className="m-auto h-1/3" src="atharva.png" alt="Atharva" />
      </div>
    </div>
  );
}

export default Home;
