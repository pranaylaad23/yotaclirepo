import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  time:"",
  endTime:"",
  AssociateMark:""
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
    }
  },
});
export const { settime,setEndTime,setAssociateMark } = testResutSlice.actions
export default testResutSlice.reducer;
