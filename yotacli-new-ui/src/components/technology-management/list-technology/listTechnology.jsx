import React, { useState, useEffect, useRef, useMemo } from "react";
import { fetchTechnologies } from "../../../features/redux/technology/technologyAction";
import { useSelector, useDispatch } from "react-redux";
import "../../common/button/Button";
import "./listTechnology.css";
import { TechnologyTableBody } from "./TechnologyTableBody";
import { Modal } from "react-bootstrap";
import { TechnologyForm } from "../add-technology/TechnologyForm";
import { EditTechnology } from "../edit-technology/EditTechnology";

export const ListTechnology = () => {
  const dispatch = useDispatch();
  const techList = useSelector((state) => state.technology.techList);
  const [sortedField, setSortedField] = useState([]);
  const [order, setorder] = useState("ASC");
  const searchInputRef = useRef(null);
  const rowsPerPageSelectRef = useRef(null);
  const [page, setPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [showModal, setShowModal] = useState(false);
  const [editAdd, setEditAdd] = useState("");
  const [formDetail, setFormDetail] = useState([]);

  useEffect(() => {
    dispatch(fetchTechnologies());
  }, [techList]);

  const filteredData = useMemo(() => {
    return techList.filter((item) =>
      Object.values(item).some((value) =>
        value !== null && typeof value === "object"
          ? Object.values(value).some((val) =>
              val.toString().toLowerCase().includes(searchTerm.toLowerCase())
            )
          : value !== null &&
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [techList]);

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

  const sorting = (col) => {
    setSortedField(col);
  };

  const sortedData = sortedField
    ? [...filteredData].sort((a, b) =>
        order === "ASC"
          ? a[sortedField] > b[sortedField]
            ? 1
            : -1
          : b[sortedField] > a[sortedField]
          ? 1
          : -1
      )
    : filteredData;

  const paginatedData = sortedData.slice(
    page * rowsPerPage,
    (page + 1) * rowsPerPage
  );

  const handleEditAdd = () => {
    if (editAdd ==  "Add") {
      return <h6>Add Technology</h6>;
    } else if (editAdd == "Edit") {
      return <h6>Edit Technology</h6>;
    }
  };

  return (
    <div>
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

      <button
        type="button"
        class="btn btn-secondary btn-sm"
        style={{ marginTop: "-8%" }}
        onClick={() => {
          setShowModal(true);
          setEditAdd("Add");
        }}
      >
        {" "}
        Add Technology
      </button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{handleEditAdd()}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            editAdd == "Add" 
            ? <TechnologyForm showModal={showModal} setShowModal={setShowModal} />
            : <EditTechnology showModal={showModal} setShowModal={setShowModal} formDetail={formDetail} />
          }  
        </Modal.Body>
      </Modal>

      <TechnologyTableBody
        techList={paginatedData}
        sorting={sorting}
        showModal={showModal}
        setShowModal={setShowModal}
        setEditAdd={setEditAdd}
        setFormDetail={setFormDetail}
      />

      {techList.length == 0 ? (
        ""
      ) : (
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
      )}
    </div>
  );
};
