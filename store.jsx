import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./src/features/themeSlice";

export default configureStore({
    reducer: {
        theme: themeReducer,
    },
});