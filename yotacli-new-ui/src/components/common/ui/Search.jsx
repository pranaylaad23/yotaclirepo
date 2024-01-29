import React from "react";
export const Search = () => {
  <>
    <div className="justify-content-end col-md-4">
      <div className="input-group rounded">
        <input
          type="search"
          className="form-control form-control-sm ml-3 w-75 rounded"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <span className="input-group-text border-0" id="search-addon">
          <i className="fas fa-search"></i>
        </span>
      </div>
    </div>
  </>;
};
