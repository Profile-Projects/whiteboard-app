import React from "react";
import { useDispatch } from "react-redux";
import { Any } from "react-spring";
import { AddBoardRequest } from "../api/request/AddBoardRequest";
import { addBoardThunk } from "../reducers/BoardReducers";

interface useCreateBoardProps {
    user_sid: string;
};

interface useCreateBoardReturnValues {
    addBoard: (boardReq: any) => void
};

const useCreateBoard = ({ user_sid }: useCreateBoardProps): useCreateBoardReturnValues => {

    const dispatch: any = useDispatch();

    const addBoard = async ({ name, description }: any) => {
        const boardRequest: AddBoardRequest = {
            name,
            description,
            owner_sid: user_sid
        };

        await dispatch(addBoardThunk(boardRequest));
    }

    return {
        addBoard
    };
};

export default useCreateBoard;