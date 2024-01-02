import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { UserState } from "../reducers/UserReducers";

interface useElementPositionProps {
    initialX: number,
    initialY: number,
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
    initialY = 0
}: useElementPositionProps): useElementPositionReturnValues => {

    const [ x, setX ] = useState(initialX);
    const [ y, setY ] = useState(initialY);

    const { sid }: UserState = useSelector((state: RootState) => state.user);

    const updatePosition = ({updatedX, updatedY}: updatePositionProps) => {
        setX(updatedX);
        setY(updatedY);
    };

    console.log(`User sid: ${sid}`)

    return {
        x,
        y,
        updatePosition
    };
};

export default useElementPosition;