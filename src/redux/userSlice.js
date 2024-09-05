import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: null,
    slug: null,
    username: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.token = action.payload.token;
            state.slug = action.payload.slug;
            state.username = action.payload.username;
        },
        clearUser: (state) => {
            state.token = null;
            state.slug = null;
            state.username = null;
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;