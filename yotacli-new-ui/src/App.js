import "./App.css";
import {AppRoutes} from "./route/route";
import {useEffect} from "react";
import {TOKEN_KEY} from "./constants/helperConstants";
import {isTokenExpired} from "./security/jwt/JwtService";
import {useNavigate} from "react-router-dom";

export const App = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem(TOKEN_KEY);
        if (token) {
            if (isTokenExpired(token)) {
                console.log("Token Expired");
                navigate("/");
            }
        } else {
            console.log("Token not found");
            navigate("/");
        }
    }, [navigate]);

    return (
        <div className="App">
            <AppRoutes/>
        </div>
    );
};
