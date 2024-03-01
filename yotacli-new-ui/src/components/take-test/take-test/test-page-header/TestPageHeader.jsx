import './TestPageHeader.css';
import {AnsweredQuestions} from "./AnsweredQuestions";
import {ExamTiming} from "./ExamTiming";

export const TestPageHeader = (props) => {
    const applicationName = "YASH Online Test Application";

    return (
        <div className={"header"}>
            <div className={"left-section"}>
                <i className="fa-solid fa-laptop-code icon"/>
                <div className={"application-name"}>
                    <h3>{applicationName}</h3>
                </div>
            </div>
            <div className={"right-section"}>
                <AnsweredQuestions count={props.answeredQuestion}/>
                <div className="spacer"></div>
                <ExamTiming timeLimit={props.examTiming}/>
            </div>
        </div>
    )
};
