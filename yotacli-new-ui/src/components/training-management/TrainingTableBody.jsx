import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Training.module.css";

const TrainingTableBody = ({ rows, columns, role }) => {
  return (
    <tbody>
      {rows.map((row) => (
        <tr key={row.id}>
          {columns.map((column) => (
            <td key={column.id}>
              {column.id === "action" ? (
                <div className="action-icon">
                  {role === "Technical Manager" ? (
                    <>
                      <Link to={`/viewinfo`}>
                        <i
                          className="icon action-icon fa fa-eye"
                          title="View"
                        ></i>
                      </Link>
                      {"_"}
                      <Link to={`/updateinfo`}>
                        <i
                          className="icon action-icon fa fa-edit"
                          title="Update"
                        ></i>
                      </Link>
                      {"_"}
                      <Link to={`/deleteinfo`}>
                        <i
                          className="icon action-icon fa fa-trash-can"
                          title="Delete"
                        ></i>
                      </Link>
                    </>
                  ) : role === "Requester" ? (
                    <Link to={`/updateinfo`}>
                      <i
                        className="icon action-icon fa fa-edit"
                        title="Update"
                      ></i>
                    </Link>
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
  );
};

export default TrainingTableBody;
