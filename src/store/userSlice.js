import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,   // will hold the logged-in user object
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.currentUser = action.payload; // payload is the user data
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { loginSuccess, logout } = userSlice.actions;
export default userSlice.reducer;
