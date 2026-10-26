import { Link } from "react-router";
import "./ImageCard.css";

function ImageCard({ image, liked, onToggleLike, onRemove }) {
  return (
    <div className="card">
      <Link to={`/image/${image.id}`}>
        <img src={image.src} alt={image.title} />
      </Link>
      <p>{image.title}</p>
      <button onClick={() => onToggleLike(image.id)}>{liked ? "♥" : "♡"}</button>
      <button onClick={() => onRemove(image.id)}>✕</button>
    </div>
  );
}

export default ImageCard;
