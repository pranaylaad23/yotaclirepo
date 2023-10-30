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
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedUnit, setSelectedUnit] = useState([]);
    const [unitData, setUnitData] = useState('');
    const [selectedCompetency, setSelectedCompetency] = useState([]);
    const [competencyData, setCompetencyData] = useState('');
    const [selectedTrainingtype, setSelectedTrainingtype] = useState([]);
    const [trainingtypeData, setTrainingtypeData] = useState('');


    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:9090/yota/api/batches/${id}`).then(
                res => {
                    // console.log(res.data);
                    setUpdateBatchData(res.data)
                    splitUnitCompetencyTrainingMonthYear(res.data)
                   ;
                });
        }
        axios.get('http://localhost:9090/yota/api/unit')
        .then(resp => {
            if (resp.status == 200) {
                if (resp.data && resp.data.length) {
                    let unitData = resp.data;
                    let unitDataArray = [];
                    for (let i = 0; i < unitData.length; i++) {
                        let countObj = {
                            id: unitData[i].id,
                            name: unitData[i].name,
                        };
                        unitDataArray.push(countObj);
                    }
                    setSelectedUnit(unitDataArray);
                }
            }
        })
        .catch(err => console.log(err));
        axios.get('http://localhost:9090/yota/api/competency')
        .then(resp => {
            if (resp.status == 200) {
                if (resp.data && resp.data.length) {
                    let competencyData = resp.data;
                    let competencyDataArray = [];
                    for (let i = 0; i < competencyData.length; i++) {
                        let countObj = {
                            id: competencyData[i].id,
                            name: competencyData[i].name,
                        };
                        competencyDataArray.push(countObj);
                    }
                    setSelectedCompetency(competencyDataArray);
                }
            }
        })
        .catch(err => console.log(err));
        axios.get('http://localhost:9090/yota/api/trainingtype')
        .then(resp => {
            if (resp.status == 200) {
                if (resp.data && resp.data.length) {
                    let trainingtypeData = resp.data;
                    let trainingtypeDataArray = [];
                    for (let i = 0; i < trainingtypeData.length; i++) {
                        let countObj = {
                            id: trainingtypeData[i].id,
                            name: trainingtypeData[i].name,
                        };
                        trainingtypeDataArray.push(countObj);
                    }
                    setSelectedTrainingtype(trainingtypeDataArray);
                }
            }
        })
        .catch(err => console.log(err));
        
    }, []);

    const calculateBatchName = () => {
        const mergedName = `${unitData}-${competencyData}-${trainingtypeData}-${selectedMonth}-${selectedYear}`;
        return mergedName;
    };

    const months = [
        'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL',
        'MAY', 'JUNE', 'JULY', 'AUGUST',
        'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
    ];

    const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i);

    const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value);
    };

    const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
    };

    const handleUnitChange = (event) => {
        console.log("event.target.value",event.target.value)
        setUnitData(event.target.value);
    };

    const handleCompetencyChange = (event) => {
        setCompetencyData(event.target.value);
    };

    const handleTrainingtypeChange = (event) => {
        setTrainingtypeData(event.target.value);
    };
    const newBatchData = (e) => {
        setUpdateBatchData({
            ...updateBatchData,
            [e.target.name]: e.target.value,
        });
    }
   
    const onHandleUpdate = async (e) => {
        e.preventDefault();
        // console.log("Updated data", updateBatchData);
        updateBatchData['batchName'] = calculateBatchName();
        setUpdateBatchData(updateBatchData);


        dispatch(createBatch({
            id: updateBatchData.id,
            batchIdentifier: updateBatchData.batchIdentifier,
            batchName: updateBatchData.batchName,
            batchDescription: updateBatchData.batchDescription,
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

    const splitUnitCompetencyTrainingMonthYear =(data)=>{
        
        console.log("Batch Data ",data.batchName);
        let array =(data.batchName).split("-");
        console.log(array);
        updateBatchData['batchName'] = data.batchName;
        setUnitData(array[0]);
        setCompetencyData(array[1]);
        setTrainingtypeData(array[2]);
        setSelectedMonth(array[3]);
        setSelectedYear(array[4]);
    }

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
                <form className="row gy-1 form-control-md">
                    {/* 1st row  */}
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
                                        <select value={unitData} onChange={handleUnitChange} style={{ width: "302px" }}>
                                            <option value="">Select Unit</option>
                                            {
                                                selectedUnit.map((unit, index) => (
                                                    <option key={index} value={unit.name}>
                                                        {unit.name}
                                                    </option>
                                                ))}
                                        </select>
                                    </InputField>
                                </div>
                            </td>
                        </div>
                        <div className={`col-6 ${classes.inputName}`} style={{ marginTop: "25px" }}>
                            <td >
                                <div>
                                    <label className={classes.label} style={{ marginTop: "10px" }}>Competency:&nbsp;</label>
                                </div>
                            </td>
                            <td>
                                <div className={`col-12`} style={{ marginTop: "10px" }}>
                                    <InputField>
                                        <select value={competencyData} onChange={handleCompetencyChange} style={{ width: "319px" }}>
                                            <option value="">Select Competency</option>
                                            {selectedCompetency.map((competency, index) => (
                                                <option key={index} value={competency.name}>
                                                    {competency.name}
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
                                <div className={`col-12`} style={{ marginTop: "19px", marginLeft: "91px" }}>
                                    <InputField>
                                        <select value={trainingtypeData} onChange={handleTrainingtypeChange} style={{ width: "302px" }}>
                                            <option value="">Select Training Type</option>
                                            {selectedTrainingtype.map((trainingtype, index) => (
                                                <option key={index} value={trainingtype.name}>
                                                    {trainingtype.name}
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
                            <div className={`col-6 ${classes.inputName}`} style={{ marginTop: "10px" }}>
                                <td>
                                    <div style={{ marginLeft: "40px" }}>
                                        <label for="BatchName" className={classes.label}>Batch Name</label>
                                    </div>
                                </td>
                                <td>
                                    <div className={`col-12`} style={{ marginTop: "10px", marginLeft: "103px" }}>
                                        <InputField>
                                            <input type="text" value={calculateBatchName()}  name="batchName" className={classes.InputField} id="BatchName" style={{ width: "337px", marginBottom: "0px" }} disabled/>
                                        </InputField>
                                    </div>
                                </td>
                            </div>
                        </div>
                    </div>
                        {/* 2nd row  */}
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <div>
                            <td>
                                <div className={`col-12`} style={{ marginTop: "10px" }} >
                                    <label for="BatchDescription" className={classes.label}>Description</label>
                                </div>
                            </td>
                            <td>
                                <div className={`col-12`} style={{ marginTop: "10px", marginLeft: "17px" }}>
                                    <textarea
                                        name="batchDescription"
                                        value={updateBatchData.batchDescription}
                                        onChange={newBatchData}
                                        className={`form-control ${classes.textArea} ${classes.InputField}`} id="BatchDescription" placeholder="Enter Batch Description here..." id="BatchDescription" rows="3"></textarea>
                                </div></td>
                            
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
