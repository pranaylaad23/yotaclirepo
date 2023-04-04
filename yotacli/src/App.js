
import React from 'react';
import './App.css';
import BatchList from './components/batch/BatchList';
import { Route, Routes } from 'react-router-dom';
import Dashboard from "./components/dashboard/Dashboard";


function App() {
  return (
    <React.Fragment >
      <Routes>
      <Route path="/" element={<Dashboard />} />
        <Route path="batchlist" element={<BatchList />} />
      </Routes>
      <BatchList/>
    </React.Fragment>

  );
}

export default App;
