import React, { useEffect} from "react";
import styles from "../../pages/associates/AllAssociates.module.css";
import Card from "../../components/Card/Card";
import { TableHeader } from "../../components/table-component/TableHeader";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllAssociatesTestByEmailId } from "../../features/associates/associateAction";

const MyTest = () => {
  const { associates } = useSelector((state) => state.associates);
  const { token, email } = useSelector((state) => state.auth.userData);
  const theadData = ["S.No", "Test Name", "Start Date", "End Date", "Action"];
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(fetchAllAssociatesTestByEmailId(email));
    }
  }, [dispatch, token, email]);

  const currentDateTime = new Date();

  return (
    <>
      <div className="card-header">
        <h4>My Test List</h4>
      </div>

      <Card className={styles["users-list"]}>
        <div class="mb-1">
          <input
            type="text"
            placeholder="Search..."
            style={{ marginRight: "600px" }}
          />
        </div>
        {associates.length > 0 ? (
          <div>
            <table className="table table-bordered table-striped table-hover mt-2">
              <TableHeader theadData={theadData} />
              <tbody>
                {associates.map((data) => {
                  return (
                    <tr key={data.id}>
                      <th scope="row">{data.id}</th>
                      <td>{data.testTitle}</td>
                      <td>{data.startDate}</td>
                      <td>{data.endDate}</td>
                      <td>
                        {data.action === "completed" ? (
                          <button type="button" className="btn btn-info">
                            Check Result
                          </button>
                        ) : currentDateTime >= new Date(data.startDate) &&
                          currentDateTime <= new Date(data.endDate) ? (
                          <button type="button" className="btn btn-success">
                            Start test
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="btn btn-success"
                            disabled={true}
                          >
                            Start test
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className={styles["custom-text-left"]}>
            <b>No Test found ..</b>
          </div>
        )}
      </Card>
    </>
  );
};
export default MyTest;
