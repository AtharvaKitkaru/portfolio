import React, { useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

Modal.setAppElement("#root"); // Set the root element for accessibility

const CertificationsModal = ({
  certificationLinks,
  isOpen,
  onRequestClose,
}) => {
  const [selectedCertification, setSelectedCertification] = useState(null);

  const openCertification = (certification) => {
    setSelectedCertification(certification);
  };

  const closeCertification = () => {
    setSelectedCertification(null);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Certifications Modal"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div className="modal-header">
        <h2>Certifications</h2>
        <button onClick={onRequestClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>

      <div className="modal-body">
        {certificationLinks.map((certification, index) => (
          <div key={index} className="certification-link">
            <button onClick={() => openCertification(certification)}>
              {certification.name}
            </button>
          </div>
        ))}
      </div>

      {selectedCertification && (
        <div className="pdf-modal">
          <iframe
            title={selectedCertification.name}
            src={selectedCertification.link}
          />
          <button onClick={closeCertification}>Close</button>
        </div>
      )}
    </Modal>
  );
};

export default CertificationsModal;
