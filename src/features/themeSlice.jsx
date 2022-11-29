import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "themes",
    initialState: localStorage.getItem('theme') || 'dark',
    reducers: {
        changeTheme: (state) => {
            const newTheme = state === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', newTheme);
            return state = newTheme;
        }
    }
})

export const {changeTheme} = themeSlice.actions;

export default themeSlice.reducer;
