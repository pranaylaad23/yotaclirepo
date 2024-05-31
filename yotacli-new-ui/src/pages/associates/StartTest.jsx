import React from "react";
import Card from "../../components/Card/Card";
import MyTestButton from "./MyTestButton";
import { useSelector } from "react-redux";
import "./StartTest.css";

const StartTest = (props) => {
  const { associates } = useSelector((state) => state.associates);

  console.log("associate", associates);

  return (
    <>
      <h5>Collection List</h5>
      <p></p>
      <Card>
        <div className="p-3">
          <h5 className="instruction">DESCRIPTION</h5>
          <hr />
          {associates.map((data) => {
            return <p>{data.testDescription}</p>;
          })}

          <h5 className="instruction">INSTRUCTION</h5>
          <hr />
          <p>
            {associates.map((data) => {
              return <p>{data.testInstruction}</p>;
            })}
          </p>
          <MyTestButton />
        </div>
      </Card>
    </>
  );
};
export default StartTest;
