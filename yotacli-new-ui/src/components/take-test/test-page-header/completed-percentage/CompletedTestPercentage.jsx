import classes from './CompletedPercentage.module.css';
import CircularProgress from "../circular-progress/CircularProgress";

export const CompletedTestPercentage = (props) => {

    const {totalQuestions} = props;
    const {answeredQuestion} = props;

    const percentage = Math.floor((answeredQuestion / totalQuestions) * 100);

    return (
        <div className={classes.completed}>
            <p className={classes["completed-title"]}>Completed</p>
            <CircularProgress
                parts={totalQuestions}
                currTime={answeredQuestion}
                customText={`${percentage}%`}
                customStrokeWidth={3}
                customTextColor={"#039135"}
                customStrokeColor={"#6ACC6AFF"}
                transitionDuration={200}
                customFontWeight={"bold"}
            />
            {/*<div className="button-wrapper">
                <button onClick={() => props.onChangeHandler()} disabled={answeredQuestion >= totalQuestions}>Attempt
                </button>
                <button onClick={() => props.onResetHandler()}>Reset</button>
            </div>*/}
        </div>
    )
};
