import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../features/login/loginAction";

export const Home = () => {

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);
    const dispatch = useDispatch();
    const role = userData.userRole?.substring(5).replace('_', ' ');

    const logoutHandler = () => {
        dispatch(logout());
        navigate("/");
    };

    return (
        <div>
            <h2>Home Page</h2>
            {userData && (
                <div>
                    <h3>Welcome, {userData.fullName}</h3>
                    <br/>
                    <h4>This is the home page for {role}</h4>
                </div>
            )}
        </div>
    )
};
