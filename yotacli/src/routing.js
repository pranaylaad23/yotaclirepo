import { Routes, Route } from "react-router-dom";
import TitleDashboard from "./components/dashboard/TitleDashboard";
import TitleBatchList from "./components/batch/batchlist/TitleBatchList";
import TitleTechnologyList from "./components/technology/listTechnology/TitleTechnologyList";
import TitleCreateBatch from "./components/batch/createbatch/TitleCreateBatch";
import TitleUpdateBatch from "./components/batch/batchupdate/TitleUpdateBatch";
import TitleAddTechnology from "./components/technology/addTechnology/TitleAddTechnology";
import TitleUpdateTechnology from "./components/technology/updateTechnology/TitleUpdateTechnology";
import TitleAssociateList from "./components/associate/listAssociates/TitleAssociateList";
import TitleUpdateAssociate from "./components/associate/updateAssociate/TitleUpdateAssociate";
import TitleRegisterAssociate from "./components/associate/registerAssociate/TitleRegisterAssociate";
import TestAssign from "./components/assignTest/TestAssign";
import TitleAssignTest from "./components/assignTest/TitleAssignTest";
import TitleQuestionList from "./components/Question/listQuestion/TitleQuestionList";
import TitleAddQuestion from "./components/Question/addQuestion/TitleAddQuestion";
import TitleUpdateQuestion from "./components/Question/updateQuestion/TitleUpdateQuestion";


const routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<TitleDashboard />} />

        <Route path="batchlist" element={<TitleBatchList />} />
        <Route path="createbatch" element={<TitleCreateBatch />} />
        <Route path="/updatebatch/:id" element={<TitleUpdateBatch />} />
        <Route path="/deletebatch/:id" element={<TitleBatchList />} />

        <Route path="technologylist" element={<TitleTechnologyList />} />
        <Route path="addtechnology" element={<TitleAddTechnology />} />
        <Route path="/updatetechnology/:name" element={<TitleUpdateTechnology />}/>
        <Route path="/deletetechnology/:id" element={<TitleTechnologyList />} />
        <Route path="/associatelist" element={<TitleAssociateList />} >
        </Route>
        <Route
          path="/registerAssociate/"
          element={<TitleRegisterAssociate />}
        />
        
        <Route path="listquestion" element={<TitleQuestionList />} />
        <Route path="addquestion" element={<TitleAddQuestion />} />
        <Route path="/updatequestion/:id" element={<TitleUpdateQuestion/>}/>
        <Route path="/deletequestion/:id" element={<TitleQuestionList />} />
        <Route path="/associatelist" element={<TitleAssociateList />} />
        <Route path="/registerAssociate/" element={<TitleRegisterAssociate />}/>
        <Route path="/updateAssociate/:id" element={<TitleUpdateAssociate />} />
        <Route path="/deleteAssociate/:id" element={<TitleAssociateList />} />
        <Route path="testList" element={<TitleAssignTest/> } />
        <Route path="/assignTest" element={<TestAssign/>}/>
      </Routes>
    </>
  );
};

export default routing;
