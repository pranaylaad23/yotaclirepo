import { useDispatch, useSelector } from "react-redux";
import { TableHeader } from "../../components/table-component/TableHeader";
import { TableBody } from "../../components/table-component/TableBody";
import styles from "../../pages/associates/AllAssociates.module.css";
import Card from "../../components/Card/Card";
import { fetchAllAssociatesByStatus } from "../../features/associates/associateAction";
import { useEffect } from "react";

export const AssociatesList = () => {
    const { associates } = useSelector((state) => state.associates);
    const { token } = useSelector((state) => state.auth.userData);
    const dispatch = useDispatch();
    // table
    const theadData = ["#", "Emp ID", "Name", "Email"];

    useEffect(() => {
        if (token) dispatch(fetchAllAssociatesByStatus());
    }, [dispatch, token]);


    return (
        <div>
            {associates.length > 0 ? (
                <>
                    <h6>Approved Associates List</h6>
                    <Card className={styles["users-list"]}>
                        <div>
                            <table className="table table-bordered table-striped table-hover mt-2">
                                <TableHeader theadData={theadData} />
                                <tbody>
                                    {
                                        associates.map((response, key) => (
                                            <tr>
                                                <th scope="row">{key + 1}</th>
                                                <td>{response.empId}</td>
                                                <td>{response.fullName}</td>
                                                <td>{response.emailAdd}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </Card>
                </>
            ) : (
                <div className={styles["custom-text-center"]}>
                    <b>No associates found with the approved status..</b>
                </div>
            )}
        </div>
    )
}