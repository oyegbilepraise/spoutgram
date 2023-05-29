import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRequest, patchRequest, postRequest } from "../api";
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
        data: { ...payload },
        token,
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err?.response?.data?.data);
    }
  }
);
//update profile
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
//update profile picture
export const updateProfilePictureAction = createAsyncThunk('/users/updateProfilePicture', async(payload, {rejectWithValue})=>{
  const token = Cookies.get("token");
    try{
      const res = await patchRequest({url: `${baseUrl}${URL.updateProfilePicture}`, token: token, data: payload})
      console.log(res);
      return res?.data
    }catch(err){
      console.log(err.response.data);
      rejectWithValue(err?.response?.data?.message);
    }
})

//get all users
export const getAllUsersAction= createAsyncThunk("users/getAllUsers", async(_, {rejectWithValue})=>{
  const token = Cookies.get("token");
  try{
    const res = await getRequest({url: `${baseUrl}${URL.getAllUsers}`, token: token})
    return res?.data
  }catch(err){
    rejectWithValue(err?.response?.data?.message);
  }
})

//get user posts
export const getUserPostsAction = createAsyncThunk("/users/post", async(payload, {rejectWithValue})=>{
    const token = Cookies.get("token");
    console.log(payload);
    try{
        const res = await getRequest({url: `${baseUrl}${URL.getUserPost}${payload}`, token});
        console.log(res?.data?.data);
        return res?.data?.data;
    }catch(err){
        rejectWithValue(err?.response?.data);
    }
})

const userDetailSlice = createSlice({
  name: "userDetails",
  initialState: {
    profileCreation: {
      loading: false,
      appError: null,
      profile: {},
    },
    updateProfile: {
      loading: false,
      appError: null,
    },
    updateProfilePicture: {
      uploading: false,
      uploadError: null,
    },
    singleUser: {
      loading: false,
      appError: null,
      newUser: {}
    },
    allUsers: {
      loading: false,
      appError: null,
      users: []
    },
    userPost: {
      loading: false,
      appError: null,
      posts: []
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
      //update profile picture
      builder.addCase(updateProfilePictureAction.pending, (state, action)=>{
        state.updateProfilePicture.uploading = true;
        state.updateProfilePicture.uploadError = null;
      })
      .addCase(updateProfilePictureAction.fulfilled, (state)=>{
          state.updateProfilePicture.uploading = false;
      })
      .addCase(updateProfilePictureAction.rejected, (state, action)=>{
          state.updateProfilePicture.uploading = false;
          state.updateProfilePicture.uploadError = action.payload;
      })
      //get all users
      .addCase(getAllUsersAction.pending, (state, action)=>{
        state.allUsers.loading = true;
        state.allUsers.appError = null;
      })
      .addCase(getAllUsersAction.fulfilled, (state, action)=>{
          state.allUsers.loading = false;
          state.allUsers.users = action.payload
      })
      .addCase(getAllUsersAction.rejected, (state, action)=>{
          state.allUsers.loading = false;
          state.allUsers.appError = action.payload;
      })
      //get user posts
      .addCase(getUserPostsAction.pending, (state, action)=>{
        state.userPost.loading = true;
        state.userPost.appError = null;
      })
      .addCase(getUserPostsAction.fulfilled, (state, action)=>{
          state.userPost.loading = false;
          state.userPost.posts = action.payload
      })
      .addCase(getUserPostsAction.rejected, (state, action)=>{
          state.userPost.loading = false;
          state.userPost.appError = action.payload;
      })
  },
});

export const { addDetailsToUserProfile, nextComponent } = 
  userDetailSlice.actions;
export default userDetailSlice.reducer;
