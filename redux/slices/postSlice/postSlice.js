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
        token:token,
        data:payload,
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

export const likePostAction= createAsyncThunk(
'post/like', 
async (postId,{rejectWithValue})=>{
const token = Cookies.get("token");
try {
  const res=await patchRequest({url:`${baseUrl}${URL.likePost}`,data:postId,token})
  return res.data
} catch (error) {
  return rejectWithValue(error);
}
})

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
    likedPost: { 
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

//likePost
builder.addCase(likePostAction.pending,(state)=>{
state.likedPost.loading=true;
state.likedPost.reccentPost={};
state.likedPost.apiError=null;
})
builder.addCase(likePostAction.fulfilled,(state,action)=>{
console.log(state,action);
state.createPost.loading=false
state.createPost.reccentPost=action?.payload
})
builder.addCase(likePostAction.rejected,(state,action)=>{
state.createPost.loading=false
state.createPost.apiError=action?.payload
})
      },
});

export default postSlice.reducer;