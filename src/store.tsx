import { configureStore } from "@reduxjs/toolkit";
import userReducers, { UserState } from "./reducers/UserReducers";
import boardReducers, { BoardState } from "./reducers/BoardReducers";

export interface RootState {
    user: UserState,
    board: BoardState
}

export const store = configureStore({
    reducer: {
        user: userReducers,
        board: boardReducers
    }
});