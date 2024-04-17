import './App.css';
import {AppRoutes} from "./routes/AppRoutes";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {syncUserAuthData} from "./features/login/loginAction";

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(syncUserAuthData());
    }, [dispatch]);

    return (
        <div className="App">
            <AppRoutes/>
        </div>
    );
}

export default App;
