import React from "react";
import Card from "../../ui/card/Card";
import Pagination from "../../ui/pagination/Pagination";
import HeaderItem from "./HeaderItem";
import QuestionItem from "./QuestionItem";

const ListQuestions = () => {
  return (
    <div className="col-12">
      <Card>
        <HeaderItem />
        <hr />
        <QuestionItem />
      </Card>
      <Pagination />
    </div>
  );
};

export default ListQuestions;
