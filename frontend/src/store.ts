import { configureStore } from "@reduxjs/toolkit";

import { fetchUserReducer } from "./Slice/userSlice";
import { getRecommendedJobsReducer } from "./Slice/jobSlice";

import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    fetchUserReducer,
    getRecommendedJobsReducer,
  },
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;

export default store;
