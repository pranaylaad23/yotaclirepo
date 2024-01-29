import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./ListUnit.css";
import CreateUnitForm from "../add-unit/CreateUnitForm.jsx";
import "../../common/button/Button.jsx";

const ListUnit = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div>
        <h2> Unit List </h2>
      </div>
      <div>
        <Button className="create-unit-button" onClick={openModal}>
          Create Unit
        </Button>
        {isModalOpen && <CreateUnitForm closeModal={closeModal} />}
      </div>
    </div>
  );
};

export default ListUnit;
