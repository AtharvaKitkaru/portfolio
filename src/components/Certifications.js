// Certifications.js
import React, { useState } from "react";
import { motion, AnimatePresence, easeIn } from "framer-motion";
import Reveal from "../common/Reveal";
import awsImage from "../assets/aws.png";
import gkeImage from "../assets/gke.png";
import tfImage from "../assets/tf.png";

const certificationsData = [
  {
    name: "Architecting with Google Kubernetes Engine : Workloads",
    image: gkeImage,
    description:
      "This course teaches Kubernetes operations, deployment management, and GKE networking and storage.",
    pdfLink:
      "https://drive.google.com/file/d/1c8uZn7ELAFfa9XOIo79_Kzt9kNSW7hqV/preview",
  },
  {
    name: "AWS Cloud Techincal Essentials",
    image: awsImage,
    description:
      "This course introduces AWS services for compute, storage, and database, covers AWS security, IAM, Amazon EC2, AWS Lambda, Amazon ECS, Amazon RDS, Amazon DynamoDB, and Amazon S3. It also teaches how to monitor and optimize cloud infrastructure.",
    pdfLink:
      "https://drive.google.com/file/d/1NdSv5GkZgYXMFoSSmkEMZozqipYtWHw2/preview",
  },
  {
    name: "Browser based models using Tensor flow",
    image: tfImage,
    description:
      "This course teaches you how to train and run ML models in any browser using TensorFlow.js. You’ll learn how to handle data in the browser, use pre-trained models, and build a computer vision project with a webcam.",
    pdfLink:
      "https://drive.google.com/file/d/1UP_AEyVz9XEjFPIuXjwdgog7nohy6Wa3/preview",
  },
  // Add more certifications as needed
];

const Certifications = () => {
  const [selectedCertification, setSelectedCertification] = useState(null);
  const [isCertificationsModalOpen, setCertificationsModalOpen] =
    useState(false);

  const openCertificationsModal = (certification) => {
    setSelectedCertification(certification);
    setCertificationsModalOpen(true);
  };

  return (
    <motion.div
      id="certifications"
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
      <div className="header flex flex-row justify-center align-middle">
        <div className="page-heading text-black dark:text-white">
          <Reveal>
            {" "}
            Certifications<span className="text-red-500">.</span>
          </Reveal>
        </div>
        <div className="w-full h-[1px] bg-slate-600 dark:bg-slate-300 m-auto opacity-30"></div>
      </div>
      <div className="grid grid-flow-row  md:grid-cols-3 gap-4 mt-10">
        {certificationsData.map((certification, index) => (
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
              onClick={() => openCertificationsModal(certification)}
            >
              <motion.div className="mb-4">
                <img
                  src={certification.image}
                  className="rounded-md w-full h-full"
                  alt="certificate"
                />
              </motion.div>
              <div className="text-black dark:text-white font-semibold text-lg uppercase">
                <Reveal> {certification.name}</Reveal>
              </div>
              <div className="text-slate-500 dark:text-slate-300 text-sm  my-4 ">
                <Reveal>
                  <div className="line-clamp-3">
                    {certification.description}
                  </div>
                </Reveal>
              </div>

              <div
                className="text-blue-500 dark:text-blue-300 text-sm"
                onClick={() => openCertificationsModal(certification)}
              >
                <Reveal>Read more</Reveal>
              </div>
            </motion.div>
          </AnimatePresence>
        ))}
      </div>
      <AnimatePresence>
        {isCertificationsModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCertificationsModalOpen(false)}
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
                  {selectedCertification.name}
                </h3>
                <iframe
                  src={selectedCertification.pdfLink}
                  title={selectedCertification.name}
                  className="w-full min-h-[50vh] rounded-md py-1"
                ></iframe>
                <p className="text-center text-sm py-3 mb-6">
                  {selectedCertification.description}
                </p>

                <div className="flex gap-2">
                  <button
                    onClick={() => setCertificationsModalOpen(false)}
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

export default Certifications;
