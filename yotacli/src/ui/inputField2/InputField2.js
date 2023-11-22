import React from 'react';
import classes from './InputField2.module.css';

const InputField2 = (props) => {
  return (
    <div className={classes.inputBox}>{props.children}</div>
  )
}

export default InputField2;