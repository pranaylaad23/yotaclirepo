import "./TestPageHeader.css";
export const AnsweredQuestions = (props) => {
  const count = props.count;
  return (
    <div className={"answered-questions"}>
      <p className={"answered-questions-title"}>Answered Question</p>
      <p className={"answered-questions-count"}> {count}</p>
    </div>
  );
};
