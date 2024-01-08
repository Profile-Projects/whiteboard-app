import React, {FC, useEffect} from "react";
import { Layer, Stage } from "react-konva";
import CircleCanvas from "./Circle";
import useBoard from "../hooks/useBoard";
import { ActiveBoard } from "../reducers/BoardReducers";

interface BoardProps {
    size: number
};

const Board: FC<BoardProps> = ({ size }) => {

    const { board }: {board: ActiveBoard} = useBoard({});
    const { name, description} = board;

    const draw = (ctx: CanvasRenderingContext2D) => {
        ctx.fillStyle = 'red';
        ctx.fillRect(10, 10, 100, 100);
    }

    useEffect(() => {

    }, []);
    return (<>
        {name != null && (<div>{name}</div>)}
        <Stage width={200} height={200}>
            <Layer>
                <CircleCanvas
                    x={100}
                    y={50}
                    radius={50}
                    fill="green"
                />
            </Layer>
        </Stage>
        </>);
};

export default Board;