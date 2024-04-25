import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./AddTechnology.css";
import { EditIcon } from "../../components/icons/Icons";
import { fetchAllTechnology } from "../../features/technology/technologyAction";
import Card from "../../components/Card/Card";

function TechnologyList() {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.auth);
  const { technologies } = useSelector((state) => state.technologies);
  console.log("technology List", technologies);

  useEffect(() => {
    if (userData.token) dispatch(fetchAllTechnology());
  }, [userData, dispatch]);
  return (
    <div>
      <div class="card text-center mt-2">
        <div class="card-header">
          <h4>Technology List</h4>{" "}
        </div>
        <div class="list">
          <table className="table table-bordered table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Technology Name</th>
                <th scope="col">QuestionCount</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {technologies.map((technology, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{technology.technology}</td>
                  <td>{technology.countQuestion}</td>
                  <td>
                    <div className={styles["action-buttons"]}>
                      <EditIcon />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TechnologyList;
