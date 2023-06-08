'use client';
import { configureStore } from "@reduxjs/toolkit";
import { githubApi } from './Features/github/github';

import counterReducer from './Features/counter/counterSlice'
import favoriteReducer from './Features/favorites/favorites'
import authReducer from './Features/auth/auth'
import { setupListeners } from "@reduxjs/toolkit/dist/query";

 export const store = configureStore({
      reducer: {
          counter: counterReducer,
          favorites: favoriteReducer,
          auth: authReducer,
          [githubApi.reducerPath]: githubApi.reducer
      },
      middleware: configureStore => configureStore().concat(githubApi.middleware)
 });

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



