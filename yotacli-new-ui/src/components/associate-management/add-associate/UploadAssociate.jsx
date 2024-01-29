import React from "react";
import "./AddAssociateForm.css";
import Button from "../../common/button/Button";
export const UploadAssociate = () => {
  const handleOnSubmit = (event) => {
    event.preventDefault();

    alert("associatefile upload successfully");
  };
  return (
    <div className="main-div">
      <form onSubmit={handleOnSubmit}>
        <hr />
        <h6>Bulk Upload</h6>
        <div className="position-relative form-group">
          <label for="exampleFile" className="uploadFile">
            UploadFile
          </label>
          <input
            name="file"
            id="exampleFile"
            type="file"
            className="form-control-file"
          />
          <small className="form-text text-muted">
            <Button className="btn">UploadAssociate</Button>
          </small>
        </div>
      </form>
    </div>
  );
};
