import React from "react";
import classes from "../../../components/Question/listQuestion/ListQuestion.module.css";
import Button from "../../../ui/button/Button";
// import FilterQuestion from "./FilterQuestion";

import HeaderItem from "./HeaderItem";
import QuestionList from "./QuestionList";
import Pagination from "../../../ui/pagination/Pagination";
import Card from "../../../ui/card/Card";
// import ItemQuestion from "./ItemQuestion";

const ListQuestions = () => {
  return (
    <div className="justify-content-centre ">
      <Card>
        <HeaderItem />
        <hr />
        <div className={`table-responsive ${classes.table}`}>
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                {/* <th>Sr.</th> */}
                <th>ID</th>
                <th>Question Type</th>
                <th>Question Level</th>
                <th>Question</th>
                <th>Answer Type</th>
                <th>Option A</th>
                <th>Option B</th>
                <th>Option C</th>
                <th>Option D</th>
                <th>Correct Answer</th>
                <th>CreatedAt</th>
                <th>UpdatedAt</th>
                
              </tr>
            </thead>
           
              <QuestionList />
           
          </table>
        </div>
      </Card>
      <Pagination />
    </div>
  );
};

export default ListQuestions;
