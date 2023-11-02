import React, { useState } from 'react';
import InputField from '../../../ui/inputField/InputField';
import classes from './RegisterAssociateForm.module.css';
import { registerAssociate } from '../../../redux/features/associate/RegisterAssociateSlice';
import { useDispatch } from 'react-redux';
import Button from '../../../ui/button/Button';
import classes1 from './HeaderItem.module.css'
import { useNavigate } from 'react-router-dom';

const RegisterAssociateForm = (props) => {

    const nevigate = useNavigate();

    const [associates, setAssociates] = useState({
        emailId: "",
        password: ""
    });
    const dispatch = useDispatch();

    const getAssociateData = (e) => {
        setAssociates({
            ...associates, [e.target.name]: e.target.value
        });
        console.log(associates);
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(associates);
        dispatch(registerAssociate(associates));
        alert("Associate registered successfully...");
        nevigate("/trainer/registerAssociate");
        setAssociates({
            emailId: "",
            password: ""
        })
        
    };

    return (
        <>
            <div className='row'>
                <div className='row mt-3'>
                    <div className='col-xl-8 col-lg-7 col-md-6 col-sm-4'>
                        <h5 className={classes1.boxtitle}>Registration Form</h5>
                    </div>

                    <div className='col-xl-4 col-lg-5 col-md-6 col-sm-8'>
                        <form className="form-inline" onSubmit={handleOnSubmit}>
                            <div className={classes1.btn}>
                                <Button onClick={handleOnSubmit}>Register</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <hr />
            <div className={classes.form}>
                {/* 1st row */}
                <div className={classes.field}>
                    <div className="row justify-content-center">
                        <div className="col-6">
                            <h6><b>Email ID</b></h6>
                            <InputField><input
                                onChange={getAssociateData}
                                style={{ width: "100%" }}
                                name='emailId'
                                className={classes.inputField}
                                type="email"
                                placeholder="Email Id"
                                aria-label='emailId'
                            /></InputField>
                        </div>
                    </div>
                </div>
                {/*2nd Row*/}
                <div className={classes.field}>
                    <div className="row justify-content-center">
                        <div className="col-6">
                            <h6><b>Password</b></h6>
                            <InputField><input
                                onChange={getAssociateData}
                                style={{ width: "100%" }}
                                name='password'
                                className={classes.inputField}
                                type="password"
                                placeholder='password'
                                aria-label='password'
                            /></InputField>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterAssociateForm;