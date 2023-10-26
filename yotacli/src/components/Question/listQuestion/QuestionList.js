import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const QuestionList = () => {

    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:9090/yota/api/questions/all")
            .then(response => {
                setList(response.data);
                console.log(response.data);
                console.log(list[0])
            })
            .catch(error => {
                console.error(error);
            })
    }, []);

    return (
        <tbody>
            {
                list.map((list, index) => (
                    <tr key={index}>
                        <td>{list.id}</td>
                        <td>{list.question}</td>
                        <td>{list.questionLevel}</td>
                        <td>{list.a}</td>
                        <td>{list.b}</td>
                        <td>{list.c}</td>
                        <td>{list.d}</td>
                        <td>{list.correctAnswer}</td>
                        <td>{list.created_At}</td>
                        <td>{list.updated_At}</td>
                        <td>
                            <Link to={`/updatequestion/${list.id}`}>
                                {" "}
                                <i className="fa fa-edit"></i>&nbsp;{" "}
                                
                            </Link>
                        
                            <Link
                                to={`/deletequestion/${list.id}`}
                                onClick={() => 
                                    axios.delete(`http://localhost:9090/yota/api/questions/${list.id}`)
                                    .then(response => {
                                        console.log("deleted successfully");
                                        alert("Item Deleted Succesfully");
                                        window.location.reload();   
                                    })
                                    .catch(error => {
                                        console.error("Error deleting this object", error);
                                    })
                                }
                            >
                                <i className="fa fa-trash-can"></i>
                            </Link>
                        </td>    
                    </tr>
                ))
            }
        </tbody>
    )
}

export default QuestionList
