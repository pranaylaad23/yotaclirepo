import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAssignedTests} from "../../features/redux/associate/associateAction.js";
import "./assignedtestcard.css";
import Button from "../common/button/Button.jsx";

export const AssignedTestsCard = () => {
    const {aasignedtests} = useSelector((state) => state.associate);
    const {userData} = useSelector((state) => state.security);
    const [completed, setCompleted] = useState(null);
    const [pending, setPending] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (userData)
            dispatch(fetchAssignedTests({}));
    }, [dispatch, userData]);

    useEffect(() => {
        let completedCount = 0;
        let pendingCount = 0;
        aasignedtests?.forEach((ele) => {
            if (ele.testStatus == 0) {
                pendingCount++;
            } else {
                completedCount++;
            }
        });

        setCompleted(completedCount);
        setPending(pendingCount);
    }, [aasignedtests]);

    return (
        <div className="container">
            <div className="Card">
                <h4 className="Heading-Card">My Tests</h4>
                <hr></hr>
                <div className="trainingDetail">
                    <div className="trainingLabel"> Total Assigned Tests</div>
                    <div className="trainingCount">
                        <span className="tag-count">{aasignedtests?.length}</span>
                    </div>
                    <div className="trainingLabel">Completed</div>
                    <div className="trainingCount">
                        <span className="tag-count">{completed}</span>
                    </div>
                    <div className="trainingLabel">Pending</div>
                    <div className="trainingCount">
                        <span className="tag-count">{pending}</span>
                    </div>
                </div>
                <div className="main">
                    <Button>Show Tests</Button>
                </div>
            </div>
        </div>
    );
};
