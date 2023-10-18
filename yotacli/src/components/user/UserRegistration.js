import React from 'react';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import RegistrationCSS from './UserRegistration.css'
import LoginHeader from './UserHeader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import axios from 'axios';

const UserRegistration = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const registerUser = () => {
        console.log("email: ", email)
        let userData = {
            username: email,
            password: password
        }
        console.log(userData);
        console.log("userData Data: " + userData.email);
        //Can call API here to verify the login details:
        axios.post('http://localhost:9090/yota/user/register', userData)
            .then((resp) => {
                console.log(resp);
                if (resp.data) {
                    //   navigate('/home');
                    toast("Registration Success!");
                    setTimeout(() => {
                        navigate('/');
                    }, 1000);
                }
            }).catch((error) => {
                console.log("ERORR:::::>>>>" + error);
                toast("Somethig went wrong!!");
                setEmail('');
                setPassword('');
                navigate('/register');
            });

        // toast("Registration Success!");
        // setTimeout(() => {
        //     navigate('/login');
        // }, 1000);

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
                                <Link to='/login'>Back</Link>
                                <h3 className='text-center'>Registration</h3>
                            </div>
                            <div class="card-body">
                                <div class="col mt-4">
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Label>User Name:</Form.Label>
                                            <Form.Control type="text" onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter email" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Label>Create Password:</Form.Label>
                                            <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Creat Password" />
                                        </Form.Group>
                                    </Form>
                                    <div className='text-center'>
                                        <button type='submit' className='btn btn-success login-btn' onClick={registerUser}>Register</button>
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
export default UserRegistration;