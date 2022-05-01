import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducer/counterSlice";
import dataReducer from "./reducer/dataSlice";
import dataTwoReducer from "./reducer/dataSliceTwo";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: dataReducer,
    userTwo: dataTwoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
