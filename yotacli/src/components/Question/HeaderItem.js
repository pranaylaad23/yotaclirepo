import React from "react";

import classes from "./HeaderItem.module.css";
import "./List.css";

import InputField from "../../ui/inputField/InputField";
import Button from "../../ui/button/Button";
const HeaderItem = () => {
  return (
    <div className="row">
      <div className="row mt-3">
        <div className="col-sm-12">
          <div class="paginationQuestion">
            <span>&lt; First</span>{" "}
            <span class="left2">&lt; Previous&nbsp;</span>
            <span class="current-pag">1</span> <span>&nbsp;Next &gt;</span>
            <span
              class="pagination_question_count"
              style={{ marginLeft: "75%" }}
            >
              <strong>Questions:</strong> 2
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderItem;
