import React, { useEffect, useRef, useState } from "react";
import classes from "./CreateTraining.module.css";
import Button from "../common/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { requestTraining } from "../../features/redux/training/trainingAction";
import { fetchTechnology } from "../../features/redux/technology/technologyAction";
import { fetchCompetency } from "../../features/redux/competency/competencyAction";
import { fetchTrainingType } from "../../features/redux/training/training-type/trainingTypeAction";
import { fetchUnits } from "../../features/redux/unit/unitAction";
import { CreateUnitForm } from "../unit-management/add-unit/CreateUnitForm";
import { useNavigate } from "react-router-dom";
import { customToast } from "../common/toast/customToast";
export const CreateTraining = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const startDate = useRef();
  const endDate = useRef();
  const [selectMonth, setMonth] = useState("");
  const [selectYear, setYear] = useState("");
  const [selectUnit, setSelectUnit] = useState("");
  const [selectTechnology, setSelectTechnology] = useState([]);
  const [selectCompetency, setSelectCompetency] = useState("");
  const [selectTrainingType, setSelectTrainingType] = useState("");
  const [trainingName, setTrainingName] = useState("");
  const [showUnit, setShowUnit] = useState(false);
  const noOfParticipants = useRef();
  const trainingDescription = useRef();
  const unitList = useSelector((state) => state.unit.units);
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
    startDate.current = event.target.value;
  };

  const handleendDateChange = (event) => {
    endDate.current = event.target.value;
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    trainingDescription.current = event.target.value;
  };
  const handleParticipantChange = (event) => {
    noOfParticipants.current = event.target.value;
  };
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const years = Array.from(
    { length: 10 },
    (_, i) => new Date().getFullYear() + i
  );
  const handleButtonClick = () => {
    setShowUnit(true);
  };
  useEffect(() => {
    dispatch(fetchUnits());
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
  console.log(unitList);
  const onSubmit = (event) => {
    event.preventDefault();
    const trainingRequest = {
      trainingName: trainingName,
      trainingDescription: trainingDescription.current,
      startDate: startDate.current,
      endDate: endDate.current,
      noOfParticipants: noOfParticipants.current,
    };

    console.log("Payload--", trainingRequest);
    dispatch(requestTraining(JSON.stringify(trainingRequest)))
      .unwrap()
      .then((result) => {
        console.log("Training Request Data", result);
        console.log("Training Request Data" + JSON.stringify(trainingRequest));
        customToast({
          message: "Training request submitted successfully!",
          autoClose: 2000,
          onClose: () => navigate("/requestNomination"),
        });
      })
      .catch((error) => {
        const errorResponseString = JSON.stringify(error);
        const errorMessageJson = JSON.parse(errorResponseString);
        if (errorMessageJson.errorMessage) {
          customToast({
            message: errorMessageJson.errorMessage,
            autoClose: 2000,
            type: "error",
          });
        } else {
          if (errorMessageJson.trainingDescription) {
            customToast({
              message: errorMessageJson.trainingDescription,
              autoClose: 2000,
              type: "error",
            });
          }
        }
      });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <h5>Training Request Form</h5>
        <div className={classes.header}>
          <Button>Next</Button>
        </div>{" "}
        <hr />
        <div className="form-group">
          <div class="row">
            <div className="col-6">
              <label className={classes.unit}>Unit:</label>
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
                    <option key={index} value={unit.unitName}>
                      {unit.unitName}
                    </option>
                  ))}
              </select>
              {/* <div className={classes.addnewUnit}>
                <button
                  type="button"
                  className={classes.addunitbutton}
                  onClick={handleButtonClick}
                >
                  <i className="fas fa-plus"></i>
                </button>
                {showUnit && (
                  <CreateUnitForm closeModal={() => setShowUnit(false)} />
                )}
              </div> */}
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
                value={selectYear}
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
                disabled
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label>Planned StartDate:</label>
              <input
                type="date"
                name="startDate"
                id="startDate"
                ref={startDate}
                onChange={handlestartDateChange}
                className="mb-2 form-control-sm form-control"
              />
            </div>
            <div className="col-6">
              <label> Planned End Date:</label>
              <input
                type="date"
                name="endDate"
                ref={endDate}
                onChange={handleendDateChange}
                className="mb-2 form-control-sm form-control"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label>No.of Participant</label>
              <input
                ref={noOfParticipants}
                onChange={handleParticipantChange}
                name="trainindDescription"
                className="mb-2 form-control-sm form-control"
                id="exampleFormControlTextarea1"
              ></input>
            </div>
            <div className="col-6">
              <label>Purpose or Training</label>
              <textarea
                ref={trainingDescription}
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
