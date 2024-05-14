import React from 'react';

const TestPaperType = ({ Qtype, totalQ, totalMarks, totalTime }) => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">Type: {Qtype}</div>
        <div className="col">Question: {totalQ}</div>
        <div className="col">Marks: {totalMarks}</div>
        <div className="col">Time: {totalTime}</div>
      </div>
    </div>
  );
};

export default TestPaperType;
