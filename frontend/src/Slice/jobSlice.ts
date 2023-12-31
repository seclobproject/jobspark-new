import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { URL } from "../Constant";

// Get recommended jobs based on the keyskills given (Will show every job)
export const getRecommendedJobs = createAsyncThunk(
  "getRecommendedJobs",
  async () => {
    const token: any = localStorage.getItem("userInfo");
    const parsedData = JSON.parse(token);

    const config = {
      headers: {
        Authorization: `Bearer ${parsedData.access_token}`,
        "content-type": "application/json",
      },
    };

    const response = await axios.get(
      `${URL}/api/employee/get-recommended-jobs`,
      config
    );

    return response.data;
  }
);

const getJobsSlice = createSlice({
  name: "getJobsSlice",
  initialState: {
    data: null,
    pending: false,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRecommendedJobs.pending, (state) => {
      state.pending = true;
    });
    builder.addCase(getRecommendedJobs.fulfilled, (state, action) => {
      state.pending = true;
      state.data = action.payload;
      state.error = false;
    });
    builder.addCase(getRecommendedJobs.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.error = true;
    });
  },
});

// Get single job details
export const getSingleJobDetails = createAsyncThunk(
  "getSingleJobDetails",
  async (jobId: any) => {
    const token: any = localStorage.getItem("userInfo");
    const parsedData = JSON.parse(token);

    const config = {
      headers: {
        Authorization: `Bearer ${parsedData.access_token}`,
        "content-type": "application/json",
      },
    };

    const response = await axios.get(
      `${URL}/api/jobs/getJob/${jobId}`,
      config
    );

    return response.data;
  }
);

const getSingleJobDetailsSlice = createSlice({
  name: "getSingleJobDetailsSlice",
  initialState: {
    data: null,
    pending: false,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSingleJobDetails.pending, (state) => {
      state.pending = true;
    });
    builder.addCase(getSingleJobDetails.fulfilled, (state, action) => {
      state.pending = true;
      state.data = action.payload;
      state.error = false;
    });
    builder.addCase(getSingleJobDetails.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.error = true;
    });
  },
});

export const getRecommendedJobsReducer = getJobsSlice.reducer;
export const getSingleJobDetailsReducer = getSingleJobDetailsSlice.reducer;