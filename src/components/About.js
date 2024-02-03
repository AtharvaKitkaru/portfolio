import React from "react";
import blobpng from "../assets/blob-2.png";
import atharva2 from "../assets/atharva-2.png";
import Reveal from "../common/Reveal";
import { HashLink } from "react-router-hash-link";
function About() {
  return (
    <div id="about" className="w-full min-h-screen flex flex-col p-0 md:mt-20">
      <div className="header flex flex-row-reverse justify-center align-middle ">
        <div className="page-heading text-black dark:text-white">
          <Reveal>
            {" "}
            About<span className="text-red-500">.</span>
          </Reveal>
        </div>
        <div className="w-full h-[1px] bg-slate-600 dark:bg-slate-300 m-auto opacity-30"></div>
      </div>
      <div className="flex flex-col md:flex-row justify-start align-top">
        <div
          className="flex-1 m-auto bg-no-repeat bg-fill bg-cover w-full h-1/2 md:h-screen flex justify-center align-middle relative"
          style={{ backgroundImage: `url(${blobpng})` }}
        >
          <img className="m-auto h-1/3 absolute" src={atharva2} alt="Atharva" />
        </div>

        <div className="flex-1 m-auto dark:text-white mt-5 md:mt-0">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
