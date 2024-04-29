import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { fetchAllAssociatesByStatus } from "../../features/associates/associateAction";
import { TableHeader } from "../../components/table-component/TableHeader";
import Card from "../../components/Card/Card";
import Button from "react-bootstrap/Button";
import styles from "../../pages/associates/AllAssociates.module.css";
import { TableBody } from "../../components/table-component/TableBody";
import { Search } from "../../components/search-component/Search";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import { assignTraining } from "../../features/training/trainingAction";
import { fetchAllTechnology } from "../../features/technology/technologyAction";

export const QuestionFromLibrary = () => {
  const { technologies } = useSelector((state) => state.technologies);
  const { token } = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();
  // table
  const theadData = ["Select", "Category", "Level", "Question"];
  const tbodyDataKey = ["Select", "name", "questionLevel", "questionTitle"];
  // serach box
  const [searchValue, setSearchValue] = useState("");
  const name = useRef("");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) dispatch(fetchAllTechnology());
  }, [dispatch, token]);
  console.log(technologies[0].categories);
  function getCheckBox(name) {
    return (
      <div style={{ textAlign: "center" }}>
        {name.map((emailResponse, index) => (
          <div className="form-check" style={{ display: "inline-block" }}>
            <input
              className="form-check-input"
              type="checkbox"
              value={emailResponse}
              id="flexCheckDefault"
              onChange={countSelectedCheckbox}
            />
          </div>
        ))}
      </div>
    );
  }

  let checkboxCount = 0;
  const countSelectedCheckbox = (event) => {
    const isChecked = event.target.checked;
    const selectedName = event.target.value;

    if (isChecked) {
      // If email.current is not yet an array, initialize it as an empty array
      if (!Array.isArray(name.current)) {
        name.current = [];
      }
      // Push the selected email to the array
      name.current.push(selectedName);
      checkboxCount++;
    } else {
      // If the checkbox is unchecked, remove the email from the array
      name.current = name.current.filter((name) => name !== selectedName);
      checkboxCount--;
    }
  };

  const addSelectedQuestion = () => {
    const nominatedValue = localStorage.getItem("nominated");
    const trainingId = localStorage.getItem("trainingId");
    const registeredCount = localStorage.getItem("registeredCount");
  };

  const tbodyData = technologies[0].categories
    .filter((technologyDetails) =>
      Object.values(technologyDetails).some((values) => {
        if (typeof values === "string") {
          return values.toLowerCase().includes(searchValue.toLowerCase());
        } else if (typeof values === "number") {
          return values
            .toString()
            .toLowerCase()
            .includes(searchValue.toLowerCase());
        }
      })
    )
    .map((item) => {
      const newItem = { ...item };
      newItem[tbodyDataKey[0]] = getCheckBox([newItem.nameAdd]);

      //   const questionLevel = newItem.questionLevel;
      newItem.questionLevel = item.questions[0].questionLevel;
      newItem.questionTitle = item.questions[0].questionTitle;

      return newItem;
    });

  return (
    <>
      <h5></h5>
      <Card className={styles["users-list"]}>
        {technologies.length > 0 ? (
          <div>
            <Row>
              <Col xs={8}>
                <Search setSearchValue={setSearchValue} />
              </Col>
              <Col>
                <Button
                  variant="primary"
                  size="sm"
                  className={styles["assign-button"]}
                  onClick={addSelectedQuestion}
                >
                  Add Selected Question
                </Button>
              </Col>
            </Row>

            <table className="table table-bordered table-striped table-hover mt-2">
              <TableHeader theadData={theadData} />
              <TableBody tbodyData={tbodyData} tbodyDataKey={tbodyDataKey} />
            </table>
          </div>
        ) : (
          <div className={styles["custom-text-left"]}>
            <b>No associates found with the approved status..</b>
          </div>
        )}
      </Card>
    </>
  );
};
