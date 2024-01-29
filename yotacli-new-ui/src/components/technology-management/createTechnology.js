import React, { useState } from "react";
import { Modal } from "react-bootstrap";

export const CreateTechnology = () => {
  const [showModal, setShowModal] = useState(true);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    alert("Unit htmlForm created successfully");
    setShowModal(false);
  };
  return (
    <div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Unit htmlForm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>CreateTechnology</h1>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default CreateTechnology;

