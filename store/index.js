import { configureStore } from "@reduxjs/toolkit";
import { accountSlice } from "./accountSlice";
const store = configureStore({
  reducer: {
    accounts: accountSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export { store };
