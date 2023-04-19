
import React, { useState , useEffect} from 'react';
import classes from './QuestionItem.module.css';
import axios from 'axios';


const QuestionItem = (props) => {

  const [question, setQuestion] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9090/yota/api/questions/all").then((res) => {
      console.log(res.data);
      setQuestion(res.data);
    });
  }, []);

    return (
      <div className={`table-responsive ${classes.table}` }>
      <table className='table table-bordered table-hover'>
                <thead>
                <tr>
                  <th>Question </th>
                  <th>Question Type</th>
                  <th>Question Level </th>
                  <th>Option a</th>
                  <th>Option b</th>
                  <th>Option c</th>
                  <th>Option d</th>
                  <th>Correct Answer </th>
                  <th>Action</th>
                </tr>
              </thead>
                <tbody>
                {/* {data.filter((item) => {
                  return search.toLowerCase() ==='' ? item : item.question_Level.toLowerCase().includes(search)
                })
                .map((item) => ( */}
                {}
                {question.map((item, key) => (
                          <tr key={key}>
                
                    <td>{item.question}</td>
                    <td>{item.questionType}</td>
                    <td>{item.questionLevel}</td>
                    <td>{item.a}</td>
                    <td>{item.b}</td>
                    <td>{item.c}</td>
                    <td>{item.d}</td>
                    <td>{item.correctAnswer}</td>
                    <td><i className="fa fa-edit" ></i>&nbsp;                                                      {/* onClick={(event) => handleEditClick(event, list)} */}
                                <i className='fa fa-trash-can'></i>&nbsp;
                                <i class="fa fa-eye"></i>                                                        {/* onClick={() => handleDeleteClick(tech.id)} */}
                            </td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>
    )
}

export default QuestionItem;