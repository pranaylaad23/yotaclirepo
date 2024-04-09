import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Training.module.css";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { rejectStatusTraining } from "../../features/redux/training/training-status/RejectTrainingAction";
import { Button } from "react-bootstrap";
import {
  fetchAssociates,
  uploadExcel,
} from "../../features/redux/associate/associateAction";
import { customToast } from "../common/toast/customToast";
import { editTraining } from "../../features/redux/training/training-status/editTrainingAction";
const TrainingTableBody = ({ rows, columns, role }) => {
  const [show, setShow] = useState(false);
  const [rejectMsg, setRejectMsg] = useState("");
  const [rejectShow, setRejectShow] = useState(false);
  const [reasonDes, setReasonDes] = useState("");
  const [selectedRow, setSelectedRow] = useState({});
  const [uploadShow, setuploadShow] = useState(false);
  const [file, setFile] = useState("");
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [uploadingId, setUploadingId] = useState();
  const [endDate, setEndDate] = useState("");
  const [newEndDate, setNewEndDate] = useState("");
  const [trainingId, setTrainingId] = useState("");
  const [changeReason, setChangeReason] = useState("");
  const [actionType, setActionType] = useState("");
  const [trainingName, setTrainingName] = useState("");
  const [startDate, setstartDate] = useState("");
  const showRejectTrainingMessage = (selectedRow) => {
    console.log("linkRow", selectedRow);
    setRejectShow(true);
    setRejectMsg(selectedRow.rejectTrainingMessage);
  };

  const handleActionClickOnRejectButton = (type, row) => {
    console.log("row", row);
    setSelectedRow({ ...row });
    setActionType(type);
    setShow(true);
  };
  const handleRejectReasonChange = (event) => {
    setReasonDes(event.target.value);
  };

  const handleSubmitRejectReason = () => {
    setReasonDes("");
    setShow(false);
    let rejectTrainingPayload = {
      id: selectedRow.id,
      rejectTrainingMessage: reasonDes,
      action: actionType,
    };
    console.log("api call payload", rejectTrainingPayload);
    dispatch(rejectStatusTraining(JSON.stringify(rejectTrainingPayload)))
      .unwrap()
      .then((result) => {
        console.log(result);
      });
  };

  const showAssociateDetails=(id)=>{
  <Link to={`/addAssociate/` + id}>
    </Link>

  
  };
  const handleActionClickOnAddAssociate = (id) => {
    setUploadingId(id);
    setuploadShow(true);
  };
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  const handleUpload = () => {
    if (file) {
      dispatch(uploadExcel({ id: uploadingId, file: file }));
    }
    setuploadShow(false);
  };
  const handleEndDateChange = (event) => {
    setNewEndDate(event.target.value);
  };
  const handleChangeReason = (event) => {
    setChangeReason(event.target.value);
  };
  const handleEditTrainingButton = (row) => {
    setTrainingName(row.trainingName);
    setstartDate(row.startDate);
    setEndDate(row.endDate);
    setTrainingId(row.id);
    setOpen(true);
  };
  const handleSubmitEditTrainingButton = () => {
    setOpen(false);
    let editTrainingPayload = {
      id: trainingId,
      changeRequestEndDate: newEndDate,
      trainingUpdateReason: changeReason,
    };
    console.log("edit Traing", editTrainingPayload);
    dispatch(editTraining(JSON.stringify(editTrainingPayload)))
      .unwrap()
      .then((result) => {
        console.log(result);
      });
    customToast({
      message: "Sent Changes For Approval",
      autoClose: 2000,
    });
  };
  return (
    <>
      <tbody>
        {rows.map((row) => {
          if (role === "Trainer" && row.status !== "APPROVED") {
            return null;
          }
          return (
            <tr key={row.id}>
              {columns.map((column) => (
                <td key={column.id}>
                  {column.id === "action" ? (
                    <div className="action-icon">
                      {role === "Technical Manager" ? (
                        <>
                          <div>
                            {row.status === "APPROVED" ||
                            row.status === "REJECTED" ? (
                              <div>
                                <p className={classes.actionicons}>
                                  No Action{" "}
                                </p>
                              </div>
                            ) : (
                              <div>
                                <Link to={`/approveTraining/` + row.id}>
                                  <i
                                    id="eidt"
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    type="button"
                                    title="Approve Training"
                                    className={
                                      "classes .btn btn-success statustraining"
                                    }
                                  >
                                    {/* Approve */}
                                  </i>
                                </Link>

                                <div>
                                  <i
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    title="Reject Training"
                                    className={
                                      "classes.btn btn-danger statustraining"
                                    }
                                    disabled={row.status === "REJECTED"}
                                    onClick={() =>
                                      handleActionClickOnRejectButton(
                                        "Reject",
                                        row
                                      )
                                    }
                                  >
                                    {/* Reject */}
                                  </i>
                                </div>
                                <div>
                                  <button
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    title="Add Associates To Training"
                                    className={
                                      "classes.btn btn-danger statustraining"
                                    }
                                    onClick={() =>
                                      handleActionClickOnAddAssociate(row.id)
                                    }
                                  >
                                    AddAssociate
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        </>
                      ) : role === "Requester" ? (
                        <div>
                          <Link to={`/editTraining/` + row.id}>
                            <i className="fa-solid fa-pen-to-square" id="eidt">
                              _
                            </i>
                          </Link>

                          <Link to={`/deleteTraining`}>
                            <i className="fa-solid fa-trash" id="delete">
                              {" "}
                            </i>
                          </Link>
                        </div>
                      ) : role === "Trainer" ? (
                        // <div>
                        //   <Link to={`/changeTrainingStatus/` + row.id}>
                        //     <i
                        //       className="fa-solid fa-pen-to-square"
                        //       id="eidt"
                        //       data-toggle="tooltip"
                        //       data-placement="bottom"
                        //       type="button"
                        //       title="Approve Training"
                        //     ></i>
                        //   </Link>
                        // </div>

                        <div>
                          <i
                            className="fa-solid fa-pen-to-square"
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title="Reject Training"
                            disabled={row.status === "REJECTED"}
                            onClick={() => handleEditTrainingButton(row)}
                          ></i>
                        </div>
                      ) : (
                        <div>No Action Available</div>
                      )}
                    </div>
                  ) : column.id === "trainingName" ? (
                    row.trainingName
                  ) : column.id === "status" && row.status == "REJECTED" ? (
                    <a href="#" onClick={() => showRejectTrainingMessage(row)}>
                      {row.status}
                    </a>
                  ) : column.id === "associateCount" ? (
                    <Link to={`/addAssociate/` + row.id}>
                      <a href="#" onClick={() => showAssociateDetails(row.id)}>
                        {row.associateCount}
                      </a>
                    </Link>
                  ) : (
                    row[column.id]
                  )}
                </td>
              ))}
            </tr>
          );
        })}

        <Modal
          show={rejectShow}
          onHide={() => setRejectShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title>Rejected Training Message</Modal.Title>
          </Modal.Header>
          <Modal.Body>{rejectMsg}</Modal.Body>
        </Modal>

        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Please Enter Reject Reason Of Training
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <textarea
                rows="4"
                cols="33"
                className="w-100"
                value={reasonDes}
                onChange={handleRejectReasonChange}
              />
            </div>
            <div className="text-center">
              <button onClick={handleSubmitRejectReason}>Submit</button>
            </div>
          </Modal.Body>
        </Modal>

        <Modal
          className="modell"
          show={uploadShow}
          onHide={() => setuploadShow(false)}
        >
          <Modal.Header>
            <Modal.Title>
              <h5>Upload Associate</h5>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input type="file" onChange={handleFileChange}></input>
            <div className="d-flex p-2 justify-content-between">
              <div className="create-button">
                <Button onClick={() => handleUpload()}>Upload</Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>

        <Modal
          show={open}
          onHide={() => setOpen(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Edit Training
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div className="form-group row ">
                <label
                  for="inputDescription"
                  className="createclientdescription col-sm-4 col-form-label mt-0"
                >
                  Trainig Name
                </label>
                <div className="col-sm-8">
                  <input
                    disabled={true}
                    value={trainingName}
                    type="text"
                    onChange={"handleendDateChange"}
                    className="mb-2 form-control-sm form-control"
                  ></input>
                </div>
              </div>
              <div className="form-group row ">
                <label
                  for="inputDescription"
                  className="createclientdescription col-sm-4 col-form-label mt-0"
                >
                  Start Date
                </label>
                <div className="col-sm-8">
                  <input
                    disabled={true}
                    value={startDate}
                    type="date"
                    onChange={"handleendDateChange"}
                    className="mb-2 form-control-sm form-control"
                  ></input>
                </div>
              </div>
              <div className="form-group row">
                <label
                  for="inputDescription"
                  className="createclientdescription col-sm-4 col-form-label mt-0"
                >
                  New End Date
                </label>
                <div className="col-sm-8">
                  <input
                    type="date"
                    defaultValue={endDate}
                    min={endDate}
                    onChange={handleEndDateChange}
                    className="mb-2 form-control-sm form-control"
                  ></input>
                </div>
              </div>
              <div className="form-group row ">
                <label
                  for="inputDescription"
                  className="createclientdescription col-sm-4 col-form-label mt-0"
                >
                  Change Reason
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    onChange={handleChangeReason}
                    className="mb-2 form-control-sm form-control"
                  ></input>
                </div>
              </div>
            </div>

            <button
              className="submitt-button btn btn-primary"
              type="submit"
              style={{ borderRadius: "0px", marginLeft: "198px" }}
              onClick={handleSubmitEditTrainingButton}
            >
              Send your Changes For Approval
            </button>
          </Modal.Body>
        </Modal>
      </tbody>
    </>
  );
};

export default TrainingTableBody;
