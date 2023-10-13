import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTest } from "../../../redux/features/test/CreateTestSlice";
import { Link } from "react-router-dom";

const TestList = () => {
  const test = useSelector((state) => state.test.tests);
  console.log("test" + test);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTest());
  }, []);
  return (
    <>
      {test.map((test, key) => (
        <tr key={key}>
          <td>{test.id}&nbsp;&nbsp;</td>
          <td>{test.testName}</td>
          <td>{test.assignTest}</td>
          <td>{test.testTekan}</td>
          <td>{test.shortlisted}</td>
          <td>{test.createdOn}</td>
          <td>{test.endDate}</td>
          <td>{test.status}</td>
          <td>{test.testType}</td>

          <td>
            <td>
              <div className="dropdown">
                <button
                  className="btn btn-light dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa-solid fa-ellipsis-vertical"></i>
                </button>

                <ul
                  style={{ backgroundColor: "lightgrey", color: "black" }}
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  {/* <Link to={`/assignTest`}>
                      <i class="fa-solid fa-plus"></i>
                    </Link> */}

                  <li>
                    {" "}
                    &nbsp; &nbsp;{" "}
                    <Link to={`/assignTest`}>
                      <i className="fa-solid fa-plus"></i>
                    </Link>
                    Add
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i class="fa-solid fa-eye"></i>View
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i class="fa-solid fa-copy"></i>Copy
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i class="fa-solid fa-share-nodes"></i>Share
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i class="fa-solid fa-pen-to-square"></i>Edit
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i class="fa-solid fa-gear"></i>Setting
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i class="fa-solid fa-trash"></i>Delete
                    </a>
                  </li>
                </ul>
              </div>
            </td>
          </td>
        </tr>
      ))}
    </>
  );
};

export default TestList;
