import React from "react";
import classes from "./Navigation.module.css";
import HamBurger from "./headerlogocomponent/Hamburger";
function Navigation() {
return (
    <>
        <div className={classes.appHeader + ' ' + classes.headerShadow}>
            <HamBurger/>
        </div>
    </>)
}
export default Navigation;