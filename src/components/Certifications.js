// Certifications.js
import React, { useState } from "react";
import Modal from "react-modal";

const certificationsData = [
  {
  },
  {
    name: "Certification 2",
    pdfLink: "https://example.com/certification2.pdf",
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
    <div id="certifications" className="page dark:bg-yellow-500">
      <div className="page-heading mb-6">Certifications</div>

      <div className="">
        {certificationsData.map((certification, index) => (
          <div key={index} className="mb-2 cursor-pointer">
            <div
              className="text-blue-500 dark:text-blue-300 underline"
              onClick={() => openCertificationsModal(certification)}
            >
              {certification.name}
            </div>
          </div>
        ))}
      </div>

      <Modal
        className="modal bg-white dark:bg-gray-800 rounded-md p-4 mx-auto mt-10 w-96"
        isOpen={isCertificationsModalOpen}
        onRequestClose={closeCertificationsModal}
      >
        {selectedCertification && (
          <div className="text-center">
            <h2 className="text-lg font-bold mb-4">
              {selectedCertification.name}
            </h2>
            <iframe
              src={selectedCertification.pdfLink}
              title={selectedCertification.name}
              className="w-full h-64"
            ></iframe>
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
