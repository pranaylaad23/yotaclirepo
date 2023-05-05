import React from "react";

import classes from "../../components/dashboard/TitleDashboard.module.css";
import BatchList from "./BatchList";

function TitleBatchList() {
  return (
    <>
      {/* <!--dashbord--> */}
      <div className="container-fluid">
        <div className={`row ${classes.back}`}>
          <div className="col">
            <h5 className={classes.title}>Batch Management</h5>
          </div>
        </div>
        <BatchList />
      </div>
    </>
  );
}
export default TitleBatchList;
