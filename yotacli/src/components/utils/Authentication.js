import { Navigate } from "react-router-dom";

export function getAuthToken(){
    //const token = localStorage.getItem('token');
    const token = sessionStorage.getItem('token');
    return token;
}

export function logout(){
    //const token = localStorage.getItem('token');
    const token = sessionStorage.removeItem('token');
    return  <Navigate to="/login"/>;
}