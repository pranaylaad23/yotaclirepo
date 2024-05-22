import { React, useEffect } from "react";
import ItereateCircle from "./circle/ItereateCircle";
import { fetchTestByTestId } from "../../../features/associates/associateAction";
import { useSelector, useDispatch } from "react-redux";
import Timer from "./Timer";
import Card from "react-bootstrap/Card";
import Answers from "./Answers";

const TestPaper = () => {
  const { token } = useSelector((state) => state.auth.userData);
  const { test } = useSelector((state) => state.associates);
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) dispatch(fetchTestByTestId());
  }, []);

  const instruction = () => {
    return (
      <>
        <div>
          <Card>
            <ul className="list-group">
              <li className="list-group-item list-group-item-danger text-md-start">
                Red color Question indicate that you verified Question but
                not answered.{" "}
              </li>
              <li class="list-group-item list-group-item-success text-md-start">
                Green color Question indicate that you have submitted those
                Question.
              </li>
            </ul>
          </Card>
        </div>
      </>
    );
  };
  const Question = () => {
    return (
      <div className="container text-start">
        <div className="row">
          <div className="col-md-12">
            <Card>
              <Card.Header>Question</Card.Header>
              <div className="row">
                <div className="col m-2">
                  <Card.Text> What is Collection interface ? </Card.Text>
                </div>
                <div className="col text-end m-2">[Marks : 1]</div>
              </div>
              <Answers />
              <div class="container text-end"></div>
            </Card>
          </div>
        </div>
      </div>
    );
  };

  const QuestionStatus = () => {
    return (
      <div className="container text-start">
        {/* <div className="row">
          <div className="col"> */}
            <Card>
              <Card.Header>Questions</Card.Header>
              <Card.Body>
                <Card.Text>
                  <ItereateCircle />{" "}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
      //   </div>
      // </div>
    );
  };

  const TestInfo = () => {
    return (
      <div className="container text-start">
        <div className="row">
          <div className="col">
            <Card>
              <Card.Header>{test?.testName}</Card.Header>
              <Card.Body>
                <Card.Text>{TestPaperType()} </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  };

  const TestPaperType = () => {
    return (
      <div className="container text-center">
        <div className="row">
          <div className="col">Type: {test?.testType}</div>
          <div className="col">Question: {test?.totalQuestions}</div>
          <div className="col">Marks: {test?.totalMarks}</div>
          <div className="col">Time: {test?.totalTime + " min"}</div>
        </div>
      </div>
    );
  };
  return (
    <div className="container ">
      <div className="row">
        <div className="col-md-8 p-2 ">
          <div className="p-2 g-col-6 text-start">{TestInfo()}</div>
        </div>
        <div className="col-md-4 p-2">
          <div className="p-2 g-col-6 text-start">
            <Timer paperTime={test?.totalTime} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">{Question()}</div>
        <div className="col-md-4 p-1">{QuestionStatus()}</div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <div className="p-2 g-col-6 text-start">
            <div className="card">
              <div className="card-body">
                <button type="button" className="btn btn-primary float-start">
                  Save & Next
                </button>
                <button type="button" className="btn btn-primary float-end ">
                  Prev
                </button>
                <button
                  type="button"
                  className="btn btn-primary float-end me-1"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 p-3">
          {instruction()}
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="d-grid gap-2 col-2 mx-auto">
            <button type="button" className="btn btn-primary">
              Submit Exam
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPaper;
