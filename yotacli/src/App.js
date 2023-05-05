import React from "react";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {

  return (
    <div>
      <Provider store={store}>
        <Dashboard />
      </Provider>
    </div>
  )

}

export default App;
