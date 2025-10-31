import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  blogBtnAction: "",
  blogIndex: null,
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
  },
});

export const { setBlogBtnAction, setBlogIndex } = authSlice.actions;
export default authSlice.reducer;
