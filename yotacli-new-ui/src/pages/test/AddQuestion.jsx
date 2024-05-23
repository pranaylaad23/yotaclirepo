import styles from "../test/AddQuestion.module.css"
import Card from "../../components/Card/Card";
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTechnology } from "../../features/technology/technologyAction";
import { countQuestion, questionUnderTechnologyId } from "../../features/tests/testAction";

export const AddQuestion = () => {

    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.auth.userData);
    const { technologies } = useSelector((state) => state.technologies);
    const questionCount = useSelector((state) => state.tests.questionCount);
    const easyCount = useSelector((state) => state.tests.easyCount);
    const mediumCount = useSelector((state) => state.tests.mediumCount);
    const hardCount = useSelector((state) => state.tests.hardCount);
    const question = useSelector((state) => state.tests.question);
    const [screenContain, setScreenContain] = useState('Add');
    const technologyId = useRef();

    useEffect(() => {
        if (token) {
            dispatch(fetchAllTechnology());
        }
    }, [token]);

    const questionByTechnology = () => {
        const techId = technologyId.current.value;
        dispatch(questionUnderTechnologyId(techId))
        dispatch(countQuestion(techId));
    }

    const LoadScreenContain = () => {
        switch (screenContain) {
            case 'Add':
                return <AddFormLibrary />
            case 'Upload':
                return (
                    <div style={{ padding: "3%" }}>
                        <Card className={styles["fileContainer"]}>
                            <UploadQuestion />
                        </Card>
                    </div>
                )
            default:
                return <AddFormLibrary />
        }
    }


    const ButtonContain = () => {
        return (
            <>
                {/* button code */}
                <div style={{ padding: "10px" }}>
                    <Button type="submit"
                        variant="primary"
                        size="sm"
                        onClick={() => setScreenContain('Add')}>
                        Add From Library
                    </Button>
                    &nbsp;
                    &nbsp;

                    <Button type="submit"
                        variant="primary"
                        size="sm"
                        onClick={() => setScreenContain('Upload')}>
                        Upload
                    </Button>
                </div>
                {/* end button code */}
            </>
        )
    }

    const AddFormLibrary = () => {
        return (
            <div>
                {/* level code */}
                <div class="container text-center" style={{ fontStyle: "italic" }}>
                    <div class="row">
                        <hr></hr>
                        <div class="col-6">
                            <b>
                                Total Questions to be added - {questionCount > 0 ? questionCount : 0}
                            </b>
                        </div>
                        <div class="col-2">
                            <b>Easy - {easyCount > 0 ? easyCount : 0}</b>
                        </div>
                        <div class="col-2">
                            <b>Medium - {mediumCount > 0 ? mediumCount : 0}</b>
                        </div>
                        <div class="col-2">
                            <b>Hard - {hardCount > 0 ? hardCount : 0}</b>
                        </div>
                    </div>
                </div>
                <hr></hr>
                {/* end level code */}

                {/* technology Search */}
                <div class="container text-center mt-3" style={{ width: "60%" }}>
                    <div class="row">
                        <div class="col-3">
                            Technology:
                        </div>
                        <div class="col-6" style={{ float: "right" }}>
                            <select class="form-select form-select-sm"
                                aria-label="Small select example"
                                ref={technologyId}>
                                <option selected>----</option>
                                {
                                    technologies.map((response, index) => (
                                        <option value={response.id} key={index}>
                                            {response.technology}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                        <div class="col-3" style={{ float: "left" }}>
                            <Button variant="secondary" size="sm" onClick={questionByTechnology}>
                                show
                            </Button>
                        </div>
                    </div>
                </div>
                {/* end technlogy search */}

                {/* search box code */}
                {
                    question.length !== 0 ? (
                        <div className={styles["searchBoxContainer"]}>
                            <Card>
                                <div class="container text-center mt-2" style={{ padding: "10px" }}>
                                    <div class="row">
                                        <div class="col-4">
                                            <input class="form-control form-control-sm" type="text" placeholder="Search..." aria-label=".form-control-sm example" style={{ float: "left" }} />
                                        </div>
                                        <div class="col">
                                            <Button
                                                variant="primary"
                                                size="sm"
                                                style={{ float: "right" }}>
                                                Add Selected Ques.
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ padding: "1%", marginTop: "-6px" }}>
                                    <table className="table table-bordered table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Category</th>
                                                <th scope="col">Level</th>
                                                <th scope="col">Question</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                question.map((response, index) => (
                                                    <tr>
                                                        <td>
                                                            <div className="form-check" style={{ display: "inline-block" }}>
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    id="flexCheckDefault"
                                                                />
                                                            </div>
                                                        </td>
                                                        <td>{response.category.name}</td>
                                                        <td>{response.questionLevel}</td>
                                                        <td>{response.questionTitle}</td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </Card>
                        </div>
                    )
                        : (
                            <div className={styles["custom-text-center"]}>
                                <b>The question has not been presented yet, you will get it based on the search results.</b>
                            </div>
                        )
                }
                {/* end search box code */}
            </div>
        )
    }

    const UploadQuestion = () => {
        return (
            <div style={{ padding: "5%" }}>
                <Form.Group controlId="formFileLg" className="mb-3">
                    <Form.Label style={{ float: "left" }}>Choose question paper</Form.Label>
                    <Form.Control type="file" size="lg" />
                </Form.Group>
                <div>
                    <Button
                        variant="secondary"
                        size="sm"
                        style={{ float: "left" }}>
                        Upload
                    </Button>
                </div>
            </div>
        )
    }


    return (
        <div>
            <div className={styles["textHeader"]}>
                <h6 style={{ marginTop: "1px" }}>Add Questions</h6>
            </div>

            <div className={styles["pageContainer"]}>
                <Card>
                    <ButtonContain />
                    <LoadScreenContain />
                </Card>
            </div>
        </div >
    )
}