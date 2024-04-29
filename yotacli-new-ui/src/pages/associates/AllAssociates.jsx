import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { fetchAllAssociatesByStatus } from "../../features/associates/associateAction";
import { TableHeader } from "../../components/table-component/TableHeader";
import Card from "../../components/Card/Card";
import Button from 'react-bootstrap/Button';
import styles from "../../pages/associates/AllAssociates.module.css"
import { TableBody } from "../../components/table-component/TableBody";
import { Search } from "../../components/search-component/Search";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";
import { assignTraining } from "../../features/training/trainingAction";

export const AllAssociates = () => {

    const { associates } = useSelector((state) => state.associates);
    const { token } = useSelector((state) => state.auth.userData);
    const dispatch = useDispatch();
    // table
    const theadData = ["Select", "Emp ID", "Name", "Email"];
    const tbodyDataKey = ["Select", "empId", "fullName", "emailAdd"];
    // serach box
    const [searchValue, setSearchValue] = useState("");
    const email = useRef("");
    const navigate = useNavigate();

    useEffect(() => {
        if (token) dispatch(fetchAllAssociatesByStatus());
    }, [dispatch, token]);

    function getCheckBox(email) {
        return (
            <div style={{ textAlign: 'center' }}>
                {
                    email.map((emailResponse, index) => (
                        <div className="form-check" style={{ display: 'inline-block' }}>
                            <input className="form-check-input"
                                type="checkbox"
                                value={emailResponse}
                                id="flexCheckDefault"
                                onChange={countSelectedCheckbox} />
                        </div>
                    ))
                }
            </div>
        )
    }

    let checkboxCount = 0;
    const countSelectedCheckbox = (event) => {
        const isChecked = event.target.checked;
        const selectedEmail = event.target.value;

        if (isChecked) {
            // If email.current is not yet an array, initialize it as an empty array
            if (!Array.isArray(email.current)) {
                email.current = [];
            }
            // Push the selected email to the array
            email.current.push(selectedEmail);
            checkboxCount++;
        } else {
            // If the checkbox is unchecked, remove the email from the array
            email.current = email.current.filter(email => email !== selectedEmail);
            checkboxCount--;
        }
    }

    const addAssignTraining = () => {
        const nominatedValue = localStorage.getItem("nominated");
        const trainingId = localStorage.getItem("trainingId");
        const registeredCount = localStorage.getItem("registeredCount");

        if (checkboxCount === 0) {
            alert("No associated item has been selected for training. Please make a selection and try again.")
        } else if (nominatedValue < checkboxCount) {
            alert("The nominated associated limit has been reached: " + nominatedValue + "\nPlease try again.");
        } else if (nominatedValue > registeredCount) {
            const emailAddArray = email.current;
            const emailIds = emailAddArray.map(email => (email));
            dispatch(assignTraining({ emailIds, trainingId }))
                .then(() => {
                    navigate('/add-training');
                })
                .catch((error) => {
                    alert(error);
                });
        } else {
            alert("Cannot assign training. Registered limit has been reached.");
        }
    }


    const tbodyData = associates
        .filter((associateDetails) => Object.values(associateDetails).some(values => {
            if (typeof values === 'string') {
                return values.toLowerCase().includes(searchValue.toLowerCase());
            } else if (typeof values === 'number') {
                return values.toString().toLowerCase().includes(searchValue.toLowerCase());
            }
        }
        ))
        .map((item) => {
            const newItem = { ...item };
            newItem[tbodyDataKey[0]] = getCheckBox([newItem.emailAdd]);
            return newItem;
        });


    return (
        <>
            <h5>Approved Associates List</h5>
            <Card className={styles["users-list"]}>
                {
                    associates.length > 0
                        ? (
                            <div>
                                <Row>
                                    <Col xs={8}>
                                        <Search setSearchValue={setSearchValue} />
                                    </Col>
                                    <Col>
                                        <Button variant="primary" size="sm" className={styles["assign-button"]}
                                            onClick={addAssignTraining}>
                                            Assign Selected
                                        </Button>
                                    </Col>
                                </Row>

                                <table className="table table-bordered table-striped table-hover mt-2">
                                    <TableHeader theadData={theadData} />
                                    <TableBody tbodyData={tbodyData} tbodyDataKey={tbodyDataKey} />
                                </table>
                            </div>
                        )
                        :
                        (
                            <div className={styles["custom-text-left"]}>
                                <b>No associates found with the approved status..</b>
                            </div>
                        )
                }
            </Card>
        </>
    )

};
