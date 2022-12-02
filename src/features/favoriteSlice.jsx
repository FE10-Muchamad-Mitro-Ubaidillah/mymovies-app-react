import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
    name: "favorite",
    initialState: JSON.parse(sessionStorage.getItem('favorite')) || [],
    reducers: {
        addFavorite: (state, action) => {
            const newFavorite = {
                id: action.payload.id,
                title: action.payload.title,
                poster_path: action.payload.poster_path,
                vote_average: action.payload.vote_average,
                overview: action.payload.overview,
            };
            if (state.length === 0) {
                state.push(newFavorite);
            } else {
                let check = false;
                state.map((item) => {
                    if (item.id == action.payload.id) {
                        check = true;
                    }
                });
                if(!check) {
                    state.push(newFavorite);
                }
            }
            sessionStorage.setItem('favorite', JSON.stringify(state));
        },
        deleteFavorite: (state, action) => {
            const newFavorite = state.filter((item) => item.id !== action.payload.id);
            sessionStorage.setItem('favorite', JSON.stringify(newFavorite));
            return newFavorite;
        }
    }
})

export const { addFavorite, deleteFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;