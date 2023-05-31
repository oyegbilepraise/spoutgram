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
export const replyCommentAction = createAsyncThunk(
  "comments/reply",
  async (payload, { rejectWithValue }) => {

    const token = Cookies.get("token");
    try {
      const res = await postRequestWithImage({
        url: `${baseUrl}${URL.replyComment}`,
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

export const getSingleCommentAction = createAsyncThunk(
  "comments/single-comment",
  async (commentId, { rejectWithValue }) => {
  const token = Cookies.get("token");
    try {
      const res = await getRequest({
        url: `${baseUrl}${URL.getOneComment}${commentId}`,
        token: token,
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err?.response?.data?.message);
    }
  }
);

export const likeCommentAction = createAsyncThunk(
  'comment/like',
  async (commentId, { rejectWithValue }) => {
    const token = Cookies.get("token");
    try {
      const res = await getRequest({ url: `${baseUrl}${URL.likeComment}${commentId}`, token:token })
      return res.data
    } catch (error) {
      return rejectWithValue(error);
    }
  })

export const getRepliesAction = createAsyncThunk(
  "comment/get-replies",
 async (postId, { rejectWithValue }) => {
  const token = Cookies.get("token");
    try {
      const res = await getRequest({
        url: `${baseUrl}${URL.getParticularCommentReplies}${postId}`,
        token: token,
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err?.response?.data?.message);
    }
  }
);

export const likeReplyAction = createAsyncThunk(
  'reply/like',
  async (replyId, { rejectWithValue }) => {
    const token = Cookies.get("token");
    try {
      const res = await getRequest({ url: `${baseUrl}${URL.likeReply}${replyId}`, token:token })
      return res.data
    } catch (error) {
      return rejectWithValue(error);
    }
  })

  export const getUserCommentsAction = createAsyncThunk('user/comments',
  async (payload, { rejectWithValue }) => {
    console.log({payload});
    const token = Cookies.get("token");
    try {
      const res = await getRequest({ url: `${baseUrl}${URL.getUserComments}`,data:payload,token })
      return res.data
    } catch (error) {
      // if (!error?.response?.data.status) {
      //   Cookies.remove("token");
      //   router.push(Routes.LOGIN)
      // }
      return rejectWithValue(error);
    }
  }
)



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
    singleComment: {
      loading: false,
      apiError: null,
      individualComment: {},
    },
    replyComment: {
      loading: false,
      apiError: null,
      reccentComment: {},
    },
    likeComment: {
      loading: false,
      apiError: null,
      reccentComment: {},
    },
     getReplies: {
      loading: false,
      apiError: null,
      replies: [],
    },
    likeReply: {
      loading: false,
      apiError: null,
      reccentReply: {},
    },
      userComments: {
      loading: false,
      apiError: null,
      user_comments: [],
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
    builder.addCase(createCommentAction.rejected, (state,action) => {
      state.createComment.loading = false;
      state.createComment.apiError = action?.payload;
    });

    //get Comments
     builder.addCase(getCommentsAction.pending, (state) => {
     console.log(state)
      state.getComments.loading = true;
      state.getComments.comments = [];
      state.getComments.apiError = null;
    });
    builder.addCase(getCommentsAction.fulfilled, (state, action) => {
    console.log(state,action)
      state.getComments.loading = false;
      state.getComments.comments = action?.payload;
    });
    builder.addCase(getCommentsAction.rejected, (state, action) => {
    console.log(state,action)
      state.getComments.loading = false;
      state.getComments.apiError = action?.payload;
    });

    //singleComment
builder.addCase(getSingleCommentAction.pending,(state)=>{
state.singleComment.loading=true;
state.singleComment.individualComment={};
state.singleComment.apiError=null;
})
builder.addCase(getSingleCommentAction.fulfilled,(state,action)=>{
console.log(state,action);
state.singleComment.loading=false
state.singleComment.individualComment=action?.payload
})
builder.addCase(getSingleCommentAction.rejected,(state,action)=>{
state.singleComment.loading=false
state.singleComment.apiError=action?.payload
});

    //reply comment
    builder.addCase(replyCommentAction.pending, (state) => {
console.log(state);
      state.replyComment.loading = true;
      state.replyComment.reccentComment = {};
      state.replyComment.apiError = null;
    });
    builder.addCase(replyCommentAction.fulfilled, (state,action) => {
console.log(state,action);
      state.replyComment.loading = false;
      state.replyComment.reccentComment = action?.payload;
    });
    builder.addCase(replyCommentAction.rejected, (state,action) => {
console.log(state,action);
      state.replyComment.loading = false;
      state.replyComment.apiError = action?.payload;
    });
    //like comment
    builder.addCase(likeCommentAction.pending, (state) => {
console.log(state);
      state.likeComment.loading = true;
      state.likeComment.reccentComment = {};
      state.likeComment.apiError = null;
    });
    builder.addCase(likeCommentAction.fulfilled, (state,action) => {
console.log(state,action);
      state.likeComment.loading = false;
      state.likeComment.reccentComment = action?.payload;
    });
    builder.addCase(likeCommentAction.rejected, (state,action) => {
console.log(state,action);
      state.likeComment.loading = false;
      state.likeComment.apiError = action?.payload;
    });

       //get Replies
     builder.addCase(getRepliesAction.pending, (state) => {
     console.log(state)
      state.getReplies.loading = true;
      state.getReplies.replies = [];
      state.getReplies.apiError = null;
    });
    builder.addCase(getRepliesAction.fulfilled, (state, action) => {
    console.log(state,action)
      state.getReplies.loading = false;
      state.getReplies.replies = action?.payload;
    });
    builder.addCase(getRepliesAction.rejected, (state, action) => {
    console.log(state,action)
      state.getReplies.loading = false;
      state.getReplies.apiError = action?.payload;
    });

        //like reply
    builder.addCase(likeReplyAction.pending, (state) => {
console.log(state);
      state.likeReply.loading = true;
      state.likeReply.reccentReply = {};
      state.likeReply.apiError = null;
    });
    builder.addCase(likeReplyAction.fulfilled, (state,action) => {
console.log(state,action);
      state.likeReply.loading = false;
      state.likeReply.reccentReply = action?.payload;
    });
    builder.addCase(likeReplyAction.rejected, (state,action) => {
console.log(state,action);
      state.likeReply.loading = false;
      state.likeReply.apiError = action?.payload;
    });

      //getUserComments
    builder.addCase(getUserCommentsAction.pending, (state) => {
console.log(state);
      state.userComments.loading = true;
      state.userComments.user_comments = [];
      state.userComments.apiError = null;
    });
    builder.addCase(getUserCommentsAction.fulfilled, (state, action) => {
console.log(state,action);
      state.userComments.loading = false;
      state.userComments.user_comments = action?.payload;
    });
    builder.addCase(getUserCommentsAction.rejected, (state, action) => {
console.log(state,action);
      state.userComments.loading = false;
      state.userComments.apiError = action?.payload;
    });
      },
});

export default commentSlice.reducer;