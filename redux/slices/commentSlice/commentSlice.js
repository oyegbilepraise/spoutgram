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



const commentSlice = createSlice({
  name: "comment",
  initialState: {
    createComment: {
      loading: false,
      apiError: null,
      reccentPost: {},
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    //Create Post
    builder.addCase(createCommentAction.pending, (state) => {
      state.createComment.loading = true;
      state.createComment.reccentPost = {};
      state.createComment.apiError = null;
    });

      },
});

export default commentSlice.reducer;