import React from "react";
import Card from "../../../ui/card/Card";
import classes from "./UpdateTechnology.module.css";
import ViewQuestionForm from "./ViewQuestionForm";

const ViewQuestion = () => {
  return (
    <div className={classes.card}>
      <Card>
        <ViewQuestionForm />
      </Card>
    </div>
  );
};

export default ViewQuestion;
