import React from "react";
import blobpng from "../assets/blob-2.png";
import atharva2 from "../assets/atharva-2.png";
import Reveal from "../common/Reveal";
import { HashLink } from "react-router-hash-link";
import { easeIn, motion } from "framer-motion";

function About() {
  return (
    <div
      id="about"
      className="w-full min-h-screen flex flex-col py-10 md:mt-20"
    >
      <div className="header flex flex-row-reverse justify-center align-middle">
        <div className="page-heading text-black dark:text-white">
          <Reveal>
            {" "}
            About<span className="text-red-500">.</span>
          </Reveal>
        </div>
        <div className="w-full h-[1px] bg-slate-600 dark:bg-slate-300 m-auto opacity-30"></div>
      </div>
      <div className="flex flex-col md:flex-row justify-start align-top">
        <motion.div
          className="flex-1 m-auto bg-no-repeat bg-fill bg-cover md:h-screen flex justify-center items-center"
          style={{ backgroundImage: `url(${blobpng})` }}
          initial={{
            opacity: 0,
            y: 5,
          }}
          whileInView={{
            y: 10,
            opacity: 1,
            transition: {
              duration: 2,
              ease: easeIn,
            },
          }}
        >
          <img
            className="m-auto w-2/3 h-auto md:w-full md:h-2/3"
            src={atharva2}
            alt="Atharva"
          />
        </motion.div>

        <div className="flex-1 mt-5 md:m-auto dark:text-white ">
          <div className="font-poppins">
            <Reveal>
              <p>
                <code className="text-4xl">H</code>i! I'm Atharva Kitkaru,
                currently based in Mumbai. I enjoy web development, additionaly
                I've experience in Machine Learning and dabbled with Flutter. I
                thrive on the versatility of tools and frameworks, adapting to
                whichever best solves the problem at hand. Curious? Explore{" "}
                <HashLink to="/#skills">
                  <span className="text-orange-400 font-semibold">
                    My Skills
                  </span>
                </HashLink>{" "}
                and{" "}
                <HashLink to="/#projects">
                  <span className="text-orange-400 font-semibold">
                    Projects
                  </span>
                </HashLink>
                !
              </p>
            </Reveal>
            <br />

            <Reveal>
              <p>
                I am employed at{" "}
                <HashLink to="/qualifications/#ofss">
                  <span className="text-orange-400 font-semibold">
                    Oracle Financial Software Services
                  </span>
                </HashLink>{" "}
                as Associate Consultant, primarily working on DevOps, System
                Administration and automating whatever possible :)).{" "}
              </p>
            </Reveal>
            <br />

            <Reveal>
              <p>
                Beyond work, I proudly contribute as a Professional Development
                Board of Director at{" "}
                <HashLink to="https://www.linkedin.com/company/rotaract-club-of-dombivli/?originalSubdomain=in">
                  <span className="text-orange-400 font-semibold">
                    Rotaract Club of Dombivali
                  </span>
                </HashLink>
                . I also love to play Badminton.
              </p>
            </Reveal>
            <br />
            <HashLink to="#contact">
              <motion.div
                className=" bg-orange-500 text-white p-3 rounded-md w-fit"
                whileHover={{
                  scale: 1.05,
                }}
              >
                Let's Connect
              </motion.div>
            </HashLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
