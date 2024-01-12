import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { ActiveBoard, BoardState } from "../reducers/BoardReducers";
import { RootState } from "../store";
import { useBetween } from "use-between";
import useSocket from "./useSocket";

interface useBoardProps {

};

interface useBoardReturnValues {
    board: ActiveBoard,
};

const useBoard = ({}: useBoardProps): useBoardReturnValues => {

    const { active: board }: BoardState = useSelector((state: RootState) => state?.board);
    // const { emitHello } = useSocket({ url: "http://localhost:3000"})

    useEffect(() => {
        // socket.current?.io.emit("hello");
        // emitHello({ params: {
        //     x: 200,
        //     y:300
        // }})
    }, [])
    
    return {
        board
    };
};

export default useBoard;