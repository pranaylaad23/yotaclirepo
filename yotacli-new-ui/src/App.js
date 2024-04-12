import "./App.css";
import {AppRoutes} from "./route/route";
import {useEffect} from "react";
import {PUBLIC_URLS, TOKEN_KEY} from "./constants/helperConstants";
import {isTokenExpired} from "./security/jwt/JwtService";
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logout} from "./features/security/securtiyAction";

export const App = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        const token = localStorage.getItem(TOKEN_KEY);
        if (token) {
            if (isTokenExpired(token)) {
                console.log("Token Expired");
                dispatch(logout());
                navigate("/");
            }
        } else {
            console.log("Token not found");
            if (!PUBLIC_URLS.includes(location.pathname))
                navigate("/")
        }
    }, [navigate]);

    return (
        <div className="App">
            <AppRoutes/>
        </div>
    );
};
