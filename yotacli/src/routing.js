import { Routes, Route } from "react-router-dom";
// import BatchList from "./components/batch/BatchList";
import TitleDashboard from "./components/dashboard/TitleDashboard";
// import ListTechnology from "./components/technology/ListTechnology";
// import ListQuestions from "./components/Question/ListQuestions";
import TitleBatchList from "./components/batch/TitleBatchList";
import TitleQuestionList from "./components/Question/TitleQuestionList";
import TitleTechnologyList from "./components/technology/TitleTechnologyList";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<TitleDashboard />} />
        <Route path="batchlist" element={<TitleBatchList />} />
        <Route path="technologylist" element={<TitleTechnologyList />} />
        <Route path="questionlist" element={<TitleQuestionList />} />
      </Routes>
    </>
  );
};

export default Routing;
