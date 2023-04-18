import React, { Component } from 'react'

const QuestionList = () =>  {
    

    
    

    
        return (
            <div>
                 <h2 className="text-center">questions List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addQuestion}> Add Employee</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Question Level</th>
                                    <th> Question Type</th>
                                    <th> Question</th>
                                    <th> Option a</th>
                                    <th> Option b</th>
                                    <th> Option c</th>
                                    <th> Option d</th>
                                    <th> Correct Answer</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.questions.map(
                                        question => 
                                        <tr key = {question.id}>
                                             <td> { question.questionLevel} </td>   
                                             <td> {question.questionType}</td>
                                             <td> {question.question}</td>
                                             <td> {question.a}</td>
                                             <td> {question.b}</td>
                                             <td> {question.c}</td>
                                             <td> {question.d}</td>
                                             <td> {question.correctAnswer}</td>
                                             <td>
                                                  <button style={{marginLeft: "10px"}} onClick={ () => this.viewQuestion(question.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }


export default QuestionList
