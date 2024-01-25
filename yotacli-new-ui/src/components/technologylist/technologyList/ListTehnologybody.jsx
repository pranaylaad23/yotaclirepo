import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './ListTechnology.body.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faEye } from "@fortawesome/free-solid-svg-icons";

//declaring dummy data
const data = [  {
    id: 111 , 
    name: 'Java', 
    description:'Java Technology'
  },
  {
    id: 112, 
    name: 'Android', 
    description: 'Android Technology'
  },
  {
    id: 113, 
    name: 'Python', 
    description:'Python Technology'
  },
  {
    id: 114, 
    name: 'Spring Boot', 
    description: 'Spring Boot Technology'
  },
  {
    id: 115, 
    name: 'Hibernate', 
    description: 'Hibernate Technology'
  },
  {
    id: 116,
    name: 'AWS',
    description: 'AWS tech' 
  }
];

//columns
const columns = [
  {id: "id" , label: "#"},
  {id:"name" , label:"Name"},
  {id:"description" , label:"Description"} ,
  {id:"Action" , label:"Action"}

];

const ListTechnologybody = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [searchTerm, setSearchTerm] = useState("");
    
    // Page change
    const handleChangePage = (newPage) => {
    if (newPage * rowsPerPage >= filteredData.length) {
      newPage = Math.floor(filteredData.length / rowsPerPage);
    }
    setPage(newPage);
    };
 
    // search term change
    const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setPage(0);
    };
 
    // rows per page change
    const handleDataPerPageChange = (event) => {
    const newDataPerPage = parseInt(event.target.value);
    setRowsPerPage(newDataPerPage);
    setPage(0);
    };
 
    const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
    // Total pages
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);
    // Get paginated data based on current page and rows per page
    const paginatedData = filteredData.slice(
    page * rowsPerPage,
    Math.min((page + 1) * rowsPerPage, filteredData.length)
    )

return (
    <>
        {/* search and pagination*/}
        <div className="table-container">
        {/* Filter section */}
        <div className="filter-section">
        {/* Rows per page selection */}
        <div className="show-entries">
          <label className="filter-label" htmlFor="data-per-page">
            Show Entries
          </label>
          <div className="custom-select">
            <select
              id="data-per-page"
              value={rowsPerPage}
              onChange={handleDataPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </div>
        </div>
        
        {/* Search input */}
        <div className="list-search">
          <label className="filter-label" htmlFor="data-per-page">
            Search
          </label>
          <input
            type="text"
            placeholder="..."
            value={searchTerm}
            onChange={handleSearch}
            className="list-search-btn"
          />
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
                  {column.id === "Action" ? (
                    <div>
                        <div className="action-icons">
                        <Link to={`/technology-createTechnology`}>
                      <FontAwesomeIcon icon={faEdit} className="action-icon" />
                      <span className="action-divider">_</span></Link>
                      <Link to={`/deleteTechnology/`}>
                      <FontAwesomeIcon icon={faTrash} className="action-icon" />
                      <span className="action-divider">_</span></Link>
                      <FontAwesomeIcon icon={faEye} className="action-icon" />
                      </div>
                    </div>
                   
                  ) 
                  : column.id === "" ? (
                    
                    `${row.name.firstName}`
                  ) : (
                    row[column.id]
                  )
                }
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
    </div>
    
        </> 
)
}

export default ListTechnologybody;