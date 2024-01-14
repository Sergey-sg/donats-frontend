import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  email: "",
  photo_profile: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    initialUser: (state, action) => (action.payload),
    removeUser: (state) => (initialState)
  },
});

export const { initialUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
