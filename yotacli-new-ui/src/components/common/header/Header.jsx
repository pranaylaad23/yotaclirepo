import React from "react";
import "./header.style.css";
import {useDispatch, useSelector} from "react-redux";
import "../../../features/security/securitySlice";
import {Notification} from "../notification/Notification";
import {ToastContainer} from "react-toastify";
import {customToast} from "../toast/customToast";
import {useNavigate} from "react-router-dom";
import {logout} from "../../../features/security/securtiyAction";

export const Header = (props) => {
    const {userData} = useSelector((state) => state.security);
    const {onSidebarToggle} = props;
    const role = userData?.userRole;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logoutRefresh = () => {
        dispatch(logout());
        navigate("/");
    };

    const handleLogout = () => {
        customToast({
            message: "You are logged out!",
            autoClose: 1500,
            onClose: logoutRefresh,
        });
    };
    const showOptionForLoginUser = () => (
        <>
            <button
                type="button"
                className="btn btn-sm px-3 font-size-16 margin-left-25"
                onClick={onSidebarToggle}
            >
        <span className="">
          <i className="fa-solid fa-bars"></i>
        </span>
            </button>
            <div className="SearchMain">
                <div className="search-container">
                    <form action="/search" method="get">
                        <input
                            className="search expandright"
                            id="searchright"
                            type="search"
                            name="q"
                            placeholder="Search"
                        />
                        <label className="button searchbutton" for="searchright">
                            <span className="mglass">&#9906;</span>
                        </label>
                    </form>
                </div>
            </div>
            {/* profile */}
            <div className="Profile">
                <div className="dropdown border-top  dropleft">
                    <a
                        href="#"
                        className="d-flex align-items-center justify-content-center p-3 link-body-emphasis text-decoration-none dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <img
                            src="https://picsum.photos/200"
                            alt="mdo"
                            width="40"
                            height="40"
                            className="rounded-circle"
                        />
                    </a>

                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <div className="card-body">
                            <div className="UpperHalf">
                                <div className="ProfilePic ">
                                    <img
                                        src="https://picsum.photos/200"
                                        alt="mdo"
                                        border="1"
                                        width="45"
                                        height="45"
                                        className="rounded-circle"
                                    />
                                </div>
                                <div className="card-title">
                                    <h6 className="username">{userData.fullName}</h6>
                                </div>
                                <div className="Button">
                                    <button
                                        type="button"
                                        className="btn btn-dark btn-rounded"
                                        data-mdb-ripple-init
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </button>
                                </div>
                            </div>
                            <div className="LowerHalf">
                                <div className="ChangePassoword">
                                    <a className="bi bi-person"> Change Passoword</a>
                                </div>
                                <div className="MyAccount">
                                    <a className="bi bi-person"> My Account</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Notification/>
        </>
    );

    const showOptionForGuestUser = () => (
        <div>
            <div className="LoginLink">
                <a style={{textDecoration: "None"}} href="/login">
                    Sign In
                </a>
            </div>
        </div>
    );

    return (
        <header className="page-topbar">
            <div className="navbar-header">
                <div className="d-flex w-100 height-100-p">
                    <div className="navbar-brand">
                        <div className="navbar-brand-box">
                            <span className="logo logo-dark"></span>
                            <span className="logo logo-light">
                <span className="logo-lg logo-text-style font-size-24 padding-10 d-block">
                  {" "}
                    YOTA{" "}
                    <span className="font-size-role">
                    {role != null ? "(" + role + ")" : ""}
                  </span>{" "}
                </span>
              </span>
                        </div>
                    </div>

                    {userData.token ? showOptionForLoginUser() : showOptionForGuestUser()}
                </div>
            </div>
            <ToastContainer/>
        </header>
    );
};
