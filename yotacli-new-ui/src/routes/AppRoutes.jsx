import {Route, Routes} from "react-router-dom";
import {Login} from "../pages/login/Login";
import {SignUp} from "../pages/register/SignUp";
import {useEffect} from "react";
import axios from "axios";
import {isTokenExpired} from "../security/jwt/JwtService";
import {Home} from "../pages/home/Home";
import {getDecryption} from "../security/crypto/EncryptionDecryption";
import {TOKEN_KEY} from "../constants/helperConstants";
import {AllStudents} from "../pages/students/AllStudents";
import {AllTrainers} from "../pages/trainers/AllTrainers";

export const AppRoutes = () => {

    useEffect(() => {
        const requestInterceptor = axios.interceptors.request.use(
            (config) => {
                const token = localStorage.getItem(TOKEN_KEY);
                if (token) {
                    const decryptedToken = getDecryption(token);
                    if (decryptedToken && !isTokenExpired(token)) {
                        config.headers['Authorization'] = `Bearer ${decryptedToken}`;
                    }
                }
                config.headers['Content-Type'] = "application/json";
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        )

        return () => {
            axios.interceptors.request.eject(requestInterceptor);
        };
    }, []);

    return (
        <Routes>
            <Route path={"/"} element={<Login/>}/>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/register"} element={<SignUp/>}/>
            <Route path={"/home"} element={<Home/>}/>
            <Route path={"/all-students"} element={<AllStudents/>}/>
            <Route path={"/all-trainers"} element={<AllTrainers/>}/>
        </Routes>
    )
};
