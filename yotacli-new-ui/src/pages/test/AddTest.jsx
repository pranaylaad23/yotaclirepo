import React, { useState } from "react";
import styles from "../test/Test.module.css";
import { createTest } from "../../features/tests/testAction";
import { useDispatch, useSelector } from "react-redux";
import AddFormLibrary from "./AddFromLibrary";
import { Link } from "react-router-dom";

const AddTest = () => {
  const [formData, setFormData] = useState({
    testName: "",
    description: "",
    instruction: "",
    endDate: "",
    endTime: "",
  });
  const [showForm, setShowForm] = useState(false);

  const [step, setStep] = useState(1); // Initialize step state
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.useData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log(token);
    if (step === 1) {
      setStep(2); // Move to step 2
    } else if (step === 2) {
      setStep(3); // Move to step 3
    } else {
      // Handle final form submission here
      console.log("Final form submitted!");
      dispatch(createTest(formData));
      alert("Test created succesfully!");
      // Reset form data after submission
      setFormData({
        testName: "",
        description: "",
        instruction: "",
        endDate: "",
        endTime: "",
      });
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles["form-content"]}>
          {step === 1 && (
            <>
              <h5 className={styles["form-title"]}>Create Test-Step1</h5>

              <div className="form-group mt-3 ">
                <label className={styles["form-test-label1"]}>Test Title</label>
                <input
                  onChange={handleChange}
                  value={formData.testName}
                  type="text"
                  name="testName"
                  className="form-control mt-1"
                  placeholder="Add title "
                />
              </div>

              <div className="row g-3">
                <div className="col-md-6">
                  <label
                    htmlFor="inputEmail4"
                    className={styles["form-test-label"]}
                  >
                    Description
                  </label>
                  <textarea
                    onChange={handleChange}
                    value={formData.description}
                    type="description"
                    name="description"
                    className="form-control mt-1"
                    placeholder="Description"
                  />
                </div>
                <div className="col-md-6">
                  <label
                    htmlFor="inputdescription4"
                    className={styles["form-test-label"]}
                  >
                    Instruction
                  </label>
                  <textarea
                    onChange={handleChange}
                    value={formData.instruction}
                    type="instruction"
                    name="instruction"
                    className="form-control mt-1"
                    placeholder="Instruction"
                  />
                </div>
              </div>
              <div className={styles["test-btn"]}>
                <button type="submit" className="btn btn-primary">
                  Next
                </button>
              </div>
            </>
          )}

          {step === 2 && (
            <div className={styles["form-content"]}>
              <h5 className={styles["form-title"]}>Test Setting-Step2</h5>

              <div className="form-group mt-3">
                <label className={styles["form-test-label"]}>End Date</label>
                <input
                  onChange={handleChange}
                  value={formData.endDate}
                  type="date"
                  name="endDate"
                  className="form-control mt-1"
                  placeholder="Add title "
                />
              </div>
              <div className="form-group mt-3">
                <label className={styles["form-test-label"]}>End Time</label>
                <input
                  onChange={handleChange}
                  value={formData.endTime}
                  type="time"
                  name="endTime"
                  className="form-control mt-1"
                  placeholder="Add title "
                />
              </div>

              <div className={styles["test-btn"]}>
                <button type="submit" className="btn btn-primary">
                  Next
                </button>
              </div>
            </div>
          )}
          {step === 3 && (
            <div className={styles["form-content"]}>
              <div>
                <h5 className={styles["form-title-q"]}>Add Question-Step3</h5>
              </div>
              <div className=" row g-3">
                <div className="col-md-6">
                  <Link to="/add-test1">
                    <button type="button" className="btn btn-primary">
                      Add from Library
                    </button>
                  </Link>
                </div>
                {/* <div className="col-md-6">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setShowForm(true)}
                  >
                    Add from Library
                  </button>
                  {showForm && <AddFormLibrary />}
                </div> */}
                <div className="col-md-6">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => <AddFormLibrary />}
                  >
                    Upload
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddTest;
