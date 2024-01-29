import React, { useRef } from "react";
import { Modal } from "react-bootstrap";
import Button from "../../common/button/Button";
import "./CreateUnitForm.css";

const CreateUnitForm = ({ closeModal }) => {
  const showModalRef = useRef(true);
  const nameRef = useRef(null);
  const descriptionRef = useRef(null);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const description = descriptionRef.current.value;
    console.log("name", name);
    console.log("description:", description);
    alert("Unit Form created successfully");
    closeModal();
  };
  const handleClose = () => {
    closeModal();
  };

  return (
    <div>
      <Modal show={showModalRef.current} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h6>Unit Form</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleOnSubmit}>
            <div className="form-group row">
              <label htmlFor="staticEmail" className="col-sm-2">
                Name
              </label>
              <div className="col-sm-10">
                <input
                  placeholder="Name"
                  type="text"
                  className="mb-2 form-control-sm form-control"
                  ref={nameRef}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputPassword" className="col-sm-2">
                Description
              </label>
              <div className="col-sm-10">
                <textarea
                  name=""
                  placeholder="Enter description "
                  id="exampleText"
                  className="mb-2 form-control-sm form-control"
                  ref={descriptionRef}
                ></textarea>
              </div>
            </div>
            <div className="button-submit">
              <Button type="submit"> Add </Button>

              <button
                type="button"
                className="cancel-button btn btn-secondary"
                onClick={handleClose}
              >
                Cancel
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default CreateUnitForm;
