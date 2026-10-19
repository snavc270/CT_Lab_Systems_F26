import { useState } from "react";
import "./ImageCard.css";

function ImageCard({ image, onRemove }) {
  // liked = current value, setLiked = function to change it
  const [liked, setLiked] = useState(false);

  return (
    <div className="card">
      <img src={image.src} alt={image.title} />
      <p>{image.title}</p>
      <button onClick={() => onRemove(image.id)}>✕</button>
      <button onClick={() => setLiked(!liked)}>
        {liked ? "♥" : "♡"}
      </button>
    </div>
  );
}

export default ImageCard;