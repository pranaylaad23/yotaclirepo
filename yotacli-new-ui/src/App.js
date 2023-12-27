import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from './components/home/home'

import "./styles/global.scss";
import React,{useState} from "react";
 
function App() {
  const [isSidebarOpen,setIsSidebarOpen]=useState(true);
  const handelSidebarToggle =()=>{
    setIsSidebarOpen(!isSidebarOpen);
  }
  const Layout = () => {
    return (
      <div className="main">
        <Navbar handelSidebarToggle={handelSidebarToggle}/>
        <div className="container">{isSidebarOpen &&
          <div className="sidebarContainer sidebar-open">
            <Sidebar />
          </div>}
          <div className="contentContainer">
          <Outlet />
          </div>
        </div>
      </div>
    );
  };
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      
        
      ],
    },
   
   
  ]);
 
  return <RouterProvider router={router} />;
}
 
export default App;