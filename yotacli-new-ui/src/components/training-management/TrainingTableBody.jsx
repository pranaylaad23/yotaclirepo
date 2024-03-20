import React from "react";
import { Link } from "react-router-dom";
import "./Training.module.css";
import Button from "../common/button/Button";
import CancelButton from "../common/button/CancelButton";

const TrainingTableBody = ({ rows, columns, role }) => {
  return (
    <>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            {columns.map((column) => (
              <td key={column.id}>
                {column.id === "action" ? (
                  <div className="action-icon">
                    {role === "Technical Manager" ? (
                      <>
                        <div>
                          {row.status === "APPROVED" ? (
                            <div>
                              <Link to={`/editTraining/` + row.id}>
                                <i
                                  className="fa-solid fa-pen-to-square"
                                  id="eidt"
                                >
                                  _
                                </i>
                              </Link>

                              <Link to={`/deleteTraining`}>
                                <i className="fa-solid fa-trash" id="delete">
                                  {" "}
                                </i>
                              </Link>
                            </div>
                          ) : (
                            <div>
                              <Link to={`/approveTraining/` + row.id}>
                                <Button>Approve</Button>
                              </Link>
                              &nbsp;
                              <Link to={`/rejectTraining/` + row.id}>
                                <CancelButton>Reject</CancelButton>
                              </Link>
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
                    ) : (
                      <div>No Action Available</div>
                    )}
                  </div>
                ) : column.id === "trainingName" ? (
                  row.trainingName
                ) : (
                  row[column.id]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </>
  );
};

export default TrainingTableBody;
