import React from "react";
import useSocket from "./useSocket";
import { ElementAttributes, ElementPosition, ElementState, ElementValues, addElementReducer } from "../reducers/ElementReducers";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { addElementToValues } from "../utils/elementReducerUtil";

interface useAddElementParams {
    board_sid: string,
    user_sid: string
};

interface useAddElementReturnValues {
    addNewElement: any
};

const useAddElement = ({ board_sid, user_sid }: useAddElementParams): useAddElementReturnValues => {
    const { addElement } =  useSocket({ url: "http://localhost:4000"})
    const { values }: ElementState = useSelector((state: RootState) => state.element);
    const dispatch = useDispatch();
    const addNewElement = ({ position }: { position: ElementPosition}) => {
        const element: ElementAttributes = { position };
        addElement({board_sid, user_sid, position, callback: (sid: string) => updateStore({ sid, element }) });
    }

    const updateStore = ({ sid, element }: {sid: string, element: ElementAttributes}) => {
        const updated_values = addElementToValues({ values, element, sid });
        dispatch(addElementReducer({ values: updated_values, sid } as { values: ElementValues, sid: string} & void));
    }
    return {
        addNewElement
    };
};

export default useAddElement;