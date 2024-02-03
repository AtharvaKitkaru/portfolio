// Publications.js
import React, { useState } from "react";
import Modal from "react-modal";
import { motion } from "framer-motion";
import Reveal from "../common/Reveal";
import ijrasetImage from "../assets/ijraset.png";
import ijascaImage from "../assets/ijasca.png";

const publicationsData = [
  {
    name: "A Hybrid TF-IDF and RNN Model for Multi-label Classification of the Deep and Dark Web",
    image: ijascaImage,
    description:
      "A hybrid approach combining TF-IDF and RNN has been proposed for multi-label classification of content on deep and dark web. It involves preprocessing a dataset of HTML documents, selecting specific HTML tags to generate embeddings using TF-IDF, and using an RNN model. The model was evaluated against commonly used methods using precision, recall, and F1-score as evaluation metrics, demonstrating promising results.",
    pdfLink:
      "https://thesai.org/Downloads/Volume14No7/Paper_106-A_Hybrid_TF_IDF_and_RNN_Model_for_Multi_label_Classification.pdf",
  },
  {
    name: "Cyber Bullying Detection using Machine Learning",
    image: ijrasetImage,
    description:
      "In this paper, we discussed the latest technologies like Naive Bayes, SVM, BERT models, CNN and LSTM that have been applied for cyber-bullying detection and compare the results",
    pdfLink: "https://www.ijraset.com/fileserve.php?FID=37934",
  },

  // Add more publications as needed
];

const Publications = () => {
  const [selectedPublication, setSelectedPublication] = useState(null);
  const [isPublicationsModalOpen, setPublicationsModalOpen] = useState(false);

  const openPublicationsModal = (publication) => {
    setSelectedPublication(publication);
    setPublicationsModalOpen(true);
  };

  const closePublicationsModal = () => {
    setSelectedPublication(null);
    setPublicationsModalOpen(false);
  };

  return (
    <div id="publications" className="page py-10">
      <div className="header flex flex-row-reverse justify-center align-middle">
        <div className="page-heading text-black dark:text-white">
          <Reveal>
            {" "}
            Publications<span className="text-red-500">.</span>
          </Reveal>
        </div>
        <div className="w-full h-[1px] bg-slate-600 dark:bg-slate-300 m-auto opacity-30"></div>
      </div>
      <div className="grid grid-flow-row  md:grid-cols-3 gap-4 mt-10">
        {publicationsData.map((publication, index) => (
          <motion.div
            key={index}
            className="bg-gray-300 dark:bg-gray-700  rounded-md p-5 backdrop-blur-md cursor-pointer"
            whileHover={{
              scale: 1.05,
            }}
            onClick={() => openPublicationsModal(publication)}
          >
            <motion.div className="mb-4">
              <img
                src={publication.image}
                className="rounded-md w-full h-full"
                alt="certificate"
              />
            </motion.div>
            <div className="text-black dark:text-white font-semibold text-lg uppercase">
              <Reveal> {publication.name}</Reveal>
            </div>
            <div className="text-slate-500 dark:text-slate-300 text-sm  my-4 ">
              <Reveal>
                <div className="line-clamp-5">{publication.description}</div>
              </Reveal>
            </div>

            <div
              className="text-blue-500 dark:text-blue-300 text-sm"
              onClick={() => openPublicationsModal(publication)}
            >
              <Reveal>Read more</Reveal>
            </div>
          </motion.div>
        ))}
      </div>

      <Modal
        className="modal text-black dark:text-white bg-white dark:bg-gray-500 rounded-md p-4 m-auto mt-14 w-[90vw] min-h-[80vh] md:w-2/3 "
        isOpen={isPublicationsModalOpen}
        onRequestClose={closePublicationsModal}
      >
        {selectedPublication && (
          <div className="font-poppins">
            <h2 className="text-lg font-bold mb-4 uppercase">
              {selectedPublication.name}
            </h2>
            <iframe
              src={selectedPublication.pdfLink}
              title={selectedPublication.name}
              className="w-full min-h-[50vh] rounded-md"
            ></iframe>
            <div className="pt-4 text-sm ">
              {selectedPublication.description}
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
              onClick={closePublicationsModal}
            >
              Close
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Publications;
