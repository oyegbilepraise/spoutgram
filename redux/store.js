import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice/authSlice";
import userDetailSlice from "./slices/userDetailSlice";
import postSlice from "./slices/postSlice/postSlice";
import commentSlice from "./slices/commentSlice/commentSlice";
import messageSlice from "./slices/messageSlice/messageSlice";



// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, authSlice);

export const store = configureStore({
  reducer: {
    userDetails: userDetailSlice,
    auth: authSlice,
    post: postSlice,
    comment: commentSlice,
    message: messageSlice,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

// export let persistor = persistStore(store);
