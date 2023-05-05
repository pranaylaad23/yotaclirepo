import { Routes, Route } from "react-router-dom";

import TitleDashboard from "./components/dashboard/TitleDashboard";

import TitleBatchList from "./components/batch/TitleBatchList";

import TitleQuestionList from "./components/question/TitleQuestionList";
import TitleTechnologyList from "./components/technology/TitleTechnologyList";
import TitleAssociateList from "./components/associate/listAssociates/TitleAssociateList";
import TitleCreateBatch from "./components/batch/TitleCreateBatch";
import TitleUpdateAssociate from "./components/associate/updateAssociate/TitleUpdateAssociate";
import TitleRegisterAssociate from "./components/associate/registerAssociate/TitleRegisterAssociate";

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
        <Route path="registerAssociate" element={<TitleRegisterAssociate />} />
        <Route path="updateAssociate/:id" element={<TitleUpdateAssociate />} />
        <Route path="updateAssociate" element={<TitleUpdateAssociate />} />
        <Route path="/deleteAssociate/:id" element={<TitleAssociateList />} />


      </Routes>
    </>
  );
};

export default Routing;
