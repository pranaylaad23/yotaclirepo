import { Routes, Route } from "react-router-dom";

import TitleDashboard from "./components/dashboard/TitleDashboard";

import TitleBatchList from "./components/batch/TitleBatchList";
import TitleQuestionList from "./components/Question/TitleQuestionList";
import TitleTechnologyList from "./components/technology/TitleTechnologyList";
import TitleAssociateList from "./components/associate/TitleAssociateList";
import TitleCreateBatch from "./components/batch/TitleCreateBatch";
const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<TitleDashboard />} />
        <Route path="batchlist" element={<TitleBatchList />} />
        <Route path="createbatch" element={<TitleCreateBatch />} />
        <Route path="technologylist" element={<TitleTechnologyList />} />
        <Route path="questionlist" element={<TitleQuestionList />} />
        <Route path="associatelist" element={<TitleAssociateList />} />
      </Routes>
    </>
  );
};

export default Routing;
