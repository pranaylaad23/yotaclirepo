import React from "react";
import "./App.css";
import BatchList from "./components/batch/BatchList";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import ListQuestions from "./components/Question/ListQuestions";
import ListTechnology from "./components/technology/ListTechnology";

function App() {
  return <Dashboard />;
}

export default App;
