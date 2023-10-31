import React, { useState } from 'react';
import MyAccordian from './MyAccordian';
import './accordian.css';
import { questions } from "./api";
const ViewQuestionForm = () => {
  const [data, setData] = useState(questions);
  
  return (
    <>
            <section className="main-div">
                <h1>Interview Questions </h1>
                
        {
                <MyAccordian />
                   
                      
        }
                 </section>
        </>
  )
}

export default ViewQuestionForm
