import React from "react";
import classes from "../dashboard/dashboard.module.css";
import {Link} from "react-router-dom";

export const TestList = (props) => {
    const startTestPath = "/start-test";
    const testList = [
        {
            id: 1,
            testName: "Java",
            timeLimit: 60,
        },
        {
            id: 2,
            testName: "Python",
            timeLimit: 30,
        },
    ];

    return (
        <div>
            <h2 className={classes.title}>Test List</h2>
            <ul>
                {testList.map(test => {
                    return <li key={test.id}>
                        <Link
                            to={startTestPath}
                            target={"_blank"}
                            className="text-decoration-none color-grey menu-link"
                        >
                                      <span className="menu-text font-size-16 padding-10">
                                        {test.testName}
                                      </span>
                        </Link>
                    </li>

                })}
                {/*<li>
                    <Link
                        to={"/start-test"}
                        className="text-decoration-none color-grey menu-link"
                        target={"_blank"}
                    >
                        <span className="menu-text font-size-16 padding-10">
                            Test 1
                        </span>
                    </Link>
                </li>*/}
            </ul>
        </div>
    );
};
