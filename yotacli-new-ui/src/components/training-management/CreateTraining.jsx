import React, { useRef, useState } from "react";
import classes from "./CreateTraining.module.css";
import Button from "../common/button/Button";

export const CreateTraining = () => {
  const formDataRef = useRef({
    month: "",
    year: "",
    trainingName: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  const selectUnitRef = useRef(null);
  const selectTechnologyRef = useRef(null);
  const selectCompetencyRef = useRef(null);
  const selectTrainingTypeRef = useRef(null);

  const units = ["BG4-BU5", "BG5-BU11"];
  const technologies = ["React", "Java", "Python"];
  const competency = ["JAVA", "REACT", "PYTHON"];
  const trainingType = ["On-Demand", "On-Bench", "Fresher"];

  const handleUnitChange = () => {
    formDataRef.current = {
      ...formDataRef.current,
      selectUnit: selectUnitRef.current.value,
    };
  };

  const handleTechnologyChange = () => {
    formDataRef.current = {
      ...formDataRef.current,
      selectTechnology: selectTechnologyRef.current.value,
    };
  };

  const handleCompetencyChange = () => {
    formDataRef.current = {
      ...formDataRef.current,
      selectCompetency: selectCompetencyRef.current.value,
    };
  };

  const handleTrainingTypeChange = () => {
    formDataRef.current = {
      ...formDataRef.current,
      selectTrainingType: selectTrainingTypeRef.current.value,
    };
  };

  const handleChange = (event) => {
    formDataRef.current = {
      ...formDataRef.current,
      [event.target.name]: event.target.value,
    };
  };

  const onSubmit = (event) => {
    alert("Request Training Submit Successfully: ");
    event.preventDefault();
    console.log(formDataRef);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <h5>Training Request Form</h5>
        <div className={classes.header}>
          <Button>Add</Button>
        </div>{" "}
        <hr />
        <div className="form-group">
          <div class="row">
            <div className="col-6">
              <label>Unit:</label>
              <select
                ref={selectUnitRef}
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
                onChange={handleUnitChange}
              >
                <option value="">Select Unit</option>
                {units.map((unit, index) => (
                  <option key={index} value={unit}>
                    {unit}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-6">
              <label>Technology:</label>
              <select
                ref={selectTechnologyRef}
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
                onChange={handleTechnologyChange}
              >
                <option value="dropdown">Select Technology</option>
                {technologies.map((technology, index) => (
                  <option key={index} value={technology}>
                    {technology}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label>Competency:</label>
              <select
                ref={selectCompetencyRef}
                onChange={handleCompetencyChange}
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
              >
                <option value="">Select Competency</option>
                {competency.map((competency, index) => (
                  <option key={index} value={competency}>
                    {competency}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-6">
              <label>Training :</label>
              <select
                ref={selectTrainingTypeRef}
                onChange={handleTrainingTypeChange}
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
              >
                <option value="">Select Training Type</option>
                {trainingType.map((training, index) => (
                  <option key={index} value={training}>
                    {training}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label>Month & Year:</label>
              <input
                type="month"
                name="unit"
                onChange={handleChange}
                className="mb-2 form-control-sm form-control"
              />
            </div>
            <div className="col-6">
              <label> Training Name:</label>
              <input
                type="text"
                name="unit"
                onChange={handleChange}
                className="mb-2 form-control-sm form-control"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label>StartDate:</label>
              <input
                type="date"
                name="unit"
                onChange={handleChange}
                className="mb-2 form-control-sm form-control"
              />
            </div>
            <div className="col-6">
              <label> End Date:</label>
              <input
                type="date"
                name="unit"
                onChange={handleChange}
                className="mb-2 form-control-sm form-control"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label>Description:</label>
              <textarea
                className="mb-2 form-control-sm form-control"
                id="exampleFormControlTextarea1"
              ></textarea>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
