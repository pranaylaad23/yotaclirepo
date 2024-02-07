import React, { useEffect, useRef, useState } from "react";
import classes from "./CreateTraining.module.css";
import Button from "../common/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { requestTraining } from "../../features/redux/training/trainingAction";
import { fetchUnit } from "../../features/redux/unit/unitAction";
import { fetchTechnology } from "../../features/redux/technology/technologyAction";
import { fetchCompetency } from "../../features/redux/competency/competencyAction";
import { fetchTrainingType } from "../../features/redux/training/training-type/trainingTypeAction";

export const CreateTraining = () => {
  const dispatch = useDispatch();
  const training_description = useRef();
  const start_date = useRef();
  const end_date = useRef();
  const [selectMonth, setMonth] = useState("");
  const [selectYear, setYear] = useState("");
  const [selectUnit, setSelectUnit] = useState("");
  const [selectTechnology, setSelectTechnology] = useState([]);
  const [selectCompetency, setSelectCompetency] = useState("");
  const [selectTrainingType, setSelectTrainingType] = useState("");
  const [trainingName, setTrainingName] = useState("");
  const unitList = useSelector((state) => state.unit.unitList);
  const techList = useSelector((state) => state.technology.techList);  
  const competency = useSelector((state) => state.competency.competencyList);
  const trainingType = useSelector(
    (state) => state.trainigType.trainingTypeList
  );

  const handleUnitChange = (event) => {
    setSelectUnit(event.target.value);
  };
  const handleTechnologyChange = (event) => {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setSelectTechnology(selectedOptions);
  };

  const handleCompetencyChange = (event) => {
    setSelectCompetency(event.target.value);
  };

  const handleTrainingTypeChange = (event) => {
    setSelectTrainingType(event.target.value);
  };

  const handleTrainingNameChange = (event) => {
    setTrainingName(event.target.value);
  };

  const handlestartDateChange = (event) => {
    start_date.current = event.target.value;
  };

  const handleendDateChange = (event) => {
    end_date.current = event.target.value;
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    training_description.current = event.target.value;
  };
  const months = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];
  const years = Array.from(
    { length: 10 },
    (_, i) => new Date().getFullYear() + i
  );

  useEffect(() => {
    dispatch(fetchUnit());
    dispatch(fetchTechnology());
    dispatch(fetchCompetency());
    dispatch(fetchTrainingType());
  }, [dispatch]);

  useEffect(() => {
    const concatenatedName = `${selectUnit}-${selectCompetency}-${selectTrainingType}(${selectTechnology})-${selectMonth}-${selectYear}`;
    setTrainingName(concatenatedName);
  }, [
    selectUnit,
    selectTechnology,
    selectCompetency,
    selectTrainingType,
    selectMonth,
    selectYear,
  ]);

  const onSubmit = (event) => {
    event.preventDefault();
    const trainingRequest = {
      trainingName: trainingName,
      trainingDescription: training_description.current,
      startDate: start_date.current,
      endDate: end_date.current,
    };

    dispatch(requestTraining(JSON.stringify(trainingRequest)));
    console.log("Training Request Data" + JSON.stringify(trainingRequest));
    alert("Request Training Submit Successfully: ");
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
                value={selectUnit}
                name="unit"
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
                id="unitDropdown"
                onChange={handleUnitChange}
              >
                <option value="field">Select Unit</option>
                {unitList &&
                  unitList.map((unit, index) => (
                    <option key={index} value={unit.name}>
                      {unit.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="col-6">
              <label>Competency:</label>
              <select
                name="competency"
                id="competencyDropdown"
                value={selectCompetency}
                onChange={handleCompetencyChange}
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
              >
                <option value="">Select Competency</option>
                {competency.map((competency, index) => (
                  <option key={index} value={competency.name}>
                    {competency.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label>Training :</label>
              <select
                name="trainingType"
                id="trainingType"
                value={selectTrainingType}
                onChange={handleTrainingTypeChange}
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
              >
                <option value="">Select Training Type</option>
                {trainingType.map((training, index) => (
                  <option key={index} value={training.name}>
                    {training.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-6">
              <label>Technology:</label>
              <select
                value={selectTechnology}
                name="technology"
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
                id="multiple-checkboxes"
                multiple
                onChange={handleTechnologyChange}
              >
                <option value="">Select Technology</option>
                {techList &&
                  techList.map((tech, index) => (
                    <option key={index} value={tech.name}>
                      {tech.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <label>Month:</label>
              <select
                name="month"
                id="month"
                value={selectMonth}
                onChange={handleMonthChange}
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
              >
                <option value="">Select Month</option>
                {months.map((month, index) => (
                  <option key={index} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-3">
              <label>Year:</label>
              <select
                name="year"
                id="year"
                value={selectMonth}
                onChange={handleYearChange}
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
              >
                <option value="">Select Year</option>
                {years.map((year, index) => (
                  <option key={index} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-6">
              <label> Training Name:</label>
              <input
                id="trainingName"
                type="text"
                name="training"
                value={trainingName}
                onChange={handleTrainingNameChange}
                className="mb-2 form-control-sm form-control"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label>StartDate:</label>
              <input
                type="date"
                name="startDate"
                ref={start_date}
                onChange={handlestartDateChange}
                className="mb-2 form-control-sm form-control"
              />
            </div>
            <div className="col-6">
              <label> End Date:</label>
              <input
                type="date"
                name="endDate"
                ref={end_date}
                onChange={handleendDateChange}
                className="mb-2 form-control-sm form-control"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label>Description:</label>
              <textarea
                ref={training_description}
                onChange={handleDescriptionChange}
                name="trainindDescription"
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
