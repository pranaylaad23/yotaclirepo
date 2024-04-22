import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllAssociatesByStatus } from "../../features/associates/associateAction";
import { TableHeader } from "../../components/table-component/TableHeader";
import Card from "../../components/Card/Card";
import Button from 'react-bootstrap/Button';
import styles from "../../pages/associates/AllAssociates.module.css"
import { TableBody } from "../../components/table-component/TableBody";

export const AllAssociates = () => {

    const { associates } = useSelector((state) => state.associates);
    const { token } = useSelector((state) => state.auth.userData);
    const dispatch = useDispatch();
    const theadData = ["Select", "User ID", "Name", "Email"];
    const tbodyDataKey = ["Select", "userId", "fullName", "emailAdd"];

    useEffect(() => {
        if (token)
            dispatch(fetchAllAssociatesByStatus())
    }, [dispatch, token]);

    function getCheckBox() {
        return (
            <div style={{ textAlign: 'center' }}>
                <div className="form-check" style={{ display: 'inline-block' }}>
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </div>
            </div>
        )
    }

    const tbodyData = associates && associates.map((item) => {
        const newItem = { ...item };
        newItem[tbodyDataKey[0]] = getCheckBox();
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
                                <Button variant="primary" size="sm" style={{ marginLeft: "83%" }}>
                                    Assign Selected
                                </Button>
                                <table className="table table-bordered table-striped table-hover mt-1">
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
