import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {customToast} from "../../components/common/toast/customToast";
import {AXIOS_BASE_URL, TOKEN_KEY} from "../../constants/helperConstants";
import {getEncryption} from "../../security/crypto/EncryptionDecryption";
import {
    getFullNameFromToken,
    getRoleFromToken,
    getUserNameFromToken,
    isTokenExpired
} from "../../security/jwt/JwtService";

export const registerUser = createAsyncThunk(
    "security/registeruser",
    async (registerData, {rejectWithValue}) => {
        try {
            await axios.post(
                AXIOS_BASE_URL + `/users/register`,
                registerData);
        } catch (error) {
            if (error.response) {
                return rejectWithValue(error.response);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);
export const loginUser = createAsyncThunk(
    "security/loginuser",
    async (loginData, {rejectWithValue}) => {
        try {
            console.log("Trying logging in...");

            const response = await axios.post(
                AXIOS_BASE_URL + "/users/authenticate",
                loginData
            );

            const token = response.data.token;
            const encryptedToken = getEncryption(token);
            localStorage.setItem(TOKEN_KEY, encryptedToken);

            return {
                status: response.data.status,
                message: response.data.message,
                token: encryptedToken,
                userRole: getRoleFromToken(encryptedToken),
                email: getUserNameFromToken(encryptedToken),
                fullName: getFullNameFromToken(encryptedToken)
            };
        } catch (error) {
            if (error.response) {
                if (error.response.status === 401) {
                    customToast({
                        message: `${error.response.data.errorMessage}`,
                        autoClose: 2000,
                        type: "error",
                    });
                }
                return rejectWithValue(error.response);
            }
        }
    }
);

export const syncUserAuthData = createAsyncThunk(
    "security/syncData",
    async (_, {rejectWithValue}) => {

        try {
            console.log("Syncing user data...");

            const encryptedToken = localStorage.getItem(TOKEN_KEY);
            if (encryptedToken && !isTokenExpired(encryptedToken)) {
                return {
                    status: null,
                    message: null,
                    token: encryptedToken,
                    userRole: getRoleFromToken(encryptedToken),
                    email: getUserNameFromToken(encryptedToken),
                    fullName: getFullNameFromToken(encryptedToken)
                };
            } else {
                throw new Error("Unable to sync Data, Please re-login");
            }
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const logout = createAsyncThunk(
    "security/logout",
    async (_, {rejectWithValue}) => {

        try {
            console.log("Logging out...");
            localStorage.removeItem(TOKEN_KEY);
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
