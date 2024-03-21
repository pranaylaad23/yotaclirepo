import React, { useState } from 'react'
import "./Nomination.module.css";
import { useDispatch } from 'react-redux';
import { addNominations, uploadExcel } from '../../features/redux/training/trainingAction';
import Button from '../common/button/Button';

const Nomination = (selectedEmployees) => {

    const [empName, setEmpName] = useState("");
    const [empId, setEmpId] = useState("");
    const [empEmail, setEmpEmail] = useState("");
    const [nominatedEmployees, setNominatedEmployees] = useState(Array.isArray(selectedEmployees) ? selectedEmployees : []);
    const [file, setFile] = useState(null);
    const dispatch = useDispatch();

    const handleNominateEmployee = (event) => {
        event.preventDefault();

        const newEmployee = {
            employeeName: empName,
            employeeId: empId,
            employeeEmail: empEmail,
        };

        setNominatedEmployees([...nominatedEmployees, newEmployee]);
        setEmpName("");
        setEmpId("");
        setEmpEmail("");
        console.log(nominatedEmployees);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Nominated Employees:", nominatedEmployees);
        dispatch(addNominations(nominatedEmployees));
        // onNominate(nominatedEmployees);
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };
    const handleUpload = () => {
        if (file) {
            dispatch(uploadExcel(file));
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <div className="Header">
                    <h4>Nomination Form</h4>
                    <div className="SaveButton">
                        <button type="submit" className="savebutton btn btn-primary">
                            Final Submit
                        </button>
                    </div>
                </div>
                <hr />
                <br />

                <div className="NominatedList">
                    <p><h6>Nominated Employees</h6>
                    </p>
                    <table style={{borderCollapse:"collapse", width: "100%"}}>
                        <thead>
                            <tr>
                                <th style={{ padding: "1rem", textAlign: "left", border: "1px solid #ddd", backgroundColor: "#f2f2f2" }}>Name</th>
                                <th style={{ padding: "1rem", textAlign: "left", border: "1px solid #ddd", backgroundColor: "#f2f2f2"}}>ID</th>
                                <th style={{ padding: "1rem", textAlign: "left", border: "1px solid #ddd", backgroundColor: "#f2f2f2"}}>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {nominatedEmployees.map((employee, index) => (
                                <tr key={index}>
                                    <td style={{ padding: "1rem", textAlign: "left", border: "1px solid #ddd" }}>{employee.employeeName}</td>
                                    <td style={{ padding: "1rem", textAlign: "left", border: "1px solid #ddd" }}>{employee.employeeId}</td>
                                    <td style={{ padding: "1rem", textAlign: "left", border: "1px solid #ddd" }}>{employee.employeeEmail}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <hr />
                <div className="QuestionForm row g-3">
                    <div className="employeeName col-md-6">
                        <h6>Name Of Employee</h6>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Employee Name"
                            value={empName}
                            onChange={(e) => setEmpName(e.target.value)}
                        />
                    </div>
                    <div className="employeeId col-md-6">
                        <h6>Employee ID</h6>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Employee ID"
                            value={empId}
                            onChange={(e) => setEmpId(e.target.value)}
                        />
                    </div>
                    <div className="employeeEmail col-md-6">
                        <h6>Employee Email Id</h6>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter Employee Email Id"
                            value={empEmail}
                            onChange={(e) => setEmpEmail(e.target.value)}
                        />
                    </div>
                    <div className="AddEmployeeButton col-md-6" style={{marginTop:"45px"}}>
                        {/* <button type="button" className="addEmployeeButton" onClick={handleNominateEmployee}>
                            Add Employee
                        </button> */}
                        <Button onClick={handleNominateEmployee}>Add Employee</Button>
                    </div>

                    <hr />

                    <div className="UploadFile">
                        <h6>Bulk Upload</h6>
                        <input type='file' onChange={handleFileChange} />
                        <button
                            type="button"
                            className="uploadbutton btn btn-primary"
                            onClick={handleUpload}
                            style={{marginLeft:'-50px'}}
                        >
                            Upload Question
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

Nomination.defaultProps = {
    selectedEmployees: [],
};

export default Nomination
