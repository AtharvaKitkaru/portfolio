import React from "react";

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
    link: "https://github.com/AtharvaKitkaru/multilabel-classifier-for-darkweb.git",
    description:
      "A multi-label classifier that classifies websites scraped from Dark Web. ML approaches- supervised learning, self-training, transfer learning have been utilized, have been utilized and results for each compared.",
  },
  gamerse: {
    title: "Gamerse | A Multiplayer Gaming Web Portal",
    tags: ["reactjs", "php", "sql", "firebase", "bootstrap", "pubnub"],
    link: "https://github.com/AtharvaKitkaru/multilabel-classifier-for-darkweb.git",
    description:
      "A multi-label classifier that classifies websites scraped from Dark Web. ML approaches- supervised learning, self-training, transfer learning have been utilized, have been utilized and results for each compared.",
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
    link: "https://github.com/AtharvaKitkaru/multilabel-classifier-for-darkweb.git",
    description:
      "A ML powered web application that takes text and target as input, and detects the stance of the text w.r.t target. Developed around 60 models with different types of classifiers and neural networks, compared their results and provided them all to be used in the web-app.",
  },
  cvd: {
    title: "CardioVascular Disease Predictor",
    tags: ["python", "numpy", "pandas", "seaborn", "knn"],
    link: "https://github.com/AtharvaKitkaru/cardiovascular-disease-predictor.git",
    description:
      "A ML powered web application that takes text and target as input, and detects the stance of the text w.r.t target. Developed around 60 models with different types of classifiers and neural networks, compared their results and provided them all to be used in the web-app.",
  },
  noteify: {
    title: "Noteify",
    tags: ["flutter", "firebase"],
    link: "https://github.com/AtharvaKitkaru/noteify.git",
    description:
      "An Android note taking and management app which allows users to create notes, add images, sort notes, categorize them by labels, move notes to trash and restore them.",
  },
  spotify: {
    title: "Spotify Clone",
    tags: ["php", "html", "css", "sql", "jquery"],
    link: "https://github.com/AtharvaKitkaru/spotify-clone.git",
    description: "A Spotify Clone",
  },
  rsc: {
    title: "Retirement Savings Calculator",
    tags: ["css", "reactjs"],
    link: "https://retirement-savings-calculator.vercel.app/",
    description:
      "The Retirement Savings Calculator is a React-based web application designed to assist users in planning their financial future. By simulating savings data both pre and post-retirement, the calculator provides valuable insights into your financial journey.",
  },
  gb: {
    title: "GoodBooks",
    tags: ["django", "sql", "bootstrap", "html", "css"],
    link: "https://github.com/AtharvaKitkaru/goodbooks.git",
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
    link: "https://github.com/AtharvaKitkaru/knack",
    description:
      "A blockchain-based decentralized music streaming platform where artists can share their music while ensuring ownership and avoiding duplication of their music. People can listen to songs and support the artists by making micropayments through our custom crypto tokens.",
  },


};

function Projects() {
  return (
    <div id="projects" className="page">
      <div className="page-heading bg-blue-500">Projects</div>
      <div className="grid grid-cols-3 gap-5 p-5 ">
        {Object.keys(projects).map((projectId) => {
          const project = projects[projectId];
          return (
            <div
              key={projectId}
              className="md:min-w-5 bg-gray-700  h-auto  p-2 rounded-md transition-transform transform hover:scale-105 hover:cursor-pointer relative"
            >
              <a href={project.link}>
                <div className="text-white font-bold text-md uppercase p-1 font-cubano">
                  {project.title}
                </div>
                <div className="text-sm p-2 font-sofia">
                  {project.description}
                </div>
                <div className=" flex flex-wrap p-2">
                  {project.tags.map((tag) => (
                    <div key={tag} className="pr-2 pt-2">
                      {tags[tag]}
                    </div>
                  ))}
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
