import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Associate.module.css";
const AssociateTableBody = ({ rows, columns, role }) => {
  return (
    <tbody>
      {rows.map((row) => (
        <tr key={row.id}>
          {columns.map((column) => (
            <td key={column.id}>
              {column.id === "action" ? (
                <div className="action-icon">
                  <Link to={`/updateinfo`}>
                    <i
                      className="icon action-icon fa fa-edit"
                      title="Update"
                    ></i>
                  </Link>{" "}
                  <Link to={`/deleteinfo`}>
                    <i
                      className="icon action-icon fa fa-trash-can"
                      title="Delete"
                    ></i>
                  </Link>
                  <Link to={`/viewinfo`}>
                    <i className="icon action-icon fa fa-eye" title="View"></i>
                  </Link>
                </div>
              ) : column.id === "firstName" ? (
                row.firstName,
                row.lastName,
                row.emailId,
                row.password,
                row.createdAt,
                row.updatedAt,
                row.contactNo,
                row.status

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

export default AssociateTableBody;