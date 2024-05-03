import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {
    fetchRegisteredAssociates
} from "../../features/associates/associateAction";
import Card from "../../components/Card/Card";
import styles from './RegisteredAssociates.module.css';
import {ApproveIcon, DeclineIcon} from "../../components/icons/Icons";

export const RegisteredAssociates = () => {

    const dispatch = useDispatch();
    const {associates} = useSelector(state => state.associates);
    const {userData} = useSelector(state => state.auth);

    useEffect(() => {
        if (userData.token)
            dispatch(fetchRegisteredAssociates());
            console.log(">>>>>",associates);
    }, [userData, dispatch]);

    
    return (
        <>
            <h1>Registered Associate List</h1>
            <Card className={styles["users-list"]}>
                {
                    associates.length > 0 ? (
                        <>
                            <table className="table table-bordered table-striped table-hover">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                </tr>
                                </thead>
                                <tbody>
                                {associates.map((associate, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{associate.fullName}</td>
                                        <td>{associate.emailAdd}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </>
                    ) : (
                        <>
                            <h2>No Registered Associates...</h2>
                        </>
                    )
                }
            </Card>
        </>
    )
};
