// Certifications.js
import React, { useState } from "react";
import Modal from "react-modal";
import { motion } from "framer-motion";
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
      "https://file.notion.so/f/f/519ceb50-14d2-4065-964d-455f317f99e1/1aa663ea-cb86-46cd-a904-53280fb53e27/k8.pdf?id=a3162c1e-42e8-4aec-b15e-b62a5b6d12fa&table=block&spaceId=519ceb50-14d2-4065-964d-455f317f99e1&expirationTimestamp=1707048000000&signature=ETUMeJ9kebyNt51T_gTW6ERK5gyi7ilW9yJIITWItvI&downloadName=ARCHITECTING+WITH+GOOGLE+KUBERNETES+ENGINE+%3A+WORKLOADS+CERTIFICATE.pdf",
  },
  {
    name: "AWS Cloud Techincal Essentials",
    image: awsImage,
    description:
      "This course introduces AWS services for compute, storage, and database, covers AWS security, IAM, Amazon EC2, AWS Lambda, Amazon ECS, Amazon RDS, Amazon DynamoDB, and Amazon S3. It also teaches how to monitor and optimize cloud infrastructure.",
    pdfLink:
      "https://file.notion.so/f/f/519ceb50-14d2-4065-964d-455f317f99e1/7af30903-fbbd-4393-b4b0-999b418cbfc7/P3DXRPCAXWLL.pdf?id=e62116d3-3606-4c66-979e-0972a91c70e7&table=block&spaceId=519ceb50-14d2-4065-964d-455f317f99e1&expirationTimestamp=1707048000000&signature=h8RgXHs3vexE9sweN7nmbTtECKObecHu06t1-EuG0qM&downloadName=AWS+Cloud+Technical+Essentials+Certificate.pdf",
  },
  {
    name: "Browser based models using Tensor flow",
    image: tfImage,
    description:
      "This course teaches you how to train and run ML models in any browser using TensorFlow.js. You’ll learn how to handle data in the browser, use pre-trained models, and build a computer vision project with a webcam.",
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

  const closeCertificationsModal = () => {
    setSelectedCertification(null);
    setCertificationsModalOpen(false);
  };

  return (
    <div id="certifications" className="page py-10">
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
          <motion.div
            key={index}
            className="bg-gray-300 dark:bg-gray-700  rounded-md p-5 backdrop-blur-md cursor-pointer"
            whileHover={{
              scale: 1.05,
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
                <div className="line-clamp-3">{certification.description}</div>
              </Reveal>
            </div>

            <div
              className="text-blue-500 dark:text-blue-300 text-sm"
              onClick={() => openCertificationsModal(certification)}
            >
              <Reveal>Read more</Reveal>
            </div>
          </motion.div>
        ))}
      </div>

      <Modal
        className="modal text-black dark:text-white bg-white dark:bg-gray-500 rounded-md p-4 m-auto mt-20 w-[90vw] min-h-[80vh] md:w-2/3 "
        isOpen={isCertificationsModalOpen}
        onRequestClose={closeCertificationsModal}
      >
        {selectedCertification && (
          <div className="font-poppins">
            <h2 className="text-lg font-bold mb-4 uppercase">
              {selectedCertification.name}
            </h2>
            <iframe
              src={selectedCertification.pdfLink}
              title={selectedCertification.name}
              className="w-full min-h-[50vh] rounded-md"
            ></iframe>
            <div className="pt-4 text-sm ">
              {selectedCertification.description}
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
              onClick={closeCertificationsModal}
            >
              Close
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Certifications;
