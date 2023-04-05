import React from "react";
import classes from "./Dashboard.module.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import TitleDashboard from "./TitleDashboard";
import Routing from "../../routing";
function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="col-xl-10 col-lg-10" style={{ padding: "0px 0px" }}>
          <Navbar />
          <Routing />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
