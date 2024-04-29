import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "../test/Test.module.css";
import { Button } from "bootstrap";
import { fetchCategory } from "../../features/tests/testAction";

const QuestionFromLibrary = ({ technologyId, categoryId }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth.userData);
  const categories = useSelector((state) => state.tests.categories);

  useEffect(() => {
    if (token) {
      console.log(technologyId);
      console.log(categoryId);
      dispatch(fetchCategory(technologyId, categoryId));
    }
  }, [token, categoryId, technologyId, dispatch]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  console.log("Categories in Redux store:", categories);
  return (
    <div>
      <div>
        <div className="row">
          <div className="search-test">
            {" "}
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
          <div className="search-test ">
            <button type="button" className="btn btn-primary">
              Add Selected Question
            </button>
          </div>
        </div>
        <div className="row">
          <div className="search-test">
            {" "}
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="form-control mr-sm-2"
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className="search-test "></div>
        </div>
      </div>
    </div>
  );
};

export default QuestionFromLibrary;
