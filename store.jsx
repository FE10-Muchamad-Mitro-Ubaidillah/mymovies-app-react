import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./src/features/themeSlice";
import favoriteReducer from "./src/features/favoriteSlice";

export default configureStore({
    reducer: {
        theme: themeReducer,
        favorite: favoriteReducer,
    },
});