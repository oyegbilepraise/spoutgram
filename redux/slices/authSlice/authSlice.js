import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { postRequest } from '../../api';
import { URL } from '../../urls';

export const loginUserAction = createAsyncThunk(
  '/auth/login',
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const requestResponse = await postRequest({
        url: `${URL.login}`,
        data: payload
      })
      return requestResponse;
    } catch (err) {
      return rejectWithValue(err?.response?.data?.message)
    }
  }
)
export const registerUserAction = createAsyncThunk(
  'user/register',
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const response = await postRequest({
        url: `${URL.register}`,
        data: payload,
      })
      return response
    } catch (err) {
      return rejectWithValue(err?.response?.data?.message)
    }
  });


export const generateEmailVerificationAction = createAsyncThunk(
  'auth/generateEmailVerification',
  async (_, { rejectWithValue, dispatch, getState }) => {
    const token = getState()?.auth?.registered?.data?.token;
    try {
      const response = await postRequest({
        url: `${URL.generateEmailOTP}`,
        token: token
      })
      return response
    } catch (err) {
      return rejectWithValue(err?.response?.data?.message)
    }
  }
)

export const verifyEmailAction = createAsyncThunk(
  'auth/verify',
  async (payload, { rejectWithValue, dispatch, getState }) => {
    const token = getState()?.auth?.registered?.data?.token;
    try {
      const response = await postRequest({
        url: `${URL.verifyEmail}`,
        data: payload,
        token: token,
      })
      return response
    } catch (err) {
      return rejectWithValue(err?.response?.data?.message)
    }
  })


// Local storage.
let userFromStorage
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    userFromStorage = localStorage.getItem('userInfo') ?
  JSON.parse(localStorage.getItem('userInfo')) : null;
  }

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: userFromStorage,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Login.
    builder.addCase(loginUserAction.pending, (state, action) => {
      state.loading = true;
      state.appError = undefined;
      state.user = null;
    })
    builder.addCase(loginUserAction.fulfilled, (state, action) => {
      state.loading = false;
      state.appError = undefined;
      state.isLoggedIn = true;
      state.user = action?.payload;
    })
    builder.addCase(loginUserAction.rejected, (state, action) => {
      state.loading = false;
      state.appError = action?.payload;
    })
    // Register.
    builder.addCase(registerUserAction.pending, (state, action) => {
      state.loading = true;
      state.appError = undefined;
    });
    builder.addCase(registerUserAction.fulfilled, (state, action) => {
      state.loading = false;
      state.registered = action?.payload
      state.appError = undefined;
    });
    builder.addCase(registerUserAction.rejected, (state, action) => {
      state.loading = false;
      state.appError = action?.payload;
    })

    // Send Email Verification Code.
    builder.addCase(generateEmailVerificationAction.pending, (state, action) => {
      state.loading = true;
      state.appError = undefined
    })
    builder.addCase(generateEmailVerificationAction.fulfilled, (state, action) => {
      state.loading = false;
      state.codeSent = true;
      state.appError = undefined;
    })
    builder.addCase(generateEmailVerificationAction.rejected, (state, action) => {
      state.loading = false;
      state.appError = action?.payload;
      state.codeSent = false;
    });

    // Verify User Email.
    builder.addCase(verifyEmailAction.pending, (state, action) => {
      state.loading = true;
      state.appError = undefined;
    })
    builder.addCase(verifyEmailAction.fulfilled, (state, action) => {
      state.loading = false;
      state.verified = true;
      state.user = action?.payload;
    })
    builder.addCase(verifyEmailAction.rejected, (state, action) => {
      state.loading = false;
      state.appError = action?.payload;
    });

  }
})

export default authSlice.reducer