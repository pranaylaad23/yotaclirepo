import React from "react";
import classes from "../../../components/dashboard/TitleDashboard.module.css";
import UpdateClient from "./UpdateClient";


function TitleUpdateClient() {
  return (
    <>
   <div className="container-fluid">
        <div className={`row ${classes.back}`}>
          <div className="col">
            <h5 className={classes.title}>Client Management</h5>
          </div>
        </div>
        <UpdateClient/>
      </div>
    </>
  );
}

export default TitleUpdateClient;
