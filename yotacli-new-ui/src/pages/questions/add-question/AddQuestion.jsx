import Card from "../../../components/Card/Card";
import styles from "../Questions.module.css";
import { AddIcon, UploadIcon } from "../../../components/icons/Icons";
import { SelectComponent } from "../../../components/select-component/SelectComponent";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAllTechnology } from "../../../features/technology/technologyAction";
import { Container, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { uploadQuestion } from "../../../features/uploadQuestions/uploadQuestion";

export const AddQuestion = () => {
  const dispatch = useDispatch();
  const { technologies } = useSelector((state) => state.technologies);
  const { token } = useSelector((state) => state.auth.userData);
  const [selectedTechnology, setSelectedTechnology] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState(null);
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [technology, setTechnology] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [category, setCategory] = useState("");

  const correct_options_list = {
    option_a: "option_a",
    option_b: "option_b",
    option_c: "option_c",
    option_d: "option_d",
  };

  const [newQuestion, setNewQuestion] = useState({
    questionTitle: "",
    correctAnswer: "",
    option_A: "",
    option_B: "",
    option_C: "",
    option_D: "",
    questionLevel: "",
  });

  function technologyChangeHandler(event) {
    console.log(event.target.value);
    setSelectedTechnology(event.target.value);
    setSelectedCategory("");
  }

  function categoryChangeHandler(event) {
    console.log(event.target.value);
    setSelectedCategory(event.target.value);
  }

  function addTechnologyEventHandler(event) {
    event.preventDefault();
    console.log("add button clicked...");
  }

  function addCategoryEventHandler(event) {
    event.preventDefault();
    console.log(event.target.value);
  }

  useEffect(() => {
    if (token) {
      dispatch(fetchAllTechnology());
    }
  }, [token, dispatch]);

  useEffect(() => {
    if (selectedTechnology) {
      const catArr = technologies
        .filter((technology) => technology.id === Number(selectedTechnology))
        .map((tech) => tech.categories)
        .flatMap((cat) => cat);

      setCategories(catArr.length > 0 ? catArr : null);
      setSelectedCategory(null);
    }
  }, [selectedTechnology]);

  function addNewQuestionHandler(event) {
    event.preventDefault();
  }

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleTechnologyChange = (event) => {
    console.log(event.target.value);
    setTechnology(event.target.value);
    getCategoriesByTechnology(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleModalUploadTrainingButton = () => {
    setOpen(true);
  };

  const handleSubmitUploadTrainingButton = () => {
    let data = {
      file: file,
      techId: technology,
      catId: category,
    };
    if (file) {
      dispatch(
        uploadQuestion({ file: file, techId: technology, catId: category })
      );
    }

    setCategory("");
    setTechnology("");
    setFile(null);
    console.log("QuestionBank", data);
    setOpen(false);
  };

  function getCategoriesByTechnology(id) {
    const data = technologies.find((item) => item.id == id);
    console.log("data", data);
    setCategoryList(data.categories);
  }

  return (
    <div>
      <Card className={styles["card-container"]}>
        <Container
          direction="row"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <Button
            color={"primary"}
            onClick={handleModalUploadTrainingButton}
            title="Upload Question"
          >
            <UploadIcon color={"#ffffff"} title="Upload Question" /> Upload
            Questions
          </Button>
        </Container>
        <p className={styles["page-title"]}>Add New Question</p>
        <Card className={styles["form-container"]}>
          <form onSubmit={addNewQuestionHandler}>
            <div className={styles["form-group"]}>
              <label htmlFor="technology">
                Technology
                <span className={styles["required-span"]}> *</span>
              </label>
              <div className={styles["select-icon-group"]}>
                <SelectComponent
                  name="technology_select"
                  width={"select-dropdown"}
                  id="tech"
                  optionChangeHandler={technologyChangeHandler}
                  options={technologies}
                  dataFieldName={"technology"}
                  keyFieldName={"id"}
                  valueFieldName={"id"}
                  selectedValue={selectedTechnology}
                />
                <AddIcon
                  size={30}
                  title={"Add New Technology"}
                  onAdd={addTechnologyEventHandler}
                />
              </div>
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="category">
                Category
                <span className={styles["required-span"]}> *</span>
              </label>
              <div className={styles["select-icon-group"]}>
                <SelectComponent
                  name="category_select"
                  width={"select-dropdown"}
                  id="cat"
                  optionChangeHandler={categoryChangeHandler}
                  options={categories}
                  dataFieldName={"name"}
                  keyFieldName={"id"}
                  valueFieldName={"id"}
                  selectedValue={selectedCategory}
                />
                <AddIcon
                  size={30}
                  title={"Add New Category"}
                  onAdd={addCategoryEventHandler}
                />
              </div>
            </div>
            <div className={styles["form-group-question"]}>
              <label htmlFor="question-title">
                Question
                <span className={styles["required-span"]}> *</span>
              </label>
            </div>
            <div className={styles["form-group-question"]}>
              <textarea rows={8} cols={80} />
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="question-title">
                Options
                <span className={styles["required-span"]}> *</span>
              </label>
            </div>
            <div className={styles["form-group"]}>
              <textarea rows={4} cols={20} placeholder={"Option A"} />
              <textarea rows={4} cols={20} placeholder={"Option B"} />
            </div>
            <div className={styles["form-group"]}>
              <textarea rows={4} cols={20} placeholder={"Option C"} />
              <textarea rows={4} cols={20} placeholder={"Option D"} />
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="question-title">
                Choose Correct Option
                <span className={styles["required-span"]}> *</span>
              </label>
              <div className={styles["select-icon-group"]}>
                <SelectComponent
                  name="correct_option_select"
                  width={"select-dropdown"}
                  id="c_opt"
                  options={correct_options_list}
                  optionChangeHandler={categoryChangeHandler}
                />
              </div>
            </div>
            <Container className={"text-center"}>
              <Button color={"primary"} type={"submit"}>
                Add
              </Button>
              <Button color={"danger"} className={"ms-2"}>
                Cancel
              </Button>
            </Container>
          </form>
        </Card>
      </Card>
      <Modal
        show={open}
        onHide={() => setOpen(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Question Bank
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="mr-4">
          <div>
            <div className="form-group row mb-1">
              <label
                for="inputDescription"
                className="createclientdescription col-sm-4 col-form-label mt-0"
              >
                Technology
              </label>
              <div className="col-sm-8">
                <div className="technologyDrop">
                  <select
                    className="form-select form-select-sm w-90 mt-1"
                    aria-label=".form-select-sm example"
                    onChange={handleTechnologyChange}
                  >
                    <option value="" disabled selected>
                      Select Technology
                    </option>
                    {technologies &&
                      technologies.map((technologies, index) => (
                        <option key={index} value={technologies.id}>
                          {technologies.technology}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="form-group row mb-1">
              <label
                for="inputDescription"
                className="createclientdescription col-sm-4 col-form-label mt-0"
              >
                Categories
              </label>
              <div className="col-sm-8">
                <div className="technologyDrop">
                  <select
                    className="form-select form-select-sm w-90 mt-1"
                    aria-label=".form-select-sm example"
                    onChange={handleCategoryChange}
                  >
                    <option value="" disabled selected>
                      Select Category
                    </option>
                    {categoryList &&
                      categoryList.map((tech, index) => (
                        <option key={index} value={tech.id}>
                          {tech.name}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="form-group row ">
              <label
                for="inputDescription"
                className="createclientdescription col-sm-4 col-form-label mt-0"
              >
                Upload File
              </label>
              <div className="col-sm-8 mt-1">
                <input type="file" onChange={handleFileChange} />
              </div>
            </div>
          </div>

          <button
            className="submitt-button btn btn-primary"
            type="submit"
            onClick={handleSubmitUploadTrainingButton}
            style={{ borderRadius: "revert-layer", marginLeft: "390px" }}
            disabled={!file}
          >
            Submit
          </button>
        </Modal.Body>
      </Modal>
    </div>
  );
};
