import React, { useEffect, useState } from "react";
import classes from "./ListTechnologyItem.module.css";
import ClientsList from "./ClientsList";

const ListClientItem = ({currentPage, dataPerPage}) => {
return (
    <div className={`table-responsive ${classes.table}`}>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>Name Of Client</th>
            <th>Technology</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            <ClientsList 
            currentPage={currentPage}
            dataPerPage={dataPerPage}
            />
        </tbody>
      </table>
    </div>
  );
};

export default ListClientItem;
