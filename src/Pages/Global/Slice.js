import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  blogBtnAction: "",
  blogIndex: null,
  businessOwnerId: null,
  likedBusinesses: [],
  savedBusinesses: [],
  userDetailss: null,
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
    toggleSavedBusiness: (state, action) => {
      const business = action.payload;

      const exists = state.savedBusinesses.find(
        (item) => item.id === business.id
      );

      if (exists) {
        state.savedBusinesses = state.savedBusinesses.filter(
          (item) => item.id !== business.id
        );
      } else {
        state.savedBusinesses.push(business);
      }
    },
    setUserDetailss: (state, action) => {
      state.userDetails = action.payload;
    },
  },
});

export const {
  setBlogBtnAction,
  setBlogIndex,
  setUser,
  logOut,
  setbusinessOwnerId,
  toggleSavedBusiness,
  setUserDetailss,
} = authSlice.actions;
export default authSlice.reducer;
