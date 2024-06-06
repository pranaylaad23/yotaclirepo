import React from "react";
import StudentCard from "./StudentCard";

const Question = () => {
  return (
    <div>
      <StudentCard
        component="Question"
        // header={index + 1}
        // text1={questions[0]?.questionTitle}
        // option_a={questions[0]?.option_A}
        // option_b={questions[0]?.option_B}
        // option_c={questions[0]?.option_C}
        // option_d={questions[0]?.option_D}
      />
    </div>
  );
};

export default Question;
