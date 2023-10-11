import React from "react";
import Card from "../../../ui/card/Card";
import classes from "./AddClient.module.css";
import RegisterClientForm from "./RegisterClientForm";

const AddClient = () => {
  return (
    <div className={classes.card}>
      <Card>
        <RegisterClientForm />
      </Card>
    </div>
  );
};
export default AddClient;
