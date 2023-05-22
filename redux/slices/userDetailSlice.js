import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { patchRequest, postRequest } from "../api";
import { URL } from "../urls";
import Cookies from "js-cookie";
import { baseUrl } from "../baseUrl";
import { updateUserProfile } from "./authSlice/authSlice";

// Create user profile
export const createProfileAction = createAsyncThunk(
  "/users/create-profile",
  async (payload, { rejectWithValue }) => {
    const token = Cookies.get("token");
    try {
      const res = await postRequest({
        url: `${baseUrl}${URL.createProfile}`,
        data: payload,
        token,
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err?.response?.data?.data);
    }
  }
);
export const updateProfileAction = createAsyncThunk("/users/updateProfile", async(payload, {rejectWithValue, dispatch})=>{
    const token = Cookies.get("token");
    try{
        const res = await patchRequest({url: `${baseUrl}${URL.updateProfile}`, token, data: payload})
        dispatch(updateUserProfile(res?.data?.data))
        return res.data
    }catch(err){
        rejectWithValue(err?.response?.data.data);
    }
})

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
    updateProfile: {
      loading: false,
      appError: null,
    }
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
      state.profileCreation.profile = {};
      state.profileCreation.appError = null;
    });
    builder.addCase(createProfileAction.fulfilled, (state, action) => {
      state.profileCreation.loading = false;
      state.profileCreation.profile = action?.payload;
    });
    builder.addCase(createProfileAction.rejected, (state, action) => {
      state.profileCreation.loading = false;
      state.profileCreation.appError = action?.payload;
    });
    //update profile.
    builder
      .addCase(updateProfileAction.pending, (state, action)=>{
          state.updateProfile.loading = true;
          state.updateProfile.appError = null
      })
      .addCase(updateProfileAction.fulfilled, (state, action)=>{
          state.updateProfile.loading = false;
          
      })
      .addCase(updateProfileAction.rejected, (state, action)=>{
            state.updateProfile.loading = false;
            state.updateProfile.appError = action?.payload
      })
  },
});

export const { addDetailsToUserProfile, nextComponent } =
  userDetailSlice.actions;
export default userDetailSlice.reducer;
