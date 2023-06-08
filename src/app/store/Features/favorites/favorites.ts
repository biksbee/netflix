'use client'

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const LS_FAV_KEY = 'rfk' //react favorite key
const LS_LAT_SEARCH = 'lsu' //later search users

interface FavoritesState {
    favorites: string[],
    laterU: string[],
}

const initialState: FavoritesState = {
    favorites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]' ),
    laterU: JSON.parse(localStorage.getItem(LS_LAT_SEARCH) ?? '[]' ),
}

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<string>) => {
            state.favorites.push(action.payload)
            localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favorites))
        },
        removeFavorite: (state, action: PayloadAction<string>) => {
            state.favorites = state.favorites.filter(favoriteId => favoriteId !== action.payload)
            localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favorites))
        },
        searchLater: (state, action: PayloadAction<string>) => {
            state.laterU.push(action.payload)
            localStorage.setItem(LS_LAT_SEARCH, JSON.stringify(state.laterU))
        }
    }
})

export const favoriteAction = favoritesSlice.actions

export default favoritesSlice.reducer;