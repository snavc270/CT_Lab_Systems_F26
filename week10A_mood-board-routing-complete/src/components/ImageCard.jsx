import { Link } from "react-router";
import "./ImageCard.css";

function ImageCard({
  image, liked, onToggleLike, onRemove, onTagClick,
  isDragging, isOver, onDragStart, onDragEnter, onDrop, onDragEnd,
}) {
  // drag props are optional, so the same card works on the Liked page
  const draggable = Boolean(onDragStart);

  return (
    <div
      className={`card ${isDragging ? "dragging" : ""} ${isOver ? "over" : ""}`}
      draggable={draggable}
      onDragStart={onDragStart}
      onDragEnter={onDragEnter}
      onDragOver={draggable ? (e) => e.preventDefault() : undefined}
      onDrop={onDrop}
      onDragEnd={onDragEnd}
    >
      <Link to={`/image/${image.id}`} draggable={false}>
        <img src={image.src} alt={image.title} draggable={false} />
      </Link>
      <p>{image.title}</p>

      {/* "Your turn" solution: clickable tags */}
      {onTagClick && (
        <div className="card-tags">
          {image.tags.map((tag) => (
            <button key={tag} onClick={() => onTagClick(tag)}>#{tag}</button>
          ))}
        </div>
      )}

      <button onClick={() => onToggleLike(image.id)}>{liked ? "♥" : "♡"}</button>
      <button onClick={() => onRemove(image.id)}>✕</button>
    </div>
  );
}

export default ImageCard;
