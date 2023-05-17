import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/* Update Associate action */
export const updateAssociate = createAsyncThunk("updateassociate", async (data, { rejectedWithValue }) => {
    const response = await fetch('http://localhost:9090/yota/api/associates/', {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })

    try {
        const result = await response.json();
        console.log(result);
        return result;
    }
    catch(error){
        return rejectedWithValue(error);
    }
})

export const associateUpdate = createSlice ({
    name : "associateUpdate",
    initialState : {
        batch : [],
        loading : false,
        error : null,
    },

    extraReducers:{
        [updateAssociate.pending] : (state) => {
            state.loading = true;
        },

        [updateAssociate.fulfilled] : (state, action) => {
            state.loading = false;
            state.associate = action.payload;
        },

        [updateAssociate.rejected] : (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export default associateUpdate.reducer;