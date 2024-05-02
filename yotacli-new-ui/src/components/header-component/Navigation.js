import React from "react";
import classes from "./Navigation.module.css";
import { Link } from "react-router-dom";
import { USER_ROLES } from "../../constants/helperConstants";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
const Navigation = ({ isLoggedIn, onLogout, role }) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {isLoggedIn && (
          //   <li>
          //     <Link to={"/home"}>Home</Link>
          //   </li>
          <>
            <div class="dropdown">
              <button
                className="btn btn-light dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Home
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                  <a className="dropdown-item" href="#">
                    View
                  </a>
                </li>
                <li>
                  <Link className="dropdown-item" to={"/add-test"}>
                    Home
                  </Link>
                </li>
              </div>
            </div>
          </>
        )}
        {isLoggedIn && role === USER_ROLES.TECHNICAL_MANAGER && (
          <li>
            <Link to={"/add-training"}>Trainings</Link>
          </li>
        )}
        {isLoggedIn && role === USER_ROLES.TECHNICAL_MANAGER && (
          <li>
            <Link to={"/all-trainers"}>Trainers</Link>
          </li>
        )}
        {isLoggedIn && role === USER_ROLES.TECHNICAL_MANAGER && (
          <li>
            <Link to={"/technology-list"}>Technology</Link>
          </li>
        )}
        {/* {isLoggedIn &&
                    role !== USER_ROLES.ASSOCIATE && (
                        <li>
                            <Link to={"/all-associates"}>Associates</Link>
                        </li>
                    )} */}
        {isLoggedIn && role === USER_ROLES.TECHNICAL_MANAGER && (
          <li>
            <Link to={"/all-pending-users"}>Pending Users</Link>
          </li>
        )}

        {isLoggedIn && role === USER_ROLES.TECHNICAL_MANAGER && (
          <li>
            <Link to={"/add-test"}>Add Test</Link>
          </li>
        )}
        {isLoggedIn && role !== USER_ROLES.ASSOCIATE && (
          <li>
            <Link to={"/add-question"}>Add Questions</Link>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <button onClick={onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
