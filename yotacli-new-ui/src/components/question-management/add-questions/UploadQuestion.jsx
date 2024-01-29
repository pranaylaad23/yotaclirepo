import React from "react";
import "./CreateQuestion.css";
 
export const UploadQuestion = () => {
  return (
    <div className="UploadFile">
      <div className="mb-3">
        <h6>Bulk Upload</h6>
        <br />
        <div className="uploadfileheading">
          <label htmlFor="formFileSm" className="form-label">
            {" "}
            Upload File{" "}
          </label>
        </div>
        <div className="uploadfilebox">
          <input
            className="form-control form-control-sm w-50"
            id="formFileSm"
            type="file"
          />
          <div className="UploadButton">
            <button type="button" className="uploadbutton btn btn-primary ">
              {" "}
              Upload Question{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};