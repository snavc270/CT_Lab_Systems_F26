import ImageCard from "../components/ImageCard";

function Board({
  images, allTags, activeTag, onTagChange,
  likedIds, likedCount, query, onQueryChange,
  onShuffle, onSort, onReset, onToggleLike, onRemove,
}) {
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
          />
        ))}
      </div>
    </>
  );
}

export default Board;
