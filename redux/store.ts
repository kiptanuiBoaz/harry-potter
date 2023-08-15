import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "./slice/charactersSlice";

const store = configureStore({
    reducer: {
        characters: charactersSlice,

    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),

});

export default store;