import React, { useState } from "react";
import Reveal from "../common/Reveal";
import skillsSvg from "../assets/skills.png";

const skillsData = {
  frontend: [
    "React.js",
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwindcss",
    "Bootstrap",
    "JQuery",
  ],
  backend: [
    "Node.js",
    "Django",
    "Express.js",
    "Firebase",
    "SQL",
    "MongoDB",
    "PHP",
    "Java",
  ],
  devops: [
    "Docker",
    "Kubernetes",
    "Helm",
    "Jenkins",
    "Git",
    "Crio",
    "ELK",
    "Grafana",
    "Prometheus",
  ],
  machineLearning: [
    "TensorFlow",
    "Pandas",
    "Scikit-Learn",
    "Numpy",
    "Matplotlib",
    "Seaborn",
    "Neural Networks",
    "Baseline Classifiers",
  ],
  android: ["Flutter", "Firebase"],
  sysAdmin: ["Linux", "AWS", "Shell Scripting", "Networking"],
};

function Skills() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div id="skills" className="page  py-10">
      <div className="header flex flex-row-reverse justify-center align-middle mt-[1rem] mb-[1rem] md:mt-[10rem] md:mb-[5rem]">
        <div className="page-heading text-black dark:text-white">
          <Reveal>
            {" "}
            Skills<span className="text-red-500">.</span>
          </Reveal>
        </div>
        <div className="w-full h-[1px] bg-slate-600 dark:bg-slate-300 m-auto opacity-30"></div>
      </div>
      <div className="md:flex md:flex-row">
        <div className="md:flex-1 md:p-0">
          <img src={skillsSvg} className="" alt="skills" />
        </div>
        <div className="max-w-xl mx-auto md:flex-1">
          {Object.entries(skillsData).map(([category, skills], index) => (
            <div key={category} className="mb-4">
              <div
                className={`m-auto cursor-pointer w-[90vw] md:w-auto flex justify-between items-center py-3 px-4 ${
                  activeAccordion === index
                    ? "bg-indigo-500 text-white"
                    : "bg-gray-300 dark:bg-gray-500 text-gray-800"
                } rounded-md transition duration-300 ease-in-out`}
                onClick={() => handleAccordionClick(index)}
              >
                <div className="text-xl font-bold uppercase">
                  {category.replace(/([A-Z])/g, " $1").trim()}
                </div>
                <div className="ml-2">
                  {activeAccordion === index ? "-" : "+"}
                </div>
              </div>
              {activeAccordion === index && (
                <div className="m-auto w-[90vw] md:w-auto bg-white dark:bg-gray-700 px-4 pt-2 pb-4 rounded-b-md transition duration-300 ease-in-out">
                  <div className="flex flex-wrap">
                    {skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className={`${
                          activeAccordion === index
                            ? "bg-indigo-500 text-white"
                            : "bg-gray-300 dark:bg-gray-600 text-gray-800"
                        } px-2 py-1 m-1 rounded-full text-sm`}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
