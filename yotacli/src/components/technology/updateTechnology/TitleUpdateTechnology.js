import React from "react";
import classes from "../../../components/dashboard/TitleDashboard.module.css";
import UpdateTechnology from "./UpdateTechnology";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const TitleUpdateTechnology = () => {
  return (
    <>
      {/* <!--dashbord--> */}
      <div className="container-fluid">
        <div className={`row ${classes.back}`}>
          <div className="col">
            <h5 className={classes.title}>Technology Management</h5>
          </div>
        </div>
        <UpdateTechnology />
      </div>
    </>
  );
};

export default TitleUpdateTechnology;
