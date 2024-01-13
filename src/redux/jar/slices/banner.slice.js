import { createSlice } from "@reduxjs/toolkit";

export const bannerSlice = createSlice({
  name: "banner",
  initialState: [],
  reducers: {
    initialBanner: (state, action) => (action.payload),
  },
});

export const { initialBanner } = bannerSlice.actions;

export default bannerSlice.reducer;
