import { createSlice } from "@reduxjs/toolkit";

export const tagsSlice = createSlice({
  name: "tags",
  initialState: [],
  reducers: {
    initialTags: (state, action) => (action.payload),
  },
});

export const { initialTags } = tagsSlice.actions;

export default tagsSlice.reducer;
