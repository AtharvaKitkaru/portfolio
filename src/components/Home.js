import React from "react";
import Reveal from "../common/Reveal";
import { easeIn, motion } from "framer-motion";

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
      <motion.div
        className="flex-1 m-auto bg-no-repeat bg-fill bg-contain bg-center min-w-[80vw] min-h-[40vh] md:min-w-[40vw]  md:h-screen flex justify-center align-middle"
        style={{ backgroundImage: "url('/blob.png')" }}
        initial={{
          opacity: 0,
          y: 10,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            ease: easeIn,
          },
        }}
      >
        <img className="m-auto  w-2/4 h-2/4 " src="atharva.png" alt="Atharva" />
      </motion.div>
    </div>
  );
}

export default Home;
