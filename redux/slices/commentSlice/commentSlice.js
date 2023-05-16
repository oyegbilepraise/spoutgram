import { getRequest, patchRequest, postRequest, postRequestWithImage } from "../../api";
import { baseUrl } from "../../baseUrl";
import { URL } from "../../urls";
import Cookies from "js-cookie";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const createCommentAction = createAsyncThunk(
  "comment/create",
  async (payload, { rejectWithValue }) => {

    const token = Cookies.get("token");
    try {
      const res = await postRequestWithImage({
        url: `${baseUrl}${URL.createComment}`,
        token: token,
        data: payload,
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err?.response?.data?.message);
    }
  }
);
export const getCommentsAction = createAsyncThunk(
  "comment/get-comments",
 async (postId, { rejectWithValue }) => {
  const token = Cookies.get("token");
    try {
      const res = await getRequest({
        url: `${baseUrl}${URL.getParticularPostComments}${postId}`,
        token: token,
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err?.response?.data?.message);
    }
  }
);



const commentSlice = createSlice({
  name: "comment",
  initialState: {
    createComment: {
      loading: false,
      apiError: null,
      reccentPost: {},
    },
    getComments: {
      loading: false,
      apiError: null,
      comments: [],
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    //Create comment
    builder.addCase(createCommentAction.pending, (state) => {
      state.createComment.loading = true;
      state.createComment.reccentPost = {};
      state.createComment.apiError = null;
    });
    builder.addCase(createCommentAction.fulfilled, (state,action) => {
      state.createComment.loading = false;
      state.createComment.reccentPost = action?.payload;
    });
    builder.addCase(createCommentAction.rejected, (state) => {
      state.createComment.loading = false;
      state.createComment.apiError = action?.payload;
    });

    //Create Post
     builder.addCase(getCommentsAction.pending, (state) => {
      state.getComments.loading = true;
      state.getComments.comments = {};
      state.getComments.apiError = null;
    });
    builder.addCase(getCommentsAction.fulfilled, (state, action) => {
      state.getComments.loading = false;
      state.getComments.comments = action?.payload;
    });
    builder.addCase(getCommentsAction.rejected, (state, action) => {
      state.getComments.loading = false;
      state.getComments.apiError = action?.payload;
    });

      },
});

export default commentSlice.reducer;