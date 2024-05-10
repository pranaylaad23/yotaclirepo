import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllTechnology } from "../../features/technology/technologyAction";
import styles from "../test/Test.module.css";
import { QuestionFromLibrary } from "./QuestionFromLibrary";
import { Link } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min";

const AddFormLibrary = () => {
  const [selectedTechnology, setSelectedTechnology] = useState("");
  // const [selectedEasyLevel, setSelectedEasyLevel] = useState("");
  // const [selectedMediumLevel, setSelectedMeduimLevel] = useState("");
  // const [selectedHard, setSelectedHard] = useState("");
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
      <form className={styles.form1}>
        <div className={styles["form-form1"]}>
          <div>
            <h5>Add From Library-Step4</h5>
            <div className={styles["question-count"]}>
              <p>
                Total Questions to be added: 0{/* Display total questions */}
              </p>
              <div className={styles["level-count"]}>
                {" "}
                <h6>Easy:0 </h6>
                <h6>Medium:0 </h6>
                <h6>Hard:0 </h6>
              </div>
            </div>
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
              <div className={` col-md-6 `} style={{ paddingLeft: "41%" }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setShowForm(true)}
                >
                  Show
                </button>
              </div>
            </div>
            {showForm && (
              <QuestionFromLibrary selectedTechnology={selectedTechnology} />
            )}
          </div>{" "}
        </div>
      </form>
    </div>
  );
};
export default AddFormLibrary;
