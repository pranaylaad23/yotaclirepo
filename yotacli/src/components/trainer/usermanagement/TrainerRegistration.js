import React from 'react';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import loginCss from './TrainerRegistration.css'
import LoginHeader from './LoginHeader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const TrainerRegistration = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const registerTrainer = () => {
        console.log("email: ", email)
        let loginData = {
            email: email,
            password: password
        }
        console.log(loginData);
        console.log("Login Data: " + loginData.email);
        //Can call API here to verify the login details:
        toast("Registration Success!");
        setTimeout(() => {
            navigate('/login');
        }, 1000);
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
                                <h3 className='text-center'>Trainer Registration</h3>
                            </div>
                            <div class="card-body">
                                <div class="col mt-4">
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Label>Email Address:</Form.Label>
                                            <Form.Control type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter email" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Label>Create Password:</Form.Label>
                                            <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} placeholder=" Creat Password" />
                                        </Form.Group>
                                    </Form>
                                    <div className='text-center'>
                                        <button type='submit' className='btn btn-success login-btn' onClick={registerTrainer}>Register</button>
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
export default TrainerRegistration;