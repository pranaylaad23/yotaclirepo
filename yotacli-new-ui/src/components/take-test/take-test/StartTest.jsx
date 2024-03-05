import { useState } from "react";
import { TestPageHeader } from "./test-page-header/TestPageHeader";
import { TestQuestions } from "./test-questions/TestQuestions";
export const StartTest = () => {
  const examName = "Java";
  const [answeredQuestion, setAnsweredQuestion] = useState(0);
  const [examTiming, setExamTiming] = useState(10);
  return (
    <div>
      <TestPageHeader
        answeredQuestion={answeredQuestion}
        examTiming={examTiming}
      />
      <hr />
      <div>
        <h4>Test Name: {examName}</h4>
        <hr />
        <TestQuestions />
      </div>
    </div>
  );
};
