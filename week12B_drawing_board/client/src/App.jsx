import { useState } from "react";
import { socket } from "./socket";
import Toolbar from "./Toolbar";
import Canvas from "./Canvas";

export default function App() {
  const [color, setColor] = useState("#000000");
  const [size, setSize] = useState(4);

  // The server sends "clear" back to everyone, including us
  const handleClear = () => socket.emit("clear");

  return (
    <main>
      <h1>Shared Drawing Board</h1>
      <Toolbar
        color={color}
        setColor={setColor}
        size={size}
        setSize={setSize}
        onClear={handleClear}
      />
      <Canvas color={color} size={size} />
    </main>
  );
}
