import { createSlice } from "@reduxjs/toolkit";

const userRedux = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isConnected: false,
    },
    reducers: {
        update: (state, action) => {
            state.currentUser = action.payload.user;
        },
        authFailure: (state) => {
            state.isConnected = false;
        }
    }
});

export const {update, authFailure} = userRedux.actions;
export default userRedux.reducer;