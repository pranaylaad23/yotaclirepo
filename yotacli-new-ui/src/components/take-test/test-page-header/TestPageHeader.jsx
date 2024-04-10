import {AnsweredQuestions} from "./answered-questions/AnsweredQuestions";
import {ExamTiming} from "./exam-timing/ExamTiming";
import {CompletedTestPercentage} from "./completed-percentage/CompletedTestPercentage";
import classes from './TestPageHeader.module.css';

export const TestPageHeader = (props) => {
    const applicationName = "YASH Online Test Application";
    const {timeLimit} = props;
    return (
        <div className={classes.header}>
            <div className={classes["left-section"]}>
                <i className={`${"fa-solid fa-laptop-code"} ${classes.icon}`}/>
                <div className={classes["application-name"]}>
                    <h3>{applicationName}</h3>
                </div>
            </div>
            <div className={classes["right-section"]}>
                <AnsweredQuestions answeredQuestion={props.answeredQuestion}
                                   totalQuestion={props.totalQuestion}/>
                <div className={classes.spacer}></div>
                <ExamTiming timeInMinutes={timeLimit} onTimeout={props.timeoutHandler}/>
                <div className={classes.spacer}></div>
                <CompletedTestPercentage totalQuestions={props.totalQuestion}
                                         answeredQuestion={props.answeredQuestion}
                                         onChangeHandler={props.onChangeHandler}
                                         onResetHandler={props.onResetHandler}/>
            </div>
        </div>
    )
};
