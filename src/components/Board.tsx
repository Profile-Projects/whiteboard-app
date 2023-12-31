import React, {FC, useEffect} from "react";
import Canvas from "./Canvas";

interface BoardProps {
    size: number
};

const Board: FC<BoardProps> = ({ size }) => {

    const draw = (ctx: CanvasRenderingContext2D) => {
        ctx.fillStyle = 'red';
        ctx.fillRect(10, 10, 100, 100);
    }

    useEffect(() => {

    }, []);
    return (<>
        <Canvas width={100} height={100} draw={draw}/>
        </>);
};

export default Board;