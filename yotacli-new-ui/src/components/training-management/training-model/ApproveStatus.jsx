import React, { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Button from "../../common/button/Button";
import CancelButton from "../../common/button/CancelButton";
import { useDispatch, useSelector } from "react-redux";
import {
  approveTraining,
  approveTrainingStatus,
} from "../../../features/redux/training/training-status/approveTrainingAction";
import { costomToast } from "../../common/toast/costomToast";

export const ApproveStatus = () => {
  const cancelref = useNavigate();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showModalRef = useRef(true);
  const actualStartDate = useRef();
  const actualEndDate = useRef();
  const trainerName = useRef([]);
  const { id } = useParams();
  const trainerList = useSelector((state) => state.fetchTrainer.ListTrainer);
  useEffect(() => {
    dispatch(approveTraining());
  }, [dispatch]);

  const handlestartDateChange = (event) => {
    actualStartDate.current = event.target.value;
  };

  const handleendDateChange = (event) => {
    actualEndDate.current = event.target.value;
  };

  const handleSelectTrainer = (event) => {
    trainerName.current = event.target.value;
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const formData = {
      actualStartDate: actualStartDate.current,
      actualEndDate: actualEndDate.current,
      trainerName: trainerName.current,
      id: id,
    };
    dispatch(approveTrainingStatus(JSON.stringify(formData)));
    console.log("Form Data:", formData);
    console.log(trainerList);
    console.log("Id Is" + id);
    costomToast({
      message: "Training Approved Succesfully",
      autoClose: 2000,
      onClose: () => window.location.reload("/trainingList"),
    });
    hideModal();
  };
  const handleCancel = () => {
    hideModal();
  };

  console.log(trainerList);
  const hideModal = () => {
    const modals = document.getElementsByClassName("modell");
    if (modals.length > 0) {
      const modal = modals[0];
      modal.style.display = "none";
      cancelref("/trainingList");
    }
  };

  return (
    <div>
      <Modal className="modell" show={showModalRef.current} onHide={() => {}}>
        <Modal.Header>
          <Modal.Title>
            <h5>Actual Date</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleOnSubmit}>
            <div className="form-group row">
              <label
                for="inputName"
                className="createclientlabelname col-sm-4 col-form-label"
              >
                Actual Start Date
              </label>

              <div className="col-sm-8">
                <input
                  ref={actualStartDate}
                  type="date"
                  onChange={handlestartDateChange}
                  className="mb-2 form-control-sm form-control"
                />
              </div>
            </div>

            <div className="form-group row">
              <label
                for="inputDescription"
                className="createclientdescription col-sm-4 col-form-label"
              >
                Actual End Date
              </label>
              <div className="col-sm-8">
                <input
                  ref={actualEndDate}
                  type="date"
                  onChange={handleendDateChange}
                  className="mb-2 form-control-sm form-control"
                ></input>
              </div>
            </div>

            <div className="form-group row">
              <label for="inputTechnology" className="col-sm-4 col-form-label">
                Select Trainer:
              </label>
              <div className="col-sm-8">
                <select
                  ref={trainerName}
                  onChange={handleSelectTrainer}
                  aria-controls="example"
                  className="form-control-sm form-control"
                  aria-label=".form-select-sm example"
                  multiple
                >
                  <option value="" disabled selected>
                    Select Trainer
                  </option>
                  {trainerList &&
                    trainerList.map((trainer, index) => (
                      <option key={index} value={trainer.name}>
                        {trainer.name}({trainer.username})
                      </option>
                    ))}
                </select>
              </div>
            </div>

            <div className="d-flex p-2 justify-content-between">
              <div className="create-button">
                <Button>Submit</Button>
              </div>
              <div className="clientCancle">
                <CancelButton type="reset" onClick={handleCancel}>
                  Cancel
                </CancelButton>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
