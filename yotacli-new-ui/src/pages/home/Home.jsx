import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/login/loginAction";
import { useEffect, useState } from "react";
import Card from '../../components/Card/Card';

export const Home = () => {

    let cardStyle = {
        backgroundColor: '#fff',
        borderRadius: '16px',
        boxShadow: '0 8px 8px rgba(0, 0, 0, 0.1)', /* Add shadow */
        width: 'calc(33.33% - 20px)', /* Set width (33.33% minus padding) */
        marginBottom: '30px',/* Add margin between cards */
        marginLeft: '20px',
        marginRight: '20px'
    };


    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);
    const dispatch = useDispatch();
    const role = userData.userRole?.substring(5).replace('_', ' ');
    const [userRole, setUserRole] = useState(null);

    const logoutHandler = () => {
        dispatch(logout());
        navigate("/");
    };

    const USER_ROLES = "ASSOCIATE";

    useEffect(() => {
        if (userData.userRole)
            setUserRole(userData.userRole?.substring(5).replace('_', ' '));
    }, [userData]);

    return (
        <div>
            <h2>Home Page</h2>
            {userData && (
                <div>
                    <h3>Welcome, {userData.fullName}</h3>
                    <br />
                    <h4>This is the home page for {role}</h4>
                    <div>
                        {/* {role === 'TECHNICAL MANAGER' && <div>Welcome, TECHNICAL MANAGER!</div>}
                        {role === 'TRAINER' && <div>Welcome, TRAINER!</div>} */}
                        {userRole === USER_ROLES && (
                            <>
                                <div style={cardStyle}>
                                    <Card>
                                        <h4>My Trainings</h4>
                                    </Card>
                                </div>
                                <div style={cardStyle}>
                                    <Card>
                                        <h4>My Tests</h4>
                                    </Card>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
};
