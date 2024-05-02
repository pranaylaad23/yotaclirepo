import React from "react";
import {USER_ROLES} from "../../constants/helperConstants";
import TechnicalManagerNavigation from "./TechnicalManagerNavigation";
import TrainerNavigation from "./TrainerNavigation";
import AssociateNavigation from "./AssociateNavigation";
import {Link} from "react-router-dom";

const Navigation = ({
                        isLoggedIn,
                        onLogout,
                        role
                    }) => {

    if (isLoggedIn && role === USER_ROLES.TECHNICAL_MANAGER)
        return <TechnicalManagerNavigation
            onLogout={onLogout}
            role={role}/>

    else if (isLoggedIn && role === USER_ROLES.TRAINER)
        return <TrainerNavigation
            onLogout={onLogout}
            role={role}/>

    else if (isLoggedIn && role === USER_ROLES.ASSOCIATE)
        return <AssociateNavigation
            onLogout={onLogout}
            role={role}/>

    else
        return (
            <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to={"/"} className="navbar-brand align-items-center">
                        <b>YOTA</b>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        )
};

export default Navigation;
