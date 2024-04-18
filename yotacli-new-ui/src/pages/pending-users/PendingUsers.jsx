import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchAllPendingAssociates} from "../../features/associates/associateAction";
import Card from "../../components/Card/Card";
import styles from './PendingUserList.module.css';

export const PendingUsers = () => {

    const dispatch = useDispatch();
    const {associates} = useSelector(state => state.associates);
    const {userData} = useSelector(state => state.auth);

    useEffect(() => {
        if (userData.token)
            dispatch(fetchAllPendingAssociates());
    }, [userData, dispatch]);

    return (
        <>
            <h1>Pending Users List</h1>
            <Card className={styles["users-list"]}>
                {
                    associates ? (
                        <div>
                            <table className="table table-bordered">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {associates.map((associate, index) => (
                                    <>
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{associate.fullName}</td>
                                            <td>{associate.emailAdd}</td>
                                            <td>@mdo</td>
                                        </tr>
                                    </>
                                ))}
                                </tbody>
                            </table>
                        </div>
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
