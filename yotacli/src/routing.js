import { Routes, Route } from "react-router-dom";

import TitleDashboard from "./components/dashboard/TitleDashboard";

import TitleBatchList from "./components/batch/TitleBatchList";

import TitleQuestionList from "./components/question/TitleQuestionList";
import TitleTechnologyList from "./components/technology/listTechnology/TitleTechnologyList";
import TitleAssociateList from "./components/associate/TitleAssociateList";
import TitleCreateBatch from "./components/batch/TitleCreateBatch";
import TitleAddTechnology from "./components/technology/addTechnology/TitleAddTechnology";
import TitleUpdateTechnology from "./components/technology/updateTechnology/TitleUpdateTechnology";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<TitleDashboard />} />
        <Route path="batchlist" element={<TitleBatchList />} />
        <Route path="createbatch" element={<TitleCreateBatch />} />
        <Route path="technologylist" element={<TitleTechnologyList />} />
        <Route path="addtechnology" element={<TitleAddTechnology />} />
        <Route path="questionlist" element={<TitleQuestionList />} />
        <Route path="associatelist" element={<TitleAssociateList />} />
        <Route
          path="/updatetechnology/:name"
          element={<TitleUpdateTechnology />}
        />
        <Route path="/deletetechnology/:id" element={<TitleTechnologyList />} />
      </Routes>
    </>
  );
};

export default Routing;
