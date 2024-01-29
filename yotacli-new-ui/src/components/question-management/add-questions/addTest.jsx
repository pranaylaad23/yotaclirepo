import React from "react";

const AddTest = ({ closeModal }) => {
  return (
    <div
      className="modal fade"
      id="addTestModal"
      tabIndex="-1"
      aria-labelledby="addTestModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="addTestModalLabel">
              Add Test
            </h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={closeModal}
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="testName" className="form-label">
                  Test Name
                </label>
                <input type="text" className="form-control" id="testName" />
              </div>
              <div className="mb-3">
                <label htmlFor="testDescription" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="testDescription"
                  rows="3"
                ></textarea>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">
              Add
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddTest;
