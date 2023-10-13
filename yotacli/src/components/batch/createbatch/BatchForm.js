import React, { Fragment } from 'react';
import InputField from '../../../ui/inputField/InputField';
import classes from "../createbatch/BatchForm.module.css"
import { useState } from 'react';
import { batch, useDispatch } from "react-redux";
import { createBatch } from '../../../redux/features/batch/CreateBatchSlice';
import Button from '../../../ui/button/Button';

const BatchForm = (props) => {
    const [batches, setBatches] = useState({});
    const dispatch = useDispatch();
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedUnit, setSelectedUnit] = useState('');
    const [selectedCompetency, setSelectedCompetency] = useState('');
    const [selectedTrainingtype, setSelectedTrainingtype] = useState('');

    const getBatchData = (e) => {
        setBatches({ ...batches, [e.target.name]: e.target.value });
        console.log(batches);
    }

    const calculateBatchName = () => {
        const mergedName = `${selectedUnit}-${selectedCompetency}-${selectedTrainingtype}-${selectedMonth}-${selectedYear}`;
        return mergedName;
    };

    const months = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];

    const units = [
        'unit 1', 'unit 2', 'unit 3', 'unit 4'
    ];

    const competencies = [
        'Java', 'React', 'AWS', 'Angular'
    ];

    const trainingtypes = [
        'Project specific', 'FRW', 'DRWF', 'On Demand'
    ];

    const unit = ['unit 1', 'unit 2', 'unit 3', 'unit 4'];

    const years = Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i);

    const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value);
    };

    const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
    };

    const handleUnitChange = (event) => {
        setSelectedUnit(event.target.value);
    };

    const handleCompetencyChange = (event) => {
        setSelectedCompetency(event.target.value);
    };

    const handleTrainingtypeChange = (event) => {
        setSelectedTrainingtype(event.target.value);
    };

    const handleOnSubmit = (e) => {

        alert("Batch created sucessfully...")
        e.preventDefault();
        console.log("batches data---", batches);
        dispatch(createBatch(batches));
        window.location.reload();

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
                            <div className={classes.btn}>
                                <Button className={classes.button} type="submit" onClick={handleOnSubmit}>Save</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <hr />
            <div>
                <form className="row gy-3">
                    {/* 1st row */}
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <div className={`col-6 ${classes.inputName}`} >
                            <td>
                                <div>
                                    <label className={classes.label} style={{ marginTop: "40px", marginLeft: "63px" }}>Unit:&nbsp;</label>
                                </div>
                            </td>
                            <td>
                                <div className={`col-12`} style={{ marginTop: "10px", marginLeft: "149px" }}>
                                    <InputField >
                                        <select value={selectedUnit} onChange={handleUnitChange} style={{ width: "302px" }}>
                                            <option value="">Select Unit</option>
                                            {units.map((unit, index) => (
                                                <option key={index} value={unit}>
                                                    {unit}
                                                </option>
                                            ))}
                                        </select>
                                    </InputField>
                                </div>
                            </td>
                        </div>
                        <div className={`col-6 ${classes.inputName}`} style={{ marginTop: "19px" }}>
                            <td >
                                <div>
                                    <label className={classes.label} style={{ marginTop: "10px" }}>Competency:&nbsp;</label>
                                </div>
                            </td>
                            <td>
                                <div className={`col-12`} style={{ marginTop: "10px" }}>
                                    <InputField>
                                        <select value={selectedCompetency} onChange={handleCompetencyChange} style={{ width: "319px" }}>
                                            <option value="">Select Competency</option>
                                            {competencies.map((competency, index) => (
                                                <option key={index} value={competency}>
                                                    {competency}
                                                </option>
                                            ))}
                                        </select>
                                    </InputField>
                                </div>
                            </td>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <div className={`col-6 ${classes.inputName}`} >
                            <td >
                                <div>
                                    <label className={classes.label} style={{ marginTop: "10px", marginLeft: "58px" }}>Training Type:&nbsp;</label>
                                </div>
                            </td>
                            <td>
                                <div className={`col-12`} style={{ marginTop: "10px", marginLeft: "91px" }}>
                                    <InputField>
                                        {/* <select name="trainingtype" onChange={getBatchData} style={{ height: "33px", width: "300px" }}>
                                            <option value="Select">select Training Type</option>
                                            <option value='trainingtype1'>On demand</option>
                                            <option value='trainingtype2'>Project specific</option>
                                            <option value='trainingtype3'>FRW</option>
                                            <option value='trainingtype4'>DRWF</option>
                                        </select> */}
                                        <select value={selectedTrainingtype} onChange={handleTrainingtypeChange} style={{ width: "302px" }}>
                                            <option value="">Select Training Type</option>
                                            {trainingtypes.map((trainingtype, index) => (
                                                <option key={index} value={trainingtype}>
                                                    {trainingtype}
                                                </option>
                                            ))}
                                        </select>
                                    </InputField>
                                </div>
                            </td>
                        </div>
                        <div className={`col-6 ${classes.inputName}`} style={{ marginTop: "10px" }}>
                            <td>
                                <div>
                                    <label className={classes.label} style={{ marginTop: "10px" }}>Month & Year:</label>
                                </div>
                            </td>
                            <td>
                                <div className={`col-12`} style={{ marginTop: "10px", }}>
                                    <tr><td>
                                        <InputField>
                                            <select value={selectedMonth} onChange={handleMonthChange} style={{ width: "150px" }}>
                                                <option value="">Select Month</option>
                                                {months.map((month, index) => (
                                                    <option key={index} value={month}>
                                                        {month}
                                                    </option>
                                                ))}
                                            </select>
                                        </InputField></td>
                                        <td>&nbsp;</td>
                                        <td><InputField>
                                            <select value={selectedYear} onChange={handleYearChange} style={{ width: "158px" }}>
                                                <option value="">Select Year</option>
                                                {years.map((year, index) => (
                                                    <option key={index} value={year}>
                                                        {year}
                                                    </option>
                                                ))}
                                            </select>
                                        </InputField></td>
                                    </tr>
                                </div>
                            </td>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <div className={`col-6 ${classes.inputName}`} >
                            <td>
                                <div style={{ marginLeft: "40px" }}>
                                    <label for="BatchName" className={classes.label}>Batch Name:</label>
                                </div></td>
                            <td>
                                <div className={`col-12`} style={{ marginTop: "10px", marginLeft: "103px" }}>
                                    <InputField>
                                        <input type="text" value={calculateBatchName()} onClick={getBatchData} name="batchName" className={classes.InputField} id="BatchName" style={{ width: "303px", marginBottom: "10px" }} />
                                    </InputField>
                                </div></td></div>
                    </div>
                    {/* 2nd row  */}
                    <div className="col-md-12">
                        <div className="row mt-4 mb-4">
                            <div className="col-md-2" style={{ padding: "26px 0px 0px 16px" }}>
                                <label for="BatchDescription" className={classes.label} style={{ marginLeft: "54px" }}>Description:</label>
                            </div>
                            <div className="col-md-9 ">
                                <textarea style={{ marginLeft: "7px", width: "962px" }}
                                    name="batchDescription"
                                    onChange={getBatchData}
                                    className={`form-control ${classes.textArea} ${classes.InputField}`} placeholder="Enter Batch Description here..." id="BatchDescription" rows="3"></textarea>
                            </div>
                        </div>
                    </div>
                    {/* 3rd row */}
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <div className={`col-6 ${classes.inputName}`} >
                            <td>
                                <div>
                                    <label for="StartDate" className={classes.label} style={{ marginTop: "40px", marginLeft: "63px" }}>Start Date:</label>
                                </div>
                            </td>
                            <td>
                                <div className={`col-12`} style={{ marginTop: "10px", marginLeft: "115px" }}>
                                    <InputField>
                                        <input type="date" style={{ height: "33px", width: "300px" }}
                                            name="startDate"
                                            onChange={getBatchData}
                                            className={classes.InputField} id="StartDate" required />
                                    </InputField>
                                </div>
                            </td>
                        </div>
                        <div className={`col-6 ${classes.inputName}`} style={{ marginTop: "19px" }}>
                            <td>
                                <div>
                                    <label for="EndDate" className={classes.label} style={{ marginTop: "10px" }}>End Date:</label>
                                </div>
                            </td>
                            <td>
                                <div className={`col-12`} style={{ marginTop: "10px", marginLeft: "26px" }}>
                                    <InputField >
                                        <input type="date" style={{ width: "334px", height: "35px" }}
                                            name="endDate"
                                            onChange={getBatchData}
                                            className={classes.InputField} id="EndDate" required />
                                    </InputField>
                                </div>
                            </td>
                        </div>
                    </div>
                </form>
            </div>
        </Fragment >
    )
}
export default BatchForm;
