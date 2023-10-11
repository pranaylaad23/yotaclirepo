import React from "react";
import classes from "../../../components/dashboard/TitleDashboard.module.css";
import AddClient from "./AddClient";

function TitleAddClient() {
  return (
    <>
   <div className="container-fluid">
        <div className={`row ${classes.back}`}>
          <div className="col">
            <h5 className={classes.title}>Client Management</h5>
          </div>
        </div>
        <AddClient />
      </div>
    </>
  );
}

export default TitleAddClient;
