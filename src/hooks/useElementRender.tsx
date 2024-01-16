import React from "react";
import useElementPosition from "./useElementPosition";

interface useElementRenderProps {
    element_sid: string
};

interface useElementRenderReturnValues {
    x: number,
    y: number,
    updatePosition: (obj: any) => void
};

const useElementRender = ({ element_sid }: useElementRenderProps): useElementRenderReturnValues => {

    const { x, y, updatePosition } = useElementPosition({
        element_sid
    });

    return {
        x,
        y,
        updatePosition
    };
};

export default useElementRender;