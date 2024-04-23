import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {
    approvePendingAssociate,
    declinePendingAssociate,
    fetchAllPendingAssociates
} from "../../features/associates/associateAction";
import Card from "../../components/Card/Card";
import styles from './PendingUserList.module.css';
import {ApproveIcon, DeclineIcon} from "../../components/icons/Icons";

export const PendingUsers = () => {

    const dispatch = useDispatch();
    const {associates} = useSelector(state => state.associates);
    const {userData} = useSelector(state => state.auth);

    useEffect(() => {
        if (userData.token)
            dispatch(fetchAllPendingAssociates());
    }, [userData, dispatch]);

    function onApprove(email) {
        dispatch(approvePendingAssociate(email));
    }

    function onDecline(email) {
        dispatch(declinePendingAssociate(email));
    }

    return (
        <>
            <h1>Pending Users List</h1>
            <Card className={styles["users-list"]}>
                {
                    associates.length > 0 ? (
                        <>
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
                                                <ApproveIcon onApprove={() => onApprove(associate.emailAdd)}/>
                                                <DeclineIcon onDecline={() => onDecline(associate.emailAdd)}/>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </>
                    ) : (
                        <>
                            <h2>No Pending Users...</h2>
                        </>
                    )
                }
            </Card>
        </>
    )
};
