import React from "react";
import blobpng from "../assets/blob-2.png";
import atharva2 from "../assets/atharva.png";
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
          className="flex-1 m-auto bg-no-repeat bg-fill bg-contain bg-center min-w-[80vw] min-h-[40vh] md:min-w-[40vw]  md:h-screen flex justify-center items-center"
          style={{ backgroundImage: `url(${blobpng})` }}
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 2,
              ease: easeIn,
            },
          }}
        >
          <img
            className="m-auto scale-50 md:scale-75"
            src={atharva2}
            alt="Atharva"
          />
        </motion.div>

        <div className="flex-1 md:m-auto dark:text-white ">
          <div className="font-poppins">
            <Reveal>
              <p>
                <code className="text-4xl">H</code>i! I'm Atharva Kitkaru,
                currently based in Bengaluru. I enjoy web development, I have strong experience in React.js and Java. I have also worked heavily on Docker, Kubernetes, Python and Shell Scripting. Apart from that, I have knowledge of OCI and have a certification on AWS. I
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
                I am working at{" "}
                <HashLink to="/qualifications/#ofss">
                  <span className="text-orange-400 font-semibold">
                    Oracle
                  </span>
                </HashLink>{" "}
                as a Software Developer, primarily working on Oracle Database Kubernetes Operator, an operator written in GoLang for automating the process of orchestrating Oracle database on Oracle Kubernetes Engine.{" "}
              </p>
            </Reveal>
            <br />

            <Reveal>
              <p>
                 I also love to play Badminton.
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
