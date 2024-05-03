import Card from "../../components/Card/Card"
import { TableHeader } from "../../components/table-component/TableHeader";
import styles from "../../pages/assign-associates/AssignedAssociateList.module.css";
import { useSelector } from 'react-redux';

export const AssignedAssociateList = () => {

    const { trainings } = useSelector((state) => state.trainings);
    const theadData = ["Sr No", "Emp Id", "Name", "Email", "Test", "Approved", "Find %"];

    return (
        <div>
            <h5>Assigned Training Associate List Update</h5>
            <Card className={styles["training-list"]}>
                {
                    trainings && trainings.assign
                        ? (
                            <div>
                                <div style={{ marginRight: "54%" }}>
                                    <h6>{`Training Name: ${trainings.trainingName} | Total trainees: ${trainings.registeredInTraining} | Total Tests: 15 `}</h6>
                                </div>
                                <table className="table table-bordered table-striped table-hover mt-1">
                                    <TableHeader theadData={theadData} />
                                    <tbody>
                                        {
                                            trainings.assign.map((associate, index) => (
                                                <tr key={index}>
                                                    <th>{index + 1}</th>
                                                    <td>{associate.empId}</td>
                                                    <td>{associate.fullName}</td>
                                                    <td>{associate.emailAdd}</td>
                                                    <td>{`Remaining`}</td>
                                                    <td>{`Remaining`}</td>
                                                    <td>{`Remaining`}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        )
                        :
                        (
                            <div>
                                <b>Training hasn't been assigned yet..</b>
                            </div>
                        )
                }
            </Card>
        </div>
    )
}