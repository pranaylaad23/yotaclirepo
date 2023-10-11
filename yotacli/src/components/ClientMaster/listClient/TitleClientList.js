import React from "react";
import classes from "../../dashboard/TitleDashboard.module.css";
import ListClient from "./ListClient";

function TitleClientList() {

  return (
    <>
   
      <div className="container-fluid">
        <div className={`row ${classes.back}`}>
          <div className="col">
            <h5 className={classes.title}>Client Management</h5>
          </div>
        </div>
        <ListClient />
      </div>
    </>
  );
}
export default TitleClientList;
