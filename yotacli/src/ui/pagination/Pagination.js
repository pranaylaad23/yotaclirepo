import React from "react";
import classes from "./Pagination.module.css";

const Pegination = () => {
  return (
    <div class="pagination">
      &nbsp; &nbsp;
      <span>&lt; First</span>
      <span class="left2">&lt; Previous&nbsp;</span>
      <span class="current-pag">1</span>
      <span>&nbsp;Next &gt;</span>
      <span class="heading" style={{ marginLeft: "70%" }}>
        <strong>Questions:</strong> 1
      </span>
    </div>
  );
};

export default Pegination;
