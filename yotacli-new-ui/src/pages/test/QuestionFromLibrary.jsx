import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useRef, useState } from "react";
import { TableHeader } from "../../components/table-component/TableHeader";
import Card from "../../components/Card/Card";
import Button from "react-bootstrap/Button";
import { TableBody } from "../../components/table-component/TableBody";
import { Search } from "../../components/search-component/Search";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import { fetchAllTechnology } from "../../features/technology/technologyAction";
import styles from "../test/Test.module.css";

export const QuestionFromLibrary = ({ selectedTechnology }) => {
  const { technologies } = useSelector((state) => state.technologies);
  const { token } = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const theadData = ["Select", "Category", "Level", "Question"];
  const tbodyDataKey = ["Select", "name", "questionLevel", "questionTitle"];
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchValue, setSearchValue] = useState("");
  const name = useRef("");
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const navigate = useNavigate();
  const rowsPerPageSelectRef = useRef(null);

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
      if (!Array.isArray(name.current)) {
        name.current = [];
      }
      name.current.push(selectedName);
      checkboxCount++;
    } else {
      name.current = name.current.filter((name) => name !== selectedName);
      checkboxCount--;
    }
  };

  const addSelectedQuestion = () => {
    const nominatedValue = localStorage.getItem("nominated");
    const trainingId = localStorage.getItem("trainingId");
    const registeredCount = localStorage.getItem("registeredCount");
  };

  //   const tbodyData = technologies
  //     .filter((tech) => tech.technology === selectedTechnology)
  //     .flatMap((tech) => tech.categories)
  //     .filter((category) =>
  //       Object.values(category).some((value) =>
  //         typeof value === "string"
  //           ? value.toLowerCase().includes(searchValue.toLowerCase())
  //           : false
  //       )
  //     )
  //     .flatMap((category) =>
  //       category.questions.map((question) => ({
  //         ...category,
  //         [tbodyDataKey[0]]: getCheckBox([category.nameAdd]),
  //         questionLevel: question.questionLevel,
  //         questionTitle: question.questionTitle,
  //       }))
  //     );
  const tbodyData = useMemo(() => {
    return technologies
      .filter((tech) => tech.technology === selectedTechnology)
      .flatMap((tech) => tech.categories)
      .filter((category) =>
        Object.values(category).some((value) =>
          typeof value === "string"
            ? value.toLowerCase().includes(searchValue.toLowerCase())
            : false
        )
      )
      .flatMap((category) =>
        category.questions.map((question) => ({
          ...category,
          [tbodyDataKey[0]]: getCheckBox([category.nameAdd]),
          questionLevel: question.questionLevel,
          questionTitle: question.questionTitle,
        }))
      );
  }, [technologies, selectedTechnology, searchValue]);
  const totalQuestions = tbodyData.length;
  // .map((category) => ({
  //   ...category,
  //   [tbodyDataKey[0]]: getCheckBox([category.nameAdd]), // You can set this to whatever you want for the checkbox
  //   questionLevel: category.questions[0]?.questionLevel,
  //   questionTitle: category.questions[0]?.questionTitle,
  // }));
  const paginatedData = useMemo(() => {
    const startIndex = page * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return tbodyData.slice(startIndex, endIndex);
  }, [tbodyData, page, rowsPerPage]);

  const totalPages = Math.ceil(tbodyData.length / rowsPerPage);

  const handleChangePage = (newPage, event) => {
    event.preventDefault();
    if (newPage >= 0 && newPage < totalPages) {
      setPage(newPage);
    }
  };

  const handleDataPerPageChange = (event) => {
    const newDataPerPage = parseInt(event.target.value);
    setRowsPerPage(newDataPerPage);
    setPage(0);
  };

  return (
    <>
      <Card className={styles["question-list"]}>
        {technologies.length > 0 ? (
          <div>
            <Row>
              <Col xs={6}>
                <Search setSearchValue={setSearchValue} />
              </Col>
              <Col xs={2}>
                <div className="mb-3">
                  <div className="show-entries">
                    <p>Show Entries</p>
                    <select
                      id="data-per-page"
                      size="sm"
                      ref={rowsPerPageSelectRef}
                      value={rowsPerPage}
                      onChange={handleDataPerPageChange}
                      className="form-control"
                    >
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="15">15</option>
                    </select>
                  </div>
                </div>
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
            <Row>
              <Col>
                <p>Total Question:{totalQuestions}</p>
              </Col>
            </Row>
            <table className="table table-bordered table-striped table-hover mt-2">
              <TableHeader theadData={theadData} />

              <TableBody
                tbodyData={paginatedData}
                tbodyDataKey={tbodyDataKey}
              />
            </table>

            <div className={styles["pagination"]}>
              <button
                className={styles["page-button"]}
                onClick={(event) => handleChangePage(page - 1, event)}
                disabled={page === 0}
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  className={`page-button ${index === page ? "active" : ""}`}
                  onClick={(event) => handleChangePage(index, event)}
                >
                  {index + 1}
                </button>
              ))}
              <button
                className="page-button"
                onClick={(event) => handleChangePage(page + 1, event)}
                disabled={page === totalPages - 1}
              >
                Next
              </button>
            </div>
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
