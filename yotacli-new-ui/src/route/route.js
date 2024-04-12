import React, {useEffect, useState} from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import {LoginUser} from "../components/user/LoginUser.jsx";
import {RegisterUser} from "../components/user/RegisterUser.jsx";
import {MainContent} from "../components/common/dashboard-layout/mainContent";
import {Dashboard} from "../components/dashboard/dashboard.js";
import {AddQuestion} from "../components/question-management/add-questions/AddQuestion.jsx";
import {CreateTraining} from "../components/training-management/CreateTraining.jsx";
import {ListUnit} from "../components/unit-management/list-unit/ListUnit.jsx";
import {ListTechnology} from "../components/technology-management/list-technology/listTechnology.jsx";
import {TrainingList} from "../components/training-management/TrainingList.jsx";
import {ClientForm} from "../components/client-management/add-client/ClientForm.jsx";
import {TechnologyForm} from "../components/technology-management/add-technology/TechnologyForm.jsx";
import {AddAssociate} from "../components/associate-management/add-associate/AddAssociate.jsx";
import {ListQuestions} from "../components/question-management/list-questions/ListQuestions.jsx";
import ListClient from "../components/client-management/list-client/ListClient.jsx";
import {CreateUnitForm} from "../components/unit-management/add-unit/CreateUnitForm.jsx";
import {ListElement} from "../components/question-management/test-list/ListElement.jsx";
import {AssociatesList} from "../components/associate-management/list-associate/AssociatesList.jsx";
import {
    AssociateAssignedTestsList
} from "../components/dashboard/list-associateAssignedTests/associateAssignedTestsList.jsx";
import {TestInstruction} from "../components/question-management/test-instruction/TestInstruction.jsx";
import {TestList} from "../components/take-test/TestList.jsx";
import {StartTest} from "../components/take-test/StartTest.jsx";
import {TestQuestions} from "../components/take-test/test-questions/TestQuestions.jsx";

import Nomination from "../components/training-management/Nomination.jsx";

import {ApproveStatus} from "../components/training-management/training-model/ApproveStatus.jsx";
import {AssociatesListToTraining} from "../components/associate-management/list-associate/AssociateListToTraining";
import {ListCategory} from "../components/technology-management/technology-category/listCategory";
import {useDispatch} from "react-redux";
import {syncUserAuthData} from "../features/security/securtiyAction";
import {DEFAULT_REQUEST_HEADER_CONTENT_TYPE, TOKEN_KEY} from "../constants/helperConstants";
import {getDecryption} from "../security/crypto/EncryptionDecryption";
import {isTokenExpired} from "../security/jwt/JwtService";
import axios from "axios";

export const AppRoutes = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);

    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        dispatch(syncUserAuthData());
    }, [dispatch]);

    useEffect(() => {
        const requestInterceptor = axios.interceptors.request.use(
            (config) => {
                const token = localStorage.getItem(TOKEN_KEY);
                if (token) {
                    const decryptedToken = getDecryption(token);
                    if (decryptedToken && !isTokenExpired(token)) {
                        config.headers['Authorization'] = `Bearer ${decryptedToken}`;
                        config.headers["Content-Type"] = config.headers["Content-Type"] ? config.headers["Content-Type"] : DEFAULT_REQUEST_HEADER_CONTENT_TYPE;
                        return config;
                    }
                }
                config.headers["Content-Type"] = config.headers["Content-Type"] ? config.headers["Content-Type"] : DEFAULT_REQUEST_HEADER_CONTENT_TYPE;
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        )

        return () => {
            axios.interceptors.request.eject(requestInterceptor);
        };
    }, []);

    return (
        <Routes>
            <Route path="/requester-registration" element={<RegisterUser/>}/>
            <Route path="/login" element={<LoginUser setLoggedIn={setLoggedIn}/>}/>
            <Route path="/" element={<LoginUser setLoggedIn={setLoggedIn}/>}/>
            <Route
                path="/dashboard"
                element={
                    <MainContent>
                        <Dashboard/>
                    </MainContent>
                }
            />
            <Route
                path="/dashboard/assigned-tests-list"
                element={
                    <MainContent>
                        <AssociateAssignedTestsList/>
                    </MainContent>
                }
            />

            <Route
                path="/test-createTest"
                element={
                    <MainContent>
                        <AddQuestion/>
                    </MainContent>
                }
            />
            <Route
                path="/test-testList"
                element={
                    <MainContent>
                        <ListQuestions/>
                    </MainContent>
                }
            />
            <Route
                path="/test-testLists"
                element={
                    <MainContent>
                        <ListElement/>
                    </MainContent>
                }
            />
            <Route
                path="/test-instruction"
                element={
                    <MainContent>
                        <TestInstruction/>
                    </MainContent>
                }
            />
            <Route
                path="/requestTraining"
                element={
                    <MainContent>
                        <CreateTraining/>
                    </MainContent>
                }
            />
            <Route
                path="/requestNomination"
                element={
                    <MainContent>
                        <Nomination/>
                    </MainContent>
                }
            />
            <Route
                path="/trainingList"
                element={
                    <MainContent>
                        <TrainingList/>
                    </MainContent>
                }
            />

            <Route
                path="/associate-addAssociate"
                element={
                    <MainContent>
                        <AddAssociate/>
                    </MainContent>
                }
            />
            <Route
                path="/associate-associateList"
                element={
                    <MainContent>
                        <AssociatesList/>
                    </MainContent>
                }
            />
            <Route
                path="/technology-createTechnology"
                element={
                    <MainContent>
                        <TechnologyForm/>
                    </MainContent>
                }
            />
            <Route
                path="/technology-technologyList"
                element={
                    <MainContent>
                        <ListTechnology/>
                    </MainContent>
                }
            />

            <Route
                path="/technology-category"
                element={
                    <MainContent>
                        <ListCategory/>
                    </MainContent>
                }
            />

            <Route
                path="/client-management-createClient"
                element={
                    <MainContent>
                        <ClientForm/>
                    </MainContent>
                }
            />
            <Route
                path="/client-clientList"
                element={
                    <MainContent>
                        <ListClient/>
                    </MainContent>
                }
            />
            <Route
                path="/Unit-createUnit"
                element={
                    <MainContent>
                        <CreateUnitForm/>
                    </MainContent>
                }
            />
            <Route
                path="/Unit-unitList"
                element={
                    <MainContent>
                        <ListUnit/>
                    </MainContent>
                }
            />
            <Route
                path="/takeTest"
                element={
                    <MainContent>
                        <TestList/>
                    </MainContent>
                }
            />
            <Route path="/start-test" element={<StartTest/>}/>
            {/* <Route path="/approveTraining" element={<ApproveStatus />} /> */}
            <Route
                path="/take-quetions"
                element={
                    <MainContent>
                        <TestQuestions/>
                    </MainContent>
                }
            />
            <Route
                path="/approveTraining/:id"
                element={
                    <MainContent>
                        <TrainingList/>
                        <ApproveStatus/>
                    </MainContent>
                }
            />
            {/* <Route
        path="/changeTrainingStatus/:id"
        element={
          <MainContent>
            <TrainingList />
            <ChangeTrainingStatus />
          </MainContent>
        }
      /> */}
            <Route
                path="/addAssociate/:id"
                element={
                    <MainContent>
                        <AssociatesListToTraining/>
                    </MainContent>
                }
            />
        </Routes>
    );
};
