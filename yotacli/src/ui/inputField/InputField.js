import React from 'react';
import classes from './InputField.module.css';

const InputField = (props) => {
  return (
    <div className={classes.inputBox}>{props.children}</div>
  )
}

export default InputField;