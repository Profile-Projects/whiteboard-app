import React, { useRef, useEffect } from 'react';

interface CanvasProps {
  width: number;
  height: number;
  draw: (ctx: CanvasRenderingContext2D) => void;
}

const Canvas: React.FC<CanvasProps> = ({ width, height, draw }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas: any = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (ctx && draw) {
      draw(ctx);
    }
  }, [draw]);

  return <canvas ref={canvasRef} width={width} height={height} />;
};

export default Canvas;
