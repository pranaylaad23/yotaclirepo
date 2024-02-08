import React, { useEffect, useState, useMemo } from "react";
import { useRef } from "react";
import "./ListElement.css";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faEye,
  faCog,
  faShareAlt,
  faClone,
} from "@fortawesome/free-solid-svg-icons";
import { getTests } from "../../../features/redux/test/testAction";

export const ListElement = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const searchInputRef = useRef(null);
  const rowsPerPageSelectRef = useRef(null);

  const dispatch = useDispatch();
console.log(getTests);
  const columns = [
    { id: "id", label: "#" },
    { id: "name", label: "Test Name" },
    { id: "invited", label: "Invited" },
    { id: "TestTaken", label: "Test Taken" },
    { id: "shortlisted", label: "Shortlisted" },
    { id: "createdAt", label: "Created On" },
    { id: "startDate", label: "Start Date" },
    { id: "endDate", label: "End Date" },
    { id: "status", label: "Status" },
    { id: "testtype", label: "Test Type" },
    { id: "action", label: "Action" },
  ];

  const { tests } = useSelector((state) => state.tests);

  useEffect(() => {
    dispatch(getTests());
  }, [dispatch]);

  const filteredData = useMemo(() => {
    return tests.filter((Test) =>
      Object.values(Test).some((value) =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [tests, searchTerm]);

  function removeTime(start = new Date()) {
    return new Date(
      start.getFullYear(),
      start.getMonth(),
      start.getDate()
    );
  }

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

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
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
    <>
      <div className="testlistHeader">
        <h4>TESTS OVERVIEWS</h4>
      </div>

      <div className="table-container">
        <div className="filter-section">
          <div className="show-entries">
            <label
              className="testnamelable filter-label"
              htmlFor="data-per-page"
            >
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
      </div>

      <div className="horizontal-line"></div>

      {/* Table */}
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
                    <div>
                      <div className="action-icons">
                        <FontAwesomeIcon
                          icon={faEdit}
                          className="action-icon"
                        />
                        <span className="action-divider"> __</span>
                        <FontAwesomeIcon
                          icon={faTrash}
                          className="action-icon"
                        />
                        <span className="action-divider"> __</span>
                        <FontAwesomeIcon icon={faEye} className="action-icon" />
                        <span className="action-divider">__ </span>
                        <FontAwesomeIcon icon={faCog} className="action-icon" />
                        <span className="action-divider"> __ </span>

                        <FontAwesomeIcon
                          icon={faShareAlt}
                          className="action-icon"
                        />
                        <span className="action-divider"> __ </span>

                        <FontAwesomeIcon
                          icon={faClone}
                          className="action-icon"
                        />
                      </div>
                    </div>
                  ) : column.id === "" ? (
                    `${row.name}`
                    `${row.endDate}`
                    `${row.startDate}`
                    `${row.createdAt}`
                  ) : (
                    row[column.id]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
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
    </>
  );
};

export default ListElement;
