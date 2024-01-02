import { configureStore } from "@reduxjs/toolkit";
import userReducers, { UserState } from "./reducers/UserReducers";

export interface RootState {
    user: UserState
}

export const store = configureStore({
    reducer: {
        user: userReducers  
    }
});