
import Cookies from "js-cookie";
import { getRequest, patchRequest, postRequest, postRequestWithImage } from "../../api";
import { baseUrl } from "../../baseUrl";
import { URL } from "../../urls";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getSuggestedUsers = createAsyncThunk(
  "message/suggested",
  async (token, { rejectWithValue }) => {
    try {
      const res = await getRequest({
        url: `${baseUrl}${URL.suggestedUsers}`,
        token: token,
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err?.response?.data?.message);
    }
  }
);

export const getMessagedFriends = createAsyncThunk(
  "message/friends",
  async (token, { rejectWithValue }) => {
    try {
      const res = await getRequest({
        url: `${baseUrl}${URL.friends}`,
        token
      });
      return res.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err?.response?.data?.message);
    }
  }
);

export const sendMessage = createAsyncThunk(
  "message/friends",
  async (payload, { rejectWithValue }) => {
    const token = Cookies.get('token')
    try {
      const res = await postRequestWithImage({
        url: `${baseUrl}${URL.sendMessage}`,
        token,
        data: payload
      });
      return res.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err?.response?.data?.message);
    }
  }
);



const messageSlice = createSlice({
  name: "message",
  initialState: {
    getMessage: {
      loading: false,
      apiError: null,
      message: [],
    },
    suggestedUsers: {
      loading: false,
      apiError: null,
      suggested: [],
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    //GET SUGGESTED USERS
    builder.addCase(getSuggestedUsers.pending, (state) => {
      state.suggestedUsers.loading = true;
      state.suggestedUsers.suggested = [];
      state.suggestedUsers.apiError = null;
    });
    builder.addCase(getSuggestedUsers.fulfilled, (state, action) => {
      state.suggestedUsers.loading = false;
      state.suggestedUsers.suggested = action?.payload;
    });
    builder.addCase(getSuggestedUsers.rejected, (state, action) => {
      state.suggestedUsers.loading = false;
      state.suggestedUsers.apiError = action?.payload;
    });
  }
})

export default messageSlice.reducer;