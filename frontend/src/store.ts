import { configureStore } from "@reduxjs/toolkit";

import { fetchUserReducer, uploadResumeReducer } from "./Slice/userSlice";
import { getRecommendedJobsReducer, getSingleJobDetailsReducer } from "./Slice/jobSlice";

import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    fetchUserReducer,
    getRecommendedJobsReducer,
    getSingleJobDetailsReducer,
    uploadResumeReducer
  },
});


export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;

export default store;
