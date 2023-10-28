import React, { useState } from "react";
import classes from "../dashboard/Navbar.module.css";
import Notification from "./Notification";
import UserProfilePhoto from "../user/UserProfilePhoto";
function Navbar() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <>
      <nav
        className="navbar navbar-light bg-light"
        style={{ height: "60px", padding: "8px 16px" }}
      >
        <a className={`navbar-brand ${classes.yashimage}`}>
          <img src="Images/yashlogo.png" alt="yash-logo" />
        </a>
        <Notification />
        <ul className={classes.ulb}>
          <li>
            <span className={classes.nameDesign}>
              <span className={classes.headeruserName}>Ram Verma</span>
              <span className={classes.headeruserRole}>Role_User</span>
            </span>
          </li>
          <li>
            <img className={classes.imageRole} src="Images/user.png" alt="" onMouseEnter={handleMouseEnter}
            onClick={handleMouseLeave}/>

          </li>

        </ul>

      </nav>
      <div>
        {isDropdownVisible && <UserProfilePhoto />}
      </div>
    </>
  );
}
export default Navbar;
