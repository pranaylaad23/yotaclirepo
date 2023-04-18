import React from "react";

import "./HeaderItemModule.css";
import "./List.css";
const HeaderItem = () => {
  return (
    <div className="row">
      <div className="row mt-3" style={{marginLeft: "7%"}}>
        <div className="col-xl-9 col-lg-7 col-md-6 col-sm-4" style={{width: "82%"}}>
          <div class="pagination">
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
