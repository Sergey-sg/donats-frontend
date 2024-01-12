import { createSlice } from "@reduxjs/toolkit";

export const jarStatisticSlice = createSlice({
  name: "jarStatistic",
  initialState: [],
  reducers: {
    initialJarStatistic: (state, action) => (action.payload),
  },
});

export const { initialJarStatistic } = jarStatisticSlice.actions;

export default jarStatisticSlice.reducer;
