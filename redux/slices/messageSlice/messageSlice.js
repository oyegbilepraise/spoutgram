const { createSlice } = require("@reduxjs/toolkit");

const messageSlice = createSlice({
    name: "message",
    initialState: {
        getMessage: {
            loading: false,
            apiError: null,
            message: [],
        }
    },
    reducers: {}
})

export default messageSlice.reducer;