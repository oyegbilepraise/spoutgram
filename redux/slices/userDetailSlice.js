import { createSlice } from "@reduxjs/toolkit";

const userDetailSlice = createSlice({
  name: "userDetails",
  initialState: {
    userProfile: {
      adult: false,
      name: "",
      organization: "",
      status: "",
      username: "",
      dob: "",
      location: "",
      link: "",
      bio: "",
    },
    currentComponent: 1,
  },
  reducers: {
    addDetailsToUserProfile: (state, action) => {
      state.userProfile = { ...state.userProfile, ...action.payload };
    },
    nextComponent: (state, action) => {
      state.currentComponent = action.payload;
    },
  },
});

export const { addDetailsToUserProfile, nextComponent } =
  userDetailSlice.actions;
export default userDetailSlice.reducer;
