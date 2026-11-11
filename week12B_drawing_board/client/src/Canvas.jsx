import { useEffect, useRef } from "react";
import { socket } from "./socket";

// Draw one line segment on the canvas
function drawLine(ctx, { x1, y1, x2, y2, color, size }) {
  ctx.strokeStyle = color;
  ctx.lineWidth = size;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

export default function Canvas({ color, size }) {
  const canvasRef = useRef(null);  // the <canvas> element
  const isDrawing = useRef(false); // is the mouse held down?
  const lastPos = useRef(null);    // where the last segment ended

  const getCtx = () => canvasRef.current.getContext("2d");

  // Listen for drawing and clearing from the server
  useEffect(() => {
    const handleDraw = (line) => drawLine(getCtx(), line);
    const handleClear = () => {
      const canvas = canvasRef.current;
      getCtx().clearRect(0, 0, canvas.width, canvas.height);
    };

    socket.on("draw", handleDraw);
    socket.on("clear", handleClear);

    return () => {
      socket.off("draw", handleDraw);
      socket.off("clear", handleClear);
    };
  }, []);

  const handleMouseDown = (e) => {
    isDrawing.current = true;
    lastPos.current = { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY };
  };

  const handleMouseMove = (e) => {
    if (!isDrawing.current) return;

    const { offsetX, offsetY } = e.nativeEvent;
    const line = {
      x1: lastPos.current.x,
      y1: lastPos.current.y,
      x2: offsetX,
      y2: offsetY,
      color,
      size,
    };

    drawLine(getCtx(), line);    // draw it on our screen
    socket.emit("draw", line);   // send it to everyone else

    lastPos.current = { x: offsetX, y: offsetY };
  };

  const stopDrawing = () => {
    isDrawing.current = false;
  };

  return (
    <canvas
      ref={canvasRef}
      width={600}
      height={400}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={stopDrawing}
      onMouseLeave={stopDrawing}
    />
  );
}
