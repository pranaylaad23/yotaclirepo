import React, { useEffect, useState } from "react";

import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTechnology,
  fetchTechnology,
} from "../../../redux/features/technology/CreateTechSlice";

const TechnologyList = () => {
  const dispatch = useDispatch();
  const technology = useSelector((state) => state.technology);
  useEffect(() => {
    dispatch(fetchTechnology());
  }, []);
  return (
    <>
      {technology.technologies.map((tech, key) => (
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
    </>
  );
};

export default TechnologyList;
