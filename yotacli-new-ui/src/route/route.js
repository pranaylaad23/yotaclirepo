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
import { ListTechnology } from "../components/technology-management/listTechnology.jsx";
import { TrainingList } from "../components/training/TrainingList.jsx";
import {AddAssociate} from "../components/associate/AddAssociate.jsx";
import { ListQuestions } from "../components/question-management/list-questions/ListQuestions.jsx";
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
        path="/test-testList"
        element={
          <MainContent>
            <ListQuestions/>
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
        path="/technology-technologyList"
        element={
          <MainContent>
            <ListTechnology />
          </MainContent>
        }
      />

      <Route
        path="/associate-addAssociate"
        element={
          <MainContent>
            <AddAssociate />
          </MainContent>
        }
      />
    </Routes>
  );
}
