"use client";
import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "./slice/charactersSlice";
import themeSlice from "./slice/themeSlice";

export const store = configureStore({
    reducer: {
        characters: charactersSlice,
        theme: themeSlice,
    },
    devTools: process.env.NODE_ENV !== "production",

    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


// ambient declaration