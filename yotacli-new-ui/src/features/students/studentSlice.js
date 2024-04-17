import {createSlice} from "@reduxjs/toolkit";
import {fetchAllStudents} from "./studentAction";

const initialState = {
    students: [],
    loading: false,
    error: null,
    success: false,
}

const studentSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllStudents.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchAllStudents.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.error = null;
            state.students = action.payload;
        });
        builder.addCase(fetchAllStudents.rejected, (state, action) => {
            state.loading = false;
            state.success = false;
            state.error = action.payload;
            state.students = [];
        });
    }
});

export default studentSlice.reducer;
