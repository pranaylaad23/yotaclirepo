import React, { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import { fetchAllAssociatesTrainingsByEmailId } from "../../features/associates/associateAction";
import { useDispatch, useSelector } from "react-redux";
import { TableHeader } from "../../components/table-component/TableHeader";
import { TableBody } from "../../components/table-component/TableBody";
import styles from "../../pages/associates/AllAssociates.module.css";

export const MyTrainings = () => {
  // const options = { day: '2-digit', month: 'long', year: 'numeric' };
  const { associates } = useSelector((state) => state.associates);
  const { token,email } = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();

  

  // table
  const theadData = ["S.No", "Training Name", "Start Date", "End Date", "Status"];
  const tbodyDataKey = ["id", "trainingName", "startDate", "endDate", "status"];
  // serach box
  const [searchValue] = useState("");
  
  useEffect(() => {
    if (token) dispatch(fetchAllAssociatesTrainingsByEmailId(email));
  }, [dispatch, token,email]);

  const tbodyData = associates
    .filter((associateDetails) =>
      Object.values(associateDetails).some((values) => {
        if (typeof values === "string") {
          return values.toLowerCase().includes(searchValue.toLowerCase());
        } else if (typeof values === "number") {
          return values
            .toString()
            .toLowerCase()
            .includes(searchValue.toLowerCase());
        }
      })
    );
   
    console.log("tbodyData",tbodyData)
  return ( 
  <div>
      <div className="card-header">
        <h4>My Training List</h4> 
      </div>
        <Card className={styles["users-list"]}>
        {associates.length > 0 ? (
          <div>
              <table className="table table-bordered table-striped table-hover mt-2">
              <TableHeader theadData={theadData} />
              <TableBody tbodyData={tbodyData} tbodyDataKey={tbodyDataKey} />
            </table>
          </div>
        ) : (
          <div className={styles["custom-text-left"]}>
            <b>No trainings found ..</b>
          </div>
        )}
      </Card>
  </div>);
 };

 export default MyTrainings;
