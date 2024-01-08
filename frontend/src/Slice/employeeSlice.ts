import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { URL } from "../Constant";

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

export const uploadResumeReducer = uploadResumeSlice.reducer;
