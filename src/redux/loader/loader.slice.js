import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "",
  message: "",
};

const userSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    setStatus: (state, action) => ({...state.loader, ...action.payload}),
  },
});

export const { initialUser } = userSlice.actions;

export default userSlice.reducer;
