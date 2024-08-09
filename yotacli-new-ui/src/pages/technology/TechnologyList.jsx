import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./AddTechnology.css";
import { fetchAllTechnology } from "../../features/technology/technologyAction";
import Card from "../../components/Card/Card";
import AddTechnology from "./AddTechnology";
import { Link } from "react-router-dom";
import {
  USER_ROLES
} from "../../constants/helperConstants";
import UpdateTechnology from "./UpdateTechnology";

function TechnologyList() {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.auth);
  const { technologies } = useSelector((state) => state.technologies);
  
  useEffect(() => {
    if (userData.token) dispatch(fetchAllTechnology());
  }, [userData,technologies, dispatch]);

  const showData = () => {
    return (
      <div>
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
                <td>
                  <Link to={`/addCategory/` + technology.id}>
                    {technology.technology}
                  </Link>
                </td>
                <td>
                  <div className="showQuestion">
                    <p className="countquestion">
                      {" "}
                      {technology.questionCountUnderTechnology}
                    </p>
                    <p className="showquestion">
                      <Link
                        className="nav-link"
                        to={`/show-question/` + technology.id}
                      >
                        ShowQuestion
                      </Link>
                    </p>
                  </div>
                </td>
                <td>
                  <div className={styles["action-buttons"]}>
                        <UpdateTechnology id={technology.id}/>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const showErrorMessage = () => {
    return (
      <div className={styles["custom-text-center"]}>
        <b>No technologies found, Please try to add technology..</b>
      </div>
    );
  };

  return (
    <div>
      <h6>Technology List</h6>
      <Card className="users-list">
        {USER_ROLES.TECHNICAL_MANAGER===userData.userRole?.substring(5).replace("_", " ") && ( <div className="card-header">
          <AddTechnology />
        </div>)}
       
        {technologies.length != 0 ? showData() : showErrorMessage()}
      </Card>
    </div>
  );
}

export default TechnologyList;
