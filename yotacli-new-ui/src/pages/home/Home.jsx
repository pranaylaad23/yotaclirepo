import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/login/loginAction";
import TestPaper from "../associates/student/TestPaper";
import MyTestButton from "../associates/MyTestButton";
import { USER_ROLES } from "../../constants/helperConstants";
import StartTest from "../associates/student/StartTest";
import StudentDashboard from "../associates/student/StudentDashboard";

export const Home = () => {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();
  const role = userData.userRole?.substring(5).replace("_", " ");

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div>
      <h2>Home Page</h2>
      {userData && role !== USER_ROLES.ASSOCIATE && (
        <div>
          <h3>Welcome, {userData.fullName}</h3>
          <br />
          <h4>This is the home page for {role}</h4>
        </div>
      )}
      {userData && role === USER_ROLES.ASSOCIATE && (
        <div>
          <h3>Welcome, {userData.fullName}</h3>
          <br />
          <div>
            {/* <StartTest /> */}
            <StudentDashboard/>
          </div>
        </div>
      )}
    </div>
  );
};
