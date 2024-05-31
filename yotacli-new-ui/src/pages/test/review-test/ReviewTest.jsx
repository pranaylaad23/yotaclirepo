import { Button } from "react-bootstrap"
import Card from "../../../components/Card/Card"
import styles from "../review-test/ReviewTest.module.css"
import { useContext } from "react"
import ReviewQuestionContext from "../../../app/ReviewQuestionContext"

export const ReviewTest = () => {

    const { reviewQuestionJson } = useContext(ReviewQuestionContext);

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