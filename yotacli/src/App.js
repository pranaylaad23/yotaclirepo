<<<<<<< Updated upstream
import './App.css';
import ListAssociate from './components/associate/ListAssociate';
=======
import React from "react";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import { Provider } from "react-redux";
import { store } from "./app/store";
>>>>>>> Stashed changes

function App() {
  return (
    <div>
<<<<<<< Updated upstream
      <ListAssociate/>
=======
      <Provider store={store}>
        <Dashboard />
      </Provider>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
