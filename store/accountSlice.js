import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
  name: "account",
  initialState: {
    loggedIn: false,
  },
  reducers: {
    setAccountData(state, action) {
      state.loggedIn = action.payload.loggedIn;
    },
  },
});

export { accountSlice };
export const { setAccountData } = accountSlice.actions;
