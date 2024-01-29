import React from "react";
import "./AddAssociateForm.css";
import Button from "../../common/button/Button";
export const AddAssociateForm = () => {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    alert("Associate added successfully");
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
          <label for="staticEmail" className="addassociatelableemial col-sm-2 col-form-label">
            Email ID
          </label>
          <div className="col-sm-10">
            <input
              placeholder="Enter Email ID"
              type="email"
              className="mb-2 form-control-sm form-control w-50"
            />{" "}
          </div>
        </div>
        <div className="form-group row">
          <label for="inputPassword" className="addassociatelableemial col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
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
