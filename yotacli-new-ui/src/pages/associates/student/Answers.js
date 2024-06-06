import React, { createContext } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import TestPaper from "./TestPaper";

function Answers({ option_a, option_b, option_c, option_d }) {
  const { questions } = useSelector((state) => state.questions);
  const [QuestionAns, setQuestionAns] = useState(false);

  function handleAnswer(event) {
    console.log(event.target.value);
    if (event.target.value) {
      setQuestionAns(true);
    }
  }
  return (
    <>
      <div class="form-group form-horizontal pt-2">
        <div class="form-check">
          <input
            type="radio"
            className="form-check-input"
            name="answer-entry"
            value={option_a}
            onClick={handleAnswer}
          />
          <span>{option_a}</span>
        </div>
        <div class="form-check">
          <input
            type="radio"
            className="form-check-input"
            name="answer-entry"
            value={option_b}
            onClick={handleAnswer}
          />
          <span>{option_b}</span>
        </div>
        <div class="form-check">
          <input
            type="radio"
            className="form-check-input"
            name="answer-entry"
            value={option_c}
            onClick={handleAnswer}
          />
          <span>{option_c}</span>
        </div>
        <div class="form-check">
          <input
            type="radio"
            className="form-check-input"
            name="answer-entry"
            value={option_d}
            onClick={handleAnswer}
          />
          <span>{option_d}</span>
        </div>
      </div>
    </>
  );
}

export default Answers;
