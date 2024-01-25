import React, { useRef } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../client-management/ClientForm.css";
import Button from "../common/button/Button";
import CancelButton from "../common/button/CancelButton";

export const ClientForm = () => {
  const history = useNavigate();
  const showModalRef = useRef(true);
  const nameRef = useRef(null);
  const descriptionRef = useRef(null);
  const technologiesRef = useRef(null);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      technologies: Array.from(
        technologiesRef.current.selectedOptions,
        (option) => option.value
      ),
    };
    console.log("Form Data:", formData);
    alert("client created successfully");
    showModalRef.current = false;
  };

  const handleCancel = () => {
    hideModal();
  };

  const hideModal = () => {
    const modals = document.getElementsByClassName("modell");
    if (modals.length > 0) {
      const modal = modals[0];
      modal.style.display = "none";
      history("/dashboard");
    }
  };

  return (
    <div>
      <Modal className="modell" show={showModalRef.current} onHide={() => {}}>
        <Modal.Header>
          <Modal.Title>
            <h5>Create Client</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleOnSubmit}>
            <div class="form-group row">
              <label for="inputName" class="col-sm-2 col-form-label">
                Name:
              </label>
              <div class="col-sm-10">
                <input
                  ref={nameRef}
                  placeholder="Enter Name"
                  type="text"
                  class="mb-2 form-control-sm form-control"
                />
              </div>
            </div>

            <div class="form-group row">
              <label for="inputDescription" class="col-sm-2 col-form-label">
                Description:
              </label>
              <div class="col-sm-10">
                <textarea
                  ref={descriptionRef}
                  placeholder="Enter Description"
                  type="text"
                  class="mb-2 form-control-sm form-control"
                ></textarea>
              </div>
            </div>

            <div class="form-group row">
              <label for="inputTechnology" class="col-sm-2 col-form-label">
                Select Technology:
              </label>
              <div className="col-sm-10">
                <select
                  ref={technologiesRef}
                  aria-controls="example"
                  className="form-control-sm form-control"
                  aria-label=".form-select-sm example"
                  multiple
                >
                  <option selected>Select</option>
                  <option value="Java">Java</option>
                  <option value="React">React</option>
                  <option value="Bootstrap">Bootstrap</option>
                </select>
              </div>
            </div>

            <div className="d-flex p-2 justify-content-between">
              <div className="create-button">
                <Button>Create</Button>
                <CancelButton type="reset" onClick={handleCancel}>
                  Cancel
                </CancelButton>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
