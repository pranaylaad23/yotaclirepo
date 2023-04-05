
import React from 'react';
import './App.css';
import BatchList from './components/batch/BatchList';
import { Route, Routes } from 'react-router-dom';
import Dashboard from "./components/dashboard/Dashboard";
import ListQuestions from './components/Question/ListQuestions';
import ListTechnology from './components/technology/ListTechnology';


function App() {
  return (
    <React.Fragment >
      <Routes>
      <Route path="/" element={<Dashboard />} />
        <Route path="batches" element={<BatchList />} />
        <Route path="questions" element={<ListQuestions />} />
        <Route path='listTechnology' element={<ListTechnology/>}/>

      </Routes>
      
    </React.Fragment>
  );
}

export default App;
