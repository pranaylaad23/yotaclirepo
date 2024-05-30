import React, { useState } from "react";
import Card from "../../../components/Card/Card";
// import styles from '../../../pages/associates/AllAssociates.module.css';
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import { TableBody } from '../../../components/table-component/TableBody';
// import { TableHeader } from "../../../components/table-component/TableHeader";
import MyTestButton from "../MyTestButton";
import "./StartTest.css";

const StartTest = (props) => {
  const [searchValue] = useState("");
  // const theadData = ["Description", "Instruction"];
  // const tbodyDataKey = ["Description", "Instruction"];
  // const tests = [
  //     { Description: 'JAVA', Instruction: "5 Mandatory", id:1},
  //     { Description: 'React', Instruction: "5 Mandatory", id:2},
  //     { Description: 'SQL', Instruction: "5 Mandatory", id:3},
  //     { Description: 'AWS', Instruction: "5 Mandatory", id:4},
  //     { Description: 'MS', Instruction: "5 Mandatory", id:5},
  //   ];

  //   const tbodyData = tests
  // .filter((test) =>
  //   Object.values(test).some((values) => {
  //     if (typeof values === "string") {
  //       return values.toLowerCase().includes(searchValue.toLowerCase());
  //     } else if (typeof values === "number") {
  //       return values.toLowerCase().includes(searchValue.toLowerCase());
  //     }
  //   })
  // );

  return (
    <>
      <h5>Collection List</h5>
      <p></p>
      <Card>
        <div className="p-3">
          <h5 className="instruction">DESCRIPTION</h5>
          <hr />
          <p>
            ThingWorx is a rapid, model-based application development platform.
            By employing modeling instead of coding, the content developer is
            able to focus on agility and application composition rather than
            debugging, maintaining, and updating code.
          </p>
          <h5 className="instruction">INSTRUCTION</h5>
          <hr />
          <p>
            <ul className="inst">
              <li>
                {" "}
                A quiz refers to a short test of knowledge, typically around 10
              </li>
              <li>
                questions in length, with question formats often including
                multiple
              </li>
              <li>
                questions in length, with question formats often including
                multiple
              </li>
              <li>
                {" "}
                A quiz refers to a short test of knowledge, typically around 10
              </li>
              <li>
                questions in length, with question formats often including
                multiple
              </li>
              <li>
                questions in length, with question formats often including
                multiple
              </li>
              <li>
                {" "}
                A quiz refers to a short test of knowledge, typically around 10
              </li>
              <li>
                questions in length, with question formats often including
                multiple
              </li>
              <li>
                questions in length, with question formats often including
                multiple
              </li>
            </ul>
          </p>
          <MyTestButton />
        </div>
        
      </Card>
    </>
  );
};

export default StartTest;
