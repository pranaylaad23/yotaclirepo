import React, { useState ,useEffect } from "react";
import {useSelector,useDispatch } from "react-redux";
import "./ListUnit.css";
import { fetchUnits } from "../../../features/redux/unit/unitAction";
 
const ASC = "ASC";
const DSC = "DSC";
 
const ListUnit = ({ order, setorder }) => {
  const data = useSelector((state) => state.unit.units);
  const [ setdata] = useState([]);
  const dispatch = useDispatch();
 
 
  useEffect(() => {
    dispatch(fetchUnits());
  }, [dispatch]);
 
  const sorting = (col) => {
    const sorted = [...data].sort((a, b) =>
      order === "ASC" ? (a[col] > b[col] ? 1 : -1) : a[col] < b[col] ? 1 : -1
    );
    setdata(sorted);
    setorder(order === "ASC" ? "DSC" : "ASC");
  };
 
  return (
    <div>
      <div className="show-sort">
        <label>Show Entries</label>
        <br></br>
        <select className="sort-option">
          <option selected>0</option>
          <option value="1">5</option>
          <option value="2">10</option>
          <option value="3">15</option>
        </select>
 
        <label className="Search-label">Search</label>
        <div className="input-group">
          <input
            type="search"
            class="form-control rounded"
            id="myInput"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <span class="input-group-text border-0" id="search-addon">
            <i class="fas fa-search"></i>
          </span>
        </div>
      </div>
 
      <hr className="divider" />
 
      <table
        id="myTable"
        className="table table-striped table-bordered table-sm"
        cellspacing="0"
        width="100%"
      >
        <thead>
          <tr>
            <th className="table-columns" onClick={() => sorting("id")}>
              # ⇅
            </th>
            <th className="table-columns" onClick={() => sorting("unit_name")}>
              Unit Name ⇅
            </th>
            <th className="table-columns" onClick={() => sorting("unit_dsc")}>
              Unit Description ⇅
            </th>
            <th> Action</th>
          </tr>
        </thead>
 
        <tbody>
  {data.length > 0 ? (
    data.map((d) => (
      <tr className="table-rows" key={d.id}>
        <td>{d.id}</td>
        <td>{d.unitName}</td>
        <td>{d.shortDescription}</td>
        <td>
          <i className="fa-solid fa-trash" id="icons">
            _
          </i>
          <i className="fa-solid fa-pen-to-square" id="icons">
            _
          </i>
          <i className="fa-solid fa-eye" id="icons"></i>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="4">No data available</td>
    </tr>
  )}
</tbody>
      </table>
 
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-end">
          <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">
              Previous
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
 
export default ListUnit;