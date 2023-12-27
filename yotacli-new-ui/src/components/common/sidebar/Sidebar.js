import React, { useState } from "react";
import "./sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState({});
  const toggleSubMenu = (sectionId) => {
    setIsSubMenuOpen((prevState) => ({
      ...prevState,
      [sectionId]: !prevState[sectionId],
    }));
  };
  return (
    <div className="sidebar">
      <div className="item">
        <button
          className="listItem listmenu-toggle"
          onClick={() => toggleSubMenu("list-submenu1")}
        >
          <i className="fa-solid fa-list-ul icon-color"></i>
          <span className="listItemTitle1">Dashboard</span>
        </button>
      </div>
      <div className="item">
        <button
          className="listItem listmenu-toggle"
          onClick={() => toggleSubMenu("list-submenu2")}
        >
          <i class="fa-solid fa-id-badge icon-color"></i>
          <span className="listItemTitle2">Training Management</span>
          {isSubMenuOpen["list-submenu2"] && (
            <i className="fa-solid fa-angle-down"></i>
          )}
        </button>
        {isSubMenuOpen["list-submenu2"] && (
          <ul className="listmenu2">
            <li>
              <Link to="/requestTraining">Request Training</Link>
            </li>
            <li>
              <Link to="/trainingList">Training List</Link>
            </li>
          </ul>
        )}
      </div>
      <div className="item">
        <button
          className="listItem listmenu-toggle"
          onClick={() => toggleSubMenu("list-submenu3")}
        >
          <i className="fas fa-pencil-square icon-color"></i>
          <span className="listItemTitle3">Test Management</span>
          {isSubMenuOpen["list-submenu3"] && (
            <i className="fa-solid fa-angle-down"></i>
          )}
        </button>
        {isSubMenuOpen["list-submenu3"] && (
          <ul className="listmenu3">
            <li>
              <Link to="/createTest">Create Test</Link>
            </li>
            <li>
              <Link to="/testList">Test List</Link>
            </li>
          </ul>
        )}
      </div>
      <div className="item">
        <button
          className="listItem listmenu-toggle"
          onClick={() => toggleSubMenu("list-submenu4")}
        >
          <i className="fa-solid fa-laptop-code icon-color"></i>
          <span className="listItemTitle4">Technology Managment</span>
          {isSubMenuOpen["list-submenu4"] && (
            <i className="fa-solid fa-angle-down"></i>
          )}
        </button>
        {isSubMenuOpen["list-submenu4"] && (
          <ul className="listmenu4">
            <li>
              <Link to="/createTechnology">Create Technology</Link>
            </li>
            <li>
              <Link to="/technologyList">Technology List</Link>
            </li>
          </ul>
        )}
      </div>
      <div className="item">
        <button
          className="listItem listmenu-toggle"
          onClick={() => toggleSubMenu("list-submenu5")}
        >
          <i className="fa-solid fa-people-roof icon-color"></i>
          <span className="listItemTitle5"> Associate Managment</span>
          {isSubMenuOpen["list-submenu5"] && (
            <i className="fa-solid fa-angle-down"></i>
          )}
        </button>
        {isSubMenuOpen["list-submenu5"] && (
          <ul className="listmenu5">
            <li>
              <Link to="/addAssociate">Add Associate</Link>
            </li>
            <li>
              <Link to="/associateList">Associate List</Link>
            </li>
            <li>
              <Link to="/assignTest">Assign Test</Link>
            </li>
          </ul>
        )}
      </div>
      <div className="item">
        <button
          className="listItem listmenu-toggle"
          onClick={() => toggleSubMenu("list-submenu6")}
        >
          <i className="fas fa-sitemap icon-color"></i>
          <span className="listItemTitle6"> Client Managment</span>
          {isSubMenuOpen["list-submenu6"] && (
            <i className="fa-solid fa-angle-down"></i>
          )}
        </button>
        {isSubMenuOpen["list-submenu6"] && (
          <ul className="listmenu6">
            <li>
              <Link to="/createClient">Create Client</Link>
            </li>
            <li>
              <Link to="/client">Client List</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
