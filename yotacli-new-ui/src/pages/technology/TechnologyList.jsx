import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import styles from "./AddTechnology.css";
import { EditIcon } from "../../components/icons/Icons";
import { fetchAllTechnology } from "../../features/technology/technologyAction";
import { uploadQuestion } from "../../features/uploadQuestions/uploadQuestion";

function TechnologyList() {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.auth);
  const { technologies } = useSelector((state) => state.technologies);
  console.log("technology List", technologies);
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [technology, setTechnology] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (userData.token) dispatch(fetchAllTechnology());
  }, [userData, dispatch]);

  const handleSubmitUploadTrainingButton = () => {
    let data = {
      file: file,
      trainingName: "trainingName",
      technology: technology,
      category: category,
    };
    dispatch(uploadQuestion(JSON.stringify(data)))
      .unwrap()
      .then((result) => {
        console.log(result);
      });

    console.log("QuestionBank", data);
    setOpen(false);
  };

  const handleModalUploadTrainingButton = () => {
    setOpen(true);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleTechnologyChange = (event) => {
    setTechnology(event.target.value);
    getCategoriesByTechnology(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  function getCategoriesByTechnology(technology) {
    const data = technologies.find((item) => item.technology === technology);
    console.log("data", data.categories);
    setCategoryList(data.categories);
  }

  return (
    <div>
      <div class="card text-center mt-2">
        <div class="card-header">
          <h4>Technology List</h4>{" "}
        </div>
        <div class="card-body">
          <table className="table table-bordered table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Technology Name</th>
                <th scope="col">QuestionCount</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {technologies.map((technology, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{technology.technology}</td>
                  <td>{technology.countQuestion}</td>
                  <td>
                    <div className={styles["action-buttons"]}>
                      <EditIcon />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

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
            <div className="form-group row mb-1 ">
              <label
                for="inputDescription"
                className="createclientdescription col-sm-4 col-form-label mt-0"
              >
                Trainig Name
              </label>
              <div className="col-sm-8">
                <input
                  disabled={true}
                  value={"trainingName"}
                  type="text"
                  onChange={"handleendDateChange"}
                  className="mb-2 form-control-sm form-control mt-1"
                ></input>
              </div>
            </div>
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
                        <option key={index} value={technologies.technology}>
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
                        <option key={index} value={tech.name}>
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
          >
            Submit
          </button>
        </Modal.Body>
      </Modal>

      <button
        className="submitt-button btn btn-primary"
        type="submit"
        onClick={handleModalUploadTrainingButton}
      >
        Submit
      </button>
    </div>
  );
}

export default TechnologyList;
