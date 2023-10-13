import React from "react";
import classes from "../../../components/dashboard/TitleDashboard.module.css";
import AddClientQuestion from "./AddClientQuestion";

function TitleAddClientQuestion() {
  return (
    <>
      <div className="container-fluid">
        <div className={`row ${classes.back}`}>
          <div className="col">
            <h5 className={classes.title}>Create Client Questions</h5>
          </div>
        </div>
        <AddClientQuestion />
      </div>
    </>
  );
}

export default TitleAddClientQuestion;
