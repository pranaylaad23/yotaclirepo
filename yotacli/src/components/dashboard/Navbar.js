import React from "react";
import classes from "../dashboard/Navbar.module.css";
function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-light bg-light"
        style={{ height: "60px", padding: "8px 16px" }}
      >
        <a className={`navbar-brand ${classes.yashimage}`}>
          <img src="Images/yashlogo.png" alt="yash-logo" />
        </a>

        <ul className={classes.ulb}>
          <li>
            <span className={classes.nameDesign}>
              <span className={classes.headeruserName}>Pankaj Sharma</span>
              <span className={classes.headeruserRole}>Role_User</span>
            </span>
          </li>
          <li>
            <img
              className={classes.imageRole}
              src="yotacli/public/Images/yashlogo.png"
              alt=""
            />
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
