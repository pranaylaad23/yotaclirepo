import React from 'react'
import {useSelector} from "react-redux"
import {Navigate, useLocation} from "react-router-dom"
import { getAuthToken } from './Authentication';

const ProtectedRoute = ({children}) => {
   const token = getAuthToken();
    if(!token) {
        return <Navigate to="/login"/>
    }
 return children

};

export default ProtectedRoute;