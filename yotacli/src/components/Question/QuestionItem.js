import React from 'react';
import { data } from '../store/Data';

import classes from './QuestionItem.module.css';

const QuestionItem = () => {


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
                {data.map((item, key) => (
                          <tr key={key}>
                
                    <td>{item.question}</td>
                    <td>{item.question_Type}</td>
                    <td>{item.question_Level}</td>
                    <td>{item.option_a}</td>
                    <td>{item.option_b}</td>
                    <td>{item.option_c}</td>
                    <td>{item.option_d}</td>
                    <td>{item.correct_Answer}</td>
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