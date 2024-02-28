import React, { useEffect, useState } from 'react'
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
    // const filteredRoutes = routes.filter((route) => {
    //   if (!route.role) return true; // Show if no roles specified
    //   return route.role.includes(role);
    // });
 
    //setBasedOnRoleRoutes(filteredRoutes);
  }, [role]);
 
  console.log('role', role);
  return (
    <div className="font-size-16"> Welcome To {r2} Dashboard</div>
  )
}

export default Dashboard;
