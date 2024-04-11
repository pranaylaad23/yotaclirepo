import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Associate.module.css";
import { useSelector } from "react-redux";
export const AssociateTableBody = ({ rows, columns}) => {
  const  trainings  = useSelector((state) => state.trainings);
  return (
    <>
    <tbody>
      {rows.map((row) => (
        <tr key={row.id}>
          {columns.map((column) => (
            <td key={column.id}>
              {column.id === "action" ? (
                <div className="action-icon">
                
                  <i className="fa-solid fa-trash" id="icons">
                    _
                  </i>
                  <i className="fa-solid fa-pen-to-square" id="icons">
                    _
                  </i>
                  <i className="fa-solid fa-eye" id="icons"></i>
                
                </div>
              ) : column.id === "lastName" ? (
                (row.firstName,
                row.lastName,
                row.emailId,
                row.password,
                row.createdAt,
                row.updatedAt,
                row.contactNo,
                row.status)
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
