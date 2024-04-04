import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import "./TechnologyForm.css";
import Button from "../../common/button/Button";
import CancelButton from "../../common/button/CancelButton";
import { useDispatch } from "react-redux";
import { createTechnology } from "../../../features/redux/technology/technologyAction";
export const TechnologyForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const showModalRef = useRef(true);
  const nameRef = useRef("");
  //const descriptionRef = useRef("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: nameRef.current.value
      //shortDescription: descriptionRef.current.value,
    };
    dispatch(createTechnology(formData));
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
      navigate("/Dashboard");
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
              <label htmlFor="inputName" className="col-sm-4">
                Technology Name
              </label>
              <div className="col-sm-8">
                <input
                  ref={nameRef}
                  name="name"
                  placeholder="Enter technology name"
                  type="text"
                  className="mb-2 form-control-sm form-control"
                />
              </div>
            </div>
            {/* <div className="form-group row">
              <label htmlFor="inputDescription" className="col-sm-2">
                Description
              </label>
              <div className="col-sm-10">
                <textarea
                  ref={descriptionRef}
                  name="shortDescription"
                  placeholder="Enter shortDescription"
                  id="exampleText"
                  className="mb-2 form-control-sm form-control"
                ></textarea>
              </div>
            </div> */}
            <div className="d-flex p-2 justify-content-between">
              <div className="Add-button">
                <Button type="submit">Add</Button>
              </div>

              <div className="Tech-button">
                <CancelButton
                  type="reset"
                  className="cancel"
                  onClick={handleCancel}
                >
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
