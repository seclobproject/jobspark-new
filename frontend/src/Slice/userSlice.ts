import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { URL } from "../Constant";

// Typescript codes to define type
interface UserInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface AppState {
  userInfo: UserInfo | null;
  pending: boolean;
  error: boolean;
}
// Typescript codes to define type

// Redux action to get user
export const fetchUser = createAsyncThunk("fetchUser", async (data: any) => {
  const { firstName, lastName, email, phone } = data;

  const config = {
    headers: { "content-type": "application/json" },
  };

  const response = await axios.post(
    `${URL}/api/user`,
    { firstName, lastName, email, phone },
    config
  );

  return response.data;
});

const storedUserInfo = localStorage.getItem("userInfo");

const parsedUserInfo: UserInfo | null = storedUserInfo
  ? (JSON.parse(storedUserInfo) as UserInfo)
  : null;

const initialState: AppState = {
  userInfo: parsedUserInfo,
  pending: false,
  error: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.pending = true;
      state.userInfo = null;
      state.error = false;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.pending = true;
      state.userInfo = action.payload;
      state.error = false;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.error = true;
    });
  },
});

export const uploadResume = createAsyncThunk(
  "uploadResume",
  async (data: any) => {
    const { file, appliedJobId } = data;

    const formData = new FormData();
    formData.append("document", file);
    formData.append("appliedJobId", appliedJobId);

    const token: any = localStorage.getItem("userInfo");
    const parsedData = JSON.parse(token);

    const config = {
      headers: {
        Authorization: `Bearer ${parsedData.access_token}`,
        "content-type": "multipart/form-data",
      },
    };

    const response = await axios.post(
      `${URL}/api/employee/upload-resume`,
      formData,
      config
    );

    return response.data;
  }
);

const uploadResumeSlice = createSlice({
  name: "uploadResumeSlice",
  initialState: {
    data: null,
    pending: false,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(uploadResume.pending, (state) => {
      state.pending = true;
      state.data = null;
      state.error = false;
    });
    builder.addCase(uploadResume.fulfilled, (state, action) => {
      state.pending = false;
      state.data = action.payload;
      state.error = false;
    });
    builder.addCase(uploadResume.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.error = true;
    });
  },
});

export const fetchUserReducer = authSlice.reducer;
export const uploadResumeReducer = uploadResumeSlice.reducer;
