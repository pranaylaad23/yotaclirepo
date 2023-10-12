import React from 'react';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import loginCss from './TrainerRegistration.css'
import LoginHeader from './LoginHeader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TrainerRegistration = () => {
    const navigate = useNavigate();
    const routeToLogin = () => {
        //Need to write login api call here
        //  const authToken = 'sdfgdsgfdbjfd.dsfgfggdsfdsafaefreubjb.ergrtgd';
        //  localStorage.setItem('token', authToken);
        toast("Registration Success!");
        setTimeout(() => {
          navigate('/login');
        }, 2000);

        
    }
    return (
        <>
        <LoginHeader/>
        <ToastContainer />
            <div className='login-bg-body'>
                <div class="container">
                    <div class="row">
                        <div class="col"> </div>
                        <div class="card login-card-body">
                            <div class="card-header">
                                <h3 className='text-center'>Trainer Registration</h3>
                            </div>
                            <div class="card-body">
                                <div class="col mt-4">
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Label>Email Address:</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Label>Create Password:</Form.Label>
                                            <Form.Control type="password" placeholder=" Creat Password" />
                                        </Form.Group>
                                    </Form>
                                    <div className='text-center'>
                                        <button type='submit' className='btn btn-success login-btn' onClick={routeToLogin}>Register</button>
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