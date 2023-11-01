import React from "react";
import Card from "../../../ui/card/Card";
import classes from "./AddClient.module.css";
import UpdateClientForm from "./UpdateClientForm";

const UpdateClient = () => {
  return (
    <div className={classes.card}>
      <Card>
        <UpdateClientForm />
      </Card>
    </div>
  );
};
export default UpdateClient;
