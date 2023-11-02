import React, { useEffect, useState } from 'react'
import Button from '../../../ui/button/Button'
import InputField from '../../../ui/inputField/InputField'
import classes from './UpdateAssociateForm.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios';
import { updateAssociate } from '../../../redux/features/associate/UpdateAssociateSlice'


const UpdateAssociateForm = () => {
    const nevigate = useNavigate();

    const { id } = useParams();
    const dispatch = useDispatch();

        const initialState = {
            //firstName: "",
            //middleName: "",
            //lastName: "",
            //contactNo: "",
            associateName: "",
            emailId: "",
            //password: ""
        
        };

        const [updateAssociateData, setUpdateAssociateData] = useState(initialState);

        useEffect(() => {
            if (id) {
                axios.get(`http://localhost:9090/yota/api/associates/${id}`).then(
                    res => {
                        console.log(res.data);
                        setUpdateAssociateData(res.data)
                    });
            }
        },
            [id]);

        console.log(updateAssociateData);

        const newAssociateData = (e) => {
            setUpdateAssociateData({ ...updateAssociateData, [e.target.emailId]: e.target.value });
        }

        const handleOnUpdate = async (e) => {
            e.preventDefault();
            console.log("updated data ", updateAssociateData);
            setUpdateAssociateData(updateAssociateData);
            dispatch(updateAssociate({
                //id: updateAssociateData.id,
                //firstName: updateAssociateData.firstName,
                //middleName: updateAssociateData.middleName,
                //lastName: updateAssociateData.lastName,
                //contactNo: updateAssociateData.contactNo,
                associateName: updateAssociate.associateName,
                emailId: updateAssociateData.emailId
                //password: updateAssociateData.password
            }))
                .unwrap()
                .then(response => {
                    // alert(response.data);
                    nevigate("/associatelist");

                })
                .catch(err => {
                    window.alert(err.massage);
                });

            window.alert("Associate updated successfully..!")
            
        }
        console.log(updateAssociateData);


        return (
            <>
                <div className='row'>
                    <div className='row mt-3'>
                        <div className='col-xl-8 col-lg-7 col-md-6 col-sm-4'>
                            <h5 className={classes.boxtitle}>Update Associate</h5>
                        </div>

                        <div className='col-xl-4 col-lg-5 col-md-6 col-sm-8'>
                            <form className="form-inline"

                             onSubmit={handleOnUpdate}
                            >
                                <div className={classes.btn}>
                                    <Button  type="submit">Update</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <hr />
                <div className={classes.form}>
                    {/* 1st row */}
                    <div className="row">
                        {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mt-3">
                            <h6><b>First Name</b></h6>
                            <InputField><input
                                name='firstName'
                                value={updateAssociateData.firstName}
                                onChange={newAssociateData}
                                className={classes.inputField} />
                            </InputField>
                        </div> */}
                        {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mt-3">
                            <h6><b>Middle Name</b></h6>
                            <InputField><input
                                name='middleName'
                                value={updateAssociateData.middleName}
                                onChange={newAssociateData}
                                className={classes.inputField} />
                            </InputField>
                        </div> */}
                        <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12 mt-3">
                            <h6><b>Associate Name</b></h6>
                            <InputField><input
                                name='associateName'
                                value={updateAssociateData.associateName}
                                onChange={newAssociateData}
                                className={classes.inputField} />
                            </InputField>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mt-3">
                            <h6><b>Email ID</b></h6>
                            <InputField ><input
                                id='emailId'
                                name='emailId'
                                value={updateAssociateData.emailId}
                                onChange={newAssociateData}
                                className={classes.inputField}
                                type="email"
                                aria-label='emailId' />
                            </InputField>
                        </div>
                    </div>
                </div>
                <div className={classes.form}>
                    {/* 2nd row */}
                    <div className="row">
                        {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mt-3">
                            <h6><b>Last Name</b></h6>
                            <InputField><input
                                name='lastName'
                                value={updateAssociateData.lastName}
                                onChange={newAssociateData}
                                className={classes.inputField} />
                            </InputField>
                        </div> */}
                        {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mt-3">
                            <h6><b>Contact No.</b></h6>
                            <InputField><input
                                name='contactNo'
                                value={updateAssociateData.contactNo}
                                onChange={newAssociateData}
                                className={classes.inputField} />
                            </InputField>
                            <p className={classes.errormsg}>Contact No. should be exactly 10 digit.</p>
                        </div> */}
                    </div>
                </div>
                <div className={classes.form}>
                    {/* 3rd row */}
                    <div className="row">
                        {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mt-3">
                            <h6><b>Email ID</b></h6>
                            <InputField ><input
                                id='emailId'
                                name='emailId'
                                value={updateAssociateData.emailId}
                                onChange={newAssociateData}
                                className={classes.inputField}
                                type="email"
                                aria-label='emailId'
                                readOnly='readOnly' />
                            </InputField>
                        </div> */}
                    </div>
                </div>
            </>
        )
    }

    export default UpdateAssociateForm;