import React from 'react';

import classes from './Navigation.module.css';
import {Link} from "react-router-dom";
import {USER_ROLES} from "../../constants/helperConstants";

const Navigation = ({
                        isLoggedIn,
                        onLogout,
                        role
                    }) => {

    return (
        <nav className={classes.nav}>
            <ul>
                {isLoggedIn && (
                    <li>
                        <Link to={"/home"}>Home</Link>
                    </li>
                )}
                {isLoggedIn &&
                    role === USER_ROLES.TECHNICAL_MANAGER && (
                        <li>
                            <Link to={"/all-trainers"}>Trainers</Link>
                        </li>
                    )}
                    {isLoggedIn &&
                    role === USER_ROLES.TECHNICAL_MANAGER && (
                        <li>
                            <Link to={"/add-technology"}>Technology</Link>
                        </li>
                    )}
                {isLoggedIn &&
                    role !== USER_ROLES.ASSOCIATE && (
                        <li>
                            <Link to={"/all-associates"}>Associates</Link>
                        </li>
                    )}
                {isLoggedIn &&
                    role === USER_ROLES.TECHNICAL_MANAGER && (
                        <li>
                            <Link to={"/all-pending-users"}>Pending Users</Link>
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
