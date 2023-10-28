import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import loginCss from './UserLogin.css'
import LoginHeader from './UserHeader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import axios from 'axios';

const UserLogin = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userCredentail, setUserCredentail] = useState('');
    const loginUser = () => {
        //console.log("email: ", email)
        let userCredentail = {
            username: username,
            password: password
        }
        console.log(userCredentail);
        console.log("Login Data: " + userCredentail.username);
        //Can call API here to verify the login details:
        axios.post('http://localhost:9090/yota/user/authenticate', userCredentail)
            .then((resp) => {
                console.log("Response token::>>"+resp.data);
                const respData=resp.data;
                console.log("AUTH TOKEN:::>>"+respData.authToken);
                const jwtToken = respData.authToken;
            //  localStorage.setItem('token', jwtToken) // storing token in localstorage 
                sessionStorage.setItem('token',jwtToken);
                if (resp.data) {
                    // localStorage.setItem('token', resp.)
                    toast("Login Success!");
                    setTimeout(() => {
                        navigate('/dashboard');
                    }, 1000);
                }
            }).catch((error) => {
                console.log(error);
                toast("Invalid Credentail!!");
                setUserCredentail()
                navigate('/');
            });

    }

    return (
        <>
            <LoginHeader />
            <ToastContainer />
            <div className='login-bg-body'>
                <div class="container">
                    <div class="row">
                        <div class="col"> </div>
                        <div class="card login-card-body">
                            <div class="card-header">
                                <h3 className='text-center'>Login</h3>
                            </div>
                            <div class="card-body">
                                <div class="col mt-4">
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Label>User Name:</Form.Label>
                                            <Form.Control type="email" onChange={(e) => { setUsername(e.target.value) }} placeholder="Enter email" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Label>Password:</Form.Label>
                                            <Form.Control type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                                        </Form.Group>
                                    </Form>
                                    <div className='text-center'>
                                        <button type='submit' className='btn btn-success login-btn' onClick={loginUser}>Login</button>
                                        <span className='d-flex justify-content-center'>
                                            <Link to='/forgotPassword'>Forgot Password</Link>&nbsp;&nbsp;|
                                            New User?&nbsp;<Link to='/register'>Register</Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col"> </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
}
export default UserLogin;