import './App.css';
import {AppRoutes} from "./routes/AppRoutes";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {logout, syncUserAuthData} from "./features/login/loginAction";
import {Header} from "./components/header-component/Header";
import {isTokenExpired} from "./security/jwt/JwtService";
import {useLocation, useNavigate} from "react-router-dom";
import {PUBLIC_URLS, TOKEN_KEY} from "./constants/helperConstants";

function App() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        dispatch(syncUserAuthData());
    }, [dispatch]);

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
    }, []);

    return (
        <div className="App">
            <Header/>
            <main className={"page-content"}>
                <AppRoutes/>
            </main>
        </div>
    );
}

export default App;
