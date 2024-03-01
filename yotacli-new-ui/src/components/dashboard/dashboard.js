
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import "./dashboard.css";
import { jwtDecode } from 'jwt-decode';
const Dashboard = () => {
  const [basedOnRoleRoutes, setBasedOnRoleRoutes] = useState([]);
  const { role } = useSelector((state) => state.security);
  let r2 = localStorage.getItem("userRole");
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    console.log(token);
    const r1 = localStorage.getItem("userRole");
    console.log("role of  =" + r1);
    if (token != null) {
      const decodedToken = jwtDecode(token);
      console.log(`decoded token: ${JSON.stringify(decodedToken)}`);
    }
  }, [role]);
 
  console.log('role', role);
  return (
    <div className="font-size-16">
    <h2> Welcome To {r2} Dashboard</h2>
    <button onClick={()=> {
        navigate("/dashboard/assigned-tests-list");
       }}>Show Tests</button>
   </div>

  )
}

export default Dashboard;
