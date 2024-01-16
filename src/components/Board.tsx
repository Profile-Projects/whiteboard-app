import React, {FC, useCallback, useEffect, useState} from "react";
import { Layer, Stage } from "react-konva";
import CircleCanvas from "./Circle";
import useBoard from "../hooks/useBoard";
import { ActiveBoard } from "../reducers/BoardReducers";
import io from "socket.io-client";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { ElementState } from "../reducers/ElementReducers";
import { getElementSids } from "../utils/elementReducerUtil";
import Element from "./Element";

interface BoardProps {
    size: number
};

const Board: FC<BoardProps> = ({ size }) => {

    const { board }: {board: ActiveBoard} = useBoard({});
    const { name, description} = board;
    const { values }: ElementState = useSelector((state: RootState) => state.element);

    const [ elementSids, setElementSids ] = useState<String[]>([]);


    const draw = (ctx: CanvasRenderingContext2D) => {
        ctx.fillStyle = 'red';
        ctx.fillRect(10, 10, 100, 100);
    }

    const renderElement = (elementSid: string) => {
        return <Element elementSid={elementSid} />;
    };

    const renderElements = () => {
        return getElementSids({ values }).map(elementSid => renderElement(elementSid as string));
    };

    useEffect(() => {
        setElementSids(getElementSids({values}));
    }, [values?.length]);
    return (<>
        {name != null && (<div>{name}</div>)}
        <Stage width={200} height={200}>
            <Layer>
                {renderElements()}
            </Layer>
        </Stage>
        </>);
};

export default Board;