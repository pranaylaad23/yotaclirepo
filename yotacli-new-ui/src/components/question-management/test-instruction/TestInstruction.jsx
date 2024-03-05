import React from "react";
import "./TestInstruction.css";
import { Button } from "react-bootstrap";
export const TestInstruction = () => {
  return (
    <div className="testInstruction">
      <h3>Angular - Beginner 1</h3>
      <div className="instructionCard">
        <h6>
          <b>Instructions:</b>
        </h6>
        <ul>
          <li>
            Number of questions: <b>20</b>
          </li>
          <li>
            Has a time limit of: <b>00:40:00</b>
          </li>
          <li>
            Number of attempts allowed: <b>1</b>
          </li>
          <li>Will allow you to save and finish at a later date.</li>
          <li>
            Questions displayed per page: <b>1</b>
          </li>
          <li>Will allow you to go back and change your answers.</li>
          <li>Will not let you finish with any question unattempted.</li>
        </ul>
      </div>
      <br />
      <Button className="goBack">Go Back</Button>
      <Button className="start">Start Test</Button>
    </div>
  );
};
