
import React from 'react';
import './App.css';
import BatchList from './components/batch/BatchList';
import { Route, Routes } from 'react-router-dom';
import Dashboard from "./components/dashboard/Dashboard";
import ListQuestions from './components/Question/ListQuestions';


function App() {
  return (
    <React.Fragment >
      <Routes>
      <Route path="/" element={<Dashboard />} />
        <Route path="batches" element={<BatchList />} />
        <Route path="questions" element={<ListQuestions />} />
      </Routes>
      
    </React.Fragment>
  );
}

export default App;
