import { configureStore } from "@reduxjs/toolkit";

import { fetchUserReducer } from "./Slice/userSlice";

const store = configureStore({
  reducer: {
    fetchUserReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;