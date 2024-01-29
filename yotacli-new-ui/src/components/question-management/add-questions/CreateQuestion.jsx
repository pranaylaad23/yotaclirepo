import React, { useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./CreateQuestion.css";
import AddTest from "./addTest";

export const CreateQuestion = () => {
  const questionTextRef = useRef("");
  const technologyRef = useRef("");
  const optionARef = useRef("");
  const optionBRef = useRef("");
  const optionCRef = useRef("");
  const optionDRef = useRef("");
  const correctOptionRef = useRef("");
  const [isAddTestModalOpen, setIsAddTestModalOpen] = useState(false);

  const handleQuestionChange = (value) => {
    questionTextRef.current = value;
  };

  const handleTechnologyChange = (event) => {
    technologyRef.current = event.target.value;
  };

  const handleOptionChange = (option, event) => {
    const ref = getRefByOption(option);
    if (ref.current) {
      ref.current = event.target.value;
    }
  };

  const handleCorrectOptionChange = (event) => {
    correctOptionRef.current = event.target.value;
  };

  const getRefByOption = (option) => {
    switch (option) {
      case "A":
        return optionARef;
      case "B":
        return optionBRef;
      case "C":
        return optionCRef;
      case "D":
        return optionDRef;
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("form is here")
    const newQuestion = {
      questionText: questionTextRef.current,
      technology: technologyRef.current,
      options: {
        A: optionARef.current,
        B: optionBRef.current,
        C: optionCRef.current,
        D: optionDRef.current,
      },
      correctOption: correctOptionRef.current,
    };
    console.log("----newQuestion----", newQuestion);
  };

  const toggleAddTestModal = () => {
    setIsAddTestModalOpen(!isAddTestModalOpen);
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
              <option value="" disabled selected></option>
              <option value="JAVA">JAVA</option>
              <option value="AWS">AWS</option>
              <option value="REACT">REACT</option>
            </select>
          </div>
          <div className="test">
            <h6>Test Name</h6>
          </div>
          <div className="testDrop">
            <select
              className="form-select form-select-sm w-75"
              aria-label=".form-select-sm example"
            >
              <option value="" disabled selected></option>
              <option value="JAVA">JAVA</option>
              <option value="AWS">AWS</option>
              <option value="REACT">REACT</option>
            </select>
            <div className="addnewTest">
              <button
                type="button"
                onClick={toggleAddTestModal}
                className="addtestbutton"
                data-bs-toggle="modal"
                data-bs-target="#addTestModal"
              >
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
          <div className="QuestionText">
            <div className="QuestionHeading">
              <h6>Question</h6>
            </div>
            <ReactQuill
              className="QuestionTextbox"
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
                  className="form-control h-50"
                  id="Textarea1"
                  rows="3"
                  style={{ width: "35%" }}
                  onChange={(e) => handleOptionChange("A", e)}
                ></textarea>
              </div>
              <br />
              <div className="form-group optionc">
                <label htmlFor="Textarea2">Option C</label>
                <textarea
                  className="form-control h-50 "
                  id="Textarea2"
                  rows="3"
                  style={{ width: "35%" }}
                  onChange={(e) => handleOptionChange("C", e)}
                ></textarea>
              </div>
            </div>
            <div className="OptionRight">
              <div className="form-group">
                <label htmlFor="Textarea3">Option B</label>
                <textarea
                  className="form-control h-50"
                  id="Textarea3"
                  rows="3"
                  style={{ width: "35%" }}
                  onChange={(e) => handleOptionChange("B", e)}
                ></textarea>
              </div>
              <br />
              <div className="form-group ">
                <label htmlFor="Textarea4">Option D</label>
                <textarea
                  className="form-control h-50 "
                  id="Textarea4"
                  rows="3"
                  style={{ width: "35%" }}
                  onChange={(e) => handleOptionChange("D", e)}
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
                  onChange={handleCorrectOptionChange}
                >
                  <option value="" disabled selected></option>
                  <option value="Option A">Option A</option>
                  <option value="Option B">Option B</option>
                  <option value="Option C">Option C</option>
                  <option value="Option D">Option D</option>
                </select>
              </div>
            </div>
          </div>
          <hr />
        </div>
        {isAddTestModalOpen && <AddTest closeModal={toggleAddTestModal} />}
      </form>
    </div>
  );
};
