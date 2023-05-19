import React, { useEffect, useState } from "react";
import classes from "./ListTechnologyItem.module.css";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteTechnology } from "../../../redux/features/technology/CreateTechSlice";
import TechnologyList from "./TechnologyList";

const ListTechnologyItem = (props) => {
  return (
    <div className={`table-responsive ${classes.table}`}>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>Name Of Technology</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <TechnologyList />
        </tbody>
      </table>
    </div>
  );
};

export default ListTechnologyItem;
