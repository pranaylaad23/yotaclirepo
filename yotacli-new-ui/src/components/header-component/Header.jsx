import {Fragment, useEffect, useState} from "react";
import styles from './Header.module.css';
import {useDispatch, useSelector} from "react-redux";
import Navigation from "./Navigation";
import {logout} from "../../features/login/loginAction";
import {useNavigate} from "react-router-dom";

export const Header = () => {

    const {userData} = useSelector((state) => state.auth);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const role = userData.userRole?.substring(5).replace('_', ' ');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = () => {
        dispatch(logout());
        navigate("/");
    };

    useEffect(() => {
        if (userData.token)
            setIsLoggedIn(true);
        else
            setIsLoggedIn(false);
    }, [userData]);

    return (
        <Fragment>
            <header className={styles["App-header"]}>
                <div className={styles["app-name"]}>
                    <p>
                        YOTA
                        <span className={styles["font-size-role"]}>
                            {role ? " ( " + role + " ) " : ""}
                        </span>
                    </p>
                </div>
                <Navigation isLoggedIn={isLoggedIn} onLogout={logoutHandler} role={role}/>
            </header>
        </Fragment>
    )
};
