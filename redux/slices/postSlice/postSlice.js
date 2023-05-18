import { getRequest, patchRequest, postRequest, postRequestWithImage } from "../../api";
import { baseUrl } from "../../baseUrl";
import { URL } from "../../urls";
import Cookies from "js-cookie";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createPostAction = createAsyncThunk(
  "posts/create",
  async (payload, { rejectWithValue }) => {

    const token = Cookies.get("token");
    try {
      const res = await postRequestWithImage({
        url: `${baseUrl}${URL.createPost}`,
        token: token,
        data: payload,
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err?.response?.data?.message);
    }
  }
);

export const getAllPostsAction = createAsyncThunk(
  "post/all-post",
  async (token, { rejectWithValue }) => {
    try {
      const res = await getRequest({
        url: `${baseUrl}${URL.getPosts}`,
        token: token,
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err?.response?.data?.message);
    }
  }
);

export const getSinglePostAction = createAsyncThunk(
  "post/single-post",
  async (postId, { rejectWithValue }) => {
    const token = Cookies.get("token");
    try {
      const res = await getRequest({
        url: `${baseUrl}${URL.getSinglePost}${postId}`,
        token: token,
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err?.response?.data?.message);
    }
  }
);

export const likePostAction = createAsyncThunk(
  'post/like',
  async (postId, { rejectWithValue }) => {
    const token = Cookies.get("token");
    try {
      const res = await patchRequest({ url: `${baseUrl}${URL.likePost}`, data: postId, token })
      return res.data
    } catch (error) {
      return rejectWithValue(error);
    }
  })

export const followUser = createAsyncThunk(
  "/users/user/follow",
  async (payload, { rejectWithValue }) => {
    const token = Cookies.get("token");
    try {
      const res = await patchRequest({
        url: `${baseUrl}${URL.follow}/${payload}`,
        token: token
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err?.response?.data?.message);
    }
  }
);

export const dislikePostAction = createAsyncThunk(
  'post/dislike',
  async (postId, { rejectWithValue }) => {
    const token = Cookies.get("token");
    try {
      const res = await patchRequest({ url: `${baseUrl}${URL.dislikePost}`, data: postId, token })
      return res.data
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)

export const getAllBoomarks = createAsyncThunk(
  'post/bookmarks',
  async (postId, { rejectWithValue }) => {
    const token = Cookies.get("token");
    try {
      const res = await getRequest({ url: `${baseUrl}${URL.boomarks}`, token })
      return res.data
    } catch (error) {
      if (!error?.response?.data.status) {
        Cookies.remove("token");
        router.push(Routes.LOGIN)
      }
      return rejectWithValue(error);
    }
  }
)

export const setViews = createAsyncThunk('post/view_post',
  async (postId, { rejectWithValue }) => {
    console.log({postId});
    const token = Cookies.get("token");
    try {
      const res = await getRequest({ url: `${baseUrl}${URL.views}${postId}`, token })
      return res.data
    } catch (error) {
      if (!error?.response?.data.status) {
        Cookies.remove("token");
        router.push(Routes.LOGIN)
      }
      return rejectWithValue(error);
    }
  }
)

const postSlice = createSlice({
  name: "post",
  initialState: {
    createPost: {
      loading: false,
      apiError: null,
      reccentPost: {},
    },
    allPosts: {
      loading: false,
      apiError: null,
      posts: [],
    },
    singlePost: {
      loading: false,
      apiError: null,
      individualPost: {},
    },
    likedPost: {
      loading: false,
      apiError: null,
      reccentPost: {},
    },
    dislikedPost: {
      loading: false,
      apiError: null,
      reccentPost: {},
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    //Create Post
    builder.addCase(createPostAction.pending, (state) => {
      state.createPost.loading = true;
      state.createPost.reccentPost = {};
      state.createPost.apiError = null;
    });
    builder.addCase(createPostAction.fulfilled, (state, action) => {
      state.createPost.loading = false;
      state.createPost.reccentPost = action?.payload;
    });
    builder.addCase(createPostAction.rejected, (state, action) => {
      state.createPost.loading = false;
      state.createPost.apiError = action?.payload;
    });

    //getAllPosts
    builder.addCase(getAllPostsAction.pending, (state) => {
      state.allPosts.loading = true;
      state.allPosts.posts = [];
      state.allPosts.apiError = null;
    });
    builder.addCase(getAllPostsAction.fulfilled, (state, action) => {
      state.allPosts.loading = false;
      state.allPosts.posts = action?.payload;
    });
    builder.addCase(getAllPostsAction.rejected, (state, action) => {
      state.allPosts.loading = false;
      state.allPosts.apiError = action?.payload;
    });

    //singlePost
    builder.addCase(getSinglePostAction.pending, (state) => {
      state.singlePost.loading = true;
      state.singlePost.individualPost = {};
      state.singlePost.apiError = null;
    })
    builder.addCase(getSinglePostAction.fulfilled, (state, action) => {
      console.log(state, action);
      state.singlePost.loading = false
      state.singlePost.individualPost = action?.payload
    })
    builder.addCase(getSinglePostAction.rejected, (state, action) => {
      state.singlePost.loading = false
      state.singlePost.apiError = action?.payload
    });

    //likePost
    builder.addCase(likePostAction.pending, (state) => {
      state.likedPost.loading = true;
      state.likedPost.reccentPost = {};
      state.likedPost.apiError = null;
    })
    builder.addCase(likePostAction.fulfilled, (state, action) => {
      console.log(state, action);
      state.likedPost.loading = false
      state.likedPost.reccentPost = action?.payload
    })
    builder.addCase(likePostAction.rejected, (state, action) => {
      state.likedPost.loading = false
      state.likedPost.apiError = action?.payload
    });

    //dislikePost
    builder.addCase(dislikePostAction.pending, (state) => {
      state.dislikedPost.loading = true;
      state.dislikedPost.reccentPost = {};
      state.dislikedPost.apiError = null;
    })
    builder.addCase(dislikePostAction.fulfilled, (state, action) => {
      console.log(state, action);
      state.dislikedPost.loading = false
      state.dislikedPost.reccentPost = action?.payload
    })
    builder.addCase(dislikePostAction.rejected, (state, action) => {
      state.dislikedPost.loading = false
      state.dislikedPost.apiError = action?.payload
    });
  },
});

export default postSlice.reducer;