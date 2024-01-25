import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import RegisterUser from "../components/user/RegisterUser.jsx";
import { LoginUser } from "../components/user/LoginUser.jsx";
import MainContent from "../components/common/dashboard-layout/mainContent";
import { AddQuestion } from "../components/question-management/AddQuestion.jsx";
import { CreateTraining } from "../components/training/CreateTraining.jsx";
import CreateUnitForm from "../components/Unit Management/CreateUnitForm.jsx";
import ListUnit from "../components/Unit Management/ListUnit.jsx";




export default function AppRoutes() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <Routes>
      <Route path="/login" element={<LoginUser setLoggedIn={setLoggedIn} />} />
      <Route path="/" element={<LoginUser setLoggedIn={setLoggedIn} />} />
      <Route path="/" element={<RegisterUser />} />
      <Route path="/dashboard" element={<MainContent />} />

      <Route
        path="/test-createTest"
        element={
          <MainContent>
            <AddQuestion />
          </MainContent>
        }
      />
      <Route
        path="/requestTraining"
        element={
          <MainContent>
            <CreateTraining />
          </MainContent>
        }
      />
      <Route
        path="/Unit-createUnit"
        element={
          <MainContent>
            <CreateUnitForm />
          </MainContent>
        }
      />
      <Route
        path="/Unit-unitList"
        element={
          <MainContent>
            <ListUnit />
          </MainContent>
        }
      />

<Route path="/Unit-createUnit" element={<CreateUnitForm></CreateUnitForm>}></Route>
    </Routes>
  );
}
