import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  time:"",
  endTime:"",
  AssociateMark:"",
  testClick:false
};
const testResutSlice = createSlice({
  name: "testresult",
  initialState,
  reducers: {
    settime(state,action){
      state.time=action.payload
    },
    setEndTime(state,action){
      state.endTime=action.payload
    },
    setAssociateMark(state,action){
      state.AssociateMark=action.payload
    },
    setTestClick(state,action){
      state.testClick=action.payload
    }
  },
});
export const { settime,setEndTime,setAssociateMark,setTestClick } = testResutSlice.actions
export default testResutSlice.reducer;
