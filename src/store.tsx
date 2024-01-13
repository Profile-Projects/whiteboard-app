import { configureStore } from "@reduxjs/toolkit";
import userReducers, { UserState } from "./reducers/UserReducers";
import boardReducers, { BoardState } from "./reducers/BoardReducers";
import elementReducers, { ElementState } from "./reducers/ElementReducers";

export interface RootState {
    user: UserState,
    board: BoardState
    element: ElementState
}

export const store = configureStore({
    reducer: {
        user: userReducers,
        board: boardReducers,
        element: elementReducers
    }
});