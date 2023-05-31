import { getRequest, putRequest, putTokenRequest } from "@/redux/api";
import { baseUrl } from "@/redux/baseUrl";
import { URL } from "@/redux/urls";
import Cookies from "js-cookie";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const socialNotificationAction = createAsyncThunk("/notification/social", async(_, {rejectWithValue})=>{
    const token = Cookies.get("token");
    try{
        const res =await getRequest({url: `${baseUrl}${URL.socialNotification}`, token});
        return res?.data?.data;
    }catch(err){
        rejectWithValue(err?.response?.data?.message);
    }
})

//get unread notifications
export const unreadNotificationAction = createAsyncThunk("/notification/unread", async(_, {rejectWithValue})=>{
    const token = Cookies.get("token");
    try{
        const res =await getRequest({url: `${baseUrl}${URL.unreadNotification}`, token});
        return res?.data?.data;
    }catch(err){
        rejectWithValue(err?.response?.data?.message);
    }
})

//read notification
export const readNotificationAction = createAsyncThunk("/notification/read", async(payload, {rejectWithValue})=>{
    const token = Cookies.get("token");
    try{
        const res = await putTokenRequest({url: `${baseUrl}${URL.readNotification}${payload}`, token});
        return res?.data;
    }
    catch(err){
            rejectWithValue(err?.response?.data);
    }
})


const notificationSlice = createSlice({
    name: 'Notification',
    initialState: {
        notification: {
            loading: false,
            appError: null,
            data: []
        },
        unreadNotification: {
            loading: false,
            unread: null,
            appError: null
        },
        readNotification: {
            loading: false,
            appError: null
        },
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder
        .addCase(socialNotificationAction.pending, (state, action)=>{
            state.notification.loading = true;
            state.notification.appError = null;
            state.notification.data = []
        }).addCase(socialNotificationAction.fulfilled, (state, action)=>{
            state.notification.loading = false;
            state.notification.data = action?.payload
        }).addCase(socialNotificationAction.rejected, (state, action)=>{
            state.notification.loading = false;
            state.notification.appError = action?.payload
        })
        // unread notification
        .addCase(unreadNotificationAction.pending, (state, action)=>{
            state.unreadNotification.loading = true;
            state.unreadNotification.appError = null;
        }).addCase(unreadNotificationAction.fulfilled, (state, action)=>{
            state.unreadNotification.loading = false;
            state.unreadNotification.unread = action?.payload
        }).addCase(unreadNotificationAction.rejected, (state, action)=>{
            state.unreadNotification.loading = false;
            state.unreadNotification.appError = action?.payload
        })
        //read notification
        .addCase(readNotificationAction.pending, (state, action)=>{
            state.readNotification.loading = true;
            state.readNotification.appError = null;
        }).addCase(readNotificationAction.fulfilled, (state, action)=>{
            state.readNotification.loading = false;
        }).addCase(readNotificationAction.rejected, (state, action)=>{
            state.readNotification.loading = false;
            state.readNotification.appError = action?.payload
        })
    }
})

export const {} = notificationSlice.actions
export default notificationSlice.reducer;