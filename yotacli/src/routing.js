import { Routes, Route } from "react-router-dom";

import TitleDashboard from "./components/dashboard/TitleDashboard";

import TitleBatchList from "./components/batch/batchlist/TitleBatchList";
import TitleQuestionList from "./components/question/TitleQuestionList";
import TitleTechnologyList from "./components/technology/TitleTechnologyList";
import TitleAssociateList from "./components/associate/TitleAssociateList";
import TitleCreateBatch from "./components/batch/createbatch/TitleCreateBatch";
import TitleUpdateBatch from "./components/batch/batchupdate/TitleUpdateBatch";
const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<TitleDashboard />} />
        <Route path="batchlist" element={<TitleBatchList />} />
        <Route path="createbatch" element={<TitleCreateBatch />} />
        <Route path="/updatebatch/:id" element={<TitleUpdateBatch />} />
        <Route path="/deletebatch/:id" element={<TitleBatchList />} />
        <Route path="technologylist" element={<TitleTechnologyList />} />
        <Route path="questionlist" element={<TitleQuestionList />} />
        <Route path="associatelist" element={<TitleAssociateList />} />
      </Routes>
    </>
  );
};

export default Routing;
