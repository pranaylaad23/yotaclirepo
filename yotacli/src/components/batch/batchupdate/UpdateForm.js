import React, { Fragment, useEffect, useState } from 'react'
import Button from '../../../ui/button/Button'
import InputField from '../../../ui/inputField/InputField'
import classes from "../../batch/batchupdate/UpdateForm.module.css"
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import axios from 'axios'
import { createBatch } from '../../../redux/features/batch/CreateBatchSlice'


const UpdateForm = (props) => {

    const { id } = useParams();
    const dispatch = useDispatch();


    const initialState = {

        batchIdentifier: "",
        batchName: "",
        batchDescription: "",
        startDate: "",
        endDate: "",
        createdAt:""
    };

    const [updateBatchData, setUpdateBatchData] = useState(initialState);


    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:9090/yota/api/batches/${id}`).then(
                res => {
                    console.log(res.data);
                    setUpdateBatchData(res.data)
                });
        }



    }, []);

    console.log(updateBatchData);

    const newBatchData = (e) => {
        setUpdateBatchData({
            ...updateBatchData,
            [e.target.name]: e.target.value,
        });
    }
   
    const onHandleUpdate = async (e) => {
        e.preventDefault();
        console.log("Updated data", updateBatchData);
        setUpdateBatchData(updateBatchData);


        dispatch(createBatch({
            id: updateBatchData.id,
            batchIdentifier: updateBatchData.batchIdentifier,
            batchName: updateBatchData.batchName,
            batchDescription:
            updateBatchData.batchDescription,
            startDate: updateBatchData.startDate,
            endDate: updateBatchData.endDate,
            createdAt:updateBatchData.createdAt,
        }))
    
            .unwrap()
            .then(response => {
                window.alert(`"Batch details with Identifier: " ${updateBatchData.batchIdentifier} " updated Sucessfully"`);
            })

        
            .catch(e => {
                alert(e.data.error);
            });


    }

    console.log(updateBatchData);

    return (

        <Fragment>
            <div className="row d-flex justify-content-center">
                <div className='row mt-3'>

                    <div className='col-xl-8 col-lg-7 col-md-6 col-sm-4'>

                        <h5 className={classes.boxtitle}>Update Batch </h5>

                    </div>
                     <div className='col-6 col-lg-4'>

                        <form className="form-inline" onSubmit={onHandleUpdate}>
                          
                            <div className={classes.btn}>
                                <Button className={classes.button} type="submit" >Update</Button>
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
                        <InputField>
                            <input type="text" name="batchIdentifier"
                                value={updateBatchData.batchIdentifier}
                                onChange={newBatchData}
                                className={classes.InputField} id="BatchIdentifier" required  readOnly="readonly"/>
                        </InputField>
                    </div>
                    <div className="col-md-5">
                        <label for="BatchName" className={classes.label}>Batch Name</label>
                        <InputField>
                            <input type="text" name="batchName"
                                value={updateBatchData.batchName}
                                onChange={newBatchData}
                                className={classes.InputField} id="BatchName" required />
                        </InputField>
                    </div>
                    {/* 2nd row  */}
                    <div className="col-md-12">
                        <div className="row mt-4 mb-4">
                            <div className="col-md-2" style={{ padding: "26px 0px 0px 16px" }}>
                                <label for="BatchDescription" className={classes.label}>Description</label>
                            </div>
                            <div className={`col-md-9`} style={{ padding: "0px" }}>
                                <textarea
                                    name="batchDescription"
                                    value={updateBatchData.batchDescription}
                                    onChange={newBatchData}

                                    className={`form-control ${classes.textArea} ${classes.InputField} ${classes.label}`} placeholder="Enter Batch Description here..." id="BatchDescription" rows="3"></textarea>

                            </div>
                        </div>
                    </div>
                    {/* 3rd row */}
                    <div className="col-md-4 gap">
                        <label for="StartDate" className={classes.label}>Start Date</label>
                        <InputField>
                            <input type="date"
                                name="startDate"
                                value={updateBatchData.startDate}
                                onChange={newBatchData}
                                className={classes.InputField} id="StartDate" required />
                        </InputField>
                    </div>
                    <div className="col-md-4">
                        <label for="EndDate" className={classes.label}>End Date</label>
                        <InputField >
                            <input type="date"
                                name="endDate"
                                value={updateBatchData.endDate}
                                onChange={newBatchData}
                                className={classes.InputField} id="EndDate" required />
                        </InputField>

                    </div>
                </form>
            </div>
        </Fragment>

    )
}

export default UpdateForm
