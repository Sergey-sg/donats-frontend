import { createSlice } from "@reduxjs/toolkit";

export const jarsSlice = createSlice({
  name: "jars",
  initialState: [],
  reducers: {
    initialJars: (state, action) => (action.payload),
    addNewPageOfJars: (state, action) => [
      ...state,
      ...action.payload,
    ],
  },
});

export const { initialJars } = jarsSlice.actions;

export default jarsSlice.reducer;
