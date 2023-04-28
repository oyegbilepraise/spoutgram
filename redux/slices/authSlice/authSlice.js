import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postRequest, putRequest } from "../../api";
import { URL } from "../../urls";
import Cookies from "js-cookie";
import { baseUrl } from "@/redux/baseUrl";

// Register a user
export const registerUserAction = createAsyncThunk(
  "auth/register",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await postRequest({
        url: `${baseUrl}${URL.register}`,
        data: payload,
      });
      Cookies.set("token", res.data.token);
      Cookies.set("verifyEmail", res.data.success);
      return res.data;
    } catch (err) {
      return rejectWithValue(err?.response?.data?.message);
    }
  }
);

// Generate email verification number
export const generateEmailVerificationAction = createAsyncThunk(
  "auth/generateEmailVerification",
  async (_, { rejectWithValue }) => {
    const token = Cookies.get("token");
    try {
      const res = await postRequest({
        url: `${baseUrl}${URL.generateEmailOTP}`,
        token: token,
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err?.response?.data?.message);
    }
  }
);

// verify the code enter by the uer to verify the email
export const verifyEmailAction = createAsyncThunk(
  "auth/verify-email",
  async (payload, { rejectWithValue }) => {
    const token = Cookies.get("token");
    try {
      const res = await postRequest({
        url: `${baseUrl}${URL.verifyEmail}`,
        data: payload,
        token: token,
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err?.response?.data?.message);
    }
  }
);

// Log user in
export const loginUserAction = createAsyncThunk(
  "/auth/login",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await postRequest({
        url: `${baseUrl}${URL.login}`,
        data: payload,
      });

      Cookies.set("token", res.data.token);
      Cookies.set("isLoggedIn", res.data.success);
      Cookies.set("email", res.data.email);
      return res.data;
    } catch (err) {
      return rejectWithValue(err?.response?.data?.message);
    }
  }
);

//forgot password
export const forgotPasswordAction = createAsyncThunk(
  "auth/generate-forgotpassword-token",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await postRequest({
        url: `${baseUrl}${URL.forgotPassword}`,
        data: payload,
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err?.response?.data?.message);
    }
  }
);

//Change Password
export const changePasswordAction = createAsyncThunk(
  "/auth/reset-password",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await putRequest({
        url: `${baseUrl}${URL.changePassword}`,
        data: payload,
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err?.response?.data?.message);
    }
  }
);

// Local storage.
// let userFromStorage
//   if (typeof window !== 'undefined') {
//     // Perform localStorage action
//     userFromStorage = localStorage.getItem('userInfo') ?
//   JSON.parse(localStorage.getItem('userInfo')) : null;
//   }

const authSlice = createSlice({
  name: "auth",
  initialState: {
    registerUser: {
      loading: false,
      appError: null,
      registered: {},
    },
    verifyCode: {
      loading: false,
      verified: false,
      appError: null,
      user: {},
    },
    verifyUserEmail: {
      loading: false,
      codeSent: false,
      appError: null,
    },
    loginUser: {
      loading: false,
      appError: null,
      user: {},
    },
    forgotPassword: {
      loading: false,
      apiError: null,
      isEmailAvailable: false,
      message: {},
    },
    changePassword: {
      loading: false,
      apiError: null,
      isConfirmed: false,
      message: {},
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    // Register.
    builder.addCase(registerUserAction.pending, (state) => {
      state.registerUser.loading = true;
    });
    builder.addCase(registerUserAction.fulfilled, (state, action) => {
      state.registerUser.loading = false;
      state.registerUser.registered = action?.payload;
    });
    builder.addCase(registerUserAction.rejected, (state, action) => {
      state.registerUser.loading = false;
      state.registerUser.appError = action?.payload;
    });

    // Send Email Verification Code.
    builder.addCase(generateEmailVerificationAction.pending, (state) => {
      state.verifyUserEmail.loading = true;
    });
    builder.addCase(generateEmailVerificationAction.fulfilled, (state) => {
      state.verifyUserEmail.loading = false;
      state.verifyUserEmail.codeSent = true;
    });
    builder.addCase(
      generateEmailVerificationAction.rejected,
      (state, action) => {
        state.verifyUserEmail.loading = false;
        state.verifyUserEmail.appError = action?.payload;
        state.verifyUserEmail.codeSent = false;
      }
    );

    // Verify User mail code input.
    builder.addCase(verifyEmailAction.pending, (state) => {
      state.verifyCode.loading = true;
    });
    builder.addCase(verifyEmailAction.fulfilled, (state, action) => {
      state.verifyCode.loading = false;
      state.verifyCode.verified = true;
      state.verifyCode.user = action?.payload;
    });
    builder.addCase(verifyEmailAction.rejected, (state, action) => {
      state.verifyCode.loading = false;
      state.verifyCode.appError = action?.payload;
    });

    // Log user in
    builder.addCase(loginUserAction.pending, (state) => {
      state.loginUser.loading = true;
    });
    builder.addCase(loginUserAction.fulfilled, (state, action) => {
      state.loginUser.loading = false;
      state.loginUser.user = action?.payload;
    });
    builder.addCase(loginUserAction.rejected, (state, action) => {
      state.loginUser.loading = false;
      state.loginUser.appError = action?.payload;
    });

    //Forgot Password
    builder.addCase(forgotPasswordAction.pending, (state) => {
      state.forgotPassword.loading = true;
    });
    builder.addCase(forgotPasswordAction.fulfilled, (state, action) => {
      state.forgotPassword.loading = false;
      state.forgotPassword.isEmailAvailable = true;
      state.forgotPassword.message = action?.payload;
    });
    builder.addCase(forgotPasswordAction.rejected, (state, action) => {
      state.forgotPassword.loading = false;
      state.forgotPassword.apiError = action?.payload;
    });

    //Change Password
    builder.addCase(changePasswordAction.pending, (state) => {
      state.changePassword.loading = true;
    });
    builder.addCase(changePasswordAction.fulfilled, (state, action) => {
      state.changePassword.loading = false;
      state.changePassword.isConfirmed = true;
      state.changePassword.message = action?.payload;
    });

    builder.addCase(changePasswordAction.rejected, (state, action) => {
      state.changePassword.loading = false;
      state.changePassword.apiError = action?.payload;
    });
  },
});

export default authSlice.reducer;
