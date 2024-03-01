import React, { useState } from "react";

export const TestQuestions = (props) => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [questions] = useState([
    {
      id: 1,
      question:
        "Which data structure allows elements to be stored in a contiguous memory location?",
      technology: "Java",
      options: ["ArrayList", "LinkedList", "HashSet", "HashMap"],
      correctAnswer: "ArrayList",
    },
    {
      id: 2,
      question: "Number of primitive data types in Java are?",
      technology: "Java",
      options: ["6", "7", "8", "9"],
      correctAnswer: "8",
    },
    // Add more questions here
  ]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSelectedOption(null); // Reset selected option for next question
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setSelectedOption(null); // Reset selected option for previous question
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      {/* Render current question */}
      <div>
        <h5>Question {activeStep + 1}</h5>
        <p>{questions[activeStep].question}</p>
        {/* Render options as radio buttons */}
        {questions[activeStep].options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              id={`option${index}`}
              name={`question${activeStep}`}
              value={option}
              checked={selectedOption === option}
              onChange={() => handleOptionChange(option)}
            />
            <label htmlFor={`option${index}`}>{option}</label>
          </div>
        ))}
      </div>

      {/* Stepper navigation */}
      <div>
        <button disabled={activeStep === 0} onClick={handleBack}>
          Back
        </button>
        <button
          disabled={activeStep === questions.length - 1}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};
