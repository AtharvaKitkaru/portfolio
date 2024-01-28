import React, { useState } from "react";
import {
  faAngleDown,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Qualifications() {
  const [toggleEducation, setToggleEducation] = useState(true);
  const [toggleExperience, setToggleExperience] = useState(true);

  const handleToggleEducation = () => {
    setToggleEducation((prevState) => !prevState);
  };

  const handleToggleExperience = () => {
    setToggleExperience((prevState) => !prevState);
  };
  return (
    <div id="qualifications" className="page">
      <div className="page-heading mt-6  dark:bg-yellow-500">
        Qualifications
      </div>
      {/* <Separator /> */}

      <div className="flex flex-col md:flex-row justify-center align-middle">
        <div className=" flex-column justify-center align-middle mt-4 ml-12 pl-5 pt-4 cursor-pointer">
          <div
            className="flex flex-row text-slate-500 dark:text-white text-xl font-bold mb-5 w-2/3 "
            // onClick={handleToggleEducation}
          >
            <div>Education</div>

            <div className="ml-3">
              {/* <FontAwesomeIcon icon={faAngleDown} /> */}
            </div>
          </div>

          <ol
            className={`relative border-s border-gray-500 transition duration-300 ease-in-out ${
              toggleEducation ? "" : "hidden"
            }`}
          >
            <li className="mb-7 ms-4">
              <div className="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 border border-slate-500 dark:border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
                May 2023
              </time>
              <h3 className="text-md text-gray-500 font-semibold uppercase dark:text-white">
                K.J Somaiya College Of Engineering, VidyaVihar
              </h3>
              <p className=" text-sm  font-normal text-gray-400 ">
                B.Tech in IT
              </p>
              <p className="mb-4 text-sm font-normal text-gray-400">
                CGPI: 9.33
              </p>
            </li>
            <li className="mb-7 ms-4">
              <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-slate-500 dark:border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
                May 2018
              </time>
              <h3 className="text-md  text-gray-500 font-semibold uppercase dark:text-white">
                Mahila Samiti Junior College
              </h3>
              <p className="text-sm font-normal text-gray-400 ">
                Higher Secondary, Class 11-12
              </p>
              <p className="text-sm font-normal text-gray-400 ">
                Percentage: 87.6%
              </p>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-slate-500 dark:border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                April 2016
              </time>
              <h3 className="text-md text-gray-500 font-semibold uppercase dark:text-white">
                IES Chandrakant Patkar Vidyalaya
              </h3>
              <p className="text-sm font-normal text-gray-400 ">
                SSC, Class 10th
              </p>
              <p className="text-sm font-normal text-gray-400 ">
                Percentage: 95.6%
              </p>
            </li>
          </ol>
        </div>
        <div
          className="grow flex-column justify-center align-middle mt-4 ml-12 pl-5 pt-4 cursor-pointer"
          // onClick={handleToggleExperience}
        >
          <div className="flex flex-row text-slate-500 dark:text-white text-xl font-bold mb-5">
            <div>Experience</div>
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
            <li className="mb-7 ms-4">
              <div className="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 border border-slate-500 dark:border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
                June 2022 - Present
              </time>
              <h3 className="text-md text-gray-500 font-semibold uppercase dark:text-white">
                Oracle Financial Software Services | Associate Consultant
              </h3>
              <p className=" text-sm  font-normal text-gray-400 p-1">
                Led and delivered a scalable, zero-downtime containerization
                solution for a critical service, managing the entire lifecycle
                from inception to production using Crio, Kubernetes, Helm,
                Grafana, Prometheus, ELK, and Jenkins.
              </p>
              <p className=" text-sm  font-normal text-gray-400 p-1">
                Orchestrated development and administration of 6 database
                schemas. Engineered and managed end-to-end WebLogic setups for 6
                applications, ensuring robust deployment and operation.
              </p>
              <p className=" text-sm  font-normal text-gray-400 p-1">
                Oversaw Linux server management, including software
                installations, system optimization, troubleshooting, and
                infrastructure enhancement.
              </p>
              <p className=" text-sm  font-normal text-gray-400 p-1">
                Reduced 60% deployment time by automating deployment processes,
                data source creation, cronjobs, and code commits using Python
                and shell scripts in sync with Jenkins.
              </p>
            </li>
            <li className="mb-7 ms-4">
              <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-slate-500 dark:border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
                May 2020 – Aug 2020
              </time>
              <a href="https://github.com/AtharvaKitkaru/ProjectPortal.git">
                <h3 className="text-md text-gray-500 dark:text-white font-semibold uppercase flex align-middle">
                  <div>
                    K.J.S.C.E, IT Department | Software Engineering Intern
                  </div>
                  <div>
                    <FontAwesomeIcon
                      className="md:ml-2"
                      icon={faUpRightFromSquare}
                    />
                  </div>
                </h3>
              </a>
              <p className="text-sm font-normal text-gray-400 p-1">
                Crafted a comprehensive Web Portal, powered by ReactJS, Django,
                and Firebase, to automate and streamline LY Projects workflows.
              </p>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-slate-500 dark:border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
                May 2020 – Aug 2020
              </time>
              <a href="https://github.com/SIH2020sgss/">
                <h3 className="text-md text-gray-500 dark:text-white font-semibold uppercase flex align-middle">
                  <div>
                    K.J.S.C.E, IT Department | Software Engineering Intern
                  </div>
                  <div>
                    <FontAwesomeIcon
                      className="ml-2"
                      icon={faUpRightFromSquare}
                    />
                  </div>
                </h3>
              </a>
              <p className="text-sm font-normal text-gray-400 p-1">
                Created a Internship Portal for IT Department which helps
                faculties to float internships and students to find and apply
                for the same, using MERN stack with Firebase.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Qualifications;
