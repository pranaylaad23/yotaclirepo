import {Fragment, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../features/login/loginAction";
import {useNavigate} from "react-router-dom";
import Navigation from "./Navigation";

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
            <Navigation isLoggedIn={isLoggedIn}
                        onLogout={logoutHandler}
                        role={role}/>
            {/*<Bs1CircleFill size={24} alphabetic={4} vAlphabetic={4}/>*/}
        </Fragment>
    )
};
