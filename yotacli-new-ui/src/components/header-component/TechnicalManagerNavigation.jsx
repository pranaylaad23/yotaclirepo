/*
  Created on - 02-05-2024
  Created By - yash.raj
  Project - YOTA_NEW
  IDE used - IntelliJ IDEA
  Path of this file -
 */
import {Link} from "react-router-dom";

const TechnicalManagerNavigation = ({
                                        onLogout,
                                        role
                                    }) => {
    return (
        <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to={"/"} className="navbar-brand align-items-center">
                    <b>YOTA
                        <span style={{fontSize: "0.8rem"}}>
                        {" (" + role + ")"}
                        </span>
                    </b>
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
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-0 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                Dashboard
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Training
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Test
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Question Bank
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Users
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Pending Users
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Users
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Something else here
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Reports
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Batch Wise
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Ranks
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Top Performer
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Master
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Technology
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Category
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <button className="btn btn-primary"
                                onClick={onLogout}>
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default TechnicalManagerNavigation;
