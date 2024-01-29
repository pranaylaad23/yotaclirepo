import React from "react";
import { useState, useMemo } from "react";
import { useRef } from "react";
import "./listassociatebody.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faEye } from "@fortawesome/free-solid-svg-icons";

const data = [
  {
    id: 101,
    name: {
      firstName: "Riya",
      middleName: "",
      lastName: "Sharma",
    },
    emailId: "riya.sharma@example.com",
    status: "Active",
    contactNo: "1234567890",
    createdAt: "2023-01-01",
    updatedAt: "2023-01-02",
  },
  {
    id: 102,
    name: {
      firstName: "Rahul",
      middleName: "",
      lastName: "Kumar",
    },
    emailId: "rahul.kumar@example.com",
    status: "Inactive",
    contactNo: "9876543210",
    createdAt: "2023-02-01",
    updatedAt: "2023-02-02",
  },
  {
    id: 103,
    name: {
      firstName: "Priya",
      middleName: "",
      lastName: "Singh",
    },
    emailId: "priya.singh@example.com",
    status: "Active",
    contactNo: "5678901234",
    createdAt: "2023-03-01",
    updatedAt: "2023-03-02",
  },
  {
    id: 104,
    name: {
      firstName: "Vikas",
      middleName: "",
      lastName: "Mehta",
    },
    firstName: "Vikas",
    middleName: "",
    lastName: "Mehta",
    emailId: "vikas.mehta@example.com",
    status: "Active",
    contactNo: "7890123456",
    createdAt: "2023-04-01",
    updatedAt: "2023-04-02",
  },
  {
    id: 105,
    name: {
      firstName: "Riya",
      middleName: "",
      lastName: "Sharma",
    },
    emailId: "anjali.patel@example.com",
    status: "Inactive",
    contactNo: "2345678901",
    createdAt: "2023-05-01",
    updatedAt: "2023-05-02",
  },
  {
    id: 106,
    name: {
      firstName: "Riya",
      middleName: "",
      lastName: "Sharma",
    },
    emailId: "anjali.patel@example.com",
    status: "Inactive",
    contactNo: "2345678901",
    createdAt: "2023-05-01",
    updatedAt: "2023-05-02",
  },
  {
    id: 107,
    name: {
      firstName: "Riya",
      middleName: "",
      lastName: "Sharma",
    },
    emailId: "anjali.patel@example.com",
    status: "Inactive",
    contactNo: "2345678901",
    createdAt: "2023-05-01",
    updatedAt: "2023-05-02",
  },
  {
    id: 108,
    name: {
      firstName: "Anjali",
      middleName: "",
      lastName: "Patel",
    },
    emailId: "anjali.patel@example.com",
    status: "Inactive",
    contactNo: "2345678901",
    createdAt: "2023-05-01",
    updatedAt: "2023-05-02",
  },
  {
    id: 109,
    name: {
      firstName: "Anjali",
      middleName: "",
      lastName: "Patel",
    },
    emailId: "anjali.patel@example.com",
    status: "Inactive",
    contactNo: "2345678901",
    createdAt: "2023-05-01",
    updatedAt: "2023-05-02",
  },
  {
    id: 110,
    name: {
      firstName: "Anjali",
      middleName: "",
      lastName: "Patel",
    },
    emailId: "anjali.patel@example.com",
    status: "Inactive",
    contactNo: "2345678901",
    createdAt: "2023-05-01",
    updatedAt: "2023-05-02",
  },
  {
    id: 111,
    name: {
      firstName: "Vikas",
      middleName: "",
      lastName: "Mehta",
    },
    firstName: "Vikas",
    middleName: "",
    lastName: "Mehta",
    emailId: "vikas.mehta@example.com",
    status: "Active",
    contactNo: "7890123456",
    createdAt: "2023-04-01",
    updatedAt: "2023-04-02",
  },
  {
    id: 112,
    name: {
      firstName: "Rahul",
      middleName: "",
      lastName: "Kumar",
    },
    emailId: "rahul.kumar@example.com",
    status: "Inactive",
    contactNo: "9876543210",
    createdAt: "2023-02-01",
    updatedAt: "2023-02-02",
  },
];

const columns = [
  { id: "id", label: "ID" },
  { id: "name", label: "Full Name" },
  { id: "emailId", label: "Email-Id" },
  { id: "status", label: "Status" },
  { id: "contactNo", label: "Contact No" },
  { id: "createdAt", label: "Created At" },
  { id: "updatedAt", label: "Updated At" },
  { id: "action", label: "Action" },
];

const ListAssociateBody = () => {
  const searchInputRef = useRef(null);
  const rowsPerPageSelectRef = useRef(null);
  const [page, setPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const filteredData = useMemo(() => {
    return data.filter((item) =>
      Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [data, searchTerm]);

  const totalPages = useMemo(
    () => Math.ceil(filteredData.length / rowsPerPage),
    [filteredData, rowsPerPage]
  );

  const handleChangePage = (newPage) => {
    if (newPage * rowsPerPage >= filteredData.length) {
      newPage = Math.floor(filteredData.length / rowsPerPage);
    }
    setPage(newPage);
  };

  const handleSearch = () => {
    setSearchTerm(searchInputRef.current.value);
    setPage(0);
  };

  const handleDataPerPageChange = (event) => {
    const newDataPerPage = parseInt(event.target.value);
    setRowsPerPage(newDataPerPage);
    setPage(0);
  };

  const paginatedData = filteredData.slice(
    page * rowsPerPage,
    Math.min((page + 1) * rowsPerPage, filteredData.length)
  );

  return (
    <div className="table-container">
      <div className="filter-section">
        <div className="show-entries">
          <label className="filter-label" htmlFor="data-per-page">
            Show Entries
          </label>
          <div className="custom-select">
            <select
              id="data-per-page"
              ref={rowsPerPageSelectRef}
              value={rowsPerPage}
              onChange={handleDataPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </div>
        </div>
        <div className="list-search">
          <label className="filter-label" htmlFor="data-per-page">
            Search
          </label>
          <input
            type="text"
            placeholder=" ... "
            value={searchTerm}
            ref={searchInputRef}
            onChange={handleSearch}
            className="list-search-btn"
          />
        </div>
      </div>

      <div className="horizontal-line"></div>

      <table className="mb-0 table table-bordered table-striped">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.id}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row) => (
            <tr key={row.id}>
              {columns.map((column) => (
                <td key={column.id}>
                  {column.id === "action" ? (
                    <div className="action-icons">
                      <FontAwesomeIcon icon={faEdit} className="action-icon" />
                      <span className="action-divider">_</span>
                      <FontAwesomeIcon icon={faTrash} className="action-icon" />
                      <span className="action-divider">_</span>
                      <FontAwesomeIcon icon={faEye} className="action-icon" />
                    </div>
                  ) : column.id === "name" ? (
                    `${row.name.firstName} ${row.name.middleName} ${row.name.lastName}`
                  ) : (
                    row[column.id]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button
          className="page-button"
          onClick={() => handleChangePage(page - 1)}
          disabled={page === 0}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`page-button ${index === page ? "active" : ""}`}
            onClick={() => handleChangePage(index)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="page-button"
          onClick={() => handleChangePage(page + 1)}
          disabled={page === totalPages - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ListAssociateBody;
