import React from "react";
export const QuestionElement = (props) => {
  const databstarget = "#" + props.id;
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading_${props.id}`}>
        <div>
          <div
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={databstarget}
            aria-expanded="true"
            aria-controls={props.id}
          >
            {props.question}
          </div>
        </div>
      </h2>
      <div
        id={props.id}
        className="accordion-collapse collapse show"
        aria-labelledby={`heading_${props.id}`}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <div className="row">
            <div className="col-md-10">
              <div>
                <p>
                  {" "}
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id={`${props.id}`}
                      checked={props.correctAnswer === "option_A"}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`flexCheckDisabled1_${props.id}`}
                    >
                      {props.option_A}
                    </label>
                  </div>
                </p>
                <p>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id={`flexCheckDisabled2_${props.id}`}
                      checked={props.correctAnswer === "option_B"}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`flexCheckDisabled2_${props.id}`}
                    >
                      {props.option_B}
                    </label>
                  </div>
                </p>
                <p>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id={`flexCheckDisabled3_${props.id}`}
                      checked={props.correctAnswer === "option_C"}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`flexCheckDisabled3_${props.id}`}
                    >
                      {props.option_C}
                    </label>
                  </div>
                </p>
                <p>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id={`flexCheckDisabled4_${props.id}`}
                      checked={props.correctAnswer === "option_D"}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`flexCheckDisabled4_${props.id}`}
                    >
                      {props.option_D}
                    </label>
                  </div>
                </p>
                <p>Correct Answer: {props.correctAnswer}</p>
              </div>
            </div>
            <div className="col-md-2 justify-content-end input-group">
              <a href="#">
                <i className="fa-solid fa-pen-to-square fa-lg"></i>
              </a>
              __
              <a href="#">
                <i className="fa-solid fa-trash-can fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="seperator" style={{ marginTop: "1rem" }}></div>
    </div>
  );
};
