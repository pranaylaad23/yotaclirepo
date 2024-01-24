import React from "react";
import "../associate/AddAssociateForm.css";
import Button from "../common/button/Button";
export const UploadAssociate = () => {
  const handleOnSubmit = (event) => {
    event.preventDefault();

    alert("associatefile upload successfully");
  };
  return (
    <div className="main-div">
      <form onSubmit={handleOnSubmit}>
        <div class="position-relative form-group">
          <label for="exampleFile" class="uploadFile">
            UploadFile
          </label>
          <input
            name="file"
            id="exampleFile"
            type="file"
            class="form-control-file"
          />
          <small class="form-text text-muted">
            <Button className="btn">UploadAssociate</Button>
          </small>
        </div>
      </form>
    </div>
  );
};
