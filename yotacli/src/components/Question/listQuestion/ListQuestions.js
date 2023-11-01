import React, { useState } from "react";
import classes from "../../../components/Question/listQuestion/ListQuestion.module.css";
import Button from "../../../ui/button/Button";


import HeaderItem from "./HeaderItem";
import QuestionList from "./QuestionList";
import Pagination from "../../../ui/pagination/Pagination";
import Card from "../../../ui/card/Card";


const ListQuestions = () => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInput = (searched) => {
    setSearchInput(searched);
  };
  return (
    <div className="justify-content-centre ">
      <Card>
        <HeaderItem  handleSearchInput={handleSearchInput}/>
        <hr />
        <div className={`table-responsive ${classes.table}`}>
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
               
                <th>S.No</th>
                <th>Question</th>
                <th>Question Level</th>
                <th>Option A</th>
                <th>Option B</th>
                <th>Option C</th>
                <th>Option D</th>
                <th>Correct Answer</th>
                <th>CreatedAt</th>
                <th>UpdatedAt</th>
                <th>Action</th>
                
              </tr>
            </thead> 
              <QuestionList  searchInput={searchInput}/>      
          </table>
        </div>
      </Card>
      <Pagination />
    </div>
  );
};

export default ListQuestions;
