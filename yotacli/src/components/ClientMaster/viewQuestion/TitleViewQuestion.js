import React from "react";
import classes from "../../../components/dashboard/TitleDashboard.module.css";
import ViewQuestion from "./ViewQuestion";


const TitleViewQuestion = () => {
  return (
    <>
    
      <div className="container-fluid">
        <div className={`row ${classes.back}`}>
          <div className="col">
            <h5 className={classes.title}>Question View Management</h5>
          </div>
        </div>
        <ViewQuestion />
      </div>
    </>
  );
};

export default TitleViewQuestion;
