import React, { useEffect, useState } from "react";
import InputField from "../../../ui/inputField/InputField";
import classes from "./RegisterTechnologyForm.module.css";
import { useDispatch } from "react-redux";
import { createTech } from "../../../redux/features/technology/CreateTechSlice";
import classes1 from "./HeaderItem.module.css";
import axios from "axios";

import Button from "../../../ui/button/Button";
import { createClient } from "../../../redux/features/test/CreateTestSlice";
import Select from 'react-select';


const RegisterClientForm = (props) => {
  const [technologies, setTechnologies] = useState({});
  const dispatch = useDispatch();

  const getTechnologyData = (e) => {
    setTechnologies({ ...technologies, [e.target.name]: e.target.value });
    console.log(technologies);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(technologies);
    dispatch(createClient(technologies));
    window.location.reload();
    alert("technology created successfully");
  };
  const data =[
    { value: 'java', label: 'JAVA' },
  { value: 'reactjs', label: 'REACTJS' },
  { value: 'aws', label: 'AWS' }
  ]
  return (
    <>
      <div className="row">
        <div className="row mt-3">
          <div className="col-xl-8 col-lg-7 col-md-6 col-sm-4">
            <h5 className={classes1.boxtitle}>Add Client Master</h5>
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

      <div className="col-10 mt-4"></div>

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
              name="clientName"
              className={`form-control ${classes.inputField}`}
              onChange={getTechnologyData}
              aria-describedby="nameHelpInline"
              placeholder="Enter Client Name"
              style={{ width: "400px" }}
            />
          </InputField>
        </div>
      </div>

      <div className="row align-items-end">
        <div className={`col-3 mb-5 ${classes.inputName}`}>
          <label style={{ marginLeft: "32px" }} for="description">
            Description:
          </label>
        </div>

        <div className={`col mt-3 `}>
          <InputField>
            <textarea
              id="description"
              name="shortDescription"
              className={`form-control ${classes.inputField}`}
              onChange={getTechnologyData}
              aria-describedby="descriptionHelpInline"
              placeholder="Enter Client Description here... "
              style={{ width: "400px", height: "100px" }}
            ></textarea>
          </InputField>
        </div>
      </div>
      <div className="row align-items-end">
      <div className={`col-3 mb-5 ${classes.inputName}`}>
          <label style={{ marginLeft: "30px" }} for="description">
          Technology:
          </label>
        </div>
      

        <div className={`col -3`}>
        <InputField>
        <Select
    
    isMulti
    name="colors"
    options={data}
   
    classNamePrefix="select"
    style={{ width: "400px", height: "100px" }}
    className={`form-control ${classes.inputField}`}
  />     </InputField>
        </div>
      </div>
      
    </>
  );
};

export default RegisterClientForm;
