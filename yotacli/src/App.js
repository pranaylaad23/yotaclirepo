import React from 'react';
import './App.css';
import ListTechnology from './component/technology/ListTechnology';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/listTechnology' element={<ListTechnology/>}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;
