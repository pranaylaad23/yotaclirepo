import React, { useEffect, useState } from "react";
import InputField from "../../../ui/inputField/InputField";
import classes from "./RegisterTechnologyForm.module.css";
import { useDispatch } from "react-redux";
import { createTech } from "../../../redux/features/technology/CreateTechSlice";
import classes1 from "./HeaderItem.module.css";
import axios from "axios";

import Button from "../../../ui/button/Button";
const RegisterTechnologyForm = (props) => {
  const [technologies, setTechnologies] = useState({});
  const dispatch = useDispatch();

  const getTechnologyData = (e) => {
    setTechnologies({ ...technologies, [e.target.name]: e.target.value });
    console.log(technologies);
  };

  // const handleOnSubmit = async (e) => {
  //   e.preventDefault();
  //   alert("ijdfibfdibdi");
  //   try {
  //     const response = axios({
  //       method: "post",
  //       url: "http://localhost:9090/yota/api/technologies/",
  //       data: technologies,
  //     });

  //     const result = await response.json();
  //     return result;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   console.log(technologies);
  // }, [technologies]);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(technologies);
    dispatch(createTech(technologies));
    alert("technology created successfully");
  };

  return (
    <>
      <div className="row">
        <div className="row mt-3">
          <div className="col-xl-8 col-lg-7 col-md-6 col-sm-4">
            <h5 className={classes1.boxtitle}>Add Parent Technology</h5>
          </div>

          <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8">
            <form className="form-inline" onSubmit={handleOnSubmit}>
              <div className={classes1.btn}>
                <Button onClick={handleOnSubmit}>Add</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr />
      {/*  */}
      <div className="col-10 mt-4">
        <ul>
          <li>
            <p>
              Create <b>Parent Technologies</b> to better organize and group
              your <b>Sub Technologies.</b>
            </p>
          </li>
          <li>
            <p>
              You can add multiple <b>Sub Technologies</b> under
              <b> Parent Technology.</b>
            </p>
          </li>
        </ul>
      </div>
      {/*  */}
      <div className="row align-items-end">
        <div className={`col-3 ${classes.inputName}`}>
          <div>
            <label for="inputTechnologyName" className="col-form-label">
              Name:
            </label>
          </div>
        </div>
        <div className={`col `}>
          <InputField>
            <input
              type="text"
              id="inputName"
              name="name"
              className={`form-control ${classes.inputField}`}
              onChange={getTechnologyData}
              aria-describedby="nameHelpInline"
              placeholder="Enter Technology Name"
            />
          </InputField>
        </div>
        <div className="col" style={{ paddingBottom: "10px" }}>
          <span
            id="nameHelpInline"
            className="form-text"
            style={{ paddingBottom: "10px" }}
          >
            Maximum 30 Characters
          </span>
        </div>
      </div>
      <div className="row align-items-end">
        <div className={`col-3 mb-3 ${classes.inputName}`}>
          <label for="description">Description:</label>
        </div>
        <div className={`col mt-3 `}>
          <InputField>
            <textarea
              id="description"
              name="shortDescription"
              className={`form-control ${classes.inputField}`}
              onChange={getTechnologyData}
              aria-describedby="descriptionHelpInline"
              placeholder="Enter Technology Description here..."
            ></textarea>
          </InputField>
        </div>
        <div className="col" style={{ paddingBottom: "25px" }}>
          <span
            id="descriptionHelpInline"
            className="form-text"
            style={{ paddingBottom: "25px" }}
          >
            Maximum 50 words.
          </span>
        </div>
      </div>
    </>
  );
};

export default RegisterTechnologyForm;
