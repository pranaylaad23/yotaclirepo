import React, { useEffect, useState } from "react";

import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteTechnology } from "../../../redux/features/technology/CreateTechSlice";

const TechnologyList = () => {
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
    <>
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
    </>
  );
};

export default TechnologyList;
