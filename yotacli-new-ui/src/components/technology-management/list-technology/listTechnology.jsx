import React, { useState, useEffect } from "react";
import { fetchTechnologies } from "../../../features/redux/technology/technologyAction";
import { useSelector, useDispatch } from "react-redux";
import "../../common/button/Button";
import "./listTechnology.css";

export const ListTechnology = ({ order, setorder }) => {
  const techList = useSelector((state) => state.technology.techList);
  const [settechList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTechnologies());
  }, [dispatch]);

  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...techList].sort((a, b) => (a[col] > b[col] ? 1 : -1));
      settechList(sorted);
      setorder("DSC");
    } else {
      const sorted = [...techList].sort((a, b) => (a[col] < b[col] ? 1 : -1));
      settechList(sorted);
      setorder("ASC");
    }
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
            <th className="table-columns" onClick={() => sorting("name")}>
              Technology Name ⇅
            </th>
            <th
              className="table-columns"
              onClick={() => sorting("shortDescription")}
            >
              Technology Description ⇅
            </th>
            <th> Action</th>
          </tr>
        </thead>
        <tbody>
          {techList.length > 0 ? (
            techList.map((d) => (
              <tr className="table-rows" key={d.id}>
                <td>{d.id}</td>
                <td>{d.name}</td>
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
              <td colSpan="4">No techList available</td>
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
