import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postRequest } from "../api";
import { URL } from "../urls";
import Cookies from "js-cookie";

// Create user profile
export const createProfileAction = createAsyncThunk(
  "users/create-profile",
  async (payload, { rejectWithValue }) => {
    const token = Cookies.get("token");
    try {
      const res = await postRequest({
        url: URL.createProfile,
        data: payload,
        token,
      });
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err.response);
      return rejectWithValue(err?.response?.data?.message);
    }
  }
);

const userDetailSlice = createSlice({
  name: "userDetails",
  initialState: {
    userProfile: {
      name: "",
      username: "",
      dob: "",
      location: "",
      website: "",
      bio: "",
    },
    currentComponent: 1,
    profileCreation: {
      loading: false,
      appError: null,
      profile: {},
    },
  },
  reducers: {
    addDetailsToUserProfile: (state, action) => {
      state.userProfile = { ...state.userProfile, ...action.payload };
    },
    nextComponent: (state, action) => {
      state.currentComponent = action.payload;
    },
  },
  extraReducers: (builder) => {
    // create profile.
    builder.addCase(createProfileAction.pending, (state) => {
      state.profileCreation.loading = true;
    });
    builder.addCase(createProfileAction.fulfilled, (state, action) => {
      state.profileCreation.loading = false;
      state.profileCreation.profile = action?.payload;
    });
    builder.addCase(createProfileAction.rejected, (state, action) => {
      state.profileCreation.loading = false;
      state.profileCreation.appError = action?.payload;
    });
  },
});

export const { addDetailsToUserProfile, nextComponent } =
  userDetailSlice.actions;
export default userDetailSlice.reducer;
