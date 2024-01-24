import React, { useState } from "react";
export const ShowFilters = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const handleItemsPerPageChange = (event) => {
    const newItemsPerPage = parseInt(event.target.value, 10);
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  const renderPageNumbers = () => {
    const options = [5, 10, 15];
    return options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ));
  };

  return (
    <div>
      <div>
        <h6>Show Entries</h6>
        <select
          onChange={handleItemsPerPageChange}
          value={itemsPerPage}
          aria-controls="example"
          className="form-select form-select-sm"
          aria-label=".form-select-sm example"
        >
          {renderPageNumbers()}
        </select>
      </div>
    </div>
  );
};
