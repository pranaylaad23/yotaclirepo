import React, { useEffect, useState } from "react";
import axios from "axios";
import correctImage from "../../assests/correctv3.jpeg";
import "./List.css";

const ItemQuestion = (props) => {
  const [question, setQuestion] = useState([]);

  // const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:9090/yota/api/questions/all").then((res) => {
      console.log(res.data);
      setQuestion(res.data);
    });
  }, []);

  const [show, setShow] = useState(false);
  const showAnswer = () => {
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <div className="row col-span-4 col-btns ml-4 mt-4 p-4">
      <tbody>
        {question.map((result, key) => (
          <tr key={key}>
            <div className="row test-question">
              <a></a>
              <div className="col-span-25">
                <h4 className="question-name name">Question {result.id} </h4>
              </div>
            </div>
            <br />
            <p>{result.question}</p>

            <div className="question-footer-hover opacityon">
              {show && (
                <div className="hide" id="dotog_ans32698331">
                  <div className="clearheight"></div>

                  <table className="answholder">
                    <tbody>
                      <tr>
                        <td>
                          <span className="satick">
                            <img src={correctImage} alt="" />
                          </span>
                        </td>
                        <td className="number"> A. &nbsp; </td>
                        <td className="answer">{result.a}</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td className="number">B. </td>
                        <td className="answer">{result.b}</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td className="number">C. </td>
                        <td className="answer">{result.c}</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td className="number">D. </td>
                        <td className="answer">{result.d}</td>
                      </tr>
                      <tr></tr>
                    </tbody>
                  </table>
                  <div className="divider-solid"></div>
                  <div className="clearheight"></div>
                  <table className="qb-q-info">
                    <tbody>
                      <tr>
                        <td>
                          <strong>Question Type:&nbsp;</strong>
                        </td>
                        <td>{result.questionType}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              <div className="question-footer">
                <br />
                <a
                  style={{ color: "#144358" }}
                  href="#"
                  onClick={showAnswer}
                  id="tog_ans32698331"
                  className="open-close-toggle"
                >
                  <i className="fa fa-expand" aria-hidden="true"></i>{" "}
                  Answers&nbsp;
                </a>
                <span> |&nbsp; </span>
                <a style={{ color: "#144358" }} href="edit">
                  <i className="fa fa-pencil" aria-hidden="true"></i> Edit&nbsp;
                </a>
                <span> | &nbsp;</span>
                <a style={{ color: "#144358" }} href="delete">
                  <i className="fa fa-trash-o" aria-hidden="true"></i> Delete
                </a>
              </div>
              <br />
              <hr style={{ width: "400%", marginLeft: "-10%" }} />
              <br />
            </div>
            <br />
          </tr>
        ))}
      </tbody>
    </div>
  );
};

export default ItemQuestion;
