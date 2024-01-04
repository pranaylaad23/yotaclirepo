import React, { useCallback, useState, useEffect } from "react";
import Header from "../header/header";
import Sidebar from "../sidebar/Sidebar";
import "./mainContent.style.css";
import { useWindowSize } from "./useWindowSize";

export default function MainContent({ children }) {
  const { width } = useWindowSize();
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 992);

  useEffect(() => {
    if (width < 992) setSidebarOpen(false);
    else setSidebarOpen(true);
  }, [width]);

  const handleSidebarToggle = useCallback(() => {
    setSidebarOpen((prevState) => !prevState);
  }, []);

  const handleSidebarClose = useCallback(() => {
    setSidebarOpen(false);
  }, []);

  return (
    <div className="layout-wrapper">
      <Header onSidebarToggle={handleSidebarToggle} />{" "}
      <Sidebar open={sidebarOpen} onClose={handleSidebarClose} />
      <div className={`main-content ${sidebarOpen ? "" : "margin-left-0"}`}>
        <div className="page-content">
          <div className="container-fluid ">{children}</div>
        </div>
      </div>
    </div>
  );
}
