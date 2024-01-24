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
    </Routes>
  );
}
