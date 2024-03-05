import React from "react";
import classes from "./Button.module.css";
const Button = (props) => {
  return (
    <>
      <button type="submit" className={`btn btn-primary ${classes.btn}`}>
        {props.children}
      </button>
    </>
  );
};

export default Button;
