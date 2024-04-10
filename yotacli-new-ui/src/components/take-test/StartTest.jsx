import {useState} from "react";
import {TestPageHeader} from "./test-page-header/TestPageHeader";
import classes from './StartTest.module.css';
import {TestQuestions} from "./test-questions/TestQuestions";

export const StartTest = () => {
    const examName = "Java";
    const [answeredQuestion, setAnsweredQuestion] = useState(10);
    const [totalQuestion, setTotalQuestion] = useState(20);
    const [timeLimit, setTimeLimit] = useState(0.5);

    const answeredQuestionChangeHandler = () => {
        setAnsweredQuestion(answeredQuestion + 1);
    };

    const answeredQuestionResetHandler = () => {
        setAnsweredQuestion(0);
    };

    const timeoutHandler = () => {
        alert('timed out, click ok to close window');
        window.close();
    };

    return (
        <div className={classes["test-page-content"]}>
            <div>
                <TestPageHeader answeredQuestion={answeredQuestion}
                                timeLimit={timeLimit}
                                totalQuestion={totalQuestion}
                                timeoutHandler={timeoutHandler}
                                onChangeHandler={answeredQuestionChangeHandler}
                                onResetHandler={answeredQuestionResetHandler}/>
            </div>
            <hr/>
            <div>
                <h4>Test Name: {examName}</h4>
            </div>
            <hr/>
            <TestQuestions/>
        </div>
    );
};
