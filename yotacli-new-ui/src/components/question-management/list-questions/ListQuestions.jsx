import React from "react";
import QuestionElements from "./QuestionElements";
import QuestionElement from "./QuestionElement";
import "./ListQuestion.css";
const questionElements = [
  {
    question: "What is Spring Boot?",
    option1: "A Spring Framework",
    option2: "A Spring language",
    option3: "A Spring value",
    option4:
      "Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can just run We take an opinionated view of the Spring platform and third-party libraries so you can get started with minimum fuss.Most Spring Boot applications need minimal Spring configuration",
    correctAnswer: "option4",
  },
  {
    question: "What is Spring ?",
    option1: "A Spring Framework",
    option2: "A Spring language",
    option3: "A Spring value",
    option4:
      "Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can just run We take an opinionated view of the Spring platform and third-party libraries so you can get started with minimum fuss.Most Spring Boot applications need minimal Spring configuration",
    correctAnswer: "option2",
  },
  {
    question: "What is Spring ?",
    option1: "A Spring Framework",
    option2: "A Spring language",
    option3: "A Spring value",
    option4:
      "Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can just run We take an opinionated view of the Spring platform and third-party libraries so you can get started with minimum fuss.Most Spring Boot applications need minimal Spring configuration",
    correctAnswer: "option3",
  },
  {
    question: "What is Spring ?",
    option1: "A Spring Framework",
    option2: "A Spring language",
    option3: "A Spring value",
    option4:
      "Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can just run We take an opinionated view of the Spring platform and third-party libraries so you can get started with minimum fuss.Most Spring Boot applications need minimal Spring configuration",
    correctAnswer: "option1",
  },
];

export const ListQuestions = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-2">
          <h6>Show Entries</h6>
          <select
            aria-controls="example"
            className="form-select form-select-sm"
            aria-label=".form-select-sm example"
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>{" "}
        </div>
        <div className="searchquestion">
          <div className="justify-content-end col-md-4">
            <div className="input-group rounded">
              <input
                type="search"
                className="form-control form-control-sm ml-3 w-75 rounded"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <span className="input-group-text border-0" id="search-addon">
                <i className="fas fa-search"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div style={{ marginTop: "1rem" }}></div>
      <QuestionElements>
        {questionElements.map((questionElement, index) => (
          <QuestionElement
            id={"questionElement_" + index}
            question={questionElement.question}
            option1={questionElement.option1}
            option2={questionElement.option2}
            option3={questionElement.option3}
            option4={questionElement.option4}
            correctAnswer={questionElement.correctAnswer}
          ></QuestionElement>
        ))}
      </QuestionElements>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-end">
          <li className="page-item disabled">
            <a
              className="page-link"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};
