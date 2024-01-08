import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addBoardApi } from "../api/BoardApi";
import { AxiosResponse } from "axios";
import { AddBoardRequest } from "../api/request/AddBoardRequest";
import { Board } from "../api/response/Board";

export interface ActiveBoard {
    name: string,
    description: string,
    sid: string,
    owner_sid: string
}
export interface BoardState {
    active: ActiveBoard,
    board_sids: string[]
};


const initialState: BoardState = {
    active: {
        name: "",
        description: "",
        sid: "",
        owner_sid: ""
    },
    board_sids: [],
};

export const boardSlice = createSlice({
    name: "board",
    reducers: {},
    initialState,
    extraReducers: (builder) => {
        builder.addCase(addBoardThunk.fulfilled, (state, action) => {
            state.active = action?.payload || {};
        });
    }
});

// async thunks
export const addBoardThunk = createAsyncThunk(
    'board/add',
    async (board: AddBoardRequest) => {
        const response: AxiosResponse<Board> =await addBoardApi(board);
        return response?.data;
    }
)

export default boardSlice.reducer;