import React from "react";
import "../associate/AddAssociateForm.css";
import Button from "../common/button/Button";
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
        <div class="form-group row">
          <label for="staticEmail" class="col-sm-2 col-form-label">
            Email ID
          </label>
          <div class="col-sm-10">
            <input
              placeholder="Enter Email ID"
              type="email"
              class="mb-2 form-control-sm form-control"
            />{" "}
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            Password
          </label>
          <div class="col-sm-10">
            <input
              placeholder="Enter Password"
              type="password"
              class="mb-2 form-control-sm form-control"
            />
          </div>
        </div>
        <hr />
        <h6>Bulk Upload</h6>
      </form>
    </div>
  );
};
