import React, { useEffect, useState } from "react";
import classes from "./ListTechnologyItem.module.css";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteTechnology } from "../../../redux/features/technology/CreateTechSlice";

const ListTechnologyItem = (props) => {
  const [technology, setTechnology] = useState([]);
  const dispatch = useDispatch(technology);
  useEffect(() => {
    axios
      .get("http://localhost:9090/yota/api/technologies/")
      .then((response) => {
        console.log(response.data);
        setTechnology(response.data);
      });
  }, []);

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
          {technology.map((tech, key) => (
            <tr key={key}>
              <td>
                <b>{tech.id}</b>
              </td>
              <td>{tech.name}</td>
              <td>{tech.shortDescription}</td>
              <td>
                <Link to={`/updatetechnology/${tech.name}`}>
                  {" "}
                  <i className="fa fa-edit"></i>&nbsp;{" "}
                </Link>
                {/* onClick={(event) => handleEditClick(event, list)} */}
                <Link
                  to={`/deletetechnology/${tech.id}`}
                  onClick={() => dispatch(deleteTechnology(tech.id))}
                >
                  <i className="fa fa-trash-can"></i>{" "}
                </Link>
                {/* onClick={() => handleDeleteClick(tech.id)} */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTechnologyItem;
