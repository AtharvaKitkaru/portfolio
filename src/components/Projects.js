import React from "react";
import "./Projects.css";
import Reveal from "../common/Reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";
import { motion, AnimatePresence, easeIn } from "framer-motion";

const tags = {
  reactjs: (
    <div className="text-gray-600 bg-green-300 text-xs p-1 rounded-md">
      #reactjs
    </div>
  ),
  php: (
    <div className="text-gray-600 bg-blue-300 text-xs p-1 rounded-md">#php</div>
  ),
  jquery: (
    <div className="text-gray-600 bg-slate-300 text-xs p-1 rounded-md">
      #jquery
    </div>
  ),
  django: (
    <div className="text-gray-600 bg-purple-300 text-xs p-1 rounded-md">
      #django
    </div>
  ),
  firebase: (
    <div className="text-white bg-gray-600 text-xs p-1 rounded-md">
      #firebase
    </div>
  ),
  nodejs: (
    <div className="text-white bg-green-600 text-xs p-1 rounded-md">
      #nodejs
    </div>
  ),
  bootstrap: (
    <div className="text-white bg-pink-600 text-xs p-1 rounded-md">
      #bootstrap
    </div>
  ),
  pubnub: (
    <div className="text-gray-600 bg-pink-300 text-xs p-1 rounded-md">
      #pubnub
    </div>
  ),
  sql: (
    <div className="text-gray-600 bg-red-300 text-xs p-1 rounded-md">#sql</div>
  ),
  tensorflow: (
    <div className="text-white bg-red-600 text-xs p-1 rounded-md">
      #tensorflow
    </div>
  ),
  rnn: (
    <div className="text-white bg-blue-600 text-xs p-1 rounded-md">#rnn</div>
  ),
  tfidf: (
    <div className="text-gray-600 bg-orange-300 text-xs p-1 rounded-md">
      #tfidf
    </div>
  ),
  fastext: (
    <div className="text-gray-600 bg-yellow-300 text-xs p-1 rounded-md">
      #fastext
    </div>
  ),
  bert: (
    <div className="text-white bg-blue-600 text-xs p-1 rounded-md">#bert</div>
  ),
  baselineclassifiers: (
    <div className="text-gray-600 bg-orange-300 text-xs p-1 rounded-md">
      #baselineclassifiers
    </div>
  ),
  neuralnetworks: (
    <div className="text-gray-600 bg-yellow-300 text-xs p-1 rounded-md">
      #neuralnetworks
    </div>
  ),
  python: (
    <div className="text-gray-600 bg-yellow-500 text-xs p-1 rounded-md">
      #python
    </div>
  ),
  numpy: (
    <div className="text-gray-600 bg-gray-300 text-xs p-1 rounded-md">
      #numpy
    </div>
  ),
  pandas: (
    <div className="text-white bg-violet-600 text-xs p-1 rounded-md">
      #pandas
    </div>
  ),
  knn: (
    <div className="text-white bg-indigo-500 text-xs p-1 rounded-md">#knn</div>
  ),
  flutter: (
    <div className="text-white bg-cyan-500 text-xs p-1 rounded-md">
      #flutter
    </div>
  ),
  html: (
    <div className="text-gray-600 bg-cyan-200 text-xs p-1 rounded-md">
      #html
    </div>
  ),
  css: (
    <div className="text-gray-600 bg-indigo-300 text-xs p-1 rounded-md">
      #css
    </div>
  ),
  ganache: (
    <div className="text-white bg-indigo-900 text-xs p-1 rounded-md">
      #ganache
    </div>
  ),
  metamask: (
    <div className="text-white bg-pink-900 text-xs p-1 rounded-md">
      #metamask
    </div>
  ),
  solidity: (
    <div className="text-white bg-green-900 text-xs p-1 rounded-md">
      #solidity
    </div>
  ),
  truffle: (
    <div className="text-white bg-blue-900 text-xs p-1 rounded-md">
      #truffle
    </div>
  ),
  web3: (
    <div className="text-white bg-red-900 text-xs p-1 rounded-md">#web3</div>
  ),
  blockchain: (
    <div className="text-gray-600 bg-indigo-100 text-xs p-1 rounded-md">
      #blockchain
    </div>
  ),
};

const projects = {
  mcfd: {
    title: "Multilabel Classifier for sites on DarkWeb",
    tags: ["tensorflow", "rnn", "tfidf", "fastext", "python"],
    gitlink:
      "https://github.com/AtharvaKitkaru/multilabel-classifier-for-darkweb.git",
    description:
      "A multi-label classifier that classifies websites scraped from Dark Web. ML approaches- supervised learning, self-training, transfer learning have been utilized, have been utilized and results for each compared.",
  },
  gamerse: {
    title: "Gamerse | A Multiplayer Gaming Web Portal",
    tags: ["reactjs", "php", "sql", "firebase", "bootstrap", "pubnub"],
    gitlink: "https://github.com/gamerse-integrated/gamerse-dev",
    projectlink: "https://gamersenish.000webhostapp.com/",
    description:
      "Gamerse is a multiplayer gaming portal which offers a thrilling gaming experience with two games: Snakes and Tic Tac Toe. It has various features to enhance your gaming experience, including real-time challenges, in-game chat, personal messaging, a global chat for connecting with strangers, and 'Explore' tab to discover new friends.",
  },
  stance: {
    title: "Stance Detection from Text",
    tags: [
      "tensorflow",
      "bert",
      "neuralnetworks",
      "baselineclassifiers",
      "python",
    ],
    gitlink: "https://github.com/AtharvaKitkaru/stance-detection-from-text",
    description:
      "A ML powered web application that takes text and target as input, and detects the stance of the text w.r.t target. Developed around 60 models with different types of classifiers and neural networks, compared their results and provided them all to be used in the web-app.",
  },
  cvd: {
    title: "CardioVascular Disease Predictor",
    tags: ["python", "numpy", "pandas", "seaborn", "knn"],
    gitlink:
      "https://github.com/AtharvaKitkaru/cardiovascular-disease-predictor.git",
    description:
      "Cardiovascular disease (CVD) Prediction model uses Python and popular data analysis libraries such as Pandas, Numpy, and Seaborn, takes input as patient's symptoms and utilizes the K-Nearest Neighbors algorithm to predict whether the person is likely to have cardiovascular disease or not.",
  },
  noteify: {
    title: "Noteify",
    tags: ["flutter", "firebase"],
    gitlink: "https://github.com/AtharvaKitkaru/noteify.git",
    description:
      "An Android note-taking and management app that allows users to create notes, add images, sort notes, categorize them by labels, move notes to trash and restore them.",
  },
  spotify: {
    title: "Spotify Clone",
    tags: ["php", "html", "css", "sql", "jquery"],
    gitlink: "https://github.com/AtharvaKitkaru/spotify-clone.git",
    description: "A clone of Spotify Web",
  },
  rsc: {
    title: "Retirement Savings Calculator",
    tags: ["css", "reactjs"],
    gitlink: "https://github.com/AtharvaKitkaru/retirement-savings-calculator",
    projectlink: "https://retirement-savings-calculator.vercel.app/",
    description:
      "The Retirement Savings Calculator is a React-based web application designed to assist users in planning their financial future. By simulating savings data both pre and post-retirement, the calculator provides valuable insights into your financial journey.",
  },
  gb: {
    title: "GoodBooks",
    tags: ["django", "sql", "bootstrap", "html", "css"],
    gitlink: "https://github.com/AtharvaKitkaru/goodbooks.git",
    description:
      "A book cataloging website where users can look up books, sort, compare and provide reviews using Django, HTML, CSS, Bootstrap and SQLite.",
  },
  knack: {
    title: "Knack",
    tags: [
      "nodejs",
      "reactjs",
      "solidity",
      "truffle",
      "ganache",
      "metamask",
      "web3",
      "blockchain",
    ],
    gitlink: "https://github.com/AtharvaKitkaru/knack",
    description:
      "A blockchain-based decentralized music streaming platform where artists can share their music while ensuring ownership and avoiding duplication of their music. People can listen to songs and support the artists by making micropayments through our custom crypto tokens.",
  },
};

const Projects = () => {
  const ref = useRef(null);
  const [sliderIndex, setSliderIndex] = useState(0);
  let slideAmount = window.innerWidth >= 768 ? 43 : 103;

  const translateLeft = () => {
    if (sliderIndex < 0) {
      setSliderIndex((sliderIndex + 1) % Object.keys(projects).length);
    }
  };

  const translateRight = () => {
    setSliderIndex((sliderIndex - 1) % Object.keys(projects).length);
  };
  const [selectedProject, setSelectedProject] = useState(null);
  const [isProjectsModalOpen, setProjectsModalOpen] = useState(false);

  const openProjectsModal = (project) => {
    setSelectedProject(project);
    setProjectsModalOpen(true);
  };

  return (
    <div id="projects" className="page py-10">
      <div className="header flex flex-row justify-center align-middle">
        <div className="page-heading text-black dark:text-white mb-10">
          <Reveal>
            Projects<span className="text-red-500">.</span>
          </Reveal>
        </div>
        <div className="w-full h-[1px] bg-slate-600 dark:bg-slate-300 m-auto opacity-30"></div>
      </div>
      <div className="relative m-auto z-0 w-[100%] overflow-hidden p-3">
        <div
          className="left-[0%] top-[40%] w-14 z-10 bg-white text-black absolute p-5 hover:cursor-pointer opacity-60 rounded-lg "
          onClick={translateLeft}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </div>
        <div
          className="absolute right-[0%] top-[40%] w-14 z-10 bg-white text-black p-5 hover:cursor-pointer rounded-lg opacity-60"
          onClick={translateRight}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </div>

        <motion.div
          ref={ref}
          animate={{
            x: `${sliderIndex * slideAmount}%`,
          }}
          transition={{ type: "spring", duration: 0.5 }}
          className="flex flex-row gap-2 md:gap-4 items-center w-full z-10 "
        >
          {Object.keys(projects).map((projectId) => {
            const project = projects[projectId];
            return (
              <motion.div
                key={projectId}
                className="min-w-full min-h-[55dvh] md:min-w-[40%] md:min-h-[40dvh] bg-gray-300 dark:bg-gray-700 p-2 backdrop-blur-md cursor-pointer  rounded-xl transition-transform hover:scale-105 hover:cursor-pointer focus-visible:scale-105 focus:scale-105 -z-10"
                whileHover={{ scale: 1.05 }}
                onClick={() => openProjectsModal(project)}
              >
                <div className="text-black dark:text-white font-semibold text-lg uppercase p-1 font-poppins">
                  <Reveal>{project.title}</Reveal>
                </div>
                <div className="text-slate-500 dark:text-slate-300 text-sm  my-4">
                  <Reveal>
                    <div className="line-clamp-2">{project.description}</div>
                  </Reveal>
                </div>
                <div
                  className="text-blue-500 dark:text-blue-300 text-sm"
                  onClick={() => openProjectsModal(project)}
                >
                  <Reveal>Read more</Reveal>
                </div>
                <Reveal>
                  <div className="flex flex-wrap p-2">
                    {project.tags.map((tag) => (
                      <div key={tag} className="pr-2 pt-2">
                        {tags[tag]}
                      </div>
                    ))}
                  </div>
                </Reveal>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      <AnimatePresence>
        {isProjectsModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setProjectsModalOpen(false)}
            className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer min-w-4/5 md:w-auto"
          >
            <motion.div
              initial={{ scale: 0, rotate: "12.5deg" }}
              animate={{ scale: 1, rotate: "0deg" }}
              exit={{ scale: 0, rotate: "0deg" }}
              transition={{ duration: 0.35, ease: easeIn }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-copy to-copy-light text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative"
            >
              <div className="relative z-10">
                <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto"></div>

                <h3 className="text-2xl font-bold text-center mb-2">
                  {selectedProject.name}
                </h3>
                {/* <iframe
                  src={selectedProject.pdfLink}
                  title={selectedProject.name}
                  className="w-full min-h-[50vh] rounded-md py-1"
                ></iframe> */}
                <p className="text-center text-sm py-3 mb-6">
                  {selectedProject.description}
                </p>
                <div className="flex flex-row justify-center items-center gap-3 mb-5">
                  <a
                    href={selectedProject.gitlink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="text-white hover:opacity-90 transition-opacity bg-indigo-600 font-semibold w-full p-2 rounded-xl">
                      Source code
                    </button>
                  </a>
                  {selectedProject.projectlink && (
                    <a
                      href={selectedProject.projectlink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="text-white hover:opacity-90 transition-opacity bg-indigo-600 font-semibold w-full p-2 rounded-xl">
                        Live Project
                      </button>
                    </a>
                  )}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setProjectsModalOpen(false)}
                    className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded-xl"
                  >
                    Got it!
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
