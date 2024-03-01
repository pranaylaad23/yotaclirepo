import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-bootstrap-icons";
import classes from "./dashboard.module.css";
export default function Dashboard() {
  return (
    <div>
      <h2 className={classes.title}>Dashboard</h2>
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
}
