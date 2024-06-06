import { Button } from "react-bootstrap"
import Card from "../../../components/Card/Card"
import styles from "../review-test-question/ReviewTest.module.css"
import { useContext } from "react"
import ReviewQuestionContext from "../../../app/ReviewQuestionContext"
import { addQuestionInTest, updateTotalQuestionCount } from "../../../features/tests/testAction"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export const ReviewTest = () => {

    const { reviewQuestionJson } = useContext(ReviewQuestionContext);
    const testDetails = useSelector((state) => state.tests.testDetails);
    const navigates = useNavigate();

    const dispatch = useDispatch();

    const getColorChange = (questionLevel) => {
        switch (questionLevel) {
            case 'EASY':
                return 'bg-success';
            case 'MEDIUM':
                return 'bg-warning';
            case 'HARD':
                return 'bg-danger';
            default:
                return 'bg-secondary';
        }
    }

    const addQuestionsInTest = (questionId) => {
        dispatch(updateTotalQuestionCount({
            totalQuestionCount: Object.keys(questionId).length,
            testId: testDetails.id
        }))
        dispatch(addQuestionInTest({ questionIds: questionId, testId: testDetails.id }))
            .then(() => {
                navigates("/add-test")
            })
            .catch((error) => {
                alert(error);
            });

    }

    return (
        <div>
            <h6>Review Question</h6>
            <div className={styles["pageContainer"]}>
                <Card>
                    {/* button contain */}
                    <div className="mt-1 p-3">
                        <Button
                            variant="primary"
                            size="sm"
                            style={{ float: "right" }}
                            onClick={() => addQuestionsInTest(reviewQuestionJson.map(questionId => questionId.id))}
                        >
                            Add to test
                        </Button>

                        <Button
                            variant="primary"
                            size="sm"
                            style={{ float: "right", marginRight: "4px" }}
                        >
                            Preview
                        </Button>
                    </div>
                    {/* End button contain */}

                    {/* question card contain */}
                    {
                        reviewQuestionJson.map((response, index) => (
                            <div className="mt-2 p-3">
                                <div className="card mt-1" style={{ width: "auto", textAlign: "left" }}>
                                    <h6 className="card-body p-1 mt-1">
                                        Que {index + 1}. {response.questionTitle}
                                        <span className={`position-absolute top-0 end-0 translate-middle badge rounded-pill 
                                              ${getColorChange(response.questionLevel)}`} style={{ right: "20px" }}>
                                            {response.questionLevel}
                                        </span>
                                        <br />
                                        <span><a href="#" style={{ float: "right", cursor: "pointer", marginBottom: "auto" }}>edit</a></span>
                                    </h6>
                                </div>
                            </div>
                        ))
                    }
                    {/* end question card contain */}
                </Card>
            </div>

        </div >
    )
}