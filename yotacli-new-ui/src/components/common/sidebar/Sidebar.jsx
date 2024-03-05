import React, { createRef, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useWindowSize } from "../dashboard-layout/useWindowSize";
import "./Sidebar.style.css";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";

export const Sidebar = (props) => {
  const { open, onClose } = props;
  const { width } = useWindowSize();
  const [openedSubNav, setOpenedSubNav] = useState(null);
  const [openedISubNav, setOpenedISubNav] = useState(null);
  const [activeIndex, setActiveIndex] = useState([]);
  const [subActiveIndex, setSubActiveIndex] = useState([]);
  const [basedOnRoleRoutes, setBasedOnRoleRoutes] = useState([]);
  const { role } = useSelector((state) => state.security);
  let userRole = localStorage.getItem("userRole");
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    console.log(token);
    const role = localStorage.getItem("userRole");
    console.log("role of  =" + role);
    if (token != null) {
      const decodedToken = jwtDecode(token);
      console.log(`decoded token: ${JSON.stringify(decodedToken)}`);
    }
    const filteredRoutes = routes.filter((route) => {
      if (!route.role) return true;
      return route.role.includes(role);
    });

    setBasedOnRoleRoutes(filteredRoutes);
  }, [role]);

  const routes = [
    {
      name: "Dashboard",
      path: "/dashboard",
      iconClass: "fa-solid fa-house-user",
      show: true,
      role: ["Requester", "Trainer", "Associate", "Technical Manager"],
    },

    {
      name: "Training Management",
      iconClass: "fa-solid fa-id-badge icon-color",
      show: true,
      showSubRoutes: true,
      role: ["Requester", "Trainer", "Technical Manager"],
      subRoutes: [
        {
          name: "Request Training",
          subPath: "/requestTraining",
          iconClass: "fa-solid fa-house-user",
          show: userRole === "Technical Manager" || userRole === "Requester",
          role: ["Trainer", "Technical Manager", "Requester"],
        },
        {
          name: "Training List",
          subPath: "/trainingList",
          iconClass: "fa-solid fa-house-user",
          show: true,
          role: ["Requester", "Trainer", "Technical Manager"],
        },
      ],
    },

    {
      name: "Test Management",
      iconClass: "fas fa-pencil-square icon-color",
      show: userRole !== "Requester",
      showSubRoutes: true,
      role: ["Trainer", "Technical Manager"],
      subRoutes: [
        {
          name: "CreateQuestion",
          subPath: "/test-createTest",
          iconClass: "fa-solid fa-house-user",
          show: true,
        },
        {
          name: "Question List",
          subPath: "/test-testList",
          iconClass: "fa-solid fa-house-user",
          show: true,
        },
        {
          name: "TestList",
          subPath: "/test-testLists",
          iconClass: "fa-solid fa-house-user",
          show: true,
        },
        {
          name: "Test Instruction",
          subPath: "/test-instruction",
          iconClass: "fa-solid fa-house-user",
          show: true,
        },
      ],
    },

    {
      name: "Associate Managment",
      iconClass: "fa-solid fa-people-roof icon-color",
      show: userRole === "Technical Manager",
      showSubRoutes: true,
      role: ["Technical Manager"],
      subRoutes: [
        {
          name: "Add ",
          subPath: "/associate-addAssociate",
          iconClass: "fa-solid fa-house-user",
          show: true,
        },
        {
          name: "List",
          subPath: "/associate-associateList",
          iconClass: "fa-solid fa-house-user",
          show: true,
        },
        {
          name: "Assign Test",
          subPath: "/assignTest",
          iconClass: "fa-solid fa-house-user",
          show: false,
        },
      ],
    },

    {
      name: "Master Mangement",
      iconClass: "fa-solid fa-list",
      show: userRole !== "Associate",
      showSubRoutes: true,
      role: ["Requester", "Trainer", "Technical Manager"],

      subRoutes: [
        {
          name: "Technology ",
          iconClass: "fa-solid fa-laptop-code icon-color",
          show: userRole !== "Requester",
          innershowSubRoutes: true,
          role: ["Trainer", "Technical Manager"],
          innersubRoutes: [
            {
              name: "Create ",
              path: "/tech-addTech",
              subPath: "/technology-createTechnology",
              iconClass: "fa-solid fa-house-user",
              show: true,
            },
            {
              name: " List",
              subPath: "/technology-technologyList",
              iconClass: "fa-solid fa-house-user",
              show: true,
            },
          ],
        },
        {
          name: "Unit ",
          iconClass: "fa-solid fa-laptop-code icon-color",
          show: true,
          innershowSubRoutes: true,
          role: ["Trainer", "Technical Manager"],
          innersubRoutes: [
            {
              name: "Create ",
              subPath: "/Unit-createUnit",
              iconClass: "fa-solid fa-house-user",
              show: true,
            },
            {
              name: "List",
              subPath: "/Unit-unitList",
              iconClass: "fa-solid fa-house-user",
              show: true,
            },
          ],
        },
        {
          name: "Client ",
          iconClass: "fas fa-sitemap icon-color",
          show: true,
          innershowSubRoutes: true,
          role: ["Trainer", "Technical Manager"],
          innersubRoutes: [
            {
              name: "Create",
              subPath: "/client-management-createClient",
              iconClass: "fa-solid fa-house-user",
              show: true,
            },
            {
              name: "List",
              subPath: "/client-clientList",
              iconClass: "fa-solid fa-house-user",
              show: true,
            },
          ],
        },
      ],
    },
    {
      name: "Report",
      iconClass: "fa-solid fa-magnifying-glass",
      show: true,
      showSubRoutes: true,
      role: ["Requester", "Trainer", "Technical Manager"],
      subRoutes: [
        {
          name: "TestReport",
          subPath: "/testReport",
          iconClass: "fa-solid fa-house-user",
          show: true,
        },
      ],
    },
  ];

  const handleClose = React.useCallback(
    () => open && width < 992 && onClose(),
    [open, onClose, width]
  );

  const handleSubNavToggle = (event) => {
    event.stopPropagation();
    const { routeindex } = event.target.dataset;
    setOpenedSubNav((prevState) =>
      prevState === parseInt(routeindex) ? null : parseInt(routeindex)
    );
  };
  const ihandleSubNavToggle = (event) => {
    event.stopPropagation();
    const { routeindex } = event.target.dataset;
    setOpenedISubNav((prevState) =>
      prevState === parseInt(routeindex) ? null : parseInt(routeindex)
    );
  };

  const handleHighlightMenu = (event) => {
    event.stopPropagation();
    const { index } = event.currentTarget.dataset;
    setActiveIndex((prevState) =>
      prevState === parseInt(index) ? null : parseInt(index)
    );
    setOpenedSubNav((prevState) =>
      prevState === parseInt(index) ? null : parseInt(index)
    );
  };

  const ihandleHighlightMenu = (event) => {
    event.stopPropagation();
    const { index } = event.currentTarget.dataset;
    setSubActiveIndex((prevState) =>
      prevState === parseInt(index) ? null : parseInt(index)
    );
    setOpenedISubNav((prevState) =>
      prevState === parseInt(index) ? null : parseInt(index)
    );
  };

  return (
    <>
      <div className={`vertical-menu d-block ${open ? "" : "sidebar-close"}`}>
        <div className="h-100">
          <div
            id="sidebar-menu"
            className="h-10  d-flex flex-column justify-content-between"
          >
            <div>
              <ul className="list-style-none padding-0">
                {basedOnRoleRoutes.map(
                  (route, index) =>
                    route.show && (
                      <li key={route.path} className=" menu-link-wrapper">
                        <div
                          className={`d-flex justify-content-between align-items-center menu-class ${
                            activeIndex === index ? "active-tab" : ""
                          }`}
                          onClick={handleHighlightMenu}
                          data-index={index}
                        >
                          <Link
                            to={route.path}
                            className="text-decoration-none menu-link"
                            exact={route.path === "/"}
                            data-routeindex={index}
                          >
                            <i
                              className={`${route.iconClass} padding-10 ${
                                open ? "" : "sidebar-close"
                              }`}
                            ></i>
                            <span
                              className={`menu-text font-size-16 padding-10 ${
                                open ? "" : "sidebar-close"
                              }`}
                            >
                              {route.name}
                            </span>
                          </Link>
                          {route.showSubRoutes &&
                            route.subRoutes.length > 0 && (
                              <i
                                className={`fa-solid fa-angle-${
                                  openedSubNav === index ? "up" : "down"
                                } color-grey cursor-pointer margin-right-15 submenu-class`}
                                role="button"
                                data-routeindex={index}
                                onClick={handleSubNavToggle}
                              ></i>
                            )}
                        </div>
                        {route.showSubRoutes && route.subRoutes.length > 0 && (
                          <ul
                            className={`list-style-none ${
                              openedSubNav === index ? "submenu" : "d-none"
                            }`}
                          >
                            {route.subRoutes.map(
                              (subRoute, subindex) =>
                                subRoute.show && (
                                  <li
                                    key={subRoute.subPath}
                                    className="margin-11 submenu"
                                  >
                                    <div
                                      className={`d-flex justify-content-between align-items-center menu-class ${
                                        subActiveIndex === subindex + 1000
                                          ? "active-tab"
                                          : ""
                                      }`}
                                      onClick={handleHighlightMenu}
                                      data-index={subindex + 1000}
                                    >
                                      <Link
                                        to={subRoute.subPath}
                                        className="text-decoration-none color-grey menu-link"
                                      >
                                        <span className="menu-text font-size-16 padding-10">
                                          {subRoute.name}
                                        </span>
                                      </Link>
                                      {subRoute.innershowSubRoutes &&
                                        subRoute.innersubRoutes.length > 0 && (
                                          <i
                                            className={`fa-solid fa-angle-${
                                              openedISubNav === subindex + 1000
                                                ? "up"
                                                : "down"
                                            } color-grey cursor-pointer margin-right-15 submenu-class`}
                                            role="button"
                                            data-routeindex={subindex + 1000}
                                            onClick={ihandleSubNavToggle}
                                          ></i>
                                        )}
                                    </div>
                                    {/* ---inner sub route start---- */}
                                    {subRoute.innershowSubRoutes &&
                                      subRoute.innersubRoutes.length > 0 && (
                                        <ul
                                          className={`list-style-none ${
                                            openedISubNav === subindex + 1000
                                              ? "submenu"
                                              : "d-none"
                                          }`}
                                        >
                                          {subRoute.innersubRoutes.map(
                                            (isubRoute, isubIndex) =>
                                              isubRoute.show && (
                                                <li
                                                  key={isubRoute.subPath}
                                                  className="margin-15 submenu"
                                                >
                                                  <div
                                                    className={`d-flex justify-content-between align-items-center menu-class ${
                                                      activeIndex ===
                                                      isubIndex + 2000
                                                        ? "active-tab"
                                                        : ""
                                                    }`}
                                                    onClick={
                                                      ihandleHighlightMenu
                                                    }
                                                    data-index={
                                                      isubIndex + 2000
                                                    }
                                                  >
                                                    <Link
                                                      to={isubRoute.subPath}
                                                      className="text-decoration-none color-grey menu-link"
                                                    >
                                                      <span className="menu-text font-size-16 padding-10">
                                                        {isubRoute.name}
                                                      </span>
                                                    </Link>
                                                  </div>
                                                </li>
                                              )
                                          )}
                                        </ul>
                                      )}
                                    {/* ----inner sub route end---- */}
                                  </li>
                                )
                            )}
                          </ul>
                        )}
                      </li>
                    )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
