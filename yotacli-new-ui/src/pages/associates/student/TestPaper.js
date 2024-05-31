import { React, useEffect, useRef } from "react";
import StudentCard from "./StudentCard";
import Question from "./Question";
import TextPaperType from "./TestPaperType";
import ItereateCircle from "./circle/ItereateCircle";
import { fetchTestByTestId } from "../../../features/associates/associateAction";
import { useSelector, useDispatch } from "react-redux";
import Timer from "./Timer";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const TestPaper = () => {
  const Qtype = "MCQ";
  const { token } = useSelector((state) => state.auth.userData);
  const { test } = useSelector((state) => state.associates);
  const dispatch = useDispatch();
  const { id } = useParams("id");
  const TestRef = useRef(null);


  console.log("innerHeight", window.innerHeight);

  useEffect(() => {
    if (token) dispatch(fetchTestByTestId(id));
  }, []);

  console.log("timer", test?.totalTime);
  return (
    <div className="container " ref={TestRef}>
      <div className="row">
        <div className="col-12 col-md-8 p-2">
          <div className="p-2 g-col-6 text-start">
            <StudentCard
              header={test?.testTitle}
              text1={
                <TextPaperType
                  Qtype={test?.type}
                  totalQ={test?.totalQuestions}
                  totalMarks={test?.totalQuestions}
                  totalTime={test?.totalTime + " min"}
                />
              }
            />
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="p-2 g-col-6 text-start">
            <div className="p-2 g-col-6 text-start">
              <Timer totaltime={test?.totalTime} />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-8">
          <div className="grid gap-0 row-gap-1">
            {/* <div className="p-2 g-col-6 text-start">
                            <StudentCard header={test?.testName} text1=
                                {<TextPaperType Qtype={test?.testType} totalQ={test?.totalQuestions} totalMarks={test?.totalMarks}
                                    totalTime={test?.totalTime + " min"} />} />
                        </div> */}
            <div className="col">
              <div className="p-2 g-col-6 text-start">
                <Question />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="p-2 g-col-6 text-start">
              <div className="card">
                <div className="card-body">
                  <button type="button" className="btn btn-success float-start">
                    Save & Next
                  </button>
                  <button type="button" className="btn btn-light float-end ">
                    Prev
                  </button>
                  <button
                    type="button"
                    className="btn btn-light float-end me-1"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="grid gap-0 row-gap-1">
            {/* <div className="p-2 g-col-6 text-start" ><Timer paperTime={test?.totalTime} /></div> */}
            <div className="p-2 g-col-6 text-start">
              <StudentCard header="Questions" text1={<ItereateCircle />} />
            </div>
            <div className="p-2 g-col-6 text-start p-2">
              <StudentCard
                text1="Orange color Question indicate that you verified Question but not answered"
                text2="Green color Question indicate that you have submitted those Question"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-8">
          <div className="grid gap-0 row-gap-3">
            <div className="p-2 g-col-6 text-start"></div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="d-grid gap-2 col-2">
            <button type="button" className="btn btn-danger">
              <Link className="nav-link" to="/myTest">
                Exit Exam
              </Link>
            </button>
          </div>
          <div className="d-grid gap-2 col-2 mx-auto">
            <button type="button" className="btn btn-dark">
              Submit Exam
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPaper;
