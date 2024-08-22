import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAllRejectedAssociatesByStatus,pendingDeclinedAssociate } from "../../features/associates/associateAction";
import Card from "../../components/Card/Card";
import styles from './RejectedUserList.module.css';
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";

export const RejectedUsers = () => {

    const dispatch = useDispatch();
    const { associates } = useSelector(state => state.associates);
    const { userData } = useSelector(state => state.auth);
    const [reason, setReason] = useState(null);
    const [reasonOpen, setReasonOpen] = useState(false);

    useEffect(() => {
        if (userData.token)
            dispatch(fetchAllRejectedAssociatesByStatus());
    }, [userData, dispatch]);

    const checkReason = (_reason, event) => {
        event.preventDefault();
        setReasonOpen(true);
        setReason(_reason)

    }

    const handleOkForReason = () => {
        setReasonOpen(false);
    }
    const restoreAssociate = (_email) => {
    dispatch(pendingDeclinedAssociate(_email));

    }

    const showData = () => {
        return (
            <div>
                <Card className={styles["users-list"]}>
                    <table className="table table-bordered table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Emp Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {associates.map((associate, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{associate.empId}</td>
                                    <td>{associate.fullName}</td>
                                    <td>{associate.emailAdd}</td>
                                    <td>{associate.accountStatus}</td>
                                    <td>
                                        <div className={styles["action-buttons"]}>
                                            <Button color={"danger"} className={"ms-2"} onClick={() => restoreAssociate(associate.emailAdd)}>
                                                Restore
                                            </Button>
                                            <Button color={"danger"} className={"ms-2"} onClick={(event) => checkReason(associate.reason, event)}>
                                                Check Reason
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Card>

                {/* Modal Open  */}

                <Modal
                    show={reasonOpen}
                    onHide={() => setReasonOpen(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            View Rejected Reason
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className="form-group row mb-1 ">
                                <label
                                    for="inputDescription"
                                    className="createclientdescription col-sm-12 col-form-label mt-0"
                                >
                                    Reason : {reason}
                                </label>

                            </div>
                        </div>
                        <button
                            className="submitt-button btn btn-primary"
                            type="submit"
                            onClick={handleOkForReason}
                            style={{ borderRadius: "revert-layer", marginLeft: "420px" }}
                        >
                            OK
                        </button>
                    </Modal.Body>
                </Modal>

                {/* Modal CLose */}

            </div>
        )
    }

    const showErrorMessage = () => {
        return (
            <div className={styles["custom-text-center"]}>
                <b>No Rejected Users...</b>
            </div>
        )
    }

    return (
        <>
            <h6>Rejected Users List</h6>
            {
                associates.length > 0 ? showData() : showErrorMessage()
            }
        </>
    )
};
