import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import "./Training.module.css";
import TrainingTableBody from "./TrainingTableBody";
import {
  getTrainings,
  getTrainingsByStatus,
} from "../../features/redux/training/trainingAction";

export const TrainingList = (props) => {
  const dispatch = useDispatch();
  const { role } = useSelector((state) => state.security);
  const searchInputRef = useRef(null);
  const rowsPerPageSelectRef = useRef(null);
  const [page, setPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  let userRole = localStorage.getItem("userRole");
  console.log("resopse role: ", userRole);

  const columns = [
    { id: "id", label: "#" },
    { id: "trainingName", label: "Training Name" },
    { id: "assignedTo", label: "Assigned To" },
    { id: "startDate", label: "Start Date" },
    { id: "endDate", label: "End Date" },
    { id: "associates", label: "Associates" },
    { id: "status", label: "Status" },
    { id: "changeRequestStatus", label: "Change Status" },
    { id: "action", label: "Action" },
  ];

  const { trainings } = useSelector((state) => state.trainings);

  useEffect(() => {
    dispatch(getTrainings());
  }, [dispatch]);

  useEffect(() => {
    if (searchTerm) {
      dispatch(getTrainingsByStatus(searchTerm));
    }
  }, [searchTerm, dispatch]);

  const filteredData = useMemo(() => {
    if (!trainings) return []; // Return an empty array if trainings is null or undefined
    console.log(trainings);
    return trainings.filter((item) =>
      Object.values(item).some(
        (value) =>
          value?.toString().toLowerCase().includes(searchTerm.toLowerCase()) // Use optional chaining (?.)
      )
    );
  }, [trainings, searchTerm]);

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
              <option value="15">20</option>
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

        <TrainingTableBody
          rows={paginatedData}
          columns={columns}
          role={userRole}
        />
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
