import React from "react";
import { Routes, Route } from "react-router-dom";
import MainContent from "../components/common/dashboard-layout/mainContent";
import Dashboard from "../components/dashboard/dashboard";
import CreateTest from "../components/test-management/createTest";

export default function AppRoutes() {
  return (
    <MainContent>
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>}></Route>
        <Route
          path="/test/createTest"
          element={<CreateTest></CreateTest>}
        ></Route>
      </Routes>
    </MainContent>
  );
}
