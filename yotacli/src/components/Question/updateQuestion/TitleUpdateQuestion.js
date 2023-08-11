import React from 'react';
import classes from "../../../components/dashboard/TitleDashboard.module.css";
import UpdateQuestion from './UpdateQuestion';

const TitleUpdateQuestion = () => {
  return (
    <>
      
      <div className="container-fluid">
        <div className={`row ${classes.back}`}>
          <div className="col">
            <h5 className={classes.title}>Question Management</h5>
          </div>
        </div>
        <UpdateQuestion />
      </div>
    </>
  )
}

export default TitleUpdateQuestion
