import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  blogBtnAction: "",
  blogIndex: null,
  businessOwnerId: null,
};

const authSlice = createSlice({
  name: "TrustForge",
  initialState,
  reducers: {
    setBlogBtnAction: (state, action) => {
      state.blogBtnAction = action.payload;
    },
    setBlogIndex: (state, action) => {
      state.blogIndex = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },

    logOut: (state) => {
      state.user = null;
    },
    setbusinessOwnerId: (state, action) => {
      state.businessOwnerId = action.payload;
    },
  },
});

export const {
  setBlogBtnAction,
  setBlogIndex,
  setUser,
  logOut,
  setbusinessOwnerId,
} = authSlice.actions;
export default authSlice.reducer;
