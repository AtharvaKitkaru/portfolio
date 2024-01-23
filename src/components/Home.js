import React from "react";

function Home() {
  return (
    <div className="m-0 p-0 bg-slate-200 w-full h-[90vh] flex">
      <div className="flex-1 m-auto text-center max-h-screen">
        <div className="text-4xl font-bold">I am Atharva Kitkaru.</div>
        <div className="mt-4 w-4/5 m-auto">
          Versatile professional with experience in Frontend and Backend
          Development, System administration, DevOps and Machine learning.
        </div>
      </div>

      <div
        className="flex-1 m-auto bg-no-repeat bg-fill bg-center h-full flex justify-center align-middle"
        style={{ backgroundImage: "url('/blob.png')" }}
      >
        <img className="m-auto" src="atharva.png" alt="Atharva" />
      </div>
    </div>
  );
}

export default Home;
