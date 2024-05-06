import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AXIOS_BASE_URL } from "../../constants/helperConstants";


export const uploadQuestion = createAsyncThunk(
    "/questions/upload-excel-questions",
    async ({ file, catId, techId }, { rejectWithValue, dispatch }) => {
        try {

            const formData = new FormData();
            formData.append("catId", catId);
            formData.append("techId", techId);
            formData.append("file", file);

            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            };
            const response = await axios.post(
                AXIOS_BASE_URL + `/questions/upload-excel-questions`,
                formData,
                config);
            return response.data;
        } catch (error) {
            if (error) {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const downloadQuestionTemplate = createAsyncThunk(
    "/questions/downloadQuestionTemplate",
    async ({}, { rejectWithValue, dispatch }) => {
        try {
            
            const response = await axios.get(
                AXIOS_BASE_URL + `/questions/download-excel`);
                console.log('response ::: ', response);
                if (response) {
                    const file = new Blob(
                        [response.data], 
                        { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }
                    );
        
                    // Create a link element, hide it, direct it towards the blob, and then 'click' it programmatically
                    const fileURL = URL.createObjectURL(file);
                    const fileLink = document.createElement('a');
                    fileLink.href = fileURL;
                    fileLink.setAttribute('download', 'questionTemplate.xlsx'); // whatever file name you want
                    document.body.appendChild(fileLink);
                    
                    fileLink.click();
        
                    // Clean up and remove the link
                    document.body.removeChild(fileLink)
                }
            return response.data;
        } catch (error) {
            if (error) {
                return rejectWithValue(error.message);
            }
        }
    }
);