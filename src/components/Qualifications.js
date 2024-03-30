import React from "react";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Reveal from "../common/Reveal";

function Qualifications() {
  let ofssexp = [
    "Engineered and containerized Oracle microservices for HDFC, leveraging Kubernetes, Docker, Helm, and WebLogic Kubernetes Operator, leading to 90% decrease in system downtime.",
    "Reduced deployment time by 60% using Python and Shell scripts integrated with Jenkins CI/CD pipelines, for Java microservices.",
    "Implemented load-balancing using nginx ingress controller.",
    "Wrote custom exporters in Python, used other exporters such as node, systemd-exporter to collect metrics for monitoring of critical services. Integrated web-hook scaling of Kubernetes deployments on basis of rules in Prometheus.",
    "Collaborated with cross-functional teams to build Grafana dashboards for monitoring.",
    "Developed log monitoring using ELK stack and filebeat for incident analysis.",
    "Supported 3 go-lives for foreign branches, assisted in debugging production issues for Java microservices and PL/SQL packages.",
    "Explored Proof Of Concepts (POC) to identify project improvements.",
    "Managed 8 OCI Linux servers (systemd services, cron jobs, etc.), 6 databases and WebLogic setups. Identified and resolved bottlenecks.",
    "Created and maintained documentation such as release notes, manuals and conducted training sessions team on DevOps",
    "Recipient of Dashing Debutant Award",
  ];
  let ppexp = [
    "Streamlined the Final Year Project process by architecting a full-stack web application.",
    "Leveraged React.js for a user-friendly, modular and responsive UI, while Redux facilitated efficient state management.",
    "Developed robust RESTful APIs using Django REST Framework, and integrated secure Firebase authentication",
  ];
  return (
    <div id="qualifications" className="page py-10">
      <div className="header flex flex-row justify-center align-middle  mb-[1rem] md:mt-[10rem] md:mb-[3rem]">
        <div className="page-heading text-black dark:text-white">
          <Reveal>
            {" "}
            Qualifications<span className="text-red-500">.</span>
          </Reveal>
        </div>
        <div className="w-full h-[1px] bg-slate-600 dark:bg-slate-300 m-auto opacity-30"></div>
      </div>

      <div className="flex flex-col md:flex-row justify-center align-middle">
        <div className=" flex-column justify-center align-middle mt-4 pl-5 pt-4">
          <div className="flex flex-row text-copy dark:text-white text-xl font-bold mb-5 w-2/3">
            <Reveal>
              <div>Education</div>
            </Reveal>
          </div>

          <ol className="relative border-s border-gray-500 transition duration-300 ease-in-out">
            <li className="mb-7 ms-4">
              <div className="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 border border-slate-500 dark:border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-copy-lighter ">
                <Reveal>May 2023</Reveal>
              </time>
              <h3 className="text-md text-copy-light font-semibold uppercase dark:text-white">
                <Reveal>K.J Somaiya College Of Engineering, VidyaVihar</Reveal>
              </h3>
              <p className=" text-sm  font-normal text-copy-lighter ">
                <Reveal>B.Tech in IT</Reveal>
              </p>
              <p className="mb-4 text-sm font-normal text-copy-lighter">
                <Reveal> CGPI: 9.33</Reveal>
              </p>
            </li>
            <li className="mb-7 ms-4">
              <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-slate-500 dark:border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-copy-lighter ">
                <Reveal>May 2018</Reveal>
              </time>
              <h3 className="text-md  text-copy-light font-semibold uppercase dark:text-white">
                <Reveal> Mahila Samiti Junior College</Reveal>
              </h3>
              <p className="text-sm font-normal text-copy-lighter ">
                <Reveal>Higher Secondary, Class 11-12</Reveal>
              </p>
              <p className="text-sm font-normal text-copy-lighter ">
                <Reveal> Percentage: 87.6%</Reveal>
              </p>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-slate-500 dark:border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-copy-lighter">
                <Reveal>April 2016</Reveal>
              </time>
              <h3 className="text-md text-copy-light font-semibold uppercase dark:text-white">
                <Reveal>IES Chandrakant Patkar Vidyalaya</Reveal>
              </h3>
              <p className="text-sm font-normal text-copy-lighter ">
                <Reveal>SSC, Class 10th</Reveal>
              </p>
              <p className="text-sm font-normal text-copy-lighter ">
                <Reveal>Percentage: 95.6%</Reveal>
              </p>
            </li>
          </ol>
        </div>
        <div className="grow flex-column justify-center align-middle mt-4 md:ml-12 pl-5 pt-4">
          <div className="flex flex-row text-copy dark:text-white text-xl font-bold mb-5">
            <div>
              <Reveal>Experience</Reveal>
            </div>
            <div>
              <div className="ml-3"></div>
            </div>
          </div>

          <ol className="relative border-s border-gray-500">
            <section id="ofss">
              <li className="mb-7 ms-4">
                <div className="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 border border-slate-500 dark:border-white"></div>
                <time className="mb-1 text-sm font-normal leading-none text-copy-lighter ">
                  <Reveal> June 2022 - Present</Reveal>
                </time>
                <h3 className="text-md text-copy-light font-semibold uppercase dark:text-white">
                  <Reveal>
                    Oracle Financial Software Services | Associate Consultant
                  </Reveal>
                </h3>
                {ofssexp.map((exp) => (
                  <p className=" text-sm  font-normal text-copy-lighter p-1">
                    <Reveal>{exp}</Reveal>
                  </p>
                ))}
              </li>
            </section>
            <li className="mb-7 ms-4">
              <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-slate-500 dark:border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-copy-lighter ">
                <Reveal>May 2020 – Aug 2020</Reveal>
              </time>
              <Reveal>
                <a href="https://github.com/AtharvaKitkaru/ProjectPortal.git">
                  <h3 className="text-md text-copy-light dark:text-white font-semibold uppercase flex align-middle">
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
                  </h3>
                </a>
              </Reveal>

              {ppexp.map((pp) => (
                <p className="text-sm font-normal text-copy-lighter p-1">
                  <Reveal>{pp}</Reveal>
                </p>
              ))}
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-slate-500 dark:border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-copy-lighter ">
                <Reveal>May 2020 – Aug 2020</Reveal>
              </time>
              <Reveal>
                <a href="https://github.com/SIH2020sgss/">
                  <h3 className="text-md text-copy-light dark:text-white font-semibold uppercase flex align-middle">
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
              </Reveal>
              <p className="text-sm font-normal text-copy-lighter p-1">
                <Reveal>
                  Built an Internship Portal for the IT Department using ReactJS
                  for a dynamic, responsive UI, Express.js for server-side
                  functionality, MongoDB, and Firebase for authentication and
                  security.
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
