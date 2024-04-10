import classes from './AnsweredQuestion.module.css';
import CircularProgress from "../circular-progress/CircularProgress";

export const AnsweredQuestions = (props) => {
    const {answeredQuestion} = props;
    const {totalQuestion} = props;
    return (
        <div className={classes["answered-questions"]}>
            <p className={classes["answered-questions-title"]}>Answered Question</p>
            <CircularProgress
                parts={totalQuestion}
                currTime={answeredQuestion}
                customText={answeredQuestion}
                customFontSize={"30"}
                customTextColor={"#01a7da"}
                customStrokeCircleColor={"#ffffff"}
                customStrokeColor={"#ffffff"}
                transitionDuration={200}
                customFontWeight={"bold"}
            />
        </div>
    )
};
