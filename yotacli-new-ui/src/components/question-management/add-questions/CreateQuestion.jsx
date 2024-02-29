import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTechnologies } from "../../../features/redux/technology/technologyAction";
import { fetchTestList } from "../../../features/redux/test/testAction";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import AddTest from "./addTest";
import "./CreateQuestion.css";
import sanitizeHtml from "sanitize-html";
import { postQuestion } from "../../../features/redux/questions/questionAction";

export const CreateQuestion = () => {
  const dispatch = useDispatch();
  const question = useRef("");
  const technologyRef = useRef("");
  const testRef = useRef("");
  const optionARef = useRef("");
  const optionBRef = useRef("");
  const optionCRef = useRef("");
  const optionDRef = useRef("");
  const correctAnswerRef = useRef("");
  const [showAddTest, setShowAddTest] = useState(false);

  const techList = useSelector((state) => state.technology.techList);
  const testList = useSelector((state) => state.test.testList);

  useEffect(() => {
    dispatch(fetchTechnologies());
    dispatch(fetchTestList());
    dispatch(postQuestion());
  }, [dispatch]);

  const handleQuestionChange = (value) => {
    question.current = value;
  };

  const handleTechnologyChange = (event) => {
    technologyRef.current = event.target.value;
  };
  const handleTestChange = (event) => {
    testRef.current = event.target.value;
  };

  const handleOptionChange = (option, event) => {
    const ref = getRefByOption(option);
    if (ref.current) {
      ref.current = event.target.value;
    }
  };

  const handleCorrectAnswerChange = (event) => {
    correctAnswerRef.current = event.target.value;
  };

  const getRefByOption = (option) => {
    switch (option) {
      case "option_A":
        return optionARef;
      case "option_B":
        return optionBRef;
      case "option_C":
        return optionCRef;
      case "option_D":
        return optionDRef;
    }
  };

  const handleButtonClick = () => {
    setShowAddTest(true);
  };
  const onSubmit = (event) => {
    const cleanQuestionText = sanitizeHtml(question.current, {
      allowedTags: [],
      allowedAttributes: {},
    });
    const newQuestion = {
      question: cleanQuestionText,
      technologyId: technologyRef.current,
      test: { id: testRef.current },
      option_A: optionARef.current,
      option_B: optionBRef.current,
      option_C: optionCRef.current,
      option_D: optionDRef.current,
      correctAnswer: correctAnswerRef.current,
    };
    console.log(newQuestion);
    alert("Question created successfully");
    dispatch(postQuestion(JSON.stringify(newQuestion)));
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="Header">
          <h4>Question Form </h4>
          <div className="SaveButton">
            <button type="submit" className="savebutton btn btn-primary">
              Add Question
            </button>
          </div>
        </div>
        <hr />
        <br />
        <div className="QuestionForm">
          <div className="technology">
            <h6>Technology</h6>
          </div>
          <div className="technologyDrop">
            <select
              className="form-select form-select-sm w-75"
              aria-label=".form-select-sm example"
              onChange={handleTechnologyChange}
            >
              <option value="" disabled selected>
                Select Technology
              </option>
              {techList &&
                techList.map((tech, index) => (
                  <option key={index} value={tech.id}>
                    {tech.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="test">
            <h6>Test Name</h6>
          </div>
          <div className="testDrop">
            <select
              className="form-select form-select-sm w-75"
              aria-label=".form-select-sm example"
              onChange={handleTestChange}
            >
              <option value="" disabled selected>
                Select Test
              </option>
              {testList &&
                testList.map((test, index) => (
                  <option key={index} value={test.id}>
                    {test.name}
                  </option>
                ))}
            </select>
            <div className="addnewTest">
              <button
                type="button"
                className="addtestbutton"
                onClick={handleButtonClick}
              >
                <i className="fas fa-plus"></i>
              </button>
              {showAddTest && (
                <AddTest closeModal={() => setShowAddTest(false)} />
              )}
            </div>
          </div>
          <div className="QuestionText">
            <div className="QuestionHeading">
              <h6>Question</h6>
            </div>
            <ReactQuill
              className="QuestionTextbox"
              name="question"
              onChange={handleQuestionChange}
              modules={{
                toolbar: [
                  [{ header: "1" }, { header: "2" }, { font: [] }],
                  ["bold", "italic", "underline", "strike", "blockquote"],
                  [{ list: "ordered" }, { list: "bullet" }],
                  ["link", "image"],
                  ["clean"],
                ],
              }}
              formats={[
                "header",
                "font",
                "bold",
                "italic",
                "underline",
                "strike",
                "blockquote",
                "list",
                "bullet",
                "link",
                "image",
              ]}
            />
          </div>
          <div className="Option">
            <div className="OptionLeft">
              <div className="form-group">
                <label htmlFor="Textarea1">Option A</label>
                <textarea
                  ref={optionARef}
                  className="form-control h-50"
                  name="option_A"
                  id="Textarea1"
                  rows="3"
                  style={{ width: "35%" }}
                  onChange={(e) => handleOptionChange("option_A", e)}
                ></textarea>
              </div>
              <br />
              <div className="form-group optionc">
                <label htmlFor="Textarea2">Option C</label>
                <textarea
                  ref={optionCRef}
                  className="form-control h-50 "
                  id="Textarea2"
                  name="option_C"
                  rows="3"
                  style={{ width: "35%" }}
                  onChange={(e) => handleOptionChange("option_C", e)}
                ></textarea>
              </div>
            </div>
            <div className="OptionRight">
              <div className="form-group">
                <label htmlFor="Textarea3">Option B</label>
                <textarea
                  ref={optionBRef}
                  className="form-control h-50"
                  id="Textarea3"
                  name="option_B"
                  rows="3"
                  style={{ width: "35%" }}
                  onChange={(e) => handleOptionChange("option_B", e)}
                ></textarea>
              </div>
              <br />
              <div className="form-group ">
                <label htmlFor="Textarea4">Option D</label>
                <textarea
                  ref={optionDRef}
                  className="form-control h-50 "
                  id="Textarea4"
                  name="option_D"
                  rows="3"
                  style={{ width: "35%" }}
                  onChange={(e) => handleOptionChange("option_D", e)}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="EndForm">
            <div className="LeftSide">
              <div className="OptionLeftHeading">
                <h6>Correct Option</h6>
              </div>
              <div className="OptionLeftAnswer">
                <select
                  className="form-select form-select-sm w-25"
                  aria-label=".form-select-sm example"
                  onChange={handleCorrectAnswerChange}
                  name="correctAnswer"
                  ref={correctAnswerRef}
                >
                  <option value="" disabled selected>
                    Select Option
                  </option>
                  <option value="Option_A">Option A</option>
                  <option value="Option_B">Option B</option>
                  <option value="Option_C">Option C</option>
                  <option value="Option_D">Option D</option>
                </select>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </form>
    </div>
  );
};
