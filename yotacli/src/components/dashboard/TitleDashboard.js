import React from "react";
import BodyDashboard from "./BodyDashboard";
import classes from "./TitleDashboard.module.css";
function TitleDashboard() {
  return (
    <>
      {/* <!--dashbord--> */}
      <div className="container-fluid">
        <div className={`row ${classes.back}`}>
          <div className="col">
            <h5 className={classes.title}>Dashboard</h5>
          </div>
        </div>
        <BodyDashboard />
      </div>
    </>
  );
}
export default TitleDashboard;
