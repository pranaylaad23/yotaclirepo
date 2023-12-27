import React, { useState } from "react";
import "./navbar.scss";

const Navbar = ({ handelSidebarToggle }) => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>YOTA</span>
        <button className="sidebar-toggle" onClick={handelSidebarToggle}>
          <i className="fa-solid fa-list-ul icon-color" i />
        </button>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notfication"></div>
        <div className="user"></div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
