import React from "react";
import "./AssociateAssignedTests.module.css";
export const AssociateAssignedTestsTableBody = ({ rows, columns, role }) => {
  return (
    <tbody>
      {rows?.map((row) => (
        <tr key={row.id}>
          {columns.map((column) => (
            <td key={column.id}>
              {column.id === "action" ? (
                <div className="action-icon">
                  {row.status === "yetToStart" ? (
                    <button
                      className="page-button"
                      onClick={() => {
                        console.log("Start the test....");
                      }}
                      disabled={false}
                    >
                      Start Test
                    </button>
                  ) : (
                    ""
                  )}
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
