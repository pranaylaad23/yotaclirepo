import React from "react";
import Card from "../../../ui/card/Card";
import classes from "./UpdateTechnology.module.css";
import UpdateTechnologyForm from "./UpdateTechnologyForm";
const UpdateTechnology = () => {
  return (
    <div className={classes.card}>
      <Card>
        <UpdateTechnologyForm />
      </Card>
    </div>
  );
};

export default UpdateTechnology;
