import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./dashboard.css";
import { jwtDecode } from "jwt-decode";
import classes from "./dashboard.module.css";
import { Card } from "react-bootstrap";
import { AssignedTestsCard } from "../assigned-test-user/assigned-test-user";

export const Dashboard = () => {
  const navigate = useNavigate();
  const { role } = useSelector((state) => state.security);
  let roles = localStorage.getItem("userRole");
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    console.log(token);
    const role = localStorage.getItem("userRole");
    console.log("role of  =" + role);
    if (token != null) {
      const decodedToken = jwtDecode(token);
      console.log(`decoded token: ${JSON.stringify(decodedToken)}`);
    }
  }, [role]);

  console.log("role", role);
  return (
    <div>
      <div className="font-size-16">
        <h5> Welcome To {roles} Dashboard</h5>
        <p
          onClick={() => {
            navigate("/dashboard/assigned-tests-list");
          }}
        >
          Show Tests
        </p>
      </div>
      <AssignedTestsCard />
      <Card>
        <p className="margin-15 submenu">
          <Link
            to={"/takeTest"}
            className="text-decoration-none color-grey menu-link"
          >
            <span className="menu-text font-size-16 padding-10">
              Go to Take Test
            </span>
          </Link>
        </p>
      </Card>
    </div>
  );
};
