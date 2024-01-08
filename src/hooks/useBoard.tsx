import React from "react";
import { useSelector } from "react-redux";
import { ActiveBoard, BoardState } from "../reducers/BoardReducers";
import { RootState } from "../store";
import { useBetween } from "use-between";

interface useBoardProps {

};

interface useBoardReturnValues {
    board: ActiveBoard
};

const useBoard = ({}: useBoardProps): useBoardReturnValues => {

    const { active: board }: BoardState = useSelector((state: RootState) => state?.board);
    return {
        board
    };
};

export default useBoard;