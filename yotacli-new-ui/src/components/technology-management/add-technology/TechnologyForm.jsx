import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./TechnologyForm.css";
import Button from "../../common/button/Button";
import CancelButton from "../../common/button/CancelButton";
import { useDispatch } from "react-redux";
import { createTechnology } from "../../../features/redux/technology/technologyAction";

export const TechnologyForm = ({showModal, setShowModal}) => {
  const dispatch = useDispatch();
  const nameRef = useRef("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: nameRef.current.value,
    };
    dispatch(createTechnology(formData));
    setShowModal(false);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div>
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
    </div>
  );
};
