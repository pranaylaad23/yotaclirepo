import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllAssociatesTrainingsByEmailId } from "../../../features/associates/associateAction";
import { fetchAllAssociatesTestByEmailId } from "../../../features/associates/associateAction";
import { Link } from "react-router-dom";
const StudentDashboard = () => {
  const { associates } = useSelector((state) => state.associates);
  const { token, email } = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(fetchAllAssociatesTrainingsByEmailId(email));
      dispatch(fetchAllAssociatesTestByEmailId(email));
    }
  }, [dispatch, token, email]);

  return (
    <>
      <div className="container d-flex p-2 bd-highlight">
        <div class="card m-2" style={{ width: "18rem" }}>
          <div class="card-body">
            <h5 class="card-title">Total Training</h5>
            <p class="card-text">Total Training Completed</p>

            <Link className="btn btn-dark" to="/myTrainings">
              {associates.length}
            </Link>
          </div>
        </div>
        <div class="card m-2" style={{ width: "18rem" }}>
          <div class="card-body">
            <h5 class="card-title">Total Test</h5>
            <p class="card-text">Total Test Appear for</p>
            <Link className="btn btn-dark" to="/myTest">
              {associates.length}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentDashboard;
