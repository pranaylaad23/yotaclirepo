import React from "react";
import classes from "./SuccesButton.module.css";
const SuccesButton = (props) => {
  return (
    <>
      <button type="submit" className={`btn btn-success ${classes.btn}`}>
        {props.children}
      </button>
    </>
  );
};

export default SuccesButton;
