
import React from 'react';
import InputField from '../../ui/inputField/InputField';
import classes from "../../components/batch/BatchForm.module.css";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

const BatchForm = (props) => {

    const [batch, setBatch] = useState({

        batchIdentifier: "",
        batchName: "",
        batchDescription: "",
        startDate: "",
        endDate: ""
    })
    const { batchIdentifier, batchName, batchDescription, startDate, endDate } = batch;
    const dispatch = useDispatch();

    //handle create batch function



    return (
        <div>

            <form className="row gy-3">
                {/* 1st row  */}
                <div className="col-md-5 gap">
                    <label for="BatchIdentifier" className={classes.label}>Batch Identifer</label>
                    <InputField >
                        <input type="text" value={batchIdentifier} 
                        onChange={(e) => setBatch({...batch,batchIdentifier:e.target.value})}
                         className={classes.InputField} placeholder='Enter Batch Name' id="BatchIdentifier" required />
                    </InputField>
                </div>
                <div className="col-md-5">
                    <label for="BatchName" className="form-label">Batch Name</label>
                    <InputField>
                        <input type="text"
                        value={batchName} 
                        onChange={(e) => setBatch({...batch,batchName:e.target.value})}
                         className={classes.InputField} placeholder="Enter Identifier" id="BatchName" required />
                    </InputField>
                </div>
                {/* 2nd row  */}
                <div className="col-md-9 gap">
                    <label for="BatchDescription" className={classes.label}>Description</label>
                    <textarea 
                    value={batchDescription} 
                    onChange={(e) => setBatch({...batch,batchDescription:e.target.value})}
                    className={"form-control"} style={{ marginLeft: "20px" }} placeholder="Enter Batch Description here..." id="BatchDescription" rows="3"></textarea>
                </div>

                {/* 3rd row */}
                <div className="col-md-4 gap">
                    <label for="StartDate" className={classes.label}>Start Date</label>
                    <InputField>
                        <input type="date" 
                        value={startDate} 
                        onChange={(e) => setBatch({...batch,startDate:e.target.value})}
                        className={classes.InputField} id="StartDate" required />
                    </InputField>
                </div>
                <div className="col-md-4">
                    <label for="EndDate" className="form-label">End Date</label>
                    <InputField >
                        <input type="date" 
                        value={endDate} 
                        onChange={(e) => setBatch({...batch,endDate:e.target.value})}
                        className={classes.InputField} id="EndDate" required />
                    </InputField>
                </div>
            </form>
        </div>
    )
}

export default BatchForm;
