import {useEffect, useRef, useState} from "react";
import styles from "./Login.module.css";
import {Link, useNavigate} from "react-router-dom";
import {isTokenExpired} from "../../security/jwt/JwtService";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../features/login/loginAction";
import {clearMessage} from "../../features/login/loginSlice";

const initialForm = {
    email: null,
    password: null
}

export const Login = () => {

    const emailInputRef = useRef('');
    const passwordInputRef = useRef('');
    const [loginData, setLoginData] = useState(initialForm);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.auth.userData);


    useEffect(() => {
        const token = userData.token;
        if (token && !isTokenExpired(token))
            navigate("/home");
        else {
            console.info('Token not found or expired');
            if (userData.message)
                alert(userData.message)
            navigate("/");
        }
        return () => {
            if (userData.status === "FAILED")
                dispatch(clearMessage());
        }
    }, [navigate, userData]);

    function submitForm(event) {
        event.preventDefault();
        const email = emailInputRef.current.value;
        const password = passwordInputRef.current.value;

        setLoginData({
            email: email,
            password: password,
        });
    }

    useEffect(() => {
        if (loginData.email && loginData.password) {
            console.log("Trying logging in...");
            dispatch(login(JSON.stringify(loginData)));
        }
    }, [loginData, navigate, dispatch]);

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={submitForm}>
                <div className={styles["form-content"]}>
                    <h3 className={styles["form-title"]}>Sign In</h3>
                    <div className="form-group mt-3">
                        <label className={styles["form-label"]}>Email address</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Enter email"
                            ref={emailInputRef}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label className={styles["form-label"]}>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            ref={passwordInputRef}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-dark">
                            Submit
                        </button>
                    </div>
                    <div className="text-center mt-3">
                        Not registered yet?{" "}
                        <Link to={"/register"}
                              style={{textDecoration: "none"}}>Sign Up</Link>
                    </div>
                </div>
            </form>
        </div>
    );
};
