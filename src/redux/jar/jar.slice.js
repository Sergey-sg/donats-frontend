import { createSlice } from "@reduxjs/toolkit";

export const jarSlice = createSlice({
  name: "jar",
  initialState: {
    id: 0,
    monobank_id: "",
    title: "",
    description: "",
    tags: [],
    volunteer: "",
    title_img: "",
    img_alt: "",
    album: [],
    goal: 0,
    current_sum: 0,
    date_added: "",
  },
  reducers: {
    initialJar: (state, action) => (action.payload),
  },
});

export const { initialJar } = jarSlice.actions;

export default jarSlice.reducer;
