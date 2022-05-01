import { createSlice } from "@reduxjs/toolkit";

export const dataSliceTwo = createSlice({
  name: "usersTwo",
  initialState: {
    userData: [],
  },
  reducers: {
    setData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { setData } = dataSliceTwo.actions;

export default dataSliceTwo.reducer;
