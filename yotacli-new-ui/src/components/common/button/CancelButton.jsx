import React from "react";
import classes from "./CancelButton.module.css";
const CancelButton = (props) => {
  return (
    <button
      type="button"
      className={`btn btn-secondary ${classes.btn}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export default CancelButton;
