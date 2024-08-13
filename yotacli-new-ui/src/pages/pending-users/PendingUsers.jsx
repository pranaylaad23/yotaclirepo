import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
    approvePendingAssociate,
    declinePendingAssociate,
    fetchAllPendingAssociates
} from "../../features/associates/associateAction";
import Card from "../../components/Card/Card";
import styles from './PendingUserList.module.css';
import { Modal } from "react-bootstrap";
import { ApproveIcon, DeclineIcon } from "../../components/icons/Icons";

export const PendingUsers = () => {

    const dispatch = useDispatch();
    const { associates } = useSelector(state => state.associates);
    const { userData } = useSelector(state => state.auth);
    const [reasonOpen,setReasonOpen] = useState(false);
    const [reason,setReason] = useState(null);
    const[emailToDecline,setEmailToDecline] = useState("");

    useEffect(() => {
        if (userData.token)
            dispatch(fetchAllPendingAssociates());
    }, [userData, dispatch]);

    function onApprove(email) {
        dispatch(approvePendingAssociate(email));
    }

    function onDecline(email,event) {
        event.preventDefault();
        setEmailToDecline(email);
        setReasonOpen(true);
    }

    const handleReasonChange = (event) => {
        setReason(event.target.value);
      };
     
      const handleSubmitForReason = () => {
        if(emailToDecline){
        dispatch(declinePendingAssociate({email: emailToDecline,reason: reason}));
        setReasonOpen(false);
        setEmailToDecline(null);
        setReason('');
        }      
      };
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
                                            <ApproveIcon onApprove={() => onApprove(associate.emailAdd)} />
                                            <DeclineIcon onDecline={(event) => onDecline(associate.emailAdd,event)} />
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
                            Add Rejected Reason
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className="form-group row mb-1 ">
                                <label
                                    for="inputDescription"
                                    className="createclientdescription col-sm-4 col-form-label mt-0"
                                >
                                    Reason
                                </label>
                                <div className="col-sm-8">
                                    <input
                                        type="text"
                                        value={reason}
                                        placeholder="Enter Reason"
                                        className="mb-2 form-control-sm form-control mt-1"
                                        onChange={handleReasonChange}
                                    ></input>
                                </div>
                            </div>
                        </div>

                        <button
                            className="submitt-button btn btn-primary"
                            type="submit"
                            onClick={handleSubmitForReason}
                            style={{ borderRadius: "revert-layer", marginLeft: "390px" }}
                        >
                            Submit
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
                <b>No Pending Users...</b>
            </div>
        )
    }

    return (
        <>
            <h6>Pending Users List</h6>
            {
                associates.length > 0 ? showData() : showErrorMessage()
            }
        </>
    )
};
