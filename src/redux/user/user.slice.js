import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    initialUser: (state, action) => (action.payload),
    removeUser: (state) => (null)
  },
});

export const { initialUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
