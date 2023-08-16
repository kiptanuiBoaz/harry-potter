"use client";
import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "./slice/charactersSlice";
import themeSlice from "./slice/themeSlice";
import paginationSlice from "./slice/paginationSlice";
import authSlice from "./slice/authSlice";

export const store = configureStore({
    reducer: {
        characters: charactersSlice,
        theme: themeSlice,
        pagination: paginationSlice,
        user:authSlice,
    },
    devTools: process.env.NODE_ENV !== "production",

    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),

});

//persist state
store.subscribe(() => {
    localStorage.setItem("pagination", JSON.stringify(store.getState().pagination));
    localStorage.setItem("theme", JSON.stringify(store.getState().theme));
    localStorage.setItem("user", JSON.stringify(store.getState().user));
  });


// ambient declaration