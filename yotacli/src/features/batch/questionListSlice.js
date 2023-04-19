
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//create bach
// export const createBatch = createAsyncThunk("createBatch", async (data, { rejectWithValue }) => {

//     const response = await fetch("http://localhost:3030/batch", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data)
//     });

//     try {
//         const result = await response.json();
//         return result;
//     }
//     catch (error) {
//         return rejectWithValue(error);
//     }
// })
//show batch details

export const showQuestion = createAsyncThunk("question/showQuestion",
    async ({ rejectWithValue }) => {

       const response = await fetch("http://localhost:8080/yota/api/questions/");

       console.log(response);
        
        try {

            const result = await response.json();
            return result;

        } catch (error) {

            return rejectWithValue(error.response);
        }

    })

console.log(showQuestion());

export const questionList = createSlice({

    name: "question",
    initialState: {
        question: [],
        loading: false,
        error: null,
        

        extraReducers: {

            // [createBatch.pending]: (state) => {
            //     state.loading = true;
            // },

            // [createBatch.fulfilled]: (state, action) => {
            //     state.loading = false;
            //     state.batch.push(action.payload);
            // },

            // [createBatch.rejected]: (state, action) => {
            //     state.loading = false;
            //     state.error = action.payload;
            // },

            

            [showQuestion.pending]: (state,action) => {
                state.loading = true;
            },

            [showQuestion.fulfilled]: (state, action) => {
                state.loading = false;
                state.batch = action.payload;
            },

            [showQuestion.rejected]: (state, action) => {
                state.loading = false;
                state.error = action.payload;
            },
        }
    },


})
export default questionList.reducer;