import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getAuthToken } from "../../../components/utils/Authentication";

export const fetchAssociate = createAsyncThunk("associate", () => {
    const token = getAuthToken();
    return axios
        .get(`http://localhost:9090/yota/api/associates/all`,
            {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Authorization": token
                }
            }
        )
        .then((response) => response.data.map((associate) => associate));

});

export const associateList = createSlice({
    name: "associateList",
    initialState: {
        associates: [],
        loading: false,
        error: null,
    },

    extraReducers: {
        [fetchAssociate.pending]: (state) => {
            state.loading = true;
        },

        [fetchAssociate.fulfilled]: (state, action) => {
            state.loading = false;
            state.associates = action.payload;
        },

        [fetchAssociate.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export default associateList.reducer;
