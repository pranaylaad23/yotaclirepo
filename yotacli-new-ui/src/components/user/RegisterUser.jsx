import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Header} from "../common/header/Header";
import "./LoginUser.css";

export const RegisterUser = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user, success} = useSelector((state) => state.security);

    const onSubmit = (event) => {
        event.preventDefault();
        const userToRegister = {
            username,
            password,
        };

        // dispatch(registerUser(userToRegister));
        alert(`You have been Registered successfully as a Requester!
    Login With your UserName and Password`);
        navigate("/login");
    };
    return (
        <>
            <div>
                <Header/>
            </div>
            <div className="Register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 m-auto">
                            <div class="main d-flex align-items-center py-4 bg-body-tertiary">
                                <div class="form-signin w-100 m-auto">
                                    <form className="Registerform" onSubmit={onSubmit}>
                                        <h6 className=" display-6 text-center mb-3">Register </h6>
                                        <div className="mb-3 row" style={{marginleft: "30px"}}>
                                            <label
                                                for="inputPassword"
                                                class="email col-sm-1 col-form-label"
                                            >
                                                Email:
                                            </label>

                                            <div class="col-sm-4">
                                                <input
                                                    type="username"
                                                    className="form-control"
                                                    id="floatingInput"
                                                    placeholder="Enter Email"
                                                    value={username}
                                                    onChange={(event) => setUsername(event.target.value)}
                                                    style={{width: "300px", marginLeft: "70px"}}
                                                />
                                            </div>
                                        </div>
                                        <div class="mb-3 row">
                                            <label
                                                for="inputPassword"
                                                class="email col-sm-1 col-form-label"
                                            >
                                                Password:&nbsp;
                                            </label>
                                            <div class="col-sm-4">
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="floatingPassword"
                                                    placeholder="Password"
                                                    value={password}
                                                    onChange={(event) => setPassword(event.target.value)}
                                                    style={{width: "300px", marginLeft: "70px"}}
                                                />
                                            </div>
                                        </div>
                                        <div className="d-grid gap-2 col-6 mx-auto">
                                            <button
                                                className="signbuttonre btn btn-primary"
                                                type="submit"
                                            >
                                                Register
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
