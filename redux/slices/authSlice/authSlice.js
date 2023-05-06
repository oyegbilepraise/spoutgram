import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRequest, postRequest, putRequest } from "../../api";
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
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
      return (
        rejectWithValue(err?.message) ||
        rejectWithValue(err?.response?.data?.message)
      );
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

//get User
export const getUserAction = createAsyncThunk(
  "/auth/welcome",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await getRequest({
        url: `${baseUrl}${URL.auth}`,
        token: payload,
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err?.response?.data?.message);
    }
  }
);

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
      codeSent: null,
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
    getUser: {
      loading: false,
      apiError: null,
      user: {},
    },
  },
  reducers: {
    // logout(state) {
    //   state.getUser.user = {}
    // }
    logout: (state) => {
      state.getUser.user = {};
      state.loginUser.user = {}
    }
  },
  extraReducers: (builder) => {
    //get User
    builder.addCase(getUserAction.pending, (state) => {
      state.getUser.loading = true;
      state.getUser.user = {};
      state.getUser.apiError = null;
    });
    builder.addCase(getUserAction.fulfilled, (state, action) => {
      state.getUser.loading = false;
      state.getUser.user = action?.payload;
    });
    builder.addCase(getUserAction.rejected, (state, action) => {
      state.getUser.loading = false;
      state.getUser.apiError = action?.payload;
    });

    // Register.
    builder.addCase(registerUserAction.pending, (state) => {
      state.registerUser.loading = true;
      state.registerUser.registered = {};
      state.registerUser.appError = null;
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
      state.verifyUserEmail.codeSent = null;
      state.verifyUserEmail.appError = null;
    });
    builder.addCase(
      generateEmailVerificationAction.fulfilled,
      (state, action) => {
        state.verifyUserEmail.loading = false;
        state.verifyUserEmail.codeSent = action.payload;
      }
    );
    builder.addCase(
      generateEmailVerificationAction.rejected,
      (state, action) => {
        state.verifyUserEmail.loading = false;
        state.verifyUserEmail.appError = action?.payload;
        state.verifyUserEmail.codeSent = null;
      }
    );

    // Verify User mail code input.
    builder.addCase(verifyEmailAction.pending, (state) => {
      state.verifyCode.loading = true;
      state.verifyCode.user = {};
      state.verifyCode.verified = false;
      state.verifyCode.appError = null;
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
      state.loginUser.appError = null;
      state.loginUser.user = {};
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
      state.forgotPassword.message = {};
      state.forgotPassword.apiError = null;
      state.forgotPassword.isEmailAvailable = false;
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
      state.changePassword.apiError = null;
      state.changePassword.message = {};
      state.changePassword.isConfirmed = false;
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

export const { logout } = authSlice.actions

export default authSlice.reducer;