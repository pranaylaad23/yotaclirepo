
import React, { Fragment } from 'react';
import InputField from '../../../ui/inputField/InputField';
import classes from "../createbatch/BatchForm.module.css"
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { createBatch } from '../../../redux/features/batch/CreateBatchSlice';
import Button from '../../../ui/button/Button';


const BatchForm = (props) => {

    const [batches, setBatches] = useState({});
    const dispatch = useDispatch();

    const getBatchData = (e) => {

        setBatches({ ...batches, [e.target.name]: e.target.value });
        console.log(batches);
    }



    const handleOnSubmit = (e) => {

        alert("Batch created sucessfully...")
        e.preventDefault();
        console.log(batches);
        dispatch(createBatch(batches));
        window.location.reload(false);

    };

    return (
        <Fragment>
            <div className="row d-flex justify-content-center">
                <div className='row mt-3'>

                    <div className='col-xl-8 col-lg-7 col-md-6 col-sm-4'>

                        <h5 className={classes.boxtitle}>Create Batch </h5>

                    </div>


                    <div className='col-6 col-lg-4'>

                        <form className="form-inline" onSubmit={handleOnSubmit}>
                            {/* <Button>
                  <div><i className='fa fa-filter' style={{ color: 'white' }}></i></div>
                </Button> */}
                            <div className={classes.btn}>
                                <Button className={classes.button} type="submit" onClick={handleOnSubmit}>Save</Button>
                            </div>
                        </form>

                    </div>
                </div>

            </div>
            <hr />
            {/*  */}
            <div>
                <form className="row gy-3">
                    {/* 1st row  */}
                    <div className="col-md-5 gap">
                        <label for="BatchIdentifier" className={classes.label}>Batch Identifer</label>
                        <InputField >
                            <input type="text" name="batchIdentifier"
                                onChange={getBatchData}
                                className={classes.InputField} placeholder='Enter Batch Name' id="BatchIdentifier" required />
                        </InputField>
                    </div>
                    <div className="col-md-5">
                        <label for="BatchName" className={classes.label}>Batch Name</label>
                        <InputField>
                            <input type="text" name="batchName"

                                onChange={getBatchData}
                                className={classes.InputField} placeholder="Enter Identifier" id="BatchName" required />
                        </InputField>
                    </div>
                    {/* 2nd row  */}
                    <div className="col-md-12">
                        <div className="row mt-4 mb-4">
                            <div className="col-md-2" style={{ padding: "26px 0px 0px 16px" }}>
                                <label for="BatchDescription" className={classes.label}>Description</label>
                            </div>
                            <div className="col-md-9 " style={{ padding: "0px" }}>
                                <textarea
                                    name="batchDescription"
                                    onChange={getBatchData}
                                    className={`form-control ${classes.textArea} ${classes.InputField}`} placeholder="Enter Batch Description here..." id="BatchDescription" rows="3"></textarea>

                            </div>
                        </div>
                    </div>
                    {/* 3rd row */}
                    <div className="col-md-4 gap">
                        <label for="StartDate" className={classes.label}>Start Date</label>
                        <InputField>
                            <input type="date"
                                name="startDate"

                                onChange={getBatchData}
                                className={classes.InputField} id="StartDate" required />
                        </InputField>
                    </div>
                    <div className="col-md-4">
                        <label for="EndDate" className={classes.label}>End Date</label>
                        <InputField >
                            <input type="date"
                                name="endDate"

                                onChange={getBatchData}
                                className={classes.InputField} id="EndDate" required />
                        </InputField>

                    </div>


                </form>
            </div>
        </Fragment>
    )
}

export default BatchForm;
