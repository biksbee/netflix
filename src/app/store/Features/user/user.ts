import { createSlice } from "@reduxjs/toolkit"
import { create } from "domain";

interface UserState {
    users: any[];
    loading: boolean;
    error: null | string;
}

const initialState: UserState = {
    users: [],
    loading: false,
    error: null
}

interface UserAction {
    type: string;
    payload?: any;
} 

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        fetchUsers: (state, action: UserAction) => {
            state.loading = true;
            state.error = null;
            state.users = []
        },
        fetchUsersSuccess: (state, action: UserAction) => {
            state.loading = false;
            state.error = null;
            state.users = action.payload
        },
        fetchUsersError: (state, action: UserAction) => {
            state.loading = false;
            state.error = action.payload;
            state.users = [];
        }
    }
})