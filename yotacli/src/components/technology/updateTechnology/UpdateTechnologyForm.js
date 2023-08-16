import React, { useEffect, useState } from "react";
import InputField from "../../../ui/inputField/InputField";
import classes from "./UpdateTechnologyForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  UpdateTech,
  createTech,
} from "../../../redux/features/technology/CreateTechSlice";
import classes1 from "../addTechnology/HeaderItem.module.css";
import axios from "axios";
import Button from "../../../ui/button/Button";
import { useParams } from "react-router-dom";

const  UpdateTechnologyForm = (props) => {
  const { name } = useParams();
  console.log(name);

  const dispatch = useDispatch();

  const initialState = {
    name: "",
    shortDescription: "",
  };

  const [updateTechData, setUpdateTechData] = useState(initialState);
  const [updateDescriptionValue, setUpdateDescription] = useState(initialState);

  useEffect(() => {
    if (name) {
      axios
        .get(`http://localhost:9090/yota/api/technologies/${name}`)
        .then((res) => {
          console.log(res.data);
          setUpdateTechData(res.data);
          setUpdateDescription(res.data.shortDescription);
        });
    }
  }, []);
  console.log(updateTechData);

  const newTechData = (e) => {
    console.log(e.target.value);
    setUpdateTechData({
      ...updateTechData,
      [e.target.name]: e.target.value,
    });
  };

  const updateDescription = (e) => {
    console.log(e);
    setUpdateDescription(e);
  };

  const onHandleUpdate = async (event) => {
    event.preventDefault();
    console.log("Updated data", updateTechData);
    updateTechData.shortDescription = updateDescriptionValue;
    setUpdateTechData(updateTechData);
    dispatch(
      createTech({
        id: updateTechData.id,
        name: updateTechData.name,
        shortDescription: updateTechData.shortDescription,
      })
    )
      .unwrap()
      .then((response) => {
        alert(
          `"Technology with" ${updateTechData.shortDescription} "successfully updated"`
        );
      })
      .catch((e) => {
        alert(e);
      });
  };

  return (
    <>
      <div className="row">
        <div className="row mt-3">
          <div className="col-xl-8 col-lg-7 col-md-6 col-sm-4">
            <h5 className={classes1.boxtitle}>Update Parent Technology</h5>
          </div>

          <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8">
            <form className="form-inline" onSubmit={onHandleUpdate}>
              <div className={classes1.btn}>
                <Button onSubmit={onHandleUpdate}>Update</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr />
      {/*  */}

      {/*  */}
      <div className="row align-items-end mt-5 mb-5">
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
              onChange={newTechData}
              value={updateTechData.name}
              name="name"
              id="inputName"
              className={`form-control ${classes.inputField}`}
              aria-describedby="nameHelpInline"
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
      <div className="row align-items-end mb-3">
        <div className={`col-3 mb-3 ${classes.inputName}`}>
          <label for="description">Description:</label>
        </div>
        <div className={`col mt-3 `}>
          <InputField>
            <input
              type="textarea"
              value={updateDescriptionValue}
              // onChange={updateDescription.bind(this)}
              onChange={(e) => updateDescription(e.target.value)}
              name="shortDescription  "
              id="descriptionShortDescription"
              className={`form-control ${classes.inputField}`}
              aria-describedby="descriptionHelpInline"
            ></input>
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

export default UpdateTechnologyForm;
