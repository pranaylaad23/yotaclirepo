import React, { useState } from "react";
import classes from "./Dashboard.module.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import TitleDashboard from "./TitleDashboard";
import Footer from "./Footer";
import Routing from "../../routing";

function Dashboard() {

  const[isSideOpen, setIsSideOpen] = useState(true);

  const isOpen = (sidebar) => {
    setIsSideOpen(sidebar);
  }

  return (
    <div className="container-fluid">
      <div className="row" style={{ height: "38.1rem"}}>
        <Sidebar sideBarOpen={isOpen}/>
        {/* <div className="col-xl-10 col-lg-10" style={{ padding: "0px 0px", width: isSideOpen ? "1050px" : "1200px" }}> */}
        <div className={`${isSideOpen ? 'col-xl-10' : 'col-11'}`}>
          {console.log(isSideOpen)}
          <Navbar />
          <div style={{ marginBottom: 70 }}>
            {" "}
            <Routing />
          </div>
          <div
            className="container-fluid"
            style={{
              paddingLeft: "0px",
              paddingRight: "12px",
              position: "fixed",
              bottom: 0,
            }}
          >
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;