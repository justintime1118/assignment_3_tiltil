import { configureStore } from "@reduxjs/toolkit";
import { profileReducer } from "./reducers/profile.reducer";

const store = configureStore({
  reducer: {
    profile: profileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
