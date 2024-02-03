import React, { useState } from "react";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Reveal from "../common/Reveal";

function Qualifications() {
  const [toggleEducation, setToggleEducation] = useState(true);
  const [toggleExperience, setToggleExperience] = useState(true);

  // const handleToggleEducation = () => {
  //   setToggleEducation((prevState) => !prevState);
  // };

  // const handleToggleExperience = () => {
  //   setToggleExperience((prevState) => !prevState);
  // };
  return (
    <div id="qualifications" className="page">
      <div className="header flex flex-row justify-center align-middle mt-[1rem] mb-[1rem] md:mt-[10rem] md:mb-[5rem]">
        <div className="page-heading text-black dark:text-white">
          <Reveal>
            {" "}
            Qualifications<span className="text-red-500">.</span>
          </Reveal>
        </div>
        <div className="w-full h-[1px] bg-slate-600 dark:bg-slate-300 m-auto opacity-30"></div>
      </div>

      <div className="flex flex-col md:flex-row justify-center align-middle">
        <div className=" flex-column justify-center align-middle mt-4 md:ml-12 pl-5 pt-4">
          <div
            className="flex flex-row text-slate-500 dark:text-white text-xl font-bold mb-5 w-2/3"
            // onClick={handleToggleEducation}
          >
            <Reveal>
              <div>Education</div>
            </Reveal>
            {/* <div className="ml-3"> */}
            {/* <FontAwesomeIcon icon={faAngleDown} /> */}
            {/* </div> */}
          </div>

          <ol
            className={`relative border-s border-gray-500 transition duration-300 ease-in-out ${
              toggleEducation ? "" : "hidden"
            }`}
          >
            <li className="mb-7 ms-4">
              <div className="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 border border-slate-500 dark:border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
                <Reveal>May 2023</Reveal>
              </time>
              <h3 className="text-md text-gray-500 font-semibold uppercase dark:text-white">
                <Reveal>K.J Somaiya College Of Engineering, VidyaVihar</Reveal>
              </h3>
              <p className=" text-sm  font-normal text-gray-400 ">
                <Reveal>B.Tech in IT</Reveal>
              </p>
              <p className="mb-4 text-sm font-normal text-gray-400">
                <Reveal> CGPI: 9.33</Reveal>
              </p>
            </li>
            <li className="mb-7 ms-4">
              <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-slate-500 dark:border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
                <Reveal>May 2018</Reveal>
              </time>
              <h3 className="text-md  text-gray-500 font-semibold uppercase dark:text-white">
                <Reveal> Mahila Samiti Junior College</Reveal>
              </h3>
              <p className="text-sm font-normal text-gray-400 ">
                <Reveal>Higher Secondary, Class 11-12</Reveal>
              </p>
              <p className="text-sm font-normal text-gray-400 ">
                <Reveal> Percentage: 87.6%</Reveal>
              </p>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-slate-500 dark:border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                <Reveal>April 2016</Reveal>
              </time>
              <h3 className="text-md text-gray-500 font-semibold uppercase dark:text-white">
                <Reveal>IES Chandrakant Patkar Vidyalaya</Reveal>
              </h3>
              <p className="text-sm font-normal text-gray-400 ">
                <Reveal>SSC, Class 10th</Reveal>
              </p>
              <p className="text-sm font-normal text-gray-400 ">
                <Reveal>Percentage: 95.6%</Reveal>
              </p>
            </li>
          </ol>
        </div>
        <div
          className="grow flex-column justify-center align-middle mt-4 md:ml-12 pl-5 pt-4"
          // onClick={handleToggleExperience}
        >
          <div className="flex flex-row text-slate-500 dark:text-white text-xl font-bold mb-5">
            <div>
              <Reveal>Experience</Reveal>
            </div>
            <div>
              <div className="ml-3">
                {/* <FontAwesomeIcon icon={faAngleDown} /> */}
              </div>
            </div>
          </div>

          <ol
            className={`relative border-s border-gray-500 ${
              toggleExperience ? "" : "hidden"
            } `}
          >
            <section id="ofss">
              <li className="mb-7 ms-4">
                <div className="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 border border-slate-500 dark:border-white"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
                  <Reveal> June 2022 - Present</Reveal>
                </time>
                <h3 className="text-md text-gray-500 font-semibold uppercase dark:text-white">
                  <Reveal>
                    Oracle Financial Software Services | Associate Consultant
                  </Reveal>
                </h3>
                <p className=" text-sm  font-normal text-gray-400 p-1">
                  <Reveal>
                    Led and delivered a scalable, zero-downtime containerization
                    solution for a critical service, managing the entire
                    lifecycle from inception to production using Crio,
                    Kubernetes, Helm, Grafana, Prometheus, ELK, and Jenkins.
                  </Reveal>
                </p>
                <p className=" text-sm  font-normal text-gray-400 p-1">
                  <Reveal>
                    Orchestrated development and administration of 6 database
                    schemas. Engineered and managed end-to-end WebLogic setups
                    for 6 applications, ensuring robust deployment and
                    operation.
                  </Reveal>{" "}
                </p>
                <p className=" text-sm  font-normal text-gray-400 p-1">
                  <Reveal>
                    {" "}
                    Oversaw Linux server management, including software
                    installations, system optimization, troubleshooting, and
                    infrastructure enhancement.
                  </Reveal>
                </p>
                <p className=" text-sm  font-normal text-gray-400 p-1">
                  <Reveal>
                    {" "}
                    Reduced 60% deployment time by automating deployment
                    processes, data source creation, cronjobs, and code commits
                    using Python and shell scripts in sync with Jenkins.
                  </Reveal>
                </p>
              </li>
            </section>
            <li className="mb-7 ms-4">
              <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-slate-500 dark:border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
                <Reveal>May 2020 – Aug 2020</Reveal>
              </time>
              <a href="https://github.com/AtharvaKitkaru/ProjectPortal.git">
                <h3 className="text-md text-gray-500 dark:text-white font-semibold uppercase flex align-middle">
                  <Reveal>
                    <div>
                      {" "}
                      K.J.S.C.E, IT Department | Software Engineering Intern
                    </div>
                    <div>
                      <FontAwesomeIcon
                        className="md:ml-2"
                        icon={faUpRightFromSquare}
                      />
                    </div>
                  </Reveal>
                </h3>
              </a>
              <p className="text-sm font-normal text-gray-400 p-1">
                <Reveal>
                  Crafted a comprehensive Web Portal, powered by ReactJS,
                  Django, and Firebase, to automate and streamline LY Projects
                  workflows.
                </Reveal>
              </p>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-slate-500 dark:border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
                <Reveal>May 2020 – Aug 2020</Reveal>
              </time>
              <a href="https://github.com/SIH2020sgss/">
                <h3 className="text-md text-gray-500 dark:text-white font-semibold uppercase flex align-middle">
                  <Reveal>
                    <div>
                      K.J.S.C.E, IT Department | Software Engineering Intern
                    </div>
                    <div>
                      <FontAwesomeIcon
                        className="ml-2"
                        icon={faUpRightFromSquare}
                      />
                    </div>
                  </Reveal>
                </h3>
              </a>
              <p className="text-sm font-normal text-gray-400 p-1">
                <Reveal>
                  Created a Internship Portal for IT Department which helps
                  faculties to float internships and students to find and apply
                  for the same, using MERN stack with Firebase.
                </Reveal>
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Qualifications;
