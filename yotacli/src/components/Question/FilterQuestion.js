import React from "react";
import "./List.css";
const FilterQuestion = () => {
  return (
    <div className="filter">
      <div className="active">
        <div className="row">
          <strong>Active questions (2)</strong> &nbsp;
        </div>
        <div className="rows">
          <div className="nav-question-bank">
            <div className="rows">
              <div className="col-span-1">
                <p className="littledark">Filters:</p>
              </div>

              <div className="col-span-2">
                <p className="littledark bold">
                  <label for="qtype1">Question Type</label>
                </p>
                <p>
                  <select name="filter_qtype" id="qtype1">
                    <option value="">All</option>
                    <option value="mcsa">Multiple Choice</option>
                    <option value="tf">True / False</option>
                  </select>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterQuestion;
