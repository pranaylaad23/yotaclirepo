import React from 'react';
import classes from './Button.module.css'

const Button = (props) => {
<<<<<<< Updated upstream
    return (
        <div className={classes.button}>{props.children}</div>
    )
}
=======
  return <button className={classes.button}
                type={props.type || "button"}
                onClick={props.onClick}>
    {props.children}</button>;
};
>>>>>>> Stashed changes

export default Button;