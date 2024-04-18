import {Navigate, Route, Routes} from "react-router-dom";
import {Login} from "../pages/login/Login";
import {SignUp} from "../pages/register/SignUp";
import {useEffect} from "react";
import axios from "axios";
import {isTokenExpired} from "../security/jwt/JwtService";
import {Home} from "../pages/home/Home";
import {getDecryption} from "../security/crypto/EncryptionDecryption";
import {DEFAULT_REQUEST_HEADER_CONTENT_TYPE, TOKEN_KEY} from "../constants/helperConstants";
import {AllAssociates} from "../pages/associates/AllAssociates";
import {AllTrainers} from "../pages/trainers/AllTrainers";
import {PendingUsers} from "../pages/pending-users/PendingUsers";

export const AppRoutes = () => {

    useEffect(() => {
        const requestInterceptor = axios.interceptors.request.use(
            (config) => {
                const token = localStorage.getItem(TOKEN_KEY);
                if (token) {
                    const decryptedToken = getDecryption(token);
                    if (decryptedToken && !isTokenExpired(token)) {
                        config.headers['Authorization'] = `Bearer ${decryptedToken}`;
                        config.headers["Content-Type"] = config.headers["Content-Type"] ? config.headers["Content-Type"] : DEFAULT_REQUEST_HEADER_CONTENT_TYPE;
                        return config;
                    }
                }
                config.headers["Content-Type"] = config.headers["Content-Type"] ? config.headers["Content-Type"] : DEFAULT_REQUEST_HEADER_CONTENT_TYPE;
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
            <Route path={"/all-associates"} element={<AllAssociates/>}/>
            <Route path={"/all-trainers"} element={<AllTrainers/>}/>
            <Route path={"/all-pending-users"} element={<PendingUsers/>}/>

            {/*this should always be kept at last place, keep all the application urls above this one*/}
            <Route path={"/*"} element={<Navigate to={"/"}/>}/>
        </Routes>
    )
};
