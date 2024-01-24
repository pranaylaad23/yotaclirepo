import React, { useState, useEffect } from "react";
import { registerUser } from "../../features/security/securtiyAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./LoginUser.css";
const RegisterUser = () => {
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, error, loading, success } = useSelector(
    (state) => state.security
  );
 
  const onSubmit = (event) => {
    event.preventDefault();
    const userToRegister = {
      username,
      fullName,
      password,
      confirmPassword,
    };
    // console.log("User Detail : ",userToRegister);
    // dispatch registerUser function from securitySlice
    dispatch(registerUser(userToRegister));
  };
  useEffect(() => {
    //redirect user to login page if registration was successfull
    if (success) navigate("/login");
    //redirect authenticated user to dashboard
    if (user) navigate("/dashboard");
  }, [navigate, user, success]);
  return (
    <div className="register">
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto">
            <div class="main d-flex align-items-center py-4 bg-body-tertiary">
              <div class="form-signin w-100 m-auto">
                <form onSubmit={onSubmit}>
                  <h1 class="h3 mb-3 fw-normal">Please Register</h1>
 
                  <div class="form-floating">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInput"
                      
                      value={username}
                      onChange={(event) => setUsername(event.target.value)}
                    />
                    <label for="floatingInput">Email Address</label>
                  </div>
                  <div class="form-floating">
                    <input
                      type="password"
                      class="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                    <label for="floatingPassword">Password</label>
                  </div>
 
                  <div className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn btn-primary" type="submit">
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default RegisterUser;