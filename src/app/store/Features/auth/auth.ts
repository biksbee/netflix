'use client';

import { createSlice } from '@reduxjs/toolkit';

export interface userValuesState {
    id: number,
    name: string, 
    email: string,
    password: string,
}

const initialState: userValuesState = {
    id: 0,
    name: "auth",
    email: "email",
    password: "***********",
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        showValue: (state) =>  { state.id += 1},
        clearValue: (state) => { state.id *= 0},
        createUser: (state, action) => {
            state.password = action.payload.password;
            state.email = action.payload.email;
            console.log(state.password)
        }
    }
})

export const { showValue, clearValue, createUser } = authSlice.actions;

export default authSlice.reducer;