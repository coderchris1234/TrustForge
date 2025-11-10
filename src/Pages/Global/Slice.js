import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  blogBtnAction: "",
  blogIndex: null,
  businessOwnerId: null,
  likedBusinesses: [],
  savedBusinesses: [],
  userDetailss: null,
  deletedBusinesses: [],
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
      state.userDetailss = action.payload;
    },
    toggleLikedBusiness: (state, action) => {
      const businessId = action.payload;

      const exists = state.likedBusinesses.includes(businessId);

      if (exists) {
        state.likedBusinesses = state.likedBusinesses.filter(
          (id) => id !== businessId
        );
      } else {
        state.likedBusinesses.push(businessId);
      }
    },
    addDeletedBusiness: (state, action) => {
      const businessId = action.payload;
      if (!state.deletedBusinesses.includes(businessId)) {
        state.deletedBusinesses.push(businessId);
      }
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
  toggleLikedBusiness,
  addDeletedBusiness,
} = authSlice.actions;
export default authSlice.reducer;
