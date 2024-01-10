import React, { FC, useCallback, useEffect } from "react";
import { Circle } from "react-konva";
import useElementPosition from "../hooks/useElementPosition";
import { KonvaEventObject } from "konva/lib/Node";

interface CircleCanvasProps {
    x: number,
    y: number,
    radius: number,
    fill: string
};


const CircleCanvas: FC<CircleCanvasProps> = ({
    radius,
    fill
}) => {
    const { x, y, updatePosition } = useElementPosition({ initialX: 0, initialY : 0, element_sid: "BE000001"})

    const onDragComplete = (e: KonvaEventObject<DragEvent>) => {
        const target = e?.target;
        const { x: updatedX, y: updatedY } = target?.attrs;

        console.log(`dragged to x : ${updatedX} , y: ${updatedY}}` );
        updatePosition({
            updatedX,
            updatedY
        })
    };

    useEffect(() => {
        console.log(`recieved updates on position : ${x} , ${y}`);
    }, [x, y])

    const renderCircle = useCallback(() => {
        return (<Circle
            x={x}
            y={y}
            radius={radius}
            fill={fill}
            draggable
            onDragEnd={onDragComplete}
        />);
    }, [x, y])
    return <>
        {renderCircle()}
    </>
};

export default CircleCanvas;