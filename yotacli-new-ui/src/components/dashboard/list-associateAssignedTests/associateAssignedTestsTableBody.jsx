import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./AssociateAssignedTests.module.css";
const AssociateAssignedTestsTableBody = ({ rows, columns, role }) => {
  return (
    <tbody>
      {rows?.map((row) => (
        <tr key={row.id}>
          {columns.map((column) => (
            <td key={column.id}>
              {column.id === "action" ? (
                <div className="action-icon">
                  {row.status === 'yetToStart' ?
                  (<button
                    className="page-button"
                    onClick={() => { console.log('Start the test....');}}
                    disabled={false}
                  >
                    Start Test
                  </button>) : ''}
                  {/* <Link to={`/updateinfo`}>
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
                  </Link> */}
                </div>
              ) : column.id === "firstName" ? (
                (row.name,
                new Date(row.startDate).toDateString(),
                new Date(row.endDate).toDateString(),
                row.duration,
                row.testStatus)
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

export default AssociateAssignedTestsTableBody;
