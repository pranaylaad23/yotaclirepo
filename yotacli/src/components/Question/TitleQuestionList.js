import React from "react";

import classes from "../../components/dashboard/TitleDashboard.module.css";
import ListQuestions from "./ListQuestions";

function TitleQuestionList() {
  return (
    <>
      {/* <!--dashbord--> */}
      <div className="container-fluid">
        <div className={`row ${classes.back}`}>
          <div className="col">
            <h5 className={classes.title}>Question Management</h5>
          </div>
        </div>
        <ListQuestions />
      </div>
    </>
  );
}
export default TitleQuestionList;
