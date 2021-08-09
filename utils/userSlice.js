import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
    },
})

export const { login, logout } = userSlice.actions;

// selector allows us to pull the information
export const selectUser = (state) => state.user.value;

export default userSlice.reducer;