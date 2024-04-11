import {createSlice} from "@reduxjs/toolkit";
import {loginUser, logout, syncUserAuthData} from "./securtiyAction";

const initialState = {
    userData: [],
    loading: false,
    error: null,
    success: false,
    message: null,
};

const securitySlice = createSlice({
    name: "security",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase("security/registeruser/pending", (state, action) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase("security/registeruser/fulfilled", (state, action) => {
            state.loading = false;
            state.success = true;
        });
        builder.addCase("security/registeruser/rejected", (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

        //login
        builder.addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.userData = [];
            state.success = false;
            state.error = null;
            state.message = null;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.userData = action.payload;
            state.success = true;
            state.error = null;
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.userData = [];
            state.success = false;
            state.error = action.payload;
        });
        builder.addCase(syncUserAuthData.pending, (state) => {
            state.loading = true;
            state.userData = [];
            state.success = false;
            state.error = null;
            state.message = null;
        });
        builder.addCase(syncUserAuthData.fulfilled, (state, action) => {
            state.loading = false;
            state.userData = action.payload;
            state.success = true;
            state.error = null;
            state.message = null;
        });
        builder.addCase(syncUserAuthData.rejected, (state, action) => {
            state.loading = false;
            state.userData = [];
            state.success = false;
            state.error = action.payload;
        });
        //logout
        builder.addCase(logout.pending, (state) => {
            state.loading = true;
            state.success = false;
            state.error = null;
            state.message = null;
        });
        builder.addCase(logout.fulfilled, (state, action) => {
            state.loading = false;
            state.userData = [];
            state.success = true;
            state.error = null;
        });
        builder.addCase(logout.rejected, (state, action) => {
            state.loading = false;
            state.userData = [];
            state.success = false;
            state.error = action.payload;
        });
    },
});

export default securitySlice.reducer;
