import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { UserState } from "../reducers/UserReducers";
import useSocket from "./useSocket";
import { ElementAttributes, ElementPosition, ElementState, ElementValues, updatePositionReducer } from "../reducers/ElementReducers";

interface useElementPositionProps {
    initialX: number,
    initialY: number,
    element_sid: string
};

interface useElementPositionReturnValues {
    x: number,
    y: number,
    updatePosition: (obj: any) => void,
};


interface updatePositionProps {
    updatedX: number,
    updatedY: number
}

const useElementPosition = ({
    initialX = 0,
    initialY = 0,
    element_sid = "BE000001"
}: useElementPositionProps): useElementPositionReturnValues => {

    const [ x, setX ] = useState(initialX);
    const [ y, setY ] = useState(initialY);
    const { sid }: UserState = useSelector((state: RootState) => state.user);
    const { values } : ElementState = useSelector((state: RootState) => state.element)
    const elementAttrs: ElementAttributes = values[element_sid] || {} as ElementAttributes;
    const { position }: {position: ElementPosition} = elementAttrs;

    const dispatch = useDispatch();

    const { socket } = useSocket({ url: "http://localhost:3000"})

    const updatePosition = ({updatedX, updatedY}: updatePositionProps) => {
        // setX(updatedX);
        // setY(updatedY);
        const updatedPosition = { 
            x: updatedX,
            y: updatedY
        };

        const updatedElementValue = {
            ...elementAttrs,
            position: updatedPosition
        };

        const updatedValues = {
            ...values,
            [element_sid]: updatedElementValue
        }
        dispatch(updatePositionReducer({values: updatedValues} as {values: ElementValues} & void))
    };

    console.log(`User sid: ${sid}`)


    useEffect(() => {
        if (!position) return;
        console.log(`position updated from redux : ${JSON.stringify(position)}`)
        setX(position?.x);
        setY(position?.y);
    }, [position?.x, position?.y])

    return {
        x,
        y,
        updatePosition
    };
};

export default useElementPosition;