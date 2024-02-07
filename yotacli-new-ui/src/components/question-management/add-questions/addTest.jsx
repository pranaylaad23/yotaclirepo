import React, { useRef } from "react";
import { Modal, Button } from "react-bootstrap";
import { postTest } from "../../../features/redux/test/testAction";
import { useDispatch } from "react-redux";
import "./CreateQuestion.css"

const AddTest = ({ closeModal }) => {
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const StartDateRef = useRef("");
  const EndDateRef = useRef("");

  const dispatch = useDispatch();

  const handleOnSubmitTest = (e) => {
    e.preventDefault();
    const formData = {
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      startDate: StartDateRef.current.value,
      endDate: EndDateRef.current.value,
    };
    console.log(formData);
    alert("Test created successfully");
    dispatch(postTest(JSON.stringify(formData)));

    closeModal();
  };

  const handleCancel = () => {
    closeModal();
  };

  return (
    <Modal show={true} onHide={handleCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Add Test</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              ref={nameRef}
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              ref={descriptionRef}
              className="form-control"
              id="description"
              rows="3"
              placeholder="Enter Description"
              required
            ></textarea>
          </div>
          <div className="row">
            <div className="col-6">
              <label>StartDate:</label>
              <input
                type="date"
                name="startDate"
                ref={StartDateRef}
                className="mb-2 form-control-sm form-control"
              />
            </div>
            <div className="col-6">
              <label> End Date:</label>
              <input
                type="date"
                name="endDate"
                ref={EndDateRef}
                className="mb-2 form-control-sm form-control"
              />
            </div>
          </div>
          <Button className="testAdd" type="submit" variant="primary" onClick={handleOnSubmitTest}>
            Add
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AddTest;
