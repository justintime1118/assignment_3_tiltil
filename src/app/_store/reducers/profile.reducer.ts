import { createSlice } from "@reduxjs/toolkit";

export type ProfileState = {
  account: {
    id: string;
    pw: string;
  };
  nickname: string;
  age: number;
};

const profileSlice = createSlice({
  initialState: {
    account: {
      id: "justin",
      pw: "justin",
    },
    nickname: "유지형",
    age: 25,
  },
  name: "profile",
  reducers: {
    updateNickname: (state, { payload }) => {
      state.nickname = payload;
    },
    updateAge: (state, { payload }) => {
      state.age = payload;
    },
  },
});

export const profileReducer = profileSlice.reducer;
export const { updateNickname, updateAge } = profileSlice.actions;
