import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllTechnology } from "../../features/technology/technologyAction";
import styles from "../test/Test.module.css";
import { QuestionFromLibrary } from "./QuestionFromLibrary";

const AddFormLibrary = () => {
  const [selectedTechnology, setSelectedTechnology] = useState("");
  const dispatch = useDispatch();
  const { technologies } = useSelector((state) => state.technologies);
  const { token } = useSelector((state) => state.auth.userData);
  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    if (token) {
      dispatch(fetchAllTechnology());
    }
  }, [token, dispatch]);

  const handleTechnologyChange = (e) => {
    setSelectedTechnology(e.target.value);
  };
  console.log(technologies);
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles["form-content"]}>
          <div>
            <h6>Add From Library-Step4</h6>
            <p>Total Questions to be added: {/* Display total questions */}</p>
            <p>Easy:0 {/* Display total questions */}</p>
            <p>Medium:0 {/* Display total questions */}</p>
            <p>Hard:0 {/* Display total questions */}</p>
            <div className="row g-3">
              <div className="col-md-6 ">
                <select
                  value={selectedTechnology}
                  onChange={handleTechnologyChange}
                  className="form-control mt-1"
                >
                  <option value="">Select Technology</option>
                  {technologies.map((tech) => (
                    <option key={tech.id} value={tech.technology}>
                      {tech.technology}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-6 ">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setShowForm(true)}
                >
                  Show
                </button>
                {showForm && <QuestionFromLibrary />}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddFormLibrary;
