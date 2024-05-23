import React, { useEffect, useState } from "react";
import { SelectComponent } from "../../components/select-component/SelectComponent";
import styles from "./ShowQuestion.module.css";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoriesUnderTechnologyById } from "../../features/category/categoryAction";
import {
  allQuestion,
  questionByCategory,
  deleteQuestion,
} from "../../features/Question/questionAction";
import { Link } from "react-router-dom";
import { EditIcon, DeleteIcon } from "../../components/icons/Icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShowQuestion = () => {
  const { userData } = useSelector((state) => state.auth);
  const { categories } = useSelector((state) => state.categories);
  const { questions } = useSelector((state) => state.questions);
  const { categoryquestions } = useSelector((state) => state.categoryquestions);
  const { technologies } = useSelector((state) => state.technologies);
  const [selectedCategory, setSelectedCategory] = useState();

  const { id } = useParams("id");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (userData.token) {
      dispatch(getAllCategoriesUnderTechnologyById(id));
      dispatch(allQuestion(id));
    }
  }, [userData]);

  const technologyes = technologies.filter((tech) => {
    return tech.id == id;
  });

  console.log("selectcat", selectedCategory);

  const catName = categories.filter((data) => {
    return data.id == selectedCategory ? data.name : null;
  });

  const CategoriesName = catName.map((catname) => {
    return catname.name;
  });

  const handleQuestionByCategory = () => {
    dispatch(questionByCategory({ catId: selectedCategory, techId: id }));
  };

  function handleDelete(data) {
    dispatch(deleteQuestion({ quesId: data }));
    toast("Question Delete Successfully!");
    setTimeout(() => {
      navigate("/technology-list");
    }, 2000);
  }

  console.log("categories", categories);

  return (
    <>
      {technologyes.map((tech) => {
        return (
          <h4 className="text-start" key={tech.id}>
            Question From {tech.technology} Technology
          </h4>
        );
      })}
      <br />
      <div className={styles["form-group"]}>
        {categoryquestions.length ? (
          <label htmlFor="technology">
            {CategoriesName} [{categoryquestions.length}]
            <span className={styles["required-span"]}> *</span>
          </label>
        ) : (
          <label htmlFor="technology">
            ALL [{questions.length}]
            <span className={styles["required-span"]}> *</span>
          </label>
        )}
        <div className={styles["select-icon-group"]}>
          {/* <SelectComponent
            name="technology_select"
            width={"select-dropdown"}
            id="tech"
            optionChangeHandler={(event) =>
              setSelectedCategory(event.target.value)
            }
            options={categories}
            dataFieldName={"name"}
            keyFieldName={"id"}
            valueFieldName={"id"}
            selectedValue={selectedCategory}
          /> */}

          <select onChange={(event) => setSelectedCategory(event.target.value)}>
            <option>All</option>
            {categories.map((option, index) => {
              return (
                <option key={index} value={option.id}>
                  {option.name}
                </option>
              );
            })}
          </select>
        </div>
        <Button onClick={handleQuestionByCategory}>APPLY</Button>
      </div>
      <div className="mt-2">
        <table className="table table-bordered table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Question</th>
              <th scope="col">Level</th>
              <th scope="col">Category</th>
              <th scope="col">Last Modified</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {categoryquestions.length
              ? categoryquestions.map((data, index) => {
                  return (
                    <tr key={data.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{data.questionTitle}</td>
                      <td>{data.questionLevel}</td>
                      <td>{CategoriesName}</td>
                      {data.updated_At != null ? (
                        <td>{data.updated_At}</td>
                      ) : (
                        <td>Not Modified</td>
                      )}
                      <td>
                        <p className="editDelete">
                          <Link
                            className="nav-link"
                            to={`/UpdateQuestion/` + data.id}
                          >
                            <EditIcon />
                          </Link>
                          <button
                            style={{ border: "none" }}
                            onClick={
                              () => handleDelete(data.id)
                              // dispatch(deleteQuestion({ quesId: data.id }))
                            }
                          >
                            <DeleteIcon />
                          </button>
                        </p>
                      </td>
                    </tr>
                  );
                })
              : questions.map((data, index) => {
                  return (
                    <tr key={data.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{data.questionTitle}</td>
                      <td>{data.questionLevel}</td>
                      <td>{data.category.name}</td>
                      {data.updated_At != null ? (
                        <td>{data.updated_At}</td>
                      ) : (
                        <td>Not Modified</td>
                      )}
                      <td>
                        <p className="editDelete">
                          <Link
                            className="nav-link"
                            to={`/UpdateQuestion/` + data.id}
                          >
                            <EditIcon />
                          </Link>
                          <button
                            style={{ border: "none" }}
                            onClick={
                              () => handleDelete(data.id)
                              // dispatch(deleteQuestion({ quesId: data.id }))
                            }
                          >
                            <DeleteIcon />
                          </button>
                        </p>
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </>
  );
};
export default ShowQuestion;
