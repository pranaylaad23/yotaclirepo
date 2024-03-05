import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import "./ClientForm.css";
import Button from "../../common/button/Button";
import CancelButton from "../../common/button/CancelButton";
import { useDispatch, useSelector } from "react-redux";
import { createClient } from "../../../features/redux/client/clientAction";
import { fetchTechnologies } from "../../../features/redux/technology/technologyAction";

export const ClientForm = () => {
  const cancelref = useNavigate();
  const dispatch = useDispatch();
  const showModalRef = useRef(true);
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const technologyRef = useRef("");
  const techList = useSelector((state) => state.technology.techList);
  useEffect(() => {
    dispatch(fetchTechnologies());
  }, [dispatch]);

  const handleTechnologyChange = (event) => {
    technologyRef.current = event.target.value;
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const formData = {
      clientName: nameRef.current.value,
      shortDescription: descriptionRef.current.value,
      technology: Array.from(
        technologyRef.current,
        (option) => option.value
      ).join(","),
    };
    dispatch(createClient(formData));
    console.log("Form Data:", formData);
    alert("client created successfully");
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
      cancelref("/dashboard");
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
            <div className="form-group row">
              <label
                for="inputName"
                className="createclientlabelname col-sm-2 col-form-label"
              >
                Name:
              </label>
              <div className="col-sm-10">
                <input
                  ref={nameRef}
                  placeholder="Enter Name"
                  type="text"
                  className="mb-2 form-control-sm form-control"
                />
              </div>
            </div>

            <div className="form-group row">
              <label
                for="inputDescription"
                className="createclientdescription col-sm-2 col-form-label"
              >
                Description:
              </label>
              <div className="col-sm-10">
                <textarea
                  ref={descriptionRef}
                  placeholder="Enter Description"
                  type="text"
                  className="mb-2 form-control-sm form-control"
                ></textarea>
              </div>
            </div>

            <div className="form-group row">
              <label for="inputTechnology" className="col-sm-2 col-form-label">
                Select Technology:
              </label>
              <div className="col-sm-10">
                <select
                  ref={technologyRef}
                  aria-controls="example"
                  className="form-control-sm form-control"
                  aria-label=".form-select-sm example"
                  multiple
                >
                  <option value="" disabled selected>
                    Select Technology
                  </option>
                  {techList &&
                    techList.map((tech, index) => (
                      <option key={index} value={tech.name}>
                        {tech.name}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            <div className="d-flex p-2 justify-content-between">
              <div className="create-button">
                <Button>Create</Button>
              </div>
              <div className="clientCancle">
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
