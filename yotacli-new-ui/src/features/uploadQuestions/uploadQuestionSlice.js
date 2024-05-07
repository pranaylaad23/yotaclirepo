import { uploadQuestion, downloadQuestionTemplate } from "./uploadQuestion";

const initialState = {
    uploadQuestion: [],
    loading: false,
    error: null,
    success: false,
    downloadedTemplateContent: null,
    downloadTemplateAPILoading: false,
    downloadTemplateAPIError: null
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
        builder.addCase(downloadQuestionTemplate.pending, (state) => {
            state.downloadTemplateAPILoading = true;
            state.downloadedTemplateContent = undefined;
            state.downloadTemplateAPIError = null;
        });
        builder.addCase(downloadQuestionTemplate.fulfilled, (state, action) => {
            state.downloadTemplateAPILoading = false;
            // state.success = true;
            state.downloadTemplateAPIError = null;
            state.downloadedTemplateContent = action.payload;
        });
        builder.addCase(downloadQuestionTemplate.rejected, (state, action) => {
            state.downloadTemplateAPILoading = false;
            // state.success = false;
            state.downloadTemplateAPIError = action.payload;
        });
    }
})

export default uploadQuestionSlice.reducer;