import React, { useEffect, useRef, useState } from 'react';
import Card from '../../components/Card/Card';
import styles from "../../pages/training/Training.module.css";
import Button from 'react-bootstrap/esm/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addTraining, listTrainings } from '../../features/training/trainingAction';
import { fetchAllTrainers } from '../../features/trainers/trainerAction';
import { Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { TableHeader } from '../../components/table-component/TableHeader';
import { AssignTrainingIcon, ReportIcon } from '../../components/icons/Icons';

const Training = () => {
    const trainings = useSelector((state) => state.trainings);
    console.log(trainings);
    const trainers = useSelector((state) => state.trainers);
    const { userData } = useSelector((state) => state.auth);
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const trainingName = useRef("");
    const assignTo = useRef("");
    const startDate = useRef("");
    const endDate = useRef("");
    const nominated = useRef("");
    const navigate = useNavigate();

    useEffect(() => {
        if (userData.token) {
            dispatch(listTrainings());
            dispatch(fetchAllTrainers());
        }
    }, [dispatch, userData]);


    const theadData = ["Sr No", "Name", "Start Date", "End Date", "Assign To", "Nominated", "Registered in Training", "Action"];
    const options = { day: '2-digit', month: 'long', year: 'numeric' };

    const handleTrainingChange = (event) => {
        trainingName.current = event.target.value;
    };
    const handleAssignChange = (event) => {
        assignTo.current = event.target.value;
    };
    const handleStartDateChange = (event) => {
        startDate.current = event.target.value;
    };
    const handleEndDateChange = (event) => {
        endDate.current = event.target.value;
    };
    const handleNominationChange = (event) => {
        nominated.current = event.target.value;
    };
    const openModal = () => {
        setOpen(true);
    };

    const formSubmit = (event) => {
        const trainingObject = {
            trainingName: trainingName.current,
            assignTo: assignTo.current,
            startDate: startDate.current,
            endDate: endDate.current,
            totalNominations: nominated.current
        };
        dispatch(addTraining(trainingObject));
        setOpen(false);
        window.location.reload();
    }

    const navigateToAllAssociates = (data) => {
        localStorage.setItem("trainingId", data.id);
        localStorage.setItem("nominated", data.totalNominations);
        localStorage.setItem("registeredCount", data.registeredInTraining)
        navigate(`/all-associates`);
    }

    return (
        <div>

            <h5>Training List</h5>
            <Card className={styles["training-list"]}>
                <div>

                    <Button variant="primary" size="sm" style={{ marginLeft: "89%" }} onClick={openModal}>
                        Add Training
                    </Button>

                    <Modal
                        show={open}
                        onHide={() => setOpen(false)}
                        dialogClassName="modal-90w"
                        aria-labelledby="example-custom-modal-styling-title"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-custom-modal-styling-title">
                                Add Training
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form style={{ padding: "2%" }}>
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <label for="inputState" class="form-label">Training Name</label>
                                        <input type="text" class="form-control" placeholder="Training Name"
                                            onChange={handleTrainingChange} ref={trainingName} />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="inputState" class="form-label">Assign To</label>
                                        <select id="inputState" class="form-select" onChange={handleAssignChange}>
                                            <option>Select Trainer</option>
                                            {trainers.trainers.map((trainer) => (
                                                <option key={trainer.emailAdd} value={trainer.fullName}>
                                                    {trainer.fullName}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="inputState" class="form-label">Start Date</label>
                                        <input type="date" class="form-control" onChange={handleStartDateChange} />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="inputState" class="form-label">End Date</label>
                                        <input type="date" class="form-control" onChange={handleEndDateChange} />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="inputState" class="form-label">Total Nominations</label>
                                        <input type="number" class="form-control" placeholder="Total Nominations" onChange={handleNominationChange} />
                                    </div>
                                    <div class="col-md-6">
                                        <Button onClick={formSubmit} className={styles["submit-buttons"]}>Add</Button>
                                    </div>
                                </div>
                            </form>
                        </Modal.Body>
                    </Modal>

                    < table className="table table-bordered table-striped table-hover mt-1">
                        <TableHeader theadData={theadData} />
                        <tbody>
                            {Array.isArray(trainings.trainings) && trainings.trainings.map((training, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{training.trainingName}</td>
                                    <td>{new Date(training.startDate).toLocaleDateString('en-US', options)}</td>
                                    <td>{new Date(training.endDate).toLocaleDateString('en-US', options)}</td>
                                    <td>{training.assignTo}</td>
                                    <td>{training.totalNominations}</td>
                                    <td>{training.registeredInTraining}
                                        <a className={styles["view"]}>view associate</a>
                                    </td>
                                    <td>
                                        <div className={styles["action-buttons"]}>
                                            <AssignTrainingIcon assignTraining={() => navigateToAllAssociates(training)} />&nbsp;&nbsp;
                                            <ReportIcon />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card >
        </div >
    )
}

export default Training