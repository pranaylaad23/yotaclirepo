import React, { useState} from 'react';
import Card from '../../../components/Card/Card';
import styles from '../../../pages/associates/AllAssociates.module.css';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { TableBody } from '../../../components/table-component/TableBody';
import { TableHeader } from "../../../components/table-component/TableHeader";
import MyTestButton from '../MyTestButton';

const StartTest = (props)=> {
  const [searchValue] = useState("");
    const theadData = ["Description", "Instruction"];
    const tbodyDataKey = ["Description", "Instruction"];
    const tests = [
        { Description: 'JAVA', Instruction: "5 Mandatory", id:1},
        { Description: 'React', Instruction: "5 Mandatory", id:2},
        { Description: 'SQL', Instruction: "5 Mandatory", id:3},
        { Description: 'AWS', Instruction: "5 Mandatory", id:4},
        { Description: 'MS', Instruction: "5 Mandatory", id:5},
      ];

      const tbodyData = tests
    .filter((test) =>
      Object.values(test).some((values) => {
        if (typeof values === "string") {
          return values.toLowerCase().includes(searchValue.toLowerCase());
        } else if (typeof values === "number") {
          return values.toLowerCase().includes(searchValue.toLowerCase());
        }
      })
    );
   
    return(
<>
      <h5>Collection List</h5>
      <Card className={styles["users-list"]}>
       
          <div>
            <table className="table table-bordered table-striped table-hover mt-2">
              <TableHeader theadData={theadData} />
              <TableBody tbodyData={tbodyData} tbodyDataKey={tbodyDataKey} />
            </table>
          </div>
          <MyTestButton/>
      </Card>
    </>



        
        
    ) 
};

export default StartTest;