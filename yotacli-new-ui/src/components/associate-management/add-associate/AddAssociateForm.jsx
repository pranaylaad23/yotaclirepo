import React, { useState } from "react";
import "./AddAssociateForm.css";
import Button from "../../common/button/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAssociate } from "../../../features/redux/associate/associateAction";

export const AddAssociateForm = () => {
  const [associates] = useState({});
  const [emailId, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleOnSubmit = (event) => {
    event.preventDefault();
    let formData = {
      emailId: emailId,
      password: password,
    };

    dispatch(addAssociate(formData));
    alert("Associate added successfully");
    navigate("/associate-associateList");
  };

  const getAssociateData = (e) => {
    setEmail(e.target.value);
  };
  const getPassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="main-div">
      <form onSubmit={handleOnSubmit}>
        <div className="d-flex p-2 justify-content-between">
          <h5>Associate</h5>
          <Button className="btn">Add</Button>
        </div>
        <hr />
        <div className="form-group row">
          <label
            for="staticEmail"
            className="addassociatelableemial col-sm-2 col-form-label"
          >
            Email ID
          </label>
          <div className="col-sm-10">
            <input
              onChange={(e) => getAssociateData(e)}
              placeholder="Enter Email ID"
              type="email"
              className="mb-2 form-control-sm form-control w-50"
            />{" "}
          </div>
        </div>
        <div className="form-group row">
          <label
            for="inputPassword"
            className="addassociatelableemial col-sm-2 col-form-label"
          >
            Password
          </label>
          <div className="col-sm-10">
            <input
              onChange={(e) => getPassword(e)}
              placeholder="Enter Password"
              type="password"
              className="mb-2 form-control-sm form-control w-50"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
