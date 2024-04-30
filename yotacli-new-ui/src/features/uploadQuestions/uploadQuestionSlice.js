import { uploadQuestion } from "./uploadQuestion";

const initialState = {
    uploadQuestion: [],
    loading: false,
    error: null,
    success: false,
}

const uploadQuestionSlice = createSlice({
    name: 'uploadQuestion',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(uploadQuestion.pending, (state) => {
            state.loading = true;
            state.success = false;
            state.error = null;
        });
        builder.addCase(uploadQuestion.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.error = null;
            state.uploadQuestion.push(action.payload);
        });
        builder.addCase(uploadQuestion.rejected, (state, action) => {
            state.loading = false;
            state.success = false;
            state.error = action.payload;
        });
    }
})

export default uploadQuestionSlice.reducer;