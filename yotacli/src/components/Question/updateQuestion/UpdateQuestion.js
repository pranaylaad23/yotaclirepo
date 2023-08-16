import React from 'react';
import Card from "../../../ui/card/Card";
import classes from "./UpdateQuestion.module.css";
import UpdateQuestionForm from './UpdateQuestionForm';

const UpdateQuestion = () => {
  return (
    <div className={classes.card}>
      <Card>
        <UpdateQuestionForm />
      </Card>
    </div>
  )
}

export default UpdateQuestion
