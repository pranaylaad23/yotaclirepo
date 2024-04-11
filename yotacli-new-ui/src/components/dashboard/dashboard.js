import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import "./dashboard.css";
import {Card} from "react-bootstrap";
import {AssignedTestsCard} from "../assigned-test-user/assigned-test-user";

export const Dashboard = () => {
    const navigate = useNavigate();
    const {userData} = useSelector((state) => state.security);
    let roles = userData.userRole;

    /*useEffect(() => {
        const token = localStorage.getItem(TOKEN_KEY);
        if (token) {
            if (isTokenExpired(token)) {
                console.log("Token Expired");
                navigate("/");
            }
        } else {
            console.log("Token not found");
            navigate("/");
        }
    }, [navigate]);*/

    console.log("role", roles);
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
            <AssignedTestsCard/>
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
