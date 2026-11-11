export default function Toolbar({ color, setColor, size, setSize, onClear }) {
  return (
    <div className="toolbar">
      <label>
        Color
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
      </label>

      <label>
        Size
        <input
          type="range"
          min="1"
          max="30"
          value={size}
          onChange={(e) => setSize(Number(e.target.value))}
        />
        {size}px
      </label>

      <button onClick={onClear}>Clear</button>
    </div>
  );
}
