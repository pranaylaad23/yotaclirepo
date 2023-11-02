import React, { useEffect, useState } from "react";
import classes from "./ListTechnologyItem.module.css";
import TechnologyList from "./TechnologyList";

const ListTechnologyItem = ({ currentPage, dataPerPage }) => {
  return (
    <div className={`table-responsive ${classes.table}`}>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>Name </th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <TechnologyList currentPage={currentPage} dataPerPage={dataPerPage} />
        </tbody>
      </table>
    </div>
  );
};

export default ListTechnologyItem;
