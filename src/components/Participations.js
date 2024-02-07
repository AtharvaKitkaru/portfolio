// Participations.js
import React, { useState } from "react";
import { motion, AnimatePresence, easeIn } from "framer-motion";
import Reveal from "../common/Reveal";
import awsImage from "../assets/aws.png";
import gkeImage from "../assets/gke.png";
import tfImage from "../assets/tf.png";

const participationsData = [
  {
    name: "CodeShastra 8.0",
    // image: gkeImage,
    description:
      "CodeShastra 8.0 hackathon, D.J Sanghvi College Of Engineering. We developed Knack: A decentralized blockchain based music streaming platform. ",
    pdfLink:
      "https://file.notion.so/f/f/519ceb50-14d2-4065-964d-455f317f99e1/68b556fb-ef58-481c-bb40-144246d0bcea/generated.pdf?id=ed53af8d-e549-4a57-aeb6-207ffa8d354f&table=block&spaceId=519ceb50-14d2-4065-964d-455f317f99e1&expirationTimestamp=1707408000000&signature=TyzY_emojsvUP0AvsyLoVRmrlVeNO9FCsnnU-QNO5dg&downloadName=generated.pdf",
    gitLink: "https://github.com/AtharvaKitkaru/knack",
  },
  {
    name: "KJSCE Hack 5.0",
    // image: awsImage,
    description: "KJSCE Hack 5.0 hackathon, CodeCell of KJSCE. ",
    pdfLink:
      "https://file.notion.so/f/f/519ceb50-14d2-4065-964d-455f317f99e1/a3c480e2-03a5-4a9b-8a6d-a5494505acad/Atharva_Kitkaru_-_KJSCE_Hack_5.pdf?id=3967a8d1-cda3-4d52-89b5-74b4e18b0c71&table=block&spaceId=519ceb50-14d2-4065-964d-455f317f99e1&expirationTimestamp=1707408000000&signature=tFiFK0do4hvaBmb4BtYfG3yqiBkULSCmXkLboJdEMrA&downloadName=Atharva+Kitkaru+-+KJSCE+Hack+5.pdf",
    gitLink: "https://github.com/ZenithANAP",
  },
  {
    name: "Hackerbash",
    // image: tfImage,
    description:
      "Hackerbash hackathon, a 24hr online hackathon conducted by CSI department of KJSCE",
    pdfLink:
      "https://file.notion.so/f/f/519ceb50-14d2-4065-964d-455f317f99e1/496fab25-89c9-46bf-afa8-5be0e7299a37/Hackathon.png?id=427b3fcb-e19f-424e-953d-8753a25672a4&table=block&spaceId=519ceb50-14d2-4065-964d-455f317f99e1&expirationTimestamp=1707408000000&signature=x1g8L7OBP2oXuVMxHh-uDmmDe6ptk37Ydxfe-iGnHco&downloadName=Hackathon.png",
    gitLink: "https://github.com/Hackerbash2021",
  },
  // Add more participations as needed
];

const Participations = () => {
  const [selectedParticipation, setSelectedParticipation] = useState(null);
  const [isParticipationsModalOpen, setParticipationsModalOpen] =
    useState(false);

  const openParticipationsModal = (participation) => {
    setSelectedParticipation(participation);
    setParticipationsModalOpen(true);
  };

  return (
    <motion.div
      id="participations"
      className="page py-10"
      initial={{
        y: 75,
      }}
      exit={{
        y: 75,
      }}
      transition={{
        type: "spring",
        duration: 2.5,
        ease: easeIn,
      }}
    >
      <div className="header flex flex-row-reverse justify-center align-middle">
        <div className="page-heading text-black dark:text-white">
          <Reveal>
            {" "}
            Participations<span className="text-red-500">.</span>
          </Reveal>
        </div>
        <div className="w-full h-[1px] bg-slate-600 dark:bg-slate-300 m-auto opacity-30"></div>
      </div>
      <div className="grid grid-flow-row  md:grid-cols-3 gap-4 mt-10">
        {participationsData.map((participation, index) => (
          <AnimatePresence>
            <motion.div
              key={index}
              className="bg-gray-300 dark:bg-gray-700  rounded-md p-5 backdrop-blur-md cursor-pointer"
              initial={{
                y: 75,
              }}
              whileInView={{
                y: 0,
                transition: {
                  type: "spring",
                  duration: 2.5,
                  ease: easeIn,
                },
              }}
              whileHover={{
                scale: 1.05,
                transition: {
                  type: "spring",
                  duration: 0.3,
                  ease: easeIn,
                },
              }}
              onClick={() => openParticipationsModal(participation)}
            >
              <motion.div className="mb-4">
                {/* <img
                  src={participation.image}
                  className="rounded-md w-full h-full"
                  alt="certificate"
                /> */}
              </motion.div>
              <div className="text-black dark:text-white font-semibold text-lg uppercase">
                <Reveal> {participation.name}</Reveal>
              </div>
              <div className="text-slate-500 dark:text-slate-300 text-sm  my-4 ">
                <Reveal>
                  <div className="line-clamp-3">
                    {participation.description}
                  </div>
                </Reveal>
              </div>

              <div
                className="text-blue-500 dark:text-blue-300 text-sm"
                onClick={() => openParticipationsModal(participation)}
              >
                <Reveal>Read more</Reveal>
              </div>
            </motion.div>
          </AnimatePresence>
        ))}
      </div>
      <AnimatePresence>
        {isParticipationsModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setParticipationsModalOpen(false)}
            className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0, rotate: "12.5deg" }}
              animate={{ scale: 1, rotate: "0deg" }}
              exit={{ scale: 0, rotate: "0deg" }}
              transition={{ duration: 0.5, ease: easeIn }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-copy to-copy-light text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative"
            >
              <div className="relative z-10">
                <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto"></div>

                <h3 className="text-2xl font-bold text-center mb-2">
                  {selectedParticipation.name}
                </h3>
                <iframe
                  src={selectedParticipation.pdfLink}
                  title={selectedParticipation.name}
                  className="w-full min-h-[50vh] rounded-md py-1"
                ></iframe>
                <p className="text-center text-sm py-3 mb-6">
                  {selectedParticipation.description}
                </p>

                <div className="flex gap-2">
                  <button
                    onClick={() => setParticipationsModalOpen(false)}
                    className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded-xl"
                  >
                    Understood!
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Participations;
