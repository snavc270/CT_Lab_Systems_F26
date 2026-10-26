import { useState } from "react";
import ImageCard from "../components/ImageCard";

function Board({
  images, allTags, activeTag, onTagChange,
  likedIds, likedCount, query, onQueryChange,
  onShuffle, onSort, onReset, onToggleLike, onRemove, onMove,
}) {
  // OPTIONAL: drag state is temporary and only the board needs it,
  // so it's fine for it to live here (and reset when you leave the page)
  const [draggedId, setDraggedId] = useState(null);
  const [overId, setOverId] = useState(null);

  return (
    <>
      <p>You liked {likedCount} images</p>

      <div className="toolbar">
        <input
          placeholder="Search…"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
        />
        <button onClick={onShuffle}>Shuffle</button>
        <button onClick={onSort}>Sort A–Z</button>
        <button onClick={onReset}>Reset</button>
      </div>

      <div className="tags">
        <button
          className={!activeTag ? "active" : ""}
          onClick={() => onTagChange(null)}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            className={tag === activeTag ? "active" : ""}
            onClick={() => onTagChange(tag === activeTag ? null : tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="board">
        {images.map((img) => (
          <ImageCard
            key={img.id}
            image={img}
            liked={likedIds.includes(img.id)}
            onToggleLike={onToggleLike}
            onRemove={onRemove}
            onTagClick={onTagChange}
            isDragging={img.id === draggedId}
            isOver={img.id === overId}
            onDragStart={() => setDraggedId(img.id)}
            onDragEnter={() => setOverId(img.id)}
            onDrop={() => onMove(draggedId, img.id)}
            onDragEnd={() => {
              setDraggedId(null);
              setOverId(null);
            }}
          />
        ))}
      </div>
    </>
  );
}

export default Board;
