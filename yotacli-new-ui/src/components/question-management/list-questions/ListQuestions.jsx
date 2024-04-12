import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchQuestions} from "../../../features/redux/questions/questionAction";
import {QuestionElement} from "./QuestionElement";
import "./ListQuestion.css";

export const ListQuestions = () => {
    const dispatch = useDispatch();
    const questions = useSelector((state) => state.questions.questions);
    const loading = useSelector((state) => state.questions.loading);
    const {token} = useSelector((state) => state.security.userData);

    useEffect(() => {
        if (token)
            dispatch(fetchQuestions());
    }, [dispatch, token]);
    if (loading) {
        return <div>Loading...</div>;
    }

    const optionNames = ["option_A", "option_B", "option_C", "option_D"];
    const optionDisplayNames = ["Option A", "Option B", "Option C", "Option D"];
    return (
        <>
            <div className="row"></div>
            <hr/>
            <div style={{marginTop: "1rem"}}></div>
            {questions.map((questionElement, index) => (
                <QuestionElement
                    key={index}
                    id={`questionElement_${index}`}
                    question={questionElement.question}
                    correctAnswer={questionElement.correctAnswer}
                    option_A={questionElement.option_A}
                    option_B={questionElement.option_B}
                    option_C={questionElement.option_C}
                    option_D={questionElement.option_D}
                    optionNames={optionNames}
                    optionDisplayNames={optionDisplayNames}
                />
            ))}
            <nav aria-label="Page navigation example"></nav>
        </>
    );
};
export default ListQuestions;
