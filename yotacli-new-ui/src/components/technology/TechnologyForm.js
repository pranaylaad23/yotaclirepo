import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import "../technology/TechnologyForm.css";
import Button from "../common/button/Button";
import CancelButton from "../common/button/CancelButton";
export const TechnologyForm = () => {
  const history = useNavigate();
  const showModalRef = useRef(true);
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: nameRef.current.value,
      description: descriptionRef.current.value,
    };
    console.log("Form Data:", formData);
    alert("Technology created successfully");
    hideModal();
  };
  const handleCancel = () => {
    hideModal();
  };
  const hideModal = () => {
    const modals = document.getElementsByClassName("modell");
    if (modals.length > 0) {
      const modal = modals[0];
      modal.style.display = "none";
      history("/Dashboard");
    }
  };
  return (
    <div>
      <Modal className="modell" show={showModalRef.current} onHide={() => {}}>
        <Modal.Header>
          <Modal.Title>
            <h6>Add Technology</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleOnSubmit}>
            <div className="form-group row">
              <label htmlFor="inputName" className="col-sm-2">
                Name
              </label>
              <div className="col-sm-10">
                <input
                  ref={nameRef}
                  name="name"
                  placeholder="Enter Name"
                  type="text"
                  className="mb-2 form-control-sm form-control"
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputDescription" className="col-sm-2">
                Description
              </label>
              <div className="col-sm-10">
                <textarea
                  ref={descriptionRef}
                  name="description"
                  placeholder="Enter Description"
                  id="exampleText"
                  className="mb-2 form-control-sm form-control"
                ></textarea>
              </div>
            </div>
            <div className="submit-button">
              <Button type="submit">Add</Button>
              <CancelButton type="reset" className="cancel" onClick={handleCancel}>
                Cancel
              </CancelButton>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
