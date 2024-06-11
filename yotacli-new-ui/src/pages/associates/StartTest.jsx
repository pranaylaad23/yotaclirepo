import React from "react";
import Card from "../../components/Card/Card";
// import MyTestButton from "./MyTestButton";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./StartTest.css";

const StartTest = () => {
  const { associates } = useSelector((state) => state.associates);
  const { id } = useParams("id");

  const description = associates.filter((des) => {
    return des.id == id ? des.testDescription : null;
  });
  const instruction = associates.filter((des) => {
    return des.id == id ? des.testInstruction : null;
  });

  const testTitle = associates.filter((des) => {
    return des.id == id ? des.testTitle : null;
  });

  return (
    <>
      <Card>
        {testTitle.map((des) => {
          return <h5>{des.testTitle}-Test</h5>;
        })}
        <div className="p-3">
          <h5 className="instruction">DESCRIPTION</h5>
          <hr />
          {description.map((des) => {
            return <p>{des.testDescription}</p>;
          })}

          <h5 className="instruction">INSTRUCTION</h5>
          <hr />
          {instruction.map((ins) => {
            return (
              <ul className="inst">
                <li>{ins.testInstruction}</li>
              </ul>
            );
          })}
          <Link to={`/my-test/` + id}>
            {/* to={"/my-test"} */}
            <button type="button" class="btn btn-warning">
              Start Test
            </button>
          </Link>
        </div>
      </Card>
    </>
  );
};
export default StartTest;
