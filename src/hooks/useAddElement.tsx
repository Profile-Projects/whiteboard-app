import React from "react";
import useSocket from "./useSocket";
import { ElementPosition } from "../reducers/ElementReducers";

interface useAddElementParams {
    board_sid: string,
    user_sid: string
};

interface useAddElementReturnValues {
    addNewElement: any
};

const useAddElement = ({ board_sid, user_sid }: useAddElementParams): useAddElementReturnValues => {
    const { addElement } =  useSocket({ url: "http://localhost:4000"})

    const addNewElement = ({ position }: { position: ElementPosition}) => {
        addElement({board_sid, user_sid, position });
    }
    return {
        addNewElement
    };
};

export default useAddElement;