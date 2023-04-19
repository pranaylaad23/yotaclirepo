import React from "react";
import "./List.css";
const FilterQuestion = () => {
  return (
    <div class="filter">
      <div className="active">
        <div class="row">
          <strong>Active questions (2)</strong> &nbsp;
        </div>
        <div class="rows">
          <div class="nav-question-bank">
            <div class="rows">
              <div class="col-span-1">
                <p class="littledark">Filters:</p>
              </div>

              <div class="col-span-2">
                <p class="littledark bold">
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
