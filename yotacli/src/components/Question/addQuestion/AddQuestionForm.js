import React, { useState } from 'react';
import classes1 from "./HeaderItem.module.css";
import classes from "./AddQuestionForm.module.css";
import Button from '../../../ui/button/Button';
import InputField from '../../../ui/inputField/InputField';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddQuestionForm = () => {

    const [newQuestion, setNewQuestion] = useState({ questionType: "mcq", answerType: "easy" });
    const [selectedFile, setSelectedFile] = useState(null);
    const [editorValue, setEditorValue] = useState('');

    const getNewQuestionData = (event) => {
        setNewQuestion({ ...newQuestion, [event.target.name]: event.target.value });
        console.log(newQuestion);
    }

    const setRichTextData = (value) => {
        setEditorValue(value);
        setNewQuestion({ ...newQuestion, ["question"]: editorValue });
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        console.log("--------");
        axios.post("http://localhost:9090/yota/api/questions/", newQuestion)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            })
        // dispatch(createTech(technologies));
        alert("question added successfully");
    };

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);

            axios.post("http://localhost:9090/yota/api/questions/questionUpload", formData)
                .then((response) => {
                    // Handle success response here
                    console.log('File uploaded successfully:', response.data);
                })
                .catch((error) => {
                    // Handle error here
                    console.error('Error uploading file:', error);
                });
            alert("Questions from Excel Sheet added successfully");
        }
    };

    return (
        <>
            <div className="row">
                <div className="row mt-3">
                    <div className="col-xl-8 col-lg-7 col-md-6 col-sm-4">
                        <h5 className={classes1.boxtitle}>Add New Question</h5>
                    </div>

                    <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8">
                        <form className="form-inline" onSubmit={handleOnSubmit}>
                            <div className={classes1.btn}>
                                <Button className={classes.button} type="submit" onClick={handleOnSubmit}>  Add </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <hr />

            <div className="row align-items-end" style={{}}>
                <div className={`col-1 mb-3 ${classes.inputName}`}>
                    <label htmlFor="description" style={{ lineHeight: "140px", marginLeft: "90px", fontSize: "15px" }}>Question:</label>
                </div>
                <div className={`col-8 mt-2`} style={{ marginLeft: "63px" }} >
                    <ReactQuill theme="snow" value={editorValue} onChange={setRichTextData} style={{ width: "700px", height: "200px" }} />
                </div>

                <div className="row align-items-end" style={{ marginTop: "6%" }}>
                    <table>
                        <tr>
                            <div style={{ display: "flex", marginLeft: "100px" }}>

                                <div className={`col-3 ${classes.inputName}`} style={{ marginLeft: "85px" }}>
                                    <td>
                                        <div style={{ paddingTop: "40px" }}>
                                            <label htmlFor="inputNewQuestion" className="col-form-label">
                                                (A)
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        <InputField>
                                            <textarea
                                                type="text"
                                                id="inputName"
                                                name="a"
                                                className={`form-control ${classes.inputField}`}
                                                onChange={getNewQuestionData}
                                                aria-describedby="nameHelpInline"
                                                placeholder="Enter Option 1"
                                                style={{ width: "300px", height: "110px" }}

                                            />
                                        </InputField>

                                    </td>
                                </div>
                                <div className={`col-3 ${classes.inputName}`} style={{ marginLeft: "160px" }}>
                                    <td>
                                        <div style={{ paddingTop: "40px" }}>
                                            <label htmlFor="inputNewQuestion" className="col-form-label" >
                                                (B)
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        <InputField>
                                            <textarea
                                                type="text"
                                                id="inputName"
                                                name="b"
                                                className={`form-control ${classes.inputField}`}
                                                onChange={getNewQuestionData}
                                                aria-describedby="nameHelpInline"
                                                placeholder="Enter Option 2"
                                                style={{ width: "300px", height: "110px" }}
                                            />
                                        </InputField>
                                    </td>
                                </div>
                            </div>
                        </tr>
                        <tr>
                            <div style={{ display: "flex", marginLeft: "100px" }}>
                                <div className={`col-3 ${classes.inputName}`} style={{ marginLeft: "85px", marginTop: "10px" }}>
                                    <td>
                                        <div style={{ paddingTop: "40px" }}>
                                            <label htmlFor="inputNewQuestion" className="col-form-label">
                                                (C)
                                            </label>
                                        </div>
                                    </td>
                                    <td>

                                        <InputField>
                                            <textarea
                                                type="text"
                                                id="inputName"
                                                name="c"
                                                className={`form-control ${classes.inputField}`}
                                                onChange={getNewQuestionData}
                                                aria-describedby="nameHelpInline"
                                                placeholder="Enter Option 3"
                                                style={{ width: "300px", height: "110px" }}
                                            />
                                        </InputField>

                                    </td>
                                </div>

                                <div className={`col-3 ${classes.inputName}`} style={{ marginLeft: "160px", marginTop: "10px" }}>
                                    <td>
                                        <div style={{ paddingTop: "40px" }}>
                                            <label htmlFor="inputNewQuestion" className="col-form-label">
                                                (D)
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        <InputField>
                                            <textarea
                                                type="text"
                                                id="inputName"
                                                name="d"
                                                className={`form-control ${classes.inputField}`}
                                                onChange={getNewQuestionData}
                                                aria-describedby="nameHelpInline"
                                                placeholder="Enter Option 4"
                                                style={{ width: "300px", height: "110px" }}
                                            />
                                        </InputField>
                                    </td>
                                </div>
                            </div>
                        </tr>

                        <tr>
                            <div style={{ display: "flex", marginLeft: "100px" }}>


                                <div className={`col-3 ${classes.inputName}`} style={{ marginLeft: "85px" }}>

                                    <td style={{ marginLeft: "25px" }}>
                                        <div className={`col-12`} style={{ marginTop: "10px" }}>
                                            <InputField>
                                                <select name="correctAnswer" onChange={getNewQuestionData} style={{ height: "33px", width: "300px" }}>
                                                    <option value="Select">Choose the Correct Answer</option>
                                                    <option value={newQuestion.a}>Option:A</option>
                                                    <option value={newQuestion.b}>Option:B</option>
                                                    <option value={newQuestion.c}>Option:C</option>
                                                    <option value={newQuestion.d}>Option:D</option>
                                                </select>
                                            </InputField>
                                        </div>
                                    </td>
                                </div>

                                <div className={`col-3 ${classes.inputName}`} style={{ marginLeft: "160px" }}>
                                    <td style={{ marginLeft: "20px" }}>
                                        <div>
                                            <label htmlFor="inputNewQuestion" className="col-form-label">

                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        <div className={`col-12`} style={{ marginTop: "10px" }}>
                                            <InputField>
                                                <select name="questionLevel" onChange={getNewQuestionData} style={{ width: "300px", height: "35px" }}>
                                                    <option value="Select">Select Difficulty Level</option>
                                                    <option value="Easy">Easy</option>
                                                    <option value="Medium">Medium</option>
                                                    <option value="Hard">Hard</option>
                                                </select>
                                            </InputField>
                                        </div>
                                    </td>
                                </div>

                            </div>
                        </tr>

                        <tr>
                            <div style={{ display: "flex", marginLeft: "140px" }}>


                                <div className={`col-3 ${classes.inputName}`} style={{ marginLeft: "62px", marginTop: "9px" }}>
                                    <td style={{ marginLeft: "0px" }}>
                                        <div>
                                            <label htmlFor="inputNewQuestion" className="col-form-label">

                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <InputField>
                                                <input type="file" onChange={handleFileChange} style={{ width: "300px", border: "none", height: "35px", paddingLeft: "35px", paddingTop: "3px" }} />
                                            </InputField>
                                        </div>
                                    </td>
                                </div>

                                <div className={`col-3 ${classes.inputName}`} style={{ marginLeft: "158px", marginTop: "9px" }}>
                                    <td style={{ marginLeft: "20px" }}>
                                        <div >
                                            <label htmlFor="inputNewQuestion" className="col-form-label">

                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <InputField>
                                                <input type="button" onClick={handleUpload} value="   Upload  Excel  Sheet  " style={{ width: "300px", border: "none", height: "33px" }} />
                                            </InputField>
                                        </div>

                                    </td>
                                </div>

                            </div>
                        </tr>
                    </table>
                </div>
            </div >
        </>
    )
}

export default AddQuestionForm
