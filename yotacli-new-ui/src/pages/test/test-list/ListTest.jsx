import { useEffect, useRef, useState } from "react"
import Card from "../../../components/Card/Card"
import styles from '../../test/test-list/ListTest.module.css'
import { useDispatch, useSelector } from "react-redux";
import { addTestToTrainings, countAssociateToAddedTraining, getAllTest } from "../../../features/tests/testAction";
import { SiGithubactions } from "react-icons/si";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { listTrainings } from "../../../features/training/trainingAction";
import Form from 'react-bootstrap/Form';

export const ListTest = () => {
    const { userData } = useSelector(state => state.auth);
    const { testList } = useSelector(state => state.tests);
    const trainings = useSelector((state) => state.trainings);
    const message = useSelector((state) => state.tests.message);
    const countAssociate = useSelector((state) => state.tests.countAssociate);

    console.log(countAssociate);

    const [open, setOpen] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    const dispatch = useDispatch();
    const trainingId = useRef();
    const options = { day: "2-digit", month: "long", year: "numeric" };

    useEffect(() => {
        if (userData.token) {
            dispatch(getAllTest())
            dispatch(listTrainings());
        }
    }, []);

    const addTestToTraining = () => {
        const testIds = localStorage.getItem("testId");
        const trainingIds = trainingId.current.value;
        if (testIds > 0 && trainingIds > 0) {
            dispatch(addTestToTrainings({ testId: testIds, trainingId: trainingIds }));
            dispatch(countAssociateToAddedTraining({ testId: testIds}))
            setShowMessage(true)
        } else {
            alert("Something went wrong please try again!!");
        }
    }

    return (
        <div>
            <h6>Test List</h6>
            <Card className={styles["test-list"]}>
                <table className="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Test Title</th>
                            <th scope="col">Total Question</th>
                            <th scope="col">Invited</th>
                            <th scope="col">ShortListed</th>
                            <th scope="col">Created On</th>
                            <th scope="col">End Date</th>
                            <th scope="col">Test Type</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array.isArray(testList) && testList.map((response, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{response.testTitle}</td>
                                    <td>{response.totalQuestions}</td>
                                    <td>{response.totalAssociateCount}</td>
                                    <td></td>
                                    <td>{new Date(response.createdAt).toLocaleDateString(
                                        "en-US",
                                        options
                                    )}</td>
                                    <td>
                                        {
                                            response.endDate ?
                                                new Date(response.endDate).toLocaleDateString("en-US", options)
                                                : "---"
                                        }
                                    </td>
                                    <td>{response.type}</td>
                                    <td>
                                        <a
                                            className="nav-link dropdown-toggle"
                                            id="navbarDropdown"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <SiGithubactions style={{ cursor: 'pointer', color: "blue", fontSize: "20px" }} />
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li>
                                                <Link className="dropdown-item" to="/">
                                                    Clone Test
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" onClick={() => {
                                                    setOpen(true);
                                                    localStorage.setItem("testId", response.id)
                                                }}>
                                                    Assign to training
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="/">
                                                    Assign to individual
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="/">
                                                    Edit Test
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="/">
                                                    View Questions
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="/">
                                                    Extend
                                                </Link>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>


                <Modal show={open} onHide={() => setOpen(false)}>
                    <Modal.Header>
                        <Modal.Title>Training list - Assign to training</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            {
                                showMessage === true
                                    ? (message === 'Test successfully assigned to Training.'
                                        ? <p style={{ color: "green" }}>{message}</p>
                                        : <p style={{ color: "red" }}>{message}</p>)
                                    : ""
                            }
                        </div>

                        <div>
                            <label for="inputState" class="form-label">
                                Training Name
                            </label>
                            <Form.Select ref={trainingId}>
                                <option>--Select training that you want to assign--</option>
                                {
                                    Array.isArray(trainings.trainings) &&
                                    trainings.trainings.map((training, index) => (
                                        <option value={training.id}>
                                            {training.trainingName}
                                        </option>
                                    ))
                                }
                            </Form.Select>
                        </div>
                    </Modal.Body>
                    <br />
                    <Modal.Footer>
                        <Button
                            variant="primary"
                            size="sm"
                            className={styles["assign-button"]}
                            onClick={() => {
                                setOpen(false);
                                setShowMessage(false)
                            }}
                        >
                            Close
                        </Button>
                        <Button
                            variant="primary"
                            size="sm"
                            className={styles["assign-button"]}
                            onClick={addTestToTraining}
                        >
                            Assign to training
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Card>
        </div>
    )
}

