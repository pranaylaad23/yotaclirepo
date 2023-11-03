
import React from "react";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { Route, Routes } from "react-router-dom";
import StudentDashboard from "./student/StudentDashboard";
import Analytics from "./student/pages/Analytics";
import TestLinks from "./student/pages/TestLinks";
import Training from "./student/pages/Training";
import TrainingSummary from "./student/pages/TrainingSummary";
import { Signout } from "./student/pages/Signout";
import StdDashboard from "./student/pages/Dashboard";
import TraineeDashboardLayout from "./components/trainee/dashboard-layout/TraineeDashboardLayout";


function App() {

  return (
    <div>
      <Provider store={store}>
        <Routes>
        <Route path="/*" element={<Dashboard />}/>
        <Route path="/associate" element={<TraineeDashboardLayout/>}/>
        <Route path="/student/*" element={<StudentDashboard/>}>
            <Route path="dashboard" element={<StdDashboard/>}/>
            <Route path="analytics" element={<Analytics/>}/>
            <Route path="testlinks" element={<TestLinks/>}/>
            <Route path="training" element={<Training/>}/>
            <Route path="trainingsummary" element={<TrainingSummary/>}/>
            <Route path="signout" element={<Signout/>}/>
        </Route>
        </Routes>
      </Provider>
    </div>
  )

}

export default App;
