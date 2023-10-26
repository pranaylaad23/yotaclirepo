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
import { useNavigate } from "react-router-dom";

const  UpdateTechnologyForm = (props) => {
  const nevigate = useNavigate();
  const { id } = useParams();

  const dispatch = useDispatch();

  const initialState = {
    name: "",
    shortDescription: "",
  };

  const [updateTechData, setUpdateTechData] = useState(initialState);
  const [updateDescriptionValue, setUpdateDescription] = useState(initialState);

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:9090/yota/api/technologies/}`)
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
        nevigate(0)
        alert(e);
      });
  };

  return (
    <>
      <div className="row">
        <div className="row mt-3">
          <div className="col-xl-8 col-lg-7 col-md-6 col-sm-4">
            <h5 className={classes1.boxtitle}>UpdateTechnology</h5>
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
              placeholder="Update Technology Name"
              className={`form-control ${classes.inputField}`}
              aria-describedby="nameHelpInline"
              style={{width:"400px"}}
            />
          </InputField>
        </div>
        <div className="col" style={{ paddingBottom: "10px" }}>
          <span
            id="nameHelpInline"
            className="form-text"
            style={{ paddingBottom: "10px" }}
          >
          </span>
        </div>
      </div>
      <div className="row align-items-end ">
        <div className={`col-3 mb-3 ${classes.inputName}`}>
          <label for="description">Description:</label>
        </div>
        <div className={`col mt-3 `}>
          <InputField>
            <input
              type="textarea"
              onChange={updateDescription }
              value={updateDescriptionValue.shortDescription}
              name="shortDescription"
              id="descriptionShortDescription"
              placeholder="Update Technology Description"
              className={`form-control ${classes.inputField}`}
              aria-describedby="descriptionHelpInline"
              style={{width:"400px",height:"100px"}}
            ></input>
          </InputField>
        </div>
        <div className="col" style={{ paddingBottom: "10px" }}>
          <span
            id="descriptionHelpInline"
            className="form-text"
            style={{ paddingBottom: "10px" }}
          >
          </span>
        </div>
      </div>
    </>
  );
};

export default UpdateTechnologyForm;
